import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.callback_query) {
    const data = body.callback_query.data as string;
    const [action, requestId] = data.split(":");
    const callbackId = body.callback_query.id;
    const messageId = body.callback_query.message.message_id;
    const chatId = body.callback_query.message.chat.id;

    const getRes = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/${requestId}`, {
      headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` }
    });
    const item = await getRes.json();

    if (!item.result) return NextResponse.json({ ok: true });

    const sessionData = JSON.parse(item.result);

    if (action === "APPROVE") {
      const downloadToken = crypto.randomUUID();
      sessionData.status = "APPROVED";
      sessionData.downloadToken = downloadToken;

      await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/${requestId}?ex=300`, {
        headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
        body: JSON.stringify(sessionData),
        method: "POST"
      });

      await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/token:${downloadToken}?ex=300`, {
        headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
        body: JSON.stringify({ ip: sessionData.ip }),
        method: "POST"
      });

      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: callbackId, text: " Đã duyệt tải!" })
      });

      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/editMessageText`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId,
          text: ` ĐÃ DUYỆT cho IP: \`${sessionData.ip}\` (Hiệu lực 5 phút)`,
          parse_mode: "Markdown"
        })
      });
    } else {
      sessionData.status = "DENIED";
      await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/${requestId}?ex=60`, {
        headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
        body: JSON.stringify(sessionData),
        method: "POST"
      });

      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/editMessageText`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId,
          text: `❌ ĐÃ CHẶN IP: \`${sessionData.ip}\``,
          parse_mode: "Markdown"
        })
      });
    }
  }

  return NextResponse.json({ ok: true });
}
