import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
// import styles from "../styles/Home.module.css";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

const Home = () => {
  const [entryData, setEntryData] = useState({});

  const onError = (err) => {
    alert("onError", err?.response?.data);
  };

  const posts = useQuery("LOOK AT ME", () =>
    axios.get("/api/post").then((res) => res.data)
  );

  const refetchTasks = posts.refetch;

  const add = useMutation((data) => {
    axios.post("/api/post", { data }),
      {
        onSuccess: refetchTasks,
      };
  });

  const deleteTask = useMutation((data) => {
    axios.delete(`/api/post`, { data }),
      {
        onSuccess: refetchTasks,
      };
  });

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
    <div style={styles.container}>
      <Head>
        <title>Circus</title>
        <meta name="description" content="An awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Circus</h1>
        <div style={styles.flex}>
          <input
            style={styles.input}
            onChange={handleEntry}
            onKeyDown={handleKeyDown}
          ></input>
          <a
            style={{ ...styles.button, placeSelf: "stretch" }}
            onClick={() => {
              add.mutate(entryData);
            }}
          >
            +
          </a>
        </div>
        <div style={styles.grid}>
          {posts.data ? (
            posts.data.map((post) => {
              return (
                <div key={post.id} style={styles.card}>
                  <a href={`/post/${post.title}`}>
                    <p>{post.title}</p>{" "}
                  </a>
                  <span
                    style={{ ...styles.button, fontSize: "75%" }}
                    onClick={() => {
                      deleteTask.mutate(post.id);
                    }}
                  >
                    Delete
                  </span>
                </div>
              );
            })
          ) : (
            <p>No posts to show</p>
          )}
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1288px",
    margin: "5rem auto",
    width: "90%",
    display: "grid",
  },
  flex: {
    display: "flex",
    alignItems: "start",
    gap: "1rem",
  },
  input: {
    all: "unset",
    background: "#fff",
    padding: "1rem",
  },
  button: {
    display: "inline-flex",
    boxShadow: "0 0 0 1px currentColor inset",
    padding: "0.5rem 1rem",
    alignItems: "center",
    cursor: "pointer",
  },
  grid: {
    marginTop: "1rem",
    gap: "1rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  },
  card: {
    padding: "0.25rem 1rem",
    background: "#fff",
    overflow: "hidden",
  },
};

export default Home;
