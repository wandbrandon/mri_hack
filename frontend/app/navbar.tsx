import Link from "next/link";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/test",
      title: "Test",
    },
  ];

  return (
    <div className=" mx-auto w-8/12 h-fit mt-6 py-2 rounded-full flex flex-row justify-evenly border-solid bg-mriSlate">
      {routes.map((route, index) => (
        <Link className="hover:bg-mriBlue rounded-full px-16 transition ease-in text-lg" href={route.path} key={index}>
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
