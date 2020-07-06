import Head from "next/head";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <div className="layout">
      <Head>
        <title>Batista Tony</title>
       
      </Head>

      <Navbar page={props.page} />

      {props.children}
    </div>
  );
}
