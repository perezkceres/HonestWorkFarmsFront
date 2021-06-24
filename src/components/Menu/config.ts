import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: '/buy',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Kitchen Pools',
    icon: 'PoolIcon',
    href: '/junglepools',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: '/nft',
  },
 
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap Chart',
        href: 'https://info.quickswap.exchange/token/0x4dA646B71014332AE8370017d05205346d3ca50A',
      },
      {
        label: 'Polygon Explorer',
        href: 'https://explorer-mainnet.maticvigil.com/tokens/0x4dA646B71014332AE8370017d05205346d3ca50A',
      },
      {
        label: '🚜 Chart',
        href: 'https://app.polychart.io/explorer/polygon/0x4dA646B71014332AE8370017d05205346d3ca50A'
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/HonestWorkFarm/",
      },
     
    ],
  },
  {
    label: "Collab",
    icon: "HandshakeIcon",
    href: 'https://t.me/honest',
  }
]

export default config
