import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { QueryClientProvider, useMutation, useQuery } from "react-query";
import axios from "axios";

const Home = () => {
  const [entryData, setEntryData] = useState({});

  // useEffect(() => {
  //   fetch(`/api/post`)
  //     .then((result) => result.json())
  //     .then(setPosts);
  // }, []);

  const posts = useQuery("todos", () =>
    axios.get("/api/post").then((res) => res.data)
  );

  const refetchTasks = posts.refetch();

  const add = useMutation(
    (data) => {
      axios.post("/api/post", { data });
    },
    { onSuccess: refetchTasks }
  );

  const handleDelete = useMutation(
    (id) => {
      console.log(id);
      axios.delete(`/api/post/${id}`);
    },
    {
      onSuccess: refetchTasks,
    }
  );

  const handleEntry = (e) => {
    let obj = {};

    obj = { title: e.target.value, content: "Content!" };

    setEntryData((entryData) => ({
      ...entryData,
      ...obj,
    }));
  };

  const handleKeyDown = (e) => {
    let obj = {};

    obj = { title: e.target.value, content: "Content!" };
    if (e.key === "Enter") {
      add.mutate(entryData);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Circus</title>
        <meta name="description" content="An awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Circus</h1>
        <input onChange={handleEntry} onKeyDown={handleKeyDown}></input>
        {entryData.title}
        <a
          onClick={() => {
            add.mutate(entryData);
          }}
        >
          Add
        </a>
        <div style={{ height: "50px" }}></div>
        {posts.data ? (
          posts.data.map((post) => {
            return (
              <div key={post.id} className={styles.card}>
                <a href={`/post/${post.id}`}>
                  <p>{post.title}</p>{" "}
                </a>
                {/* <span onClick={handleDelete.mutate}>Delete</span> */}
              </div>
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
