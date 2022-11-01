import React, { useRef } from "react";
import style from "./projects.module.css";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Project } from "../project/Project";
import { myProjects } from "../myProjects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={style.projects} id="projects">
      <main className="content">
        <h1 className={style.title}>
          <span className={style.highlight + " fs-4"}>03.</span> My Projects <button className="btn border"><span style={{fontSize: "1.5rem", color: "#ff8800"}}>{myProjects.length}</span></button>
        </h1>
        <Carousel responsive={responsive}>
          {myProjects.map((project, key) => (
            <Project
              key={key}
              title={project.title}
              description={project.description}
              img={project.img}
              tags={project.tags}
              cta={project.cta}
              url={project.url}
              left={project.left}
            />
          )).reverse()}
        </Carousel>
      </main>
    </div>
  );
};
