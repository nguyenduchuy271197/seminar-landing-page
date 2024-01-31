import { classes } from "@/app/_components/data";
import { transporter } from "@/lib/nodemailer";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const classDetail = classes.find((c) => c.slug === slug);

  if (!classDetail) {
    return new Response("No class found!", { status: 404 });
  }

  try {
    const data = await transporter.sendMail({
      from: process.env.NODEMAILER_AUTH_USERNAME!,
      to: process.env.NODEMAILER_AUTH_TO!,
      subject: `Giao dịch mới - ${classDetail.title}`,
      html: `Giao dịch mới - ${classDetail.title}`,
    });

    return Response.json({
      data,
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
