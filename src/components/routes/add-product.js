import React, { Component } from 'react';
import Navbar from '../navigation/Navbar';
import AddProductForm from '../add-product-components/add-product-form';
import Marketplace from '../../abis/Marketplace.json';
import Web3 from 'web3';
import { Link } from "react-router-dom";

class addProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        account: '',
        productCount: 0,
        products: [],
        loading: true
        }
    }
    
    async componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockchainData();
        window.ethereum.on('accountsChanged', async function (accounts) {
        window.location.reload();
        })
    }
    
    loadWeb3 = async () => {
        if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        }
        else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }
    
    loadBlockchainData = async () => {
        const web3 = window.web3
        // Load account
        const accounts = await web3.eth.getAccounts()
        const balance = await web3.eth.getBalance(accounts[0])
        const balanceInEth = await  web3.utils.fromWei(balance, 'ether');
        this.setState({ 
        account: accounts[0],
        accountBalance: balanceInEth
        })
        const networkId = await web3.eth.net.getId()
        const networkData = Marketplace.networks[networkId]
        if(networkData) {
        const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
        this.setState({ marketplace })
        const productCount = await marketplace.methods.productCount().call()
        console.log(productCount.toString())
        this.setState({ productCount })
        // Load products
        for (var i = 1; i <= productCount; i++) {
            const product = await marketplace.methods.Products(i).call()
            this.setState({
            products: [...this.state.products, product],
            loading: false
            })
        }
        } else {
        window.alert('Marketplace contract not deployed to detected network.')
        }
    }
    
    createProduct = (name, price) => {
        this.setState({ loading: true })
        this.state.marketplace.methods.createProduct(name, price).send({ from: this.state.account })
        .once('receipt', () => {
          this.setState({ loading: false })
        })
        .on('error', () => {
          this.setState({ loading: false })
        })
    }

    render() {
        return (
            <div className='app-container'>
            <Navbar account={this.state.account} accountBalance={this.state.accountBalance} selected='add-product'/>
            <div className="container-fluid mt-5">
                <div className="row">
                <main role="main" className="col-lg-12 d-flex">
                { this.state.loading
                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                    : <AddProductForm
                    products={this.state.products}
                    createProduct={this.createProduct} />
                }
                </main>
                </div>
            </div>
            </div>
        );
    }
}
export default addProductForm;