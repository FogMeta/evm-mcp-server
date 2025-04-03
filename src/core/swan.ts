import { defineChain } from 'viem'


export const swan = /*#__PURE__*/ defineChain({
    id: 254,
    name: 'swan Mainnet',
    network: 'swanMainnet',
    nativeCurrency: { name: 'swanu', symbol: 'SWANU', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://mainnet-rpc-01.swanchain.org'],
      },
    },
    blockExplorers: {
      default: {
        name: 'swan Explorer',
        url: 'https://mainnet-explorer.swanchain.io/',
      },
    },
    contracts: {
        swanu: {
        address: '0xBb4eC1b56cB624863298740Fd264ef2f910d5564',
        blockCreated: 3061663,
      },
    },
    testnet: false,
  })

  export const swanProxima = /*#__PURE__*/ defineChain({
    id: 20241133,
    name: 'swan Proxima',
    network: 'swanProxima',
    nativeCurrency: {
      name: 'swanu',
      symbol: 'SWANU',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc-proxima.swanchain.io'],
      },
    },
    blockExplorers: {
      default: {
        name: 'swan Proxima Explorer',
        url: 'https://20241133.testnet.routescan.io/',
      },
    },
    contracts: {
        swanu: {
        address: '0x705C25BD254E6Bc1DC5A7e26B84230E9d7192c6a',
        blockCreated: 7775818,
      },
    },
    testnet: true,
  })
  
  