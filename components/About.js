import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About Apoorva's Assignment" />
        {/* <meta property="og:title" content="About"/> */}
        {/* <meta property="og:description" content="About Apoorva's Assignment" /> */}
        {/* <meta property="og:image" content="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/> */}
      </Helmet>
      <h1>About</h1>
      <p><a href="/">Home</a></p>
      <p><a href="/about">About</a></p>
      <p><a href="/contact">Contact</a></p>
    </div>
  );
}
