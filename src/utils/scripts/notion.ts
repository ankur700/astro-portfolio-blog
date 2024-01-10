import { Client } from "@notionhq/client";

export type Posts = {
  date: Date;
  title: string;
  description: string;
  type: string;
};

// export async function getEvents(): Promise<Posts[]> {
//     const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
//     const pages = await notion.databases.query({
//       database_id: import.meta.env.NOTION_CONTENT_DATABASE_ID,
//       filter: {
//         and: [
//           {
//             property: "Status",
//             status: {
//               equals: "Published",
//             },
//           },
//         ],
//       },
//     });
  
//     const events = pages.results
//       .map((page) => {
//         let type = "";
//         switch (page.properties.Type.select.name) {
//           case "Long Form Video":
//           case "Short Form Video":
//             type = "YouTube";
//             break;
//           case "Livestream":
//             type = "Twitch";
//             break;
//           case "Blog":
//             type = "Blog";
//             break;
//         }
//         return {
//           id: page.id,
//           title: page.properties.Name.title[0].plain_text,
//           description: page.properties.Description.rich_text[0].plain_text,
//           date: new Date(page.properties["Release Date"].date.start),
//           type: type,
//         };
//       })
//       .sort((a, b) => a.date.getTime() - b.date.getTime())
//       .splice(0, 5);
  
//     return events;
//   }