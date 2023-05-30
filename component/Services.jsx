import Image from "next/image";
import services from "../public/assets/svgicons/Services.svg";
import trendinglocation from "../public/assets/svgicons/trendinglocation.svg";
import bookmark from "../public/assets/svgicons/bookmark.svg";
import servicesdata from "../data/servicesdata";
import gas from "../public/assets/images/gascylinder.jpg";

const Services = () => {
  return (
    <div className="listingcontt">
      <div className="trendingadtextcontainer">
        <div className="trendingadborder"></div>
        <Image src={services} alt="services" />
        <div className="trendingadborder"></div>
      </div>
      <div className="trendingadscont">
        {servicesdata.map((data) => {
          return (
            <div>
              <div className="trendingadsbox">
                <Image src={gas} alt="gas" className="ad-img" />
                <p className="box-minicategory">{data.category}</p>
                <Image src={bookmark} alt="bookmark" className="servicesbookmark"/>
                <div className="productinfo">
                  <Image
                    src={trendinglocation}
                    alt="trendinglocation"
                    className="box-location"
                  />
                  <div>
                    <p className="productname"> {data.productname}</p>
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

export default Services;
