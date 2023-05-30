import Image from "next/image";
import mobile from "../public/assets/svgicons/mobile.svg";

import electronics from "../public/assets/svgicons/electronics.svg";
import funiture from "../public/assets/svgicons/funiture.svg";
import beauty from "../public/assets/svgicons/beauty.svg";
import pets from "../public/assets/svgicons/pets.svg";
import kitchen from "../public/assets/svgicons/kitchen.svg";

import right from "../public/assets/svgicons/left.svg";
import left from "../public/assets/svgicons/right.svg"
const Category = () => {
  return (
    <section className="category-container">
      <div className="homepage-category">
        <Image src={mobile} className="mobile"alt="mobile" />
        <Image src={electronics} className="electronics" alt="electronics" />
        <Image src={funiture} className="furniture" alt="funiture" />
        <Image src={beauty} className="beauty" alt="beauty" />
        <Image src={pets} className="pets" alt="pets" />
        <Image src={mobile} className="mobile" alt="mobile" />
        <Image src={left}  alt="phone" className="leftcategory" />
        <Image src={right}  alt="phone" className="rightcategory" />
      </div>
    </section>
  );
};

export default Category;
