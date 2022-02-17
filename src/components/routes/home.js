import React, { Component } from 'react';
import Navbar from '../navigation/Navbar';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
          <Navbar account='1231245125214' accountBalance='1231245125214' selected='home'/>
          Home
      </div>
    );
  }
}
export default Home;