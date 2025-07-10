require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    flowtestnet: {
      url: `https://flow-testnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [privateKey]
    }
  }
};