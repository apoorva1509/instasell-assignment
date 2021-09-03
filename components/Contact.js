import React from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact </title>
        <meta name="description" content="Contact Apoorva" />
        {/* <meta property="og:title" content="Contact"/> */}
        {/* <meta property="og:description" content="Contact Apoorva" /> */}
        {/* <meta property="og:image" content="https://m.media-amazon.com/images/I/61NCmdeMPOL._SX425_.jpg"/> */}
      </Helmet>
      <h1>Contact</h1>
      <p><a href="/">Home</a></p>
      <p><a href="/about">About</a></p>
      <p><a href="/contact">Contact</a></p>
    </>
  );
}
