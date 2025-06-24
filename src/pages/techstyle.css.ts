import type { APIRoute } from "astro";
import css from "../techstyle.css?raw";

// Use Netlify's environment variable for git SHA, fallback to "main"
const sha: string =
  import.meta.env.COMMIT_REF ||
  import.meta.env.GIT_COMMIT_REF ||
  import.meta.env.VERCEL_GIT_COMMIT_SHA ||
  "main";

export const prerender = true;

export const GET: APIRoute = async () => {
  const header = `/* Source: https://github.com/drmercer/techstyle/blob/${sha}/src/techstyle.css */\n`;

  return new Response(header + css, {
    headers: { "Content-Type": "text/css; charset=utf-8" },
  });
};
