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
              <Link to="/home" className={ this.props.selected === 'home' ? 'selected' : '' }>Home</Link>
              <Link to="/marketplace" className={ this.props.selected === 'marketplace' ? 'selected' : '' }>MarketPlace</Link>
              <Link to="/account" className={ this.props.selected === 'account' ? 'selected' : '' }>Account</Link>
              <Link to="/add-product" className={ this.props.selected === 'add-product' ? 'selected' : '' }>Add Product</Link>
              <Link to="/my-products" className={ this.props.selected === 'my-products' ? 'selected' : '' }>My Products</Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;