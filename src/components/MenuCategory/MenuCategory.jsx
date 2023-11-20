/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import Menus from "../../shared/Menus/Menus";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-16">
        {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2  gap-10 mt-12 p-8">
        {items.map((item) => (
          <Menus key={item._id} item={item}></Menus>
        ))}
      </div>
      <div className=" flex justify-center items-center">
      <Link to={`/order/${title}`} className="btn border-b-4 border-yellow-600 outline-2 mt-8 ">Order Now</Link>
      </div>
    </div>
  );
};

export default MenuCategory;
