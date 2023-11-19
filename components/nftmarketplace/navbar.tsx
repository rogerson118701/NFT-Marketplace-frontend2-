import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import SiteMark from '@/components/siteMark';
import { ourSiteName } from '@/constant';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setNavbar } from '@/store/features/NavbarSlice';

const pages = ['Dashboard','Marketplace', 'Rankings'];

function Navbar(){
    const router=useRouter()
    const dispatch = useDispatch();
    return(
        <Toolbar className='flex justify-between m-10 mt-4'>
                    <div className="flex items-center hover:cursor-pointer" onClick={() => { dispatch(setNavbar('Dashboard')); router.push('/') }}>
                        <SiteMark />
                       
                        <p className=" ml-4 text-3xl text-white font-serif hover:text-light-blue-400">{ourSiteName}</p>
                       
                    </div>

                    <div className='flex justify-around'>
                        {pages.map((page) => (
                            <div
                                key={page}
                                className='m-2'
                                onClick={()=>router.replace(`/nftmarketplace/${page}`)}
                            >
                                <p className=" ml-4 text-xl text-white font-serif hover:text-light-blue-400">{page}</p>
                            </div>
                        ))}
                        <div
                                className='m-2'
                                onClick={()=>router.replace(`/nftmarketplace/ConnectWallet`)}
                            >
                                <p className=" ml-4 text-xl text-white font-serif hover:text-light-blue-400">Connect Wallet</p>
                            </div>
                    </div>
                </Toolbar>
    )

}
export default Navbar;