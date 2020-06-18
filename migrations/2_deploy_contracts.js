var Election = artifacts.require("./Election.sol");// election artifact that represents our smart contract
// we can interact with it now further
module.exports = function(deployer) { // directive to deploy our function
  deployer.deploy(Election);
};
