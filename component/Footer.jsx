import svgfooterimgs from "../public/assets/svgicons/svgfooterimgs.svg";
import footertwitter from "../public/assets/svgicons/footertwitter.svg";
import footerig from "../public/assets/svgicons/footerig.svg";
import footerfb from "../public/assets/svgicons/footerfb.svg";
import  footerlocation from "../public/assets/svgicons/footerlocation.svg"
import footercopyright from"../public/assets/svgicons/footercopyright.svg"
import Image from "next/image";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="svgfooterimgs-cont">
        <Image
          src={svgfooterimgs}
          alt="svgfooterimgs"
          className="svgfooterimgs"
        />
      </div>
      <div className="footerinfocont">
        <ul className="footer1ul">
          <li>Show Ads in my school</li>
          <li>Sell on Unimart</li>
          <li>Sign up for Email</li>
          <li>Send us feedback</li>
        </ul>
        <ul className="footersmallfont">
          <li className="footer1ul">Get help</li>
          <li>Sell on unimart</li>
          <li>Safety tips</li>
          <li>FAQ</li>
        </ul>
        <ul className="footersmallfont">
          <li className="footer1ul">About us</li>
          <li>Terms and conditions</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
        <div className="footer-social-mediaicons">
          <Image src={footertwitter} alt="footerfb" />
          <Image src={footerfb} alt="footerfb" />
          <Image src={footerig} alt="footerfb" />
        </div>
      </div>
      <div className="footer-copyright">
      <div className="foot-c">
        <Image src={footerlocation} alt="footerlocation" />
        Nigeria
      </div>
      <div className="foot-c">
        <Image src={footercopyright} alt="footerlocation" />
        Unimart, 2023
      </div>

      </div>
     
    </div>
  );
};

export default Footer;
