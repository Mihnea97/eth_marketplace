import React, { Component } from 'react';
import logo from '../../Ethereum_logo_2014.svg.png';
import { Link } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='main-nav'>
        <div className='top-banner'>
          <div className='logo'> 
            <img src={ logo } />
            <a
              href="http://www.dappuniversity.com/bootcamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETH MarketPlace
            </a>
          </div>
          <ul className='account-info'>
            <li>
              <small><span>Address {this.props.account}</span></small>
            </li>
            <li>
              <small><span>Balance {this.props.accountBalance} ETH</span></small>
            </li>
          </ul>
        </div>
        <div className='menu'>
          <div className='menu-list'>
              <Link to="/home" className={ this.props.selected === 'home' ? 'selected' : '' }><a>Home</a></Link>
              <Link to="/marketplace"><a className={ this.props.selected === 'marketplace' ? 'selected' : '' }>MarketPlace</a></Link>
              <Link to="/account" className={ this.props.selected === 'account' ? 'selected' : '' }><a>Account</a></Link>
              <Link to="/add-product" className={ this.props.selected === 'add-product' ? 'selected' : '' }><a>Add Product</a></Link>
              <Link to="/my-products" className={ this.props.selected === 'my-products' ? 'selected' : '' }><a>My Products</a></Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;