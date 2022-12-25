import Head from "next/head";

function AboutPage() {
  console.log("[ABOUTPAGE] render");
  return (
    <>
      <Head>
        <title>About My Blog</title>
      </Head>
      <main>
        <h1>AboutPage</h1>
      </main>
    </>
  );
}

export default AboutPage;
