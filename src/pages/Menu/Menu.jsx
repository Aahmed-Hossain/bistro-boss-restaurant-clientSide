
import bgImg from '../../assets/home/banner.jpg';
import MenuCategory from '../../components/MenuCategory/MenuCategory';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Cover from './../../shared/Cover/Cover';
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'

const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter(item => item.category === 'dessert');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  const soup = menu.filter(item => item.category === 'soup');

  return (
    <div>
     
      <Cover img={bgImg} title="OUR MENU"></Cover>
       {/* main cover */}
      <SectionTitle title="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
      {/* offered menu */}
      <MenuCategory items={offered}></MenuCategory>
  {/* dessert menu */}
  <MenuCategory items={dessert} img={dessertBg} title={"Dessert"}></MenuCategory>
  {/* pizza menu */}
  <MenuCategory items={pizza} img={pizzaBg} title={"pizza"}></MenuCategory>
  {/* soup menu */}
  <MenuCategory items={soup} img={soupBg} title={"soup"}></MenuCategory>
  {/* Salad menu */}
  <MenuCategory items={salad} img={saladBg} title={"Salad"}></MenuCategory>
    </div>
  );
};

export default Menu;
