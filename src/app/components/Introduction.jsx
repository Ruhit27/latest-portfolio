import React from "react";
import { FaFacebookMessenger, FaPaperPlane } from "react-icons/fa";
function Introduction() {
  return (
    <div className=" max-w-[825px] sm:mx-auto mt-12 mx-2">
      <h1 className="text-4xl font-bold">Majharul Islam Ruhit</h1>
      <p className="text-[18px] font-medium w-[80%] sm:w-[60%] mt-4   text-[#BCBCBD]">
        A passionate full-stack developer, dedicated to building innovative
        products and web applications while delivering high-quality,
        client-focused solutions.
      </p>
      <div className="flex gap-4 mt-4">
        <a href="/CV.pdf" download>
          <button className="bg-white text-black cursor-pointer text-sm   px-4 py-2 rounded-md">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Introduction;
