import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left */}
      <div className="relative flex h-10 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* center */}
      <div className="flex items-center border-2 rounded-full md:shadow-sm py-2 ">
        <input
          className="flex-grow pl-3 text-sm text-gray-800  bg-transparent placeholder-gray-400 outline-none "
          type="text"
          placeholder="Start Your Search"
        />

        <MagnifyingGlassIcon className=" hidden md:inline-flex  h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}

      <div className="flex justify-end space-x-4 text-gray-500">
        <h1 className="text-gray-600 mt-3 cursor-pointer hidden md:inline">
          Become a host
        </h1>

        <GlobeAltIcon className="h-6 mt-3 cursor-pointer" />

        <div className="flex border-2 rounded-full p-2 items-center space-x-2 shadow-sm cursor-pointer">
          <Bars3Icon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
