import Head from "next/head";
import { getSlug, getPost } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlug();
  return {
    // paths: [
    //   {
    //     params: {
    //       slug: "first-post",
    //     },
    //   },
    //   {
    //     params: {
    //       slug: "second-post",
    //     },
    //   },
    // ],
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("[PostPage] getStaticProps():", slug);
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}

function PostPage({ post }) {
  console.log("[PostPage] render", post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default PostPage;
