import Image from "next/image";
import trendinglocation from "../public/assets/svgicons/trendinglocation.svg";

import TrendingAds from "../public/assets/svgicons/TrendingAds.svg";
import trendingadsdata from "../data/trendingaddata";
import gas from "../public/assets/images/gascylinder.jpg";
const Trendingads = () => {
  return (
    <div>
      <div className="trendingadtextcontainer">
        <div className="trendingadborder"></div>
        <Image src={TrendingAds} className="TrendingAds" />
        <div className="trendingadborder"></div>
      </div>
      <div className="trendingadscont">
        {trendingadsdata.map((data) => {
          return (
            <div>
              <div className="trendingadsbox">
                <Image src={gas} alt="gas" className="ad-img" />
                
                 
                  <div className="productinfo">
                  <Image src={trendinglocation} alt="trendinglocation" />
                    <div>
                    <p className="productname"> {data.productname}</p>
                    <p className="">₦ {data.productprice}</p>
                    <p> {data.university}</p>
                    <p>{data.uniabbreviation}</p>
                    </div>
                  </div>
                              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trendingads;
