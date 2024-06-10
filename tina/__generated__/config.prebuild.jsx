// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blip",
        label: "Blips",
        path: "src/content/blips",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "pubDate",
            label: "Published Date",
            required: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "pubDate",
            label: "Published Date",
            required: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true
          },
          {
            type: "string",
            name: "socialImageFilename",
            label: "Social Image File Name",
            required: true
          },
          {
            type: "string",
            name: "cloudinaryThumb",
            label: "Cloudinary Thumb Path",
            required: true
          },
          {
            type: "string",
            name: "thumb",
            label: "Thumb path",
            required: true
          },
          {
            type: "string",
            name: "thumbAlt",
            label: "Thumb Alt",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "review",
        label: "Reviews",
        path: "src/content/reviews",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "pubDate",
            label: "Published Date",
            required: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "string",
            name: "address",
            label: "Address",
            required: true
          },
          {
            type: "string",
            name: "city",
            label: "City",
            required: true
          },
          {
            type: "string",
            name: "state",
            label: "State",
            required: true
          },
          {
            type: "string",
            name: "country",
            label: "Country",
            required: true
          },
          {
            type: "string",
            name: "coordinates",
            label: "Coordinates",
            required: true
          },
          {
            type: "string",
            name: "infoUrl",
            label: "Info URL",
            required: true
          },
          {
            type: "string",
            name: "heroImageAlt",
            label: "Hero Image Alt",
            required: true
          },
          {
            type: "string",
            name: "heroImage",
            label: "Hero Image File Name",
            required: true
          },
          {
            type: "string",
            name: "heroImageAttribution",
            label: "Hero Image Attribution",
            required: false
          },
          {
            type: "string",
            name: "heroImageUrl",
            label: "Hero Image Url",
            required: false
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
