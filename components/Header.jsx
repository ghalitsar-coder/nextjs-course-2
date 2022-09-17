import Link from "next/link";
import React from "react";

const Header = () => {
  const links = [
    {
      name: "Add Hotel",
      path: "/new-hotel",
    },
  ];
  return (
    <header className="bg-emerald-400 font-poppins  " >
      <nav className="container flex py-2 items-center justify-between ">
        <h1>
          <Link href="/">Amogus</Link>
        </h1>
        <ul>
          {links.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
