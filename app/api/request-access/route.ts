import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown IP";
  const userAgent = req.headers.get("user-agent") || "Unknown Device";
  const requestId = crypto.randomUUID();

  await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/${requestId}?ex=600`, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
    body: JSON.stringify({ ip, status: "PENDING", userAgent }),
    method: "POST"
  });

  const message = `🔔 *YÊU CẦU TẢI LOCKET GOLD BANG*\n\n🌐 *IP:* \`${ip}\`\n📱 *Thiết bị:* \`${userAgent.slice(0, 60)}...\`\n⏳ *ID:* \`${requestId}\``;

  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_ADMIN_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: " Duyệt tải", callback_data: `APPROVE:${requestId}` },
            { text: "❌ Chặn", callback_data: `DENY:${requestId}` }
          ]
        ]
      }
    })
  });

  return NextResponse.json({ success: true, requestId });
}
