import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    name: "Learners Lab",
    description:
      "Learning prompt engineering like a pro with interactive courses.",
    image: "/p1.png",
    link: "https://learnerslab.netlify.app/",
  },
  {
    id: 2,
    name: "ModOutFit",
    description:
      "Developed and maintained the ModOutfit.com eCommerce platform. ",
    image: "/modout.png",
    link: "https://modoutfit.com/",
  },
  {
    id: 3,
    name: "Resume Editor",
    description: "A resume editor tool where you can create your resume in...",
    image: "/p1.png",
    link: "https://resumeeditor.com/",
  },
];

function Projects() {
  return (
    <div className="max-w-[825px] mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-8 text-white">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col h-full bg-[#1E1E21] rounded-2xl p-2 ">
              <div className="flex justify-center mb-6  ">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={320}
                  height={180}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-white mb-2  ">
                {project.name}
              </h2>
              <p className="text-gray-300 text-base font-medium mb-4 flex-1 ">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
