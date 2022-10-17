import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className=" items-center  transform transition hover:scale-105 duration-300 ease-out p-2">
      <div className="relative h-80 w-80 ">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
