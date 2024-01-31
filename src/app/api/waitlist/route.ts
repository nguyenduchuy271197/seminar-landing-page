import { classes } from "@/app/_components/data";
import notion from "@/lib/notion";

export async function POST(request: Request) {
  const user = await request.json();

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const classDetail = classes.find((c) => c.slug === slug);

  if (!classDetail) {
    return new Response("No class found!", { status: 404 });
  }

  const newRow = {
    parent: {
      database_id: process.env.NOTION_WAITLIST_DATABASE_ID!,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: user.name,
            },
          },
        ],
      },
      Phone: {
        rich_text: [
          {
            text: {
              content: user.phone,
            },
          },
        ],
      },
      Email: {
        email: user.email,
      },
      Gender: {
        select: {
          name: user.gender,
        },
      },
      Brief: {
        rich_text: [
          {
            text: {
              content: user.brief,
            },
          },
        ],
      },
      Class: {
        rich_text: [
          {
            text: {
              content: classDetail.title,
            },
          },
        ],
      },
    },
  };

  try {
    const response = await notion.pages.create(newRow);

    return new Response("OK");
  } catch (error) {
    return new Response("Something Went Wrong", { status: 500 });
  }
}
