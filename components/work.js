import AOS from "aos";
import { useEffect } from "react";

export default function Work({ work }) {
  const { name, link, github, desc, img } = work;

  useEffect(() => {
    AOS.init();
  }, [1]);

  return (
    <div className="single_work" data-aos="fade-up">
      <div className="header_wor_">
        <h1 className="work_name">{name}</h1>
        {link ? (
          <a target="_blank" href={link} className="view_mode_wk">
            <img src="/images/icons8_eye_50px_1.png" alt="" />
          </a>
        ) : null}
      </div>

      <div className="desc_work_">
        <div className="container_desc">
          <p className="text_desc">{desc}</p>
          <a target="_blank" href={github} className="view_git">
            <img src="/images/icons8_github_50px_6.png" alt="" />
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .single_work {
            background: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.277)
              ),
              url(${img});

            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          .single_work:hover {
            background-size: 100%;
            background-position: top;
          }
        `}
      </style>
    </div>
  );
}
