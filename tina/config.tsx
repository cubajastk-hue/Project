import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "zazitek",
        label: "Moje Zážitky",
        path: "content/zazitky",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Název",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Popis",
            isBody: true,
          },
        ],
      },
    ],
  },
});
