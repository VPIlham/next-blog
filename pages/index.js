import Link from "next/link";
import Head from "next/head";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  console.log("[HOMEPAGE] getStaticProps():");
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }) {
  console.log("[HOMEPAGE] render ", posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="this is my blog" />
      </Head>
      <main>
        <h1>Home Page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
