import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';

export default function Layout({ themeValue }) {
  

  return (
    <>
      <Header themeValue={themeValue}/>
      <PostsList />
      <Footer themeValue={themeValue} />
    </>
  );
}
