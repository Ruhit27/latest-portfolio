import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const skills = [
  "Next-JS",
  "SvelteKit",
  "TypeScript",
  "Express",
  "Shadcn",
  "Tailwind",
  "python",
  "fastapi",
  "MongoDB",
  "Mongoose",
  "Sql",
  "Langchain",
  "Ubuntu",
];

function About() {
  return (
    <div className="max-w-[825px] sm:mx-auto mt-16 m-2 sm:flex space-y-4 gap-12">
      <div className=" w-[92%] bg-[#1E1E21] p-6 rounded-lg">
        <p className="text-xl font-bold">Skills</p>
        <div className="grid grid-cols-4  gap-2 mt-3">
          {skills.map((skill) => (
            <div key={skill} className="">
              <p className="text-xs font-semibold bg-[#27272A] text-center px-2 py-2 rounded-2xl">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[92%] bg-[#1E1E21] p-6 rounded-lg">
        <p className="text-xl font-bold">Let's Connect</p>
        <div className="flex gap-4 mt-3">
          <Link href="https://github.com/ruhit27" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/ruhit27/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="mailto:majharulislamruhit@gmail.com" target="_blank">
            <FaEnvelope />
          </Link>
          <Link href="https://x.com/MajharulRuhit" target="_blank">
            <FaTwitter />
          </Link>
        </div>
        <p className="text-[16px] mt-3">Email</p>
        <p className="text-[15px] mt-1">majharulislamruhit@gmail.com</p>
        <p className="text-[16px] mt-3">Previous Job</p>
        <p className="text-[15px] mt-1">Software Engineer</p>
      </div>
    </div>
  );
}

export default About;
