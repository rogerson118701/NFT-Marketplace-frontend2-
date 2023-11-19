export const ourSiteName="Rava";
export const NavbarTitle=[
    {
        label:'Dashboard',
        role:'user',
        url:'/',
    },
    {
        label:'Bridge',
        role:'user',
        url:'/bridge'
    },
    {
        label:'Swap',
        role:'user',
        url:'/swap'
    },

    {
        label:'NFT Marketplace',
        role:'user',
        url:'/nftmarketplace/Dashboard'
    },

    {
        label:'About Us',
        role:'user',
        url:'/aboutus'
    },  
    
    {
        label:'Admin',
        role:'admin',
        url:'/admin'
    }
]
export type NetworkType={
    chainname:string,
    native:string,
    nativeunit:string,
    image:string|''
}
export const Networks=[
    
    {
        chainname:'BNB chain',
        native:'BNB',
        nativeunit:'BNB',
        image:'https://icons-ckg.pages.dev/lz-dark/networks/bnb.svg'
    },
    {
        chainname:'Polygon',
        native:'Matic',
        nativeunit:'MATIC',
        image:'https://icons-ckg.pages.dev/lz-dark/networks/matic.svg'
    },
    {
        chainname:'Avalanche',
        native:'Avalanche',
        nativeunit:'AVAX',
        image:'https://icons-ckg.pages.dev/lz-dark/networks/avalanche.svg'
    },
    {
        chainname:'Aptos',
        native:'Aptos',
        nativeunit:'APT',
        image:'https://icons-ckg.pages.dev/lz-dark/networks/aptos.svg'
    },
    {
        chainname:'Arbitrum',
        native:'Arbitrum',
        nativeunit:'ETH',
        image:'https://icons-ckg.pages.dev/lz-dark/networks/arbitrum.svg'
    },
    {
        chainname:'Optimism',
        native:'Optimism',
        nativeunit:'ETH',
        image:'https://icons-ckg.pages.dev/lz-dark/networks/optimism.svg'
    },
    {
        chainname:'Ethereum',
        native:'Ethereum',
        nativeunit:'ETH',
        image:'https://icons-ckg.pages.dev/lz-dark/networks/ethereum.svg'
    },
]

export type TokensType={
    chainname:string,
    unit:string,
    image:string|''
} 
export const Tokens=[
    {
        chainname:'Ethereum',
        unit:'ETH',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/eth.svg'
    },
    {
        chainname:'Optimism',
        unit:'ETH',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/eth.svg'
    },
    {
        chainname:'Arbitrum',
        unit:'ETH',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/eth.svg'
    },
    {
        chainname:'Ethereum',
        unit:'WETH',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/weth.svg'
    },
    {
        chainname:'Arbitrum',
        unit:'WETH',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/weth.svg'
    },
    {
        chainname:'Optimism',
        unit:'WETH',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/weth.svg'
    },
    {
        chainname:'Aptos',
        unit:'WETH',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/weth.svg'
    },
    {
        chainname:'Ethereum',
        unit:'USDC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdc.svg'
    },
    {
        chainname:'Avalanche',
        unit:'USDC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdc.svg'
    },
    {
        chainname:'Polygon',
        unit:'USDC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdc.svg'
    },
    {
        chainname:'Arbitrum',
        unit:'USDC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdc.svg'
    },
    {
        chainname:'BNB Chain',
        unit:'USDC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdc.svg'
    },
    {
        chainname:'Ethereum',
        unit:'USDC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdc.svg'
    },
    {
        chainname:'Aptos',
        unit:'USDC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdc.svg'
    },
    {
        chainname:'Ethereum',
        unit:'USDT',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdt.svg'
    },
    {
        chainname:'BNB Chain',
        unit:'USDT',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdt.svg'
    },
    {
        chainname:'Polygon',
        unit:'USDT',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdt.svg'
    },
    {
        chainname:'Ethereum',
        unit:'USDT',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdt.svg'
    },
    {
        chainname:'Aptos',
        unit:'USDT',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdt.svg'
    },
    {
        chainname:'Ethereum',
        unit:'USDD',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdd.svg'
    },
    {
        chainname:'BNB Chain',
        unit:'USDD',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdd.svg'
    },
    {
        chainname:'Aptos',
        unit:'USDD',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/usdd.svg'
    },
    {
        chainname:'Ethereum',
        unit:'WBTC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/wbtc.svg'
    },
    {
        chainname:'Aptos',
        unit:'WBTC',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/wbtc.svg'
    },
    {
        chainname:'Ethereum',
        unit:'BTC.B',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/btc.b.svg'
    },
    {
        chainname:'BNB Chain',
        unit:'BTC.B',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/btc.b.svg'
    },
    {
        chainname:'Polygon',
        unit:'BTC.B',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/btc.b.svg'
    },
    {
        chainname:'Arbitrum',
        unit:'BTC.B',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/btc.b.svg'
    },
    {
        chainname:'Optimism',
        unit:'BTC.B',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/btc.b.svg'
    },
    {
        chainname:'Avalanche',
        unit:'BTC.B',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/btc.b.svg'
    },
    {
        chainname:'Aptos',
        unit:'BTC.B',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/btc.b.svg'
    },
    {
        chainname:'BNB Chain',
        unit:'CAKE',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/cake.svg'
    },
    {
        chainname:'Aptos',
        unit:'CAKE',
        image:'https://icons-ckg.pages.dev/lz-dark/tokens/cake.svg'
    },

]

export const Wallet=[
    {
        name:'Metamask',
        image:'/blockchains/metamask.svg',
        url:'https://metamask.io/'
    },
    {
        name:'Coinbase Wallet',
        image:'/blockchains/coinbase.svg',
        url:'https://www.coinbase.com/wallet'
    },
    {
        name:'Phantom Wallet',
        image:'/blockchains/phantom.svg',
        url:'https://phantom.app/'
    }
    ,
    {
        name:'True Wallet',
        image:'/blockchains/truewallet.svg',
        url:'https://trustwallet.com/'
    }
]
export const AptosWallet=[
    {
        name:'Pontem Wallet',
        image:'https://icons-ckg.pages.dev/lz-dark/wallets/pontem.svg',
        url:'https://pontem.network/'
    },
    {
        name:'Fewcha Wallet',
        image:'https://icons-ckg.pages.dev/lz-dark/wallets/fewcha.svg',
        url:'https://fewcha.app/'
    },
    {
        name:'Martian Wallet',
        image:'https://icons-ckg.pages.dev/lz-dark/wallets/martian.svg',
        url:'https://martianwallet.xyz/'
    }
    ,
    {
        name:'Petra Wallet',
        image:'https://icons-ckg.pages.dev/lz-dark/wallets/petra.svg',
        url:'https://petra.app/'
    }
    ,
    {
        name:'MSafe Wallet',
        image:'https://icons-ckg.pages.dev/lz-dark/wallets/msafe.svg',
        url:'https://app.m-safe.io/aptos/v2/'
    }
]

export const OurTeamMember=[
    {
        name:'Jenny Wilson',
        image:'/images/member1.png'
    },
    {
        name:'Lucas Tan',
        image:'/images/lucastan2.png'
    },
    {
        name:'Eleanor Pena',
        image:'/images/member2.png'
    },
    {
        name:'Phong Hoa',
        image:'/images/Phonghoa.png'
    },
    {
        name:'Robert Fox',
        image:'/images/member3.png'
    }
]