import React from "react";

const Card = ({ imageUrl, title, link, BelowText }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w- rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
    >
      <div
        className="relative w-96 h-48 bg-cover bg-center rounded-2xl p-4 text-white flex items-center justify-center border-1 border-[#00df9a]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 className="text-xl font-semibold text-center">{title}</h2>
      </div>
    </a>
  );
};

export default Card;
