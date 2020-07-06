import Layout from "./../components/layout";
import Skill from "../components/skill";
import Footer from "./../components/footer";
import Works from "./../components/works";

import absoluteUrl from "next-absolute-url";
import AOS from "aos";
import { useEffect } from "react";

export default function About(props) {
  const tools = [
    {
      name: "Javascript",
      percent: 85,
    },
    {
      name: "NodeJs",
      percent: 70,
    },

    {
      name: "Reactjs",
      percent: 95,
    },
    {
      name: "Redux",
      percent: 80,
    },
    {
      name: "ExpressJs",
      percent: 75,
    },
    {
      name: "Adonis",
      percent: 60,
    },
    {
      name: "HTML/CSS",
      percent: 90,
    },
    {
      name: "Nextjs",
      percent: 70,
    },
    {
      name: "Firebase",
      percent: 65,
    },
    {
      name: "SASS",
      percent: 55,
    },
    {
      name: "Github",
      percent: 45,
    },
    {
      name: "MongoDB",
      percent: 50,
    },
    {
      name: "Adobe XD",
      percent: 50,
    },
  ];

  if (!props.my_url) return <h1>Loading</h1>;
  if (props.my_url)

  useEffect(() => {
    AOS.init();
  }, [1]);


    return (
      <Layout>
        <div className="about_content">
          <div className="my_perfil">
            <div className="avatar_" data-aos="fade-right">
              <img src="/images/avatar.jpg" alt="" className="my_avatar" />
              <div className="desc_avatar">
                <img
                  src="/images/icons8_hard_working_48px.png"
                  alt=""
                  className="my_avatar"
                />
              </div>
            </div>

            <h1 className="my_name_" data-aos="fade-right">
              Batista Tony Oliveira
            </h1>
            <ul className="menu_redes mn_redes_about">
              <li
                className="item_mn_redes"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                <a href="https://twitter.com/Batista_tone">
                  <img src="/images/icons8_twitter_50px_4.png" alt="" />
                </a>
              </li>

              <li
                className="item_mn_redes"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <a href="https://web.facebook.com/batista.tone">
                  <img src="/images/icons8_facebook_f_50px_4.png" alt="" />
                </a>
              </li>

              <li
                className="item_mn_redes"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <a href="https://www.linkedin.com/in/batista-thony-530305157/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfW%2BefMyNTdyxeEuZY41oqg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-nav.settings_view_profile">
                  <img src="/images/icons8_linkedin_2_50px_2.png" alt="" />
                </a>
              </li>

              <li
                className="item_mn_redes"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <a href="https://github.com/BatistaTony">
                  <img src="/images/icons8_github_50px_5.png" alt="" />
                </a>
              </li>
            </ul>

            <p className="about_me_text" data-aos="fade-right">
              I've been always involved with programming of computer since 2016,
              I like learn and test new things, I used to waste my time building
              App to practice the tools that I'm learning, I'm self-taugh
              Developer. I got 3 years of experience working as Front-End
              Developer.
            </p>
          </div>

          <div className="cards_about_te">
            <div className="card1_ card1_about" data-aos="fade-up">
              <h1 className="card_title">FullStack Web </h1>
              <h1 className="card_title">Developer</h1>

              <p className="card_text">
                I've been build web Apps with Reactjs and Anextjs framework.
                Apps with responsive layouts for the most used screens. I used
                to work on Back-End with Nodejs and ExpressJs framework or
                AdonisJs framework but some Apps I used to create the serverless
                funcions inside of them (internally) with Nextjs Framework.
              </p>
            </div>
            <div className="card1_ card1_about" data-aos="fade-up">
              <h1 className="card_title">UI</h1>
              <h1 className="card_title">Designer</h1>

              <p className="card_text">
                Before code my Apps, I used to design theirs Interface first,
                Using toll like Adobe XD and following the Design basis like
                colors, withe space, contrast, scals, type of fonts, alignment
                of elements, to build beautiful and friendly user interface.
              </p>
            </div>
          </div>

          <div className="tools_l">
            <h1 className="tol_ti" data-aos="fade-right">
              Skills
            </h1>

            <ul className="list_tools">
              {tools.map((s, key) => (
                <Skill key={key} name={s.name} percent={s.percent} />
              ))}
            </ul>
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
