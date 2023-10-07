"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/upload",
      title: "Upload",
    },
    {
      path: "/about",
      title: "About",
    },
  ];

  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <div className="absolute inset-x-1 mx-auto w-8/12 h-fit mt-14 py-2 rounded-full flex flex-row justify-evenly border-solid bg-mriSlate">
      {routes.map((route, index) => (
        <Link
          className={`${
            currentPath === route.path ? "bg-mriBlue" : "hover:bg-mriBlue"
          } rounded-full px-16 transition ease-in text-lg`}
          href={route.path}
          key={index}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
