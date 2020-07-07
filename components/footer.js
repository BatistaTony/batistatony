import { useState } from "react";
import $ from "jquery";

export default function Footer(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  function validateEmail(text) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(text).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSend = () => {
    if (name === "") {
      setError("Name is empty");
    } else if (email === "") {
      setError("email is empty");
    } else if (desc === "") {
      setError("description is empty");
    } else if (!validateEmail(email)) {
      setError("Email is invalid");
    } else {
      sendEmail();
    }
  };

  const sendEmail = async () => {
    if (await props.my_url) {
      const res = await fetch(`${await props.my_url}/api/sendEmail`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, desc }),
      }).then((res) => res.json());

      if (typeof res.msg !== "undefined") {
        sucessShowIT();
      } else {
        setError("Email not sent");
      }
    } else {
      setError("Email not sent");
    }
  };

  const sucessShowIT = () => {
    $(".showSucess").fadeIn();

    setTimeout(() => {
      setName("");
      setEmail("");
      setDesc("");
      setError("")
      $(".showSucess").fadeOut();
    }, 1000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setError("");

    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "desc":
        setDesc(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="footer">
      <div className="firs_div_ft">
        <div className="tex_ft">
          <h1 className="title_ft">You got a project ?</h1>
          <p className="sb_t_ft">Talk to me</p>
          <p className="ft_text_">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo hic
            cumque, laboriosam suscipit recusandae sint et soluta deleniti.
          </p>
        </div>
        <div className="form_ft">
          <form id="send_form" className="form_ft_" onSubmit={handleSubmit}>
            <div className="form_gro">
              <label htmlFor="user_name">What is your name ?</label>
              <input
                type="text"
                name="name"
                value={name}
                id="user_name"
                className="ipt_f"
                onChange={handleChange}
                placeholder="type your name here"
              />
            </div>

            <div className="form_gro">
              <label htmlFor="user_email">Your email ? ?</label>
              <input
                type="text"
                name="email"
                value={email}
                id="user_email"
                className="ipt_f"
                onChange={handleChange}
                placeholder="type your email here"
              />
            </div>

            <div className="form_gro">
              <label htmlFor="about_proj">What about your project ?</label>
              <textarea
                name="desc"
                id="about_proj"
                cols="30"
                rows="10"
                value={desc}
                onChange={handleChange}
                className="text_ab_ft_i"
                placeholder="type little about your project here"
              ></textarea>
            </div>

            {error ? <h1 className="error_st">{error}</h1> : null}

            <div className="btnDiv_">
              <button className="btnSend_ft" onClick={handleSend}>
                Send
              </button>
            </div>
          </form>
          <div className="showSucess">
            <h1>Email Sent</h1>
          </div>
        </div>
      </div>
      <div className="cont_ft">
        <div className={"logo"}>
          <img src="/images/logo.png" alt="" className={"img_logo logo_ft"} />
        </div>
        <ul className="menu_redes mn_redes_ft">
          <li
            className="item_mn_redes"
            
          >
            <a target="_blank" href="https://twitter.com/Batista_tone">
              <img src="/images/icons8_twitter_50px_4.png" alt="" />
            </a>
          </li>

          <li
            className="item_mn_redes"
           
          >
            <a target="_blank" href="https://web.facebook.com/batista.tone">
              <img src="/images/icons8_facebook_f_50px_4.png" alt="" />
            </a>
          </li>

          <li
            className="item_mn_redes"
            
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
           
          >
            <a target="_blank" href="https://github.com/BatistaTony">
              <img src="/images/icons8_github_50px_5.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
