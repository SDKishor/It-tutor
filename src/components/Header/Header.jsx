import React, { useEffect, useState } from "react";
import CustomLink from "../../hooks/CustomLink";
import "./header.css";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <header>
      <div className="logo">
        <span>IT</span> Tutor
      </div>
      <button onClick={toggleMenu} className="hambar">
        |||
      </button>
      {/* navigation bar */}
      <nav className={openMenu ? "" : "hidden"}>
        <div className="logo">
          <span>IT</span> Tutor
        </div>
        <button onClick={toggleMenu} className="closeBtn">
          X
        </button>
        <div className="links ">
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/services">Services</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
          <CustomLink to="/about">ABOUT</CustomLink>
          <CustomLink className="loginBtn" to="/Login">
            Login
          </CustomLink>
        </div>
      </nav>
    </header>
  );
};
