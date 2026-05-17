import React from "react";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./components/Experience";
import ChatWidget from "./components/ChatWidget";
import Projects from "./components/Projects";
function Home() {
  // const apubcc
  return (
    <main className="min-h-screen bg-[#151518] ">
      <div className="">
        <Introduction />
        <About />
        <div className="max-w-[825px] mx-auto mt-10 ">
          <h1 className="sm:text-2xl text-xl sm:px-0 px-2 font-bold ">
            Work Experience
          </h1>

          <Experience
            image="/aivocado-logo.png"
            role="Lead Developer"
            timeline="October 2025 – Present"
            company="AIVOCADO Company Limited"
            description="Appointed as Lead Developer for the TAXIECO project under TAXIECO New World Limited, managed by AIVOCADO Company Limited. Responsible for leading all development activities, including overseeing the technical development process, managing and mentoring the development team, and ensuring timely delivery of high-quality software solutions aligned with project objectives."
          />
          <Experience
            image="/apubcc.jpg"
            role="Developer Relation"
            timeline="April 2024 - Dec 2024"
            company="APUBCC"
          />
          <Experience
            image="/logo2.png"
            role="Software Engineering"
            timeline="Dec 2024 - June 2025"
            company="DDRoom"
          />
        </div>

        <Projects />
      </div>
      <ChatWidget />
    </main>
  );
}

export default Home;
