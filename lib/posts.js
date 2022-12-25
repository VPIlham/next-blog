import { readFile, readdir } from "fs/promises";

async function getPost(slug) {
  const data = await readFile(`content/posts/${slug}.json`, "utf8");
  return JSON.parse(data);
}

async function getPosts() {
  const slugs = await getSlug();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}

async function getSlug() {
  const suffix = ".json";
  const files = await readdir(`content/posts`);
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}

export { getPost, getSlug, getPosts };
