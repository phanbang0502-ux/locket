import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ status: "NOT_FOUND" });

  const res = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/${id}`, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` }
  });
  const data = await res.json();

  if (!data.result) return NextResponse.json({ status: "EXPIRED" });

  const session = JSON.parse(data.result);
  return NextResponse.json({
    status: session.status,
    downloadToken: session.downloadToken || null
  });
}
