import { useState } from "react";
import $ from "jquery";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="cont_ft">
        <div className={"logo"}>
          <img src="/images/logo.png" alt="" className={"img_logo logo_ft"} />
        </div>
        <ul className="menu_redes mn_redes_ft">
          <li className="item_mn_redes">
            <a target="_blank" href="https://twitter.com/Batista_tone">
              <img src="/images/icons8_twitter_50px_4.png" alt="" />
            </a>
          </li>

          <li className="item_mn_redes">
            <a target="_blank" href="https://web.facebook.com/batista.tone">
              <img src="/images/icons8_facebook_f_50px_4.png" alt="" />
            </a>
          </li>

          <li className="item_mn_redes">
            <a
              target="_blank"
              v
              href="https://www.linkedin.com/in/batista-thony-530305157/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfW%2BefMyNTdyxeEuZY41oqg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-nav.settings_view_profile"
            >
              <img src="/images/icons8_linkedin_2_50px_2.png" alt="" />
            </a>
          </li>

          <li className="item_mn_redes">
            <a target="_blank" href="https://github.com/BatistaTony">
              <img src="/images/icons8_github_50px_5.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
