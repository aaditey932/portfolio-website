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
      ></div>
      
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
