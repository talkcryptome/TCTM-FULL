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
        label: 'Exchange',
        href: 'https://exchange.talkcryptotome.com/#/swap', 
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.talkcryptotome.com/#/liquidity',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farm',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: '/pool',
  },
  {
    label: 'Vault',
    icon: 'MoonIcon',
    href: '/vault',
  },
  {
    label: 'Bridge',
    icon: 'TicketIcon',
    href: '/bridge',
  },
  {
    label: 'Aggregator',
    icon: 'SunIcon',
    href: '/tin',
  },
  {
    label: 'Charts',
    icon: 'HamburgerIcon',
    items: [
      {
        label: 'DexGuru',
        href: '/dex',
      },
      {
        label: 'PooCoins',
        href: '/poo',
      },
    ],
  },

]

export default config
