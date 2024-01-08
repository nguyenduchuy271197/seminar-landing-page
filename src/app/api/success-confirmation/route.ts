import { transporter } from "@/lib/nodemailer";

export async function POST(request: Request) {
  try {
    const data = await transporter.sendMail({
      from: process.env.NODEMAILER_AUTH_USERNAME!,
      to: process.env.NODEMAILER_AUTH_TO!,
      subject: "Giao dịch mới - Chinese Seminar",
      html: "Giao dịch mới - Chinese Seminar",
    });

    return Response.json({
      data,
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
