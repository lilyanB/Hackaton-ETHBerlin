require("@nomicfoundation/hardhat-toolbox");
const fs= require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId= "5bafc40913ae4a0ab7745f6fec51a04c"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    hardhat: {
      chainId:1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.17",
};
