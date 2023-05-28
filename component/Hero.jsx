import unimartheroicon from "../public/assets/svgicons/unimartheroicon.svg";
import herotext from "../public/assets/svgicons/herotext.svg";
import herosell from "../public/assets/svgicons/herosell.svg";
import heroservices from "../public/assets/svgicons/heroservices.svg"
import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero-container">
      <Image src={unimartheroicon} alt="unimartheroicon" className="unimartheroicon" />
      <div>
        <Image src={herotext} alt="herotext"className="unimartheroicon" />
        <div className="hero-btn-cont">
        <div className="herosellcont">
          <Image src={herosell} alt="herosell" />
          <p>Start Selling</p>
        </div>
        <div className="herosellcont">
          <Image src={heroservices} alt="heroservices" />
          <p>
            Offer your services </p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
