import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import PostsList from "../PostsList";

export default function Layout({ themeValue, onToggleTheme }) {
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
