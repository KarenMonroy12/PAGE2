// components/Layout.js
import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Opcion1</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css' />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/bannerstyle.css" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;