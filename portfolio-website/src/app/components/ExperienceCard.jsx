import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ExperienceCard = ({ company, role, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#181818] shadow-md p-6 max-w-xl mx-auto">
      {/* Company Logo */}
      <div
        className="h-52 md:h-72 rounded-md relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </Link>
        </div>
      </div>
      
      {/* Experience Details */}
      <div className="mt-4">
        <h5 className="text-2xl mt-5 text-center font-semibold text-white">{company}</h5>
        <p className="text-lg text-center text-gray-400 mb-2">{role}</p>

        {/* Check if description is an array for bullet points */}
        {Array.isArray(description) ? (
          <ul className="list-item list-inside text-gray-300 space-y-2">
            {description.map((point, index) => (
              <li key={index} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        ) : (
          <p className="text-justify text-gray-300">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
