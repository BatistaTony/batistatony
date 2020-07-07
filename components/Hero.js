import Link from "next/link";
import $ from "jquery";
import AOS from 'aos'
import { useEffect } from "react";
export default function Hero() {
 
  useEffect(() => {
    AOS.init();
  }, [1])



  const changeFace = () => {
    $(".img_smile_").attr("src", "/images/icons8_sad_96px.png");
  };

  const putFace = () => {
    $(".img_smile_").attr("src", "/images/icons8_smiling_96px.png");
  };

  const closeHireME = () => {
    $(".overlayHireMe").fadeOut();
  };

  const showHireMe = () => {
    $(".overlayHireMe").fadeIn();
  };

  
  

  return (
    <div className="hero">
      <div className="content_hero">
        <div className="container_1">
          <h1
            className="congr"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="40"
          >
            Hi !
          </h1>
          <h2
            className="my_name"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
          >
            I'm <mark>Batista Tony</mark>
          </h2>
          <p
            className="tech_"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="60"
          >
            FullStack Web Developer
          </p>
          <p
            className="tech_"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
          >
            UI Designer
          </p>
          <button
            className="btnHire"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="70"
            onClick={showHireMe}
          >
            Hire me
          </button>
        </div>

        <ul className="menu_redes mn_rd_he">
          <li
            className="item_mn_redes"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <a target="_blank" href="https://twitter.com/Batista_tone">
              <img src="/images/icons8_twitter_50px_4.png" alt="" />
            </a>
          </li>

          <li
            className="item_mn_redes"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <a target="_blank" href="https://web.facebook.com/batista.tone">
              <img src="/images/icons8_facebook_f_50px_4.png" alt="" />
            </a>
          </li>

          <li
            className="item_mn_redes"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <a
              target="_blank"
              v
              href="https://www.linkedin.com/in/batista-thony-530305157/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfW%2BefMyNTdyxeEuZY41oqg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-nav.settings_view_profile"
            >
              <img src="/images/icons8_linkedin_2_50px_2.png" alt="" />
            </a>
          </li>

          <li
            className="item_mn_redes"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <a target="_blank" href="https://github.com/BatistaTony">
              <img src="/images/icons8_github_50px_5.png" alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="cards_techs">
        <div
          className="card1_"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h1 className="card_title">FullStack Web</h1>
          <h1 className="card_title">Developer</h1>

          <p className="card_text">
            I can build a great full web App, Server Side Application, with
            responsible and fluid screen and integrate with external data like
            API ot other services.
          </p>

          <Link href="/about">
            <a className="card_kn_mr">
              Know more <img src="/images/icons8_left_50px.png" alt="" />
            </a>
          </Link>
        </div>
        <div
          className="card1_"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h1 className="card_title">UI</h1>
          <h1 className="card_title">Designer</h1>

          <p className="card_text">
            I design UI for any kind of application, using Adobe XD tools, I can
            mix and edit some free illustration to generate another one and add
            to the interface.
          </p>

          <Link href="/about">
            <a className="card_kn_mr">
              Know more <img src="/images/icons8_left_50px.png" alt="" />
            </a>
          </Link>
        </div>
      </div>

      <div className="overlayHireMe">
        <div className="conteiner_h">
          <div className="modalHire">
            <img
              src="/images/icons8_smiling_96px.png"
              alt=""
              className="img_smile_"
            />
            <img
              src="/images/icons8_sad_96px.png"
              alt=""
              className="img_sad_"
            />
            <h1 className="nm_h_">WhatsApp: +244941551087</h1>
            <h3 className="email_hr_">batistatomeoliveira96@gmail.com</h3>
            <button
              className="btnClose_h"
              onMouseLeave={putFace}
              onMouseOver={changeFace}
              onClick={closeHireME}
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
