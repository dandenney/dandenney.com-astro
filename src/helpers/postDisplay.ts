import toTitleCase from "@/helpers/toTitleCase.js";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dtlow08pj/image/upload";
const CLOUDINARY_VERSION = "v1673896360";
const FALLBACK_PUBLIC_ID = "posts/slackin.png";

type PostThumbData = {
  cloudinaryThumb?: string;
  thumb?: string;
};

export function postHref(id: string): string {
  return `/posts/${id.replace(/\.mdx?$/, "")}/`;
}

export function postThumbUrl(data: PostThumbData, width = 640): string {
  if (data.cloudinaryThumb) {
    return `${CLOUDINARY_BASE}/f_auto,c_limit,w_${width},q_auto/${CLOUDINARY_VERSION}/${data.cloudinaryThumb}`;
  }
  if (data.thumb) {
    return data.thumb;
  }
  return `${CLOUDINARY_BASE}/f_auto,c_limit,w_${width},q_auto/${CLOUDINARY_VERSION}/${FALLBACK_PUBLIC_ID}`;
}

const TAG_LABELS: Record<string, string> = {
  "front-end-dev": "Front-End Dev",
  "true-crime": "True Crime",
};

export function tagLabel(tag: string): string {
  return TAG_LABELS[tag] ?? toTitleCase(tag);
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
