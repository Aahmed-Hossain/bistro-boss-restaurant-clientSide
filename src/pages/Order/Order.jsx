import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import oderBg from "../../assets/order/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { useState } from "react";
import useMenu from "./../../hooks/useMenu";
import OrderTabs from "../../shared/OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const intialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(intialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover img={oderBg} title={"Order Food"}></Cover>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTabs items={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={dessert}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={drinks}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
