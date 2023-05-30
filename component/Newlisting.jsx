import Image from "next/image";
import listing from "../public/assets/svgicons/listings.svg";
import trendinglocation from "../public/assets/svgicons/trendinglocation.svg";
import bookmark from "../public/assets/svgicons/bookmark.svg";
import TrendingAds from "../public/assets/svgicons/TrendingAds.svg";
import trendingadsdata from "../data/trendingaddata";
import gas from "../public/assets/images/gascylinder.jpg";
const Newlisting = () => {
  return (
    <div className="listingcontt">
      <div className="trendingadtextcontainer">
        <div className="trendingadborder"></div>
        <Image src={listing} alt="listing" />
        <div className="trendingadborder"></div>
      </div>
      <div className="trendingadscont">
        {trendingadsdata.slice(0, 4).map((data) => {
          return (
            <div>
              <div className="trendingadsbox">
                <Image src={gas} alt="gas" className="ad-img" />
                <p className="box-minicategory">Kitchen appliance</p>
                <Image src={bookmark} alt="bookmark" className="bookmark" />
                <div className="productinfo">
                  <Image
                    src={trendinglocation}
                    alt="trendinglocation"
                    className="box-location"
                  />
                  <div>
                    <p className="productname"> {data.productname}</p>
                    <p className="productprice">₦ {data.productprice}</p>
                    <div className="universitycont">
                      <p> {data.university}</p>
                      <p>{data.uniabbreviation}</p>
                    </div>
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

export default Newlisting;
