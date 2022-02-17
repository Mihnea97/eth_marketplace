pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint => Product) public Products;

    struct Product {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "My Variable Name";
    }

    function createProduct(string memory _name, uint _price) public {
        require(bytes(_name).length > 0);
        require(_price > 0);
        productCount ++;
        Products[productCount] = Product(productCount, _name, _price, msg.sender, false);
        emit ProductCreated(productCount, _name, _price, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable {
        Product memory _product = Products[_id];
        address payable _seller = _product.owner;
        require(_product.id > 0 && _product.id <= productCount);
        require(msg.value >= _product.price);
        require(!_product.purchased);
        require(_seller != msg.sender);
        _product.owner = msg.sender;
        _product.purchased = true;
        Products[_id] = _product;
        address(_seller).transfer(msg.value);
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);
    }

}