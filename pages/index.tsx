import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";

//Components
import { Layout } from "../src/components/layout/Layout";
import { Hero } from "../src/components/hero/Hero";
import { About } from "../src/components/about/About";
import { Projects } from "../src/components/projects/Projects";
import { SplashScreen } from "../src/components/splashscreen/SplashScreen";
import { Banner } from "../src/components/banner/Banner";
import { Contact } from "../src/components/contact/Contact";
const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (count === 100) {
        return;
      }
      setCount(count + 1);
    }, 10);
  }, [count]);

  return (
    <>
      <Head>
        <title>Hasibul Islam</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hi! I am Hasibul Islam and I'm a MERN Stack Developer primarily focused on enhancing your web
                experience. I recently graduated from City University as
                a Computer Science and Engineering major."
        />
        <meta
          name="image"
          content="https://raw.githubusercontent.com/hasibulislam999/next-portfolio/main/public/media/images/pofothumb.png"
        />

        <meta property="og:title" content="Hasibul Islam" />
        <meta
          property="og:description"
          content="Hi! I am Hasibul Islam and I'm a MERN Stack Developer primarily focused on enhancing your web
                experience. I recently graduated from City University as
                a Computer Science and Engineering major."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/hasibulislam999/next-portfolio/main/public/media/images/pofothumb.png"
        />
        <meta property="og:url" content="https://pofo.hasibulislam999.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      {count < 97 ? (
        <SplashScreen count={count} />
      ) : (
        <Layout>
          <Hero />
          <About />
          <Projects />
          <Banner />
          <Contact />
        </Layout>
      )}
    </>
  );
};

export default Home;
