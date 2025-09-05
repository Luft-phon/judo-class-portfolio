import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge"; // chạy nhanh trên Edge

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const data = await req.json() as {
      fullname: string;
      email: string;
      phone: string;
      message: string;
    };

    const html = `
      <h2>📩 Liên hệ mới từ Website Judo Quân Khu 7</h2>
      <p><b>Họ tên:</b> ${data.fullname}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Số điện thoại:</b> ${data.phone}</p>
      <p><b>Lời nhắn:</b><br/>${data.message.replace(/\n/g, "<br/>")}</p>
    `;

    const { data: sent, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // ✅ test với domain mặc định
      to: ["thanhphongchupanh@gmail.com"],
      subject: "Liên hệ mới từ Website",
      html, // ✅ nội dung lấy từ input user
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: sent?.id });
  } catch (err) {
    return NextResponse.json({ ok: false}, { status: 500 });
  }
}
