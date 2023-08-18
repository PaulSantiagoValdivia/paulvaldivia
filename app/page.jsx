'use client'

import Nav from "@/components/nav/Nav";
import Main from "@/components/main/Main"
import React from "react";
import Projects from "@/components/projects/Projects";
import Carousel from "@/components/carousel/Carousel";
import AboutMe from "@/components/about-me/AboutMe";
import Footer from "@/components/footer/Footer";

export default function Home () {
  return(
    <>
      <Nav/>
      <Main/>
      <Carousel/>
      <Projects/>
      <AboutMe/>
      <Footer/>
    </>
  );
}