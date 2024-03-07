import { classes } from "@/app/_components/data";
import notion from "@/lib/notion";
import { transporter } from "@/lib/nodemailer";
import { doc } from "@/lib/doc";
import moment from "moment";

// export async function POST(request: Request) {
//   const user = await request.json();

//   const { searchParams } = new URL(request.url);
//   const slug = searchParams.get("slug");

//   const classDetail = classes.find((c) => c.slug === slug);

//   if (!classDetail) {
//     return new Response("No class found!", { status: 404 });
//   }

//   const newRow = {
//     parent: {
//       database_id: process.env.NOTION_PAYMENT_DATABASE_ID!,
//     },
//     properties: {
//       Name: {
//         title: [
//           {
//             text: {
//               content: user.name,
//             },
//           },
//         ],
//       },

//       Phone: {
//         rich_text: [
//           {
//             text: {
//               content: user.phone,
//             },
//           },
//         ],
//       },

//       Email: {
//         email: user.email,
//       },

//       // URL: {
//       //   rich_text: [
//       //     {
//       //       text: {
//       //         content: user.url,
//       //       },
//       //     },
//       //   ],
//       // },

//       Code: {
//         select: {
//           name: user.code || "Khác",
//         },
//       },

//       Question: {
//         rich_text: [
//           {
//             text: {
//               content: user.question,
//             },
//           },
//         ],
//       },

//       Class: {
//         rich_text: [
//           {
//             text: {
//               content: classDetail.title,
//             },
//           },
//         ],
//       },
//     },
//   };

//   try {
//     // Create new row in database
//     await notion.pages.create(newRow);

//     // Send email confirmation
//     await transporter.sendMail({
//       from: process.env.NODEMAILER_AUTH_USERNAME!,
//       to: process.env.NODEMAILER_AUTH_TO!,
//       subject: `Đăng ký mới - ${classDetail.title}`,
//       html: `Giao dịch mới - ${classDetail.title}`,
//     });

//     return new Response("OK");
//   } catch (error) {
//     return new Response("Something Went Wrong", { status: 500 });
//   }
// }

const headers = [
  "Name",
  "Phone",
  "Email",
  "Reference",
  "Questions",
  "Apply Time",
];

export async function POST(request: Request) {
  const user = await request.json();

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const classDetail = classes.find((c) => c.slug === slug);

  if (!classDetail) {
    return new Response("No class found!", { status: 404 });
  }
  await doc.loadInfo();
  let sheet = doc.sheetsByTitle[classDetail.title];

  if (!sheet) {
    sheet = await doc.addSheet({
      headerValues: headers,
      title: classDetail.title,
    });
  }

  await sheet.addRow({
    Name: user.name,
    Email: user.email,
    Phone: user.phone,
    Reference: user.code,
    Questions: user.question,
    "Apply Time": new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    }),
  });

  return new Response("OK");
}
