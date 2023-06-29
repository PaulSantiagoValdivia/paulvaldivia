import Nav from "@/components/nav/Nav";
import Main from "@/components/main/Main"
import React from "react";
import Projects from "@/components/projects/Projects";
import Carousel from "@/components/carousel/Carousel";

export default function Home () {
  return(
    <>
      <Nav/>
      <Main/>
      <Carousel/>
      <Projects/>

    </>
  );
}