import svgfooterimgs from "../public/assets/svgicons/svgfooterimgs.svg";
import footertwitter from "../public/assets/svgicons/footertwitter.svg";
import footerig from "../public/assets/svgicons/footerig.svg";
import footerfb from "../public/assets/svgicons/footerfb.svg";
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
        <ul>
          <li>Show Ads in my school</li>
          <li>Sell on Unimart</li>
          <li>Sign up for Email</li>
          <li>Send us feedback</li>
        </ul>
        <ul>
          <li>Get help</li>
          <li>Sell on unimart</li>
          <li>Safety tips</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>About us</li>
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
    </div>
  );
};

export default Footer;
