"use client";
import Navbar from "../../components/Navbar";
import Intro from "../../components/Intro";
import MyProjects from "../../components/MyProjects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      
      <MyProjects/>
      <Contact/>
    </div>
  );
}
