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
    <div className=" mx-auto w-8/12 h-fit mt-6 rounded-full flex flex-row justify-evenly border-solid border border-red-700">
      {routes.map((route, index) => (
        <Link className="text-xl font-bold" href={route.path} key={index}>
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
