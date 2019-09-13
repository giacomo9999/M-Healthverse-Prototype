import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-outer">
        <Header />
        <div className="dashboard">
          <div className="overview">
            <h3 className="todayOverview">Today's Overview</h3>
            <br />
            
            <h4>September 12th, 2019</h4>
            <input className="search" placeholder="search">
            </input>
          </div>
          <h1 className="">Class Detected Mental Illness Symptoms </h1>
          <div className="section1">Anxiety 3%
            
          </div>

          <div className="section2">Depression 4% </div>
          <div className="section3">ADHD 5%</div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
