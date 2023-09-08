'use client';
import React from "react";
import { useRef } from "react";
import Nav from "@/components/nav/Nav";
import Main from "@/components/main/Main";
import Projects from "@/components/projects/Projects";
import Carousel from "@/components/carousel/Carousel";
import AboutMe from "@/components/about-me/AboutMe";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const startRef = useRef(null);

  const handleViewProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleViewStart = () => {
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div ref={startRef}>
      <Nav />
    </div>
      <Main handleViewProjects={handleViewProjects} />
      <Carousel />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <Footer handleViewProjects={handleViewProjects}  handleViewStart={handleViewStart} handleViewAboutMe={handleViewAboutMe} />
    </>
  );
}
