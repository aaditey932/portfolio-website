import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-green-950 border border-green-900 shadow-md">
      <div
        className="h-52 md:h-72 relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-green-950 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 rounded-full border-[#e5ebe0]/70 hover:border-[#e5ebe0] flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#e5ebe0]" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h5 className="text-xl text-center font-semibold text-[#e5ebe0] mb-2">{title}</h5>
        <p className="text-justify text-[#e5ebe0]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
