import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "@components/common/navbar";
import Footer from "@components/home-page/footer";

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>LifeString</title>
      </Head>
      <NavBar />
      <h1>SignIn Page</h1>
      <Footer />
    </>
  );
};

export default SignIn;
