import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";

const NavMenu = [
  {
    id: 1,
    name: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    name: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    name: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    name: "Contact us",
    path: "/contact",
    delay: 0.5,
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        {/* logo section */}
        <img src={logo} alt="" className="w-36" />
        {/* menu section  */}
        <div>
          <ul className="flex gap-6">
            {NavMenu.map((menu) => {
              return (
                <li key={menu.id} className="nav-menu" data-delay={menu.delay}>
                  <a
                    href={menu.path}
                    className="inline-block px-2 py-2 text-2xl "
                  >
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* button section  */}
        <div>
          <button>
            <IoCartOutline />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
