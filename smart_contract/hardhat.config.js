//https://eth-ropsten.alchemyapi.io/v2/W9gYJvcYgV5--RgeuMx_eZLtKp4MbWqz
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/W9gYJvcYgV5--RgeuMx_eZLtKp4MbWqz',
      accounts: ['665425f3c0f8923ae4f1a27e8595d3dde70376db65d1a3c8f1eb2aeebd599eb4'],
    },
  },
};