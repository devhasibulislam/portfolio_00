import React from "react";
import style from "./hero.module.css";
import FadeIn from "react-fade-in";

import { CgMouse } from "react-icons/cg";
import { Link } from "react-scroll";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Row, Col } from "react-bootstrap";
import { ImHtmlFive } from "react-icons/im";
import { CgArrowLongRight } from "react-icons/cg";

import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";

import { SiTypescript } from "react-icons/si";

export const Hero = () => {
  return (
    <div className={style.hero} id="home">
      <div className={"content " + style.hero_content}>
        <Row className="py-4 ">
          <Col md={6} className="d-flex align-items-center">
            <FadeIn delay={50}>
              <p className={style.highlight + " mb-0 fw-bold"}>
                Hi, I am Hasib.
              </p>
              <h1 className={style.title}>
                I&apos;m a
                <span className={style.highlight}> MERN Stack Developer</span> from
                Dhaka City.
              </h1>
              <p className={style.description}>
                I&apos;m a Web Developer primarily focused on enhancing your
                web experience. I am currently studying in City University as a Computer Science and Engineering major.
              </p>
              <div
                className={
                  "d-flex flex-sm-row flex-column align-items-start align-items-sm-center " +
                  style.btn_group
                }
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={"text-center " + style.btn_primary}
                >
                  Get In Touch
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={"my-3 " + style.btn_line}
                >
                  Learn More &nbsp;
                  <CgArrowLongRight fontSize={36} />
                </Link>
              </div>
            </FadeIn>
          </Col>
          <Col
            md={6}
            className={
              style.hero_img_wrapper +
              " d-flex align-items-center justify-content-center"
            }
          >
            <FadeIn delay={50}>
              <img src="/media/images/hero.png" className={style.hero_img} />
            </FadeIn>
          </Col>
        </Row>
      </div>
    </div>
  );
};
