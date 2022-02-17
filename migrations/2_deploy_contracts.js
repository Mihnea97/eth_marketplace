const MarketPlace = artifacts.require('Marketplace');

module.exports = deployer => {
    deployer.deploy(MarketPlace);
}