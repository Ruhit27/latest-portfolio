import Image from "next/image";
import React from "react";

function Experience({ image, role, timeline, company }) {
  return (
    <div className="p-2">
      <div className="flex justify-between mt-4 items-center">
        <div className="flex gap-4 mt-4">
          <Image
            className="rounded-full"
            src={image}
            alt="logo"
            width={53}
            height={53}
          />

          <div>
            <p className=" font-bold">{company}</p>
            <p className="text-sm mt-1 text-[#BCBCBD] font-semibold">{role}</p>
          </div>
        </div>
        <div>
          <p className="text-[#BCBCBD] font-semibold text-sm">{timeline}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
