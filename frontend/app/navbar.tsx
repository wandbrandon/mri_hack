"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/",
      title: "Test",
    },
    {
      path: "/",
      title: "About",
    },
    {
      path: "/",
      title: "RUN",
    },
  ];

  const currentPath = usePathname();
  console.log(currentPath);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="absolute inset-x-1 mx-auto h-fit w-fit mt-6 py-3 px-3 rounded-full flex flex-row gap-6 justify-evenly border-solid bg-mriSlate z-0">
      {routes.map((route, index) => (
        <Link
          className="py-6 px-24 flex flex-row justify-center items-center rounded-full relative transition-all z-50"
          onClick={() => setSelectedId(index)}
          href={route.path}
        >
          {route.title}
          {index === selectedId && (
            <motion.div
              className="absolute w-full h-full top-0 left-0 bg-mriBlue rounded-full z-10"
              layoutId="outline"
            ></motion.div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
