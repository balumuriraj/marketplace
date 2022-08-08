import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {  

  return (
    <div className="flex flex-col">
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Buy and sell Software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div>Explore.</div>
        <div style={{ color: "#0070f3" }}>Buy.</div>
        <div style={{ color: "#ef5777" }}>Sell.</div>
        <div className={styles.buttons}>
          <Link href="/requirements/add">
            <button>Post Requirement</button>
          </Link>
          <Link href="/projects/add">
            <button>Post Project</button>
          </Link>
        </div>
      </main>

      <p className={styles.projectHeading}>Recent Projects</p> 
      <Projects />  

      <footer className={styles.footer}>
        <div>Copyright © 2022 Marketplace Inc. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Home;
