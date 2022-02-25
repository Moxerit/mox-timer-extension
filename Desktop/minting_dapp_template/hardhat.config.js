require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { ALCHEMY_RINKEBY_URL, ACCOUNT_KEY } = process.env;


module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: ALCHEMY_RINKEBY_URL,
      accounts: [`0x${ACCOUNT_KEY}`],
    }
  }
};