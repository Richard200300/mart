"use client"
import Image from "next/image";
import Unimart from "../public/assets/svgicons/unimart.svg";
import unimarrtsearch from "../public/assets/svgicons/unimarrtsearch.svg";
import signupicon from "../public/assets/svgicons/signupicon.svg";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [tognav, setTognav] = useState(true)

  return (
    <section className="main-nav">
      <div className={tognav ? "showmenu" : "showmenuactive"}>
        <div className="mainshow">
        <div className="nav-logincont1">
          <Link href="/login">
            <div className="navlogin">Login in</div>
          </Link>
          <Link href="/signup">
            <div className="navsignup">
              <Image src={signupicon} alt="signupicon" />
              Sign up
            </div>
          </Link>
        </div>
        </div>

      </div>
      <section className="navbar">
        <Image src={Unimart} alt="unimart" className="unimart-logo" />

        <div className="nav-input-search-cont">
          <input
            type="text"
            placeholder="I am searching for....."
            className="navbar-search"
          />
          <Image
            src={unimarrtsearch}
            alt="unimarrtsearch"
            className="nav-search-icon"
          />
        </div>
        <div className="hambugger-nav" onClick={()=>{
setTognav(prevdata => !prevdata)
        }}>
          <div className={tognav ? "nav-bar": "bar-active"}></div>
          <div className={tognav ? "nav-bar": "bar-active"}></div>
          <div className={tognav ? "nav-bar": "bar-active"}></div>
        </div>
        <div className="nav-logincont">
          <Link href="/login">
            <div className="navlogin">Login in</div>
          </Link>
          <Link href="/signup">
            <div className="navsignup">
              <Image src={signupicon} alt="signupicon" />
              Sign up
            </div>
          </Link>
        </div>
      </section>
      <div className="nav-input-search-cont1">
        <input
          type="text"
          placeholder="I am searching for....."
          className="navbar-search"
        />
        <Image
          src={unimarrtsearch}
          alt="unimarrtsearch"
          className="nav-search-icon"
        />
      </div>
    </section>
  );
};

export default Navbar;
