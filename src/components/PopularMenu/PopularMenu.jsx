import useMenu from "../../hooks/useMenu";
import Menus from "../../shared/Menus/Menus";

const PopularMenu = () => {
  const [menu] = useMenu
  ();
  const populaItems = menu.filter((item) => item.category === "popular");
  return (
    <div className="grid grid-cols-2  gap-10 mt-12">
      {populaItems.map((item) => (
        <Menus key={item._id} item={item}></Menus>
      ))}
    </div>
  );
};

export default PopularMenu;
