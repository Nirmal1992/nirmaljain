import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Nirmal Jain Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            MY BLOGS
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          ❗ Work in progress... Will blog my first post soon I love you prerana
        </p>
      </main>
    </div>
  );
};

export default Home;
