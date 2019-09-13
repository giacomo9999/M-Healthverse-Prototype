import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-outer">
        <Header />
        <div className="container-inner">
          <h1>I Am The Dashboard</h1>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
