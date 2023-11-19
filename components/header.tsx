import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import SiteMark from './siteMark';
import { NavbarTitle,ourSiteName } from '@/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setNavbar } from '@/store/features/NavbarSlice';
import { RootState } from '@/store/store';
const Header:React.FC=()=>{
    const router=useRouter();
    const dispatch=useDispatch();
    const navbarSelect = useSelector((state: RootState) => state.Navbar.selectedNavbar)
    const user=useSelector((state:RootState)=>state.User)
    return(
        <div className="flex flex-col w-full float-top fixed">
        <div className="flex flex-1 p-4 justify-between w-full h-20  bg-gradient-to-b from-[#181A29] to-[rgba(255,0,0,0.0)]">
            <div className="flex flex-1 gap-4 items-center hover:cursor-pointer" onClick={()=>{ dispatch(setNavbar('Dashboard'));router.push('/')}}>
                <SiteMark/>
                <p className="text-3xl text-white font-serif">{ourSiteName}</p>
            </div>
            <div className="flex flex-1 justify-end gap-8 items-center">
                {
                    user.role=='admin'?(
                        <div className="flex flex-1 justify-end gap-8 items-center">
                        {
                            NavbarTitle.map(item=>{
                                return(
                                    <p key={item.label} 
                                    className={navbarSelect==item.label?"text-lg text-[#00ECFB] cursor-pointer":"text-base text-white cursor-pointer"}
                                    onClick={()=>{
                                        dispatch(setNavbar(item.label));
                                        router.push(item.url)
                                    }}>
                                        {item.label}
                                    </p>
                                )
                            })
                    }
                        </div>
                    ):(
                        <div className="flex flex-1 justify-end gap-8 items-center">
                            {
                                NavbarTitle.filter(item=>item.role=='user').map(item=>{
                                    return(
                                        <p key={item.label} 
                                        className={navbarSelect==item.label?"text-lg text-[#00ECFB] cursor-pointer":"text-base text-white cursor-pointer"}
                                        onClick={()=>{
                                            dispatch(setNavbar(item.label));
                                            router.push(item.url)
                                        }}>
                                            {item.label}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    )
                    
                }

            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-800">

        </div>
        </div>
    )
}
export default Header;