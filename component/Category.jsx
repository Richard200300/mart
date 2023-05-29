import Image from "next/image";
import phone from "../public/assets/svgicons/phone.svg";
import right from "../public/assets/svgicons/left.svg";
import left from "../public/assets/svgicons/right.svg"
const Category = () => {
  return (
    <section className="category-container">
      <div className="homepage-category">
        <Image src={phone} alt="phone" />
        <Image src={phone} alt="phone" />
        <Image src={phone} alt="phone" />
        <Image src={phone} alt="phone" />
        <Image src={phone} alt="phone" />
        <Image src={phone} alt="phone" />
        <Image src={left} alt="phone" className="leftcategory" />
        <Image src={right} alt="phone" className="rightcategory" />
      </div>
    </section>
  );
};

export default Category;
