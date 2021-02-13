
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "d42eca777d414fa6b47379502787e136";
const developmentMnemonic = "capable lucky idle elbow dumb coyote razor maximum frost fade traffic improve";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(developmentMnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 4500000,        // Rinkeby has a lower block limit than mainnet
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
   }
  }
};