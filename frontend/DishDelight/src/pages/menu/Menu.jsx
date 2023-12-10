import React from "react";
import Layout from "../../components/layout/Layout";
import Widget from "../../components/widget/Widget";
import "./Menu.css";
import bg from '../../assets/bg.png';


function Menu() {
  return (
    <Layout>
      <div className="container-menu">
        <div className="container-grid">
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
          <Widget image={bg} name={"Test Grid"} ratings={3.6}/>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
