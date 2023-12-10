import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Widget from "../../components/widget/Widget";
import "./Menu.css";
import bg from "../../assets/bg.png";
import { getDishes } from "../../service/apiDish";

function Menu() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    handleGetDishes()
  }, []);

  const handleGetDishes = async () => {
    try {
      const data = await getDishes();
      setDishes(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <div className="container-menu">
        <div className="container-grid">
          {
            dishes.map((dish) => (
              <Widget image={dish.image.url} name={dish.name} ratings={dish.rating} key={dish.id}/>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
