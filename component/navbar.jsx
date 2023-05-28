import Image from "next/image"
import Unimart from "../public/assets/svgicons/unimart.svg"
import unimarrtsearch from "../public/assets/svgicons/unimarrtsearch.svg"
import  signupicon from "../public/assets/svgicons/signupicon.svg"

const Navbar = () => {
  return (
    <section  className="navbar">
        <Image src={Unimart} alt="unimart" className="unimart-logo"/>

        <div className="nav-input-search-cont">
            <input type="text" placeholder="I am searching for....." className="navbar-search" />
            <Image src={unimarrtsearch} alt="unimarrtsearch"className="nav-search-icon" />
        </div>

        <div className="nav-logincont">
            <div className="navlogin">
                Login in
            </div>
            <div className="navsignup">
              <Image src={signupicon} alt="signupicon" />
            Sign up
            </div>
        </div>
    </section>
  )
}

export default Navbar