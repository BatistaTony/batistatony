import Layout from "../components/layout";
import Hero from "../components/Hero";
import Link from "next/link";
import Works from "../components/works";
import Footer from "../components/footer";
import absoluteUrl from "next-absolute-url";
import AOS from 'aos'
import { useEffect } from "react";

export default function Index(props) {
  if (!props.my_url) return <h1>Loading</h1>;
  if (props.my_url)

  useEffect(() => {
    AOS.init();
  }, [1]);


    return (
      <Layout page="home">
        <Hero />
        <div className="bitAbout">
          <div className="content_bit">
            <h1 className="btitle" data-aos="fade-up">
              Bit About Me
            </h1>

            <p className="btext" data-aos="fade-up">
              I've been always involved with programming of computer since 2016,
              I like learn and test new things, I used to waste my time building
              App to practice the tools that I'm learning, I'm self-taugh
              Developer. I got 3 years of experience working as Front-End
              Developer.
            </p>

            <Link href="/about">
              <a className="lnk_ab" data-aos="fade-up">
                Know more <img src="/images/icons8_left_50px_1.png" alt="" />
              </a>
            </Link>
          </div>
        </div>
        <Works />
        <Footer my_url={props.my_url} />
      </Layout>
    );
}

export async function getServerSideProps({ req }) {
  if (req) {
    const { origin } = await absoluteUrl(req, req.headers.host);

    return {
      props: {
        my_url: origin,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
