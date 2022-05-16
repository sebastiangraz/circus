import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch(`/api/post`)
      .then((result) => result.json())
      .then(setPosts);
  }, []);
  if (!posts) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>My Circus</title>
        <meta name="description" content="An awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Circus</h1>
        <div style={{ height: "50px" }}></div>
        {posts ? (
          posts.map((post) => {
            return (
              <a href={`/post/${post.id}`} key={post.id}>
                <div className={styles.card}>
                  <p>{post.title}</p>
                </div>
              </a>
            );
          })
        ) : (
          <p>No posts to show</p>
        )}
      </main>
    </div>
  );
};

export default Home;
