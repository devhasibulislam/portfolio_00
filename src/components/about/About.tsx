import React from "react";
import style from "./about.module.css";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import {
  SiJavascript,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
export const About = () => {
  return (
    <div className={style.about} id="about">
      {/**  <img src="/media/logos/lalogo.svg" className={style.accent} />*/}
      <main className="content">
        <h1 className={style.title}>
          <span className={style.highlight + " fs-4"}>02.</span> About Me
        </h1>

        <Row className="align-items-center">
          <Col md={6} sm={12} className="mb-lg-0 mb-4">
            <div className={style.profile_wrapper}>
              {/** <div className={style.img_border}></div>*/}
              <picture>
                <source srcSet="/media/images/pofo.jpg" type="image/webp" />
                <img
                  src="/media/images/pofo.png"
                  className={style.profile_pic}
                  alt="my-dp"
                />
              </picture>
            </div>
          </Col>
          <Col md={6} sm={12} className="mt-lg-0 mt-4">
            <h2 className={style.subtitle}>Hasibul Islam</h2>
            <p className={style.description}>
              Hi! My name is Hasib and I am a Front-End Web Developer from Davao
              city Philippines. I enjoy designing and developing Web
              Applications that are creative, eye-catching, and usable with the
              aim to ehance and ease your browsing experience.
            </p>
            <p className={style.description}>
              I&apos;ve been working as a FreeHasib Web Developer for about a
              year using a variety of modern technologies. My primary focus is
              building or reanimating boring and complex websites.
            </p>
            <p className={style.description}>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className={style.list}>
              <li className={style.list_item}>
                <SiJavascript fontSize={18} className="ms-0 mx-1" /> JavaScript
                (ES6+)
              </li>
              <li className={style.list_item}>
                <SiExpress fontSize={18} className="ms-0 mx-1" /> Express.js
              </li>
              <li className={style.list_item}>
                <SiNextdotjs fontSize={18} className="ms-0 mx-1" /> Next.js
              </li>
              <li className={style.list_item}>
                <SiReact fontSize={18} className="ms-0 mx-1" /> React.js
              </li>
              <li className={style.list_item}>
                <SiNodedotjs fontSize={18} className="ms-0 mx-1" /> Node.js
              </li>
              <li className={style.list_item}>
                <SiMongodb fontSize={18} className="ms-0 mx-1" /> MongoDB
              </li>
            </ul>

            <div className="d-flex align-items-center mt-4 flex-wrap">
              <a
                href="https://drive.google.com/file/d/1Gdbax82oaBWz2_0-OYh44E7QvfB53wNS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={style.about_link + " mx-3 ms-0 small"}
              >
                <RiExternalLinkFill fontSize={28} /> &nbsp; Resume
              </a>
              <a
                href="https://github.com/hasibulislam999"
                target="_blank"
                rel="noopener noreferrer"
                className={style.about_link + " small"}
              >
                <RiGithubFill fontSize={28} /> &nbsp;hasibulislam999
              </a>
            </div>
            {/**  <div className={style.btn_group}>
              <button className={style.btn_primary}>My Resume</button>
              <button className={style.btn_naked}>
                Contact Me <CgArrowLongRight fontSize={36} />
              </button>
            </div>*/}
          </Col>
        </Row>
      </main>
    </div>
  );
};
