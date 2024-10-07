import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleButton = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top; // this function calculated the distance from top to view port
      const offSetPosition = elementPosition + window.scrollY + offset;
      // offset gives correct scroll location
      window.scrollTo({
        top: offSetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="fixed inset-x-0 top-0 sm:top-4 z-50">
      {/* Desktop Menu */}
      <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex ">
        <div className="flex justify-between items-center gap-6">
          <div>
            <a href="#">
              <img src={logo} alt="logo" width={150} />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((items, index) => (
                <li key={index}>
                  <a
                    href={items.href}
                    className="hover:text-yellow-500"
                    onClick={(e) => handleLinkClick(e, items.href)}
                  >
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="rounded-lg backdrop-blur-md lg:hidden">
        <div className="flex item-center justify-between">
          <div>
            <a href="#">
              <img src={logo} alt="logo" width={90} className="m-2" />
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleButton}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5"></FaTimes>
              ) : (
                <FaBars className="m-2 h-6 w-5"></FaBars>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="flex ml-4 mt-4 flex-col gap-6 backdrop-blur-lg">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block w-full text-lg"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
