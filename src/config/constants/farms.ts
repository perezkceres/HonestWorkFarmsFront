import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'HONEST - USDC',
    lpAddresses: {
      97: '',
      56: '0x34Eee3A617e783ADe7340adb37dBb85b90477070',
      137: '0x34Eee3A617e783ADe7340adb37dBb85b90477070',
    },
    tokenSymbol: 'HONEST',
    tokenAddresses: {
      97: '',
      56: '0x4dA646B71014332AE8370017d05205346d3ca50A',
      137: '0x4dA646B71014332AE8370017d05205346d3ca50A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  

  {
    pid: 1,
    risk: 3,
    lpSymbol: 'WMATIC - USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 2,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'HONEST - MATIC',
    lpAddresses: {
      97: '',
      56: '0xc02B405EED5fe43d00886622f1a3C046e4de1792',
      137: '0xc02B405EED5fe43d00886622f1a3C046e4de1792',
    },
    tokenSymbol: 'HONEST',
    tokenAddresses: {
      97: '',
      56: '0x4dA646B71014332AE8370017d05205346d3ca50A',
      137: '0x4dA646B71014332AE8370017d05205346d3ca50A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'HONEST',
    lpAddresses: {
      97: '',
      56: '0x4dA646B71014332AE8370017d05205346d3ca50A',
      137: '0x4dA646B71014332AE8370017d05205346d3ca50A', 
    },
    tokenSymbol: 'HONEST',
    tokenAddresses: {
      97: '',
      56: '0x4dA646B71014332AE8370017d05205346d3ca50A',
      137: '0x4dA646B71014332AE8370017d05205346d3ca50A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  
},

  
  
]

export default farms
