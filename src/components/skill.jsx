import AOS from "aos";
import { useEffect } from "react";

export default function Skill(props) {

    const {name, percent} = props

    
  useEffect(() => {
    AOS.init();
  }, [1]);


    return (
      <li className="tool" data-aos="fade-right" data-aos-delay={percent-10}>
        <h1 className="titl_t">{name}</h1>
        <div className="progressbar_t">
          <div className="bar_to">
            <div className="mn_bar"></div>
          </div>
        </div>

        <style jsx>{`
          .bar_to {
            width: ${percent}%;
          }
        `}</style>
      </li>
    );
}