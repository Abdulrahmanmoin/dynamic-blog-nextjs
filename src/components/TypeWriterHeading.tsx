"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function TypeWriterHeading() {
  const words = [
    {
      text: "Write",
    },
    {
      text: "awesome",
    },
    {
      text: "Blogs",
    },
    {
      text: "Here",
    },
    {
      text: "On",
    },
    {
      text: "AR",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Blogs.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs md:text-base text-center mb-10 mt-10">
        Unleash your creativity and share your thoughts here.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href={"https://www.linkedin.com/in/abdulrahman-moin/"}
          target="_blank"
        >
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white hover:text-black text-sm hover:bg-white">
            LinkedIn
          </button>
        </Link>
        <button className="w-40 h-10 rounded-xl bg-white text-black border hover:text-white border-black  text-sm hover:bg-black">
          Signup
        </button>
      </div>
    </div>
  );
}
