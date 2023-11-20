/* eslint-disable react/prop-types */
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
    </div>
  );
};

export default MenuCategory;
