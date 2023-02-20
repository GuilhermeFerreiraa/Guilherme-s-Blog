import React, { useState } from "react";
import Header from "../Header";
import Post from "../Post";
import { ThemeProvider } from "../../context/ThemeContext";
import { Title } from "./styles";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#1",
      subtitle: "Sub#1",
      likes: 20,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#2",
      subtitle: "Sub#2",
      likes: 10,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#3",
      subtitle: "Sub#3",
      likes: 50,
      read: false,
      removed: true,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título ${prevState.length + 1}`,
        subtitle: `Sub #${prevState.length + 1}`,
        likes: prevState.length + 20,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>
      <hr />

      {posts.map((post) => (
        <Post post={post} key={post.id} onRemove={handleRemovePost} />
      ))}
    </ThemeProvider>
  );
}
