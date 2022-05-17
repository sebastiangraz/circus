import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { QueryClientProvider, useMutation, useQuery } from "react-query";
import axios from "axios";

const Home = () => {
  // const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   fetch(`/api/post`)
  //     .then((result) => result.json())
  //     .then(setPosts);
  // }, []);

  const posts = useQuery("todos", () =>
    axios.get("/api/post").then((res) => res.data)
  );

  const refetchTasks = posts.refetch;

  const add = useMutation(
    (data) => {
      axios.post("/api/post", { data });
    },
    { onSuccess: refetchTasks() }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>My Circus</title>
        <meta name="description" content="An awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Circus</h1>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              add.mutate({
                title: e.target.value,
                content: "",
              });
            }
          }}
        ></input>
        <a
          onClick={(e) => {
            let title = "New title!!";
            let content = "New content!!";
            add.mutate({ title, content });
          }}
        >
          Add
        </a>
        <div style={{ height: "50px" }}></div>
        {posts.data ? (
          posts.data.map((post) => {
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
