import Link from "next/link";
import $ from "jquery";
import useRouter from "next/router";
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const OpenMenu = () => {
    $(".menuMobile").fadeToggle();
    $(".divbtnMenu").toggleClass("btnOpened");
        $(".btnMenu").toggleClass("btnFixed");

  };

  const [pathNow, setPathN] = useState("");

  useEffect(() => {
    const pathR = useRouter;

    setPathN(pathR.router.asPath);
  }, [1]);

  return (
    <div
      className={
        pathNow === "/about" || pathNow === "/about#work"  ? "navbar navbar1" : "navbar"
      }
    >
      <div className={"logo"}>
        <img src="/images/logo.png" alt="" className={"img_logo"} />
      </div>

      <div className={"menuDiv"}>
        <ul className={"menu"}>
          <Link href="/">
            <li className={pathNow === "/" ? "activeItem" : ""}>
              Home<span></span>
            </li>
          </Link>

          <Link href="#work">
            <li className={pathNow === "/work" ? "activeItem" : ""}>
              Works<span></span>
            </li>
          </Link>

          <Link href="/about">
            <li className={pathNow === "/about" ? "activeItem" : ""}>
              About<span></span>
            </li>
          </Link>
        </ul>

        <div onClick={OpenMenu} className={"btnMenu"}>
          <div className="divbtnMenu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className={"menuMobile"}>
        <div className="mnM">
          <div className={"ctn"}>
            <ul>
              <Link href="/">
                <li className={"activeItem"}>
                  Home
                </li>
              </Link>

              <Link href="#work">
                <li onClick={OpenMenu}>
                  Works
                </li>
              </Link>

              <Link href="/about">
                <li>
                  About
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
