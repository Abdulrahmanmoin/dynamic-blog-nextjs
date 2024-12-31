'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {

  const [currentDateTime, setCurretDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }
      setCurretDateTime(
        now.toLocaleDateString("en-US", options) + "" + now.toLocaleTimeString("en-US", { hour12: false })
      );
    };
    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId)
  }, [])

  return (
    <header className="text-grey-400 body-font shadow-lg bg-pink-400 text-black  md:px-10 md:py-6">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">

        <div className="flex-1 text-black text-lg sm:text-xl">
          <h1 className="font-extrabold">AR Blogs</h1>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
          <Link href="http://localhost:3000/" className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            {""}
            Home{""}
          </Link>

          <Link href="https://www.linkedin.com/in/abdulrahman-moin/"
          target="_blank"
          className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">
            {""}
            Contact{""}
          </Link>

        </nav>

        <div className="flex-1 md:hidden text-black text-xs sm:text-base">
          <span>{currentDateTime}</span>
        </div>

        <Link href={"https://www.linkedin.com/in/abdulrahman-moin/"}
          target="_blank"
        >
          <button className="inline-flex items-center bg-pink-900 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-white hover:text-black mt-4 md:mt-0 transition-colors duration-300">
            My LinkedIn
          </button>
        </Link>
      </div>

      <div className="hidden md:flex text-black text-xs sm:text-base justify-center">
        <p>{currentDateTime}</p>
      </div>
    </header >
  )
}