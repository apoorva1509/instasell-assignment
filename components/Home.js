import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Apoorva Agarwal</title>
        <meta
          name="description"
          content="Apoorva Agarwal Assignment"
        />
        {/* <meta property="og:title" content="Apoorva Agarwal"/> */}
        {/* <meta property="og:description" content="Apoorva Agarwal Assignment" /> */}
        {/* <meta property="og:image" content="https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70"/> */}
      </Helmet>
      <h1>Home</h1>
      <p><a href="/">Home</a></p>
      <p><a href="/about">About</a></p>
      <p><a href="/contact">Contact</a></p>
    </div>
  );
}
