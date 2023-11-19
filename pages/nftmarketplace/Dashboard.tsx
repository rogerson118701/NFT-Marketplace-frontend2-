import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SiteMark from '@/components/siteMark';
import Collection from '@/components/nftmarketplace/dashboardcomponents/collection/Collection';
import { ourSiteName } from '@/constant';
import Header from '@/components/nftmarketplace/dashboardcomponents/header/header';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setNavbar } from '@/store/features/NavbarSlice';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import TopCreator from '@/components/nftmarketplace/dashboardcomponents/topcreator/TopCreator';
import DashboardNfts from '@/components/nftmarketplace/dashboardcomponents/dashboard-nfts/Dashboard-nfts';
import Help from '@/components/nftmarketplace/dashboardcomponents/help/Help';
import Navbar from '@/components/nftmarketplace/navbar'

const pages = ['Dashboard','Marketplace', 'Rankings', 'Connect wallet'];

// function Connetwallet() {
//     const { isConnected } = useAccount();
//     const { connect } = useConnect({
//         connector: new InjectedConnector(),
//     })


//     if (isConnected)
//         return (
//             <div>

//                 <Button
//                     color='secondary'
//                     style={{ margin: '5%', marginLeft: '3%', marginBottom: '0', fontSize: 20 }}
//                     variant='contained'
//                     onClick={() => connect()}
//                     sx={{ my: 2, fontWeight: 500, color: 'white', display: 'block' }}
//                 >
//                     <Link href={'/nftmarketplace/create'}>
//                         Create
//                     </Link>
//                 </Button>

//             </div>
//         )
//     return <Button
//         color='secondary'
//         style={{ margin: '5%', marginLeft: '3%', marginBottom: '0', fontSize: 20 }}
//         variant='contained'
//         onClick={() => connect()}
//         sx={{ my: 2, fontWeight: 500, color: 'white', display: 'block' }}
//     >
//         Connect Wallet</Button>
// }

function Dashboard() {
    const router = useRouter();
    const dispatch = useDispatch();
    return (
        <div className='nftmarketplace'>
            <Navbar/>
            <Header />
            <Collection />
            <TopCreator />
            <DashboardNfts />
            <Help />
        </div>
    );
}
export default Dashboard;