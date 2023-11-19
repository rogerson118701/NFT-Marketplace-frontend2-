import React, { useState } from 'react';
import SiteMark from './siteMark';
import { ourSiteName } from '@/constant';
import { Typography } from '@material-tailwind/react';
import { NavbarTitle } from '@/constant';
import Link from 'next/link'
import { Textarea } from "@material-tailwind/react";
import moment from 'moment';
import { useDispatch,useSelector} from 'react-redux';
import { setNavbar } from '@/store/features/NavbarSlice';
import { RootState } from '@/store/store';

const Footer: React.FC = () => {
    const dispatch=useDispatch();
    const [sendUs, setSentUs] = useState('');
    const user=useSelector((state:RootState)=>state.User)
    return (
        <div className="w-full flex flex-col p-20 bg-[#181A29]">
            <div className="flex lg:flex-1 flex-wrap">
                <div className="lg:w-1/3 w-full flex flex-col">
                    <div className="flex flex-1 gap-4 items-center">
                        <div className="scale-70">
                            <SiteMark />
                        </div>
                        <p className="text-xl text-[#0D99FF] font-serif">{ourSiteName}</p>
                    </div>
                    <div className="my-8">
                        <Typography variant="paragraph" color="white">
                            {
                                ` Welcome to ${ourSiteName}, where brilliance meets innovation! 
                                We are a leading company dedicated to delivering exceptional products and services to cater to your needs.
                                       `
                            }
                        </Typography>
                    </div>
                    <div className="flex flex-1 gap-4">
                        <div className="cursor-pointer" onClick={() => window.location.href = 'https://www.facebook.com'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" rx="12" fill="#1877F2" />
                                <path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80078 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.34922 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z" fill="white" />
                            </svg>
                        </div>
                        <div className="cursor-pointer" onClick={() => window.location.href = 'https://www.twitter.com'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.057 7.18078C21.0663 7.39198 21.0663 7.59358 21.0663 7.80478C21.0756 14.208 16.3711 21.6 7.76784 21.6C5.23039 21.6 2.73924 20.8416 0.600006 19.4208C0.970437 19.4688 1.34087 19.488 1.7113 19.488C3.81349 19.488 5.86012 18.7584 7.5178 17.4048C5.51747 17.3664 3.75793 16.0128 3.14672 14.0352C3.85053 14.1792 4.57287 14.1504 5.25817 13.9488C3.08189 13.5072 1.51682 11.52 1.50756 9.20639C1.50756 9.18719 1.50756 9.16799 1.50756 9.14879C2.15581 9.52319 2.88741 9.73439 3.62828 9.75359C1.58165 8.33278 0.942654 5.50077 2.1836 3.28317C4.56361 6.31678 8.06418 8.15038 11.8241 8.35198C11.4444 6.67198 11.963 4.90557 13.1761 3.71517C15.0561 1.88156 18.0195 1.97756 19.7976 3.92637C20.844 3.71517 21.8535 3.31197 22.7703 2.74556C22.4184 3.86877 21.6868 4.81917 20.7144 5.42397C21.6405 5.30877 22.548 5.04957 23.4 4.66557C22.7703 5.64477 21.9738 6.48958 21.057 7.18078Z" fill="#1D9BF0" />
                            </svg>
                        </div>
                        <div className="cursor-pointer" onClick={() => window.location.href = 'https://www.instagram.com'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M23.9328 7.05204C23.8752 5.77422 23.6687 4.89992 23.3759 4.13611C23.0686 3.34828 22.6605 2.67574 21.9932 2.01281C21.3259 1.34988 20.6585 0.931946 19.8712 0.629304C19.1078 0.331465 18.234 0.129704 16.957 0.0720576C15.6751 0.0144115 15.2671 0 12.012 0C8.75215 0 8.34407 0.0144115 7.06701 0.0720576C5.78996 0.129704 4.91618 0.336269 4.15283 0.629304C3.36067 0.93675 2.68854 1.34508 2.02601 2.01281C1.36347 2.68054 0.945791 3.34828 0.64333 4.13611C0.350471 4.89992 0.14403 5.77422 0.0864187 7.05204C0.0288072 8.33467 0.0144043 8.743 0.0144043 12C0.0144043 15.2618 0.0288072 15.6701 0.0864187 16.948C0.14403 18.2258 0.350471 19.1001 0.64333 19.8639C0.950592 20.6517 1.35867 21.3243 2.02601 21.9872C2.68854 22.6549 3.36067 23.0681 4.14803 23.3707C4.91138 23.6685 5.78516 23.8703 7.06221 23.9279C8.34407 23.9856 8.75215 24 12.0072 24C15.2671 24 15.6751 23.9856 16.9522 23.9279C18.2292 23.8703 19.103 23.6637 19.8664 23.3707C20.6537 23.0633 21.3259 22.6549 21.9884 21.9872C22.6509 21.3195 23.0686 20.6517 23.3711 19.8639C23.6687 19.1001 23.8704 18.2258 23.928 16.948C23.9856 15.6653 24 15.257 24 12C24 8.743 23.9904 8.32986 23.9328 7.05204ZM21.7772 16.8519C21.7243 18.024 21.5275 18.6629 21.3643 19.0809C21.1482 19.6381 20.8842 20.0416 20.4617 20.4644C20.0392 20.8871 19.6407 21.1417 19.079 21.3675C18.6565 21.5308 18.018 21.7278 16.8514 21.7806C15.5887 21.8383 15.2094 21.8527 12.0024 21.8527C8.79536 21.8527 8.41608 21.8383 7.15343 21.7806C5.982 21.7278 5.34347 21.5308 4.92579 21.3675C4.36888 21.1513 3.96559 20.8871 3.54311 20.4644C3.12063 20.0416 2.86617 19.6429 2.64053 19.0809C2.4773 18.6581 2.28046 18.0192 2.22765 16.8519C2.17004 15.5885 2.15563 15.209 2.15563 12C2.15563 8.79103 2.17004 8.41153 2.22765 7.14812C2.28046 5.97598 2.4773 5.33707 2.64053 4.91914C2.85657 4.36189 3.12063 3.95837 3.54311 3.53563C3.96559 3.11289 4.36407 2.85829 4.92579 2.63251C5.34827 2.46918 5.9868 2.27222 7.15343 2.21938C8.41608 2.16173 8.79536 2.14732 12.0024 2.14732C15.2094 2.14732 15.5887 2.16173 16.8514 2.21938C18.0228 2.27222 18.6613 2.46918 19.079 2.63251C19.6359 2.84868 20.0392 3.11289 20.4617 3.53563C20.8842 3.95837 21.1386 4.35709 21.3643 4.91914C21.5275 5.34187 21.7243 5.98079 21.7772 7.14812C21.8348 8.41153 21.8492 8.79103 21.8492 12C21.8492 15.209 21.83 15.5885 21.7772 16.8519Z" fill="url(#paint0_linear_38_116)" />
                                <path d="M12.0024 5.83191C8.59376 5.83191 5.83801 8.59412 5.83801 12C5.83801 15.4108 8.59856 18.1682 12.0024 18.1682C15.4063 18.1682 18.1669 15.4012 18.1669 12C18.1669 8.58931 15.4111 5.83191 12.0024 5.83191ZM12.0024 16.0016C9.794 16.0016 8.00325 14.2098 8.00325 12C8.00325 9.79028 9.794 7.99844 12.0024 7.99844C14.2109 7.99844 16.0016 9.79028 16.0016 12C16.0016 14.2098 14.2109 16.0016 12.0024 16.0016Z" fill="url(#paint1_linear_38_116)" />
                                <path d="M18.4069 7.03282C19.2024 7.03282 19.8472 6.38759 19.8472 5.59167C19.8472 4.79574 19.2024 4.15051 18.4069 4.15051C17.6115 4.15051 16.9666 4.79574 16.9666 5.59167C16.9666 6.38759 17.6115 7.03282 18.4069 7.03282Z" fill="#BC30A0" />
                                <defs>
                                    <linearGradient id="paint0_linear_38_116" x1="20.2955" y1="1.8352" x2="2.93304" y2="23.1076" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#AE3DAE" />
                                        <stop offset="0.0468721" stopColor="#B23BA6" />
                                        <stop offset="0.1216" stopColor="#BD368E" />
                                        <stop offset="0.2148" stopColor="#CE2E69" />
                                        <stop offset="0.3216" stopColor="#E62335" />
                                        <stop offset="0.418" stopColor="#FF1800" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_38_116" x1="14.9423" y1="7.0529" x2="8.63493" y2="17.6514" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#E12F6A" />
                                        <stop offset="0.1705" stopColor="#EA3751" />
                                        <stop offset="0.3563" stopColor="#F13D3E" />
                                        <stop offset="0.5467" stopColor="#F64133" />
                                        <stop offset="0.7469" stopColor="#F7422F" />
                                        <stop offset="0.7946" stopColor="#F74C2F" />
                                        <stop offset="0.8743" stopColor="#F7652F" />
                                        <stop offset="0.9757" stopColor="#F78F2E" />
                                        <stop offset="1" stopColor="#F79A2E" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="rounded-full w-6 h-6 bg-[#0A66C2] p-1 cursor-pointer" onClick={() => window.location.href = 'https://www.linkedin.com'}>


                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clipPath="url(#clip0_38_94)">
                                    <path d="M0 1.86765C0 1.41719 0.157662 1.04557 0.472973 0.752788C0.788284 0.459991 1.1982 0.313599 1.7027 0.313599C2.1982 0.313599 2.59909 0.457734 2.90541 0.746031C3.22072 1.04333 3.37838 1.43071 3.37838 1.90819C3.37838 2.34063 3.22523 2.70098 2.91892 2.98927C2.60361 3.28657 2.18919 3.43522 1.67568 3.43522H1.66216C1.16666 3.43522 0.76577 3.28657 0.459459 2.98927C0.153149 2.69198 0 2.3181 0 1.86765ZM0.175676 13.692V4.66495H3.17568V13.692H0.175676ZM4.83784 13.692H7.83784V8.65144C7.83784 8.33611 7.87388 8.09287 7.94595 7.92171C8.07207 7.6154 8.26351 7.35638 8.52027 7.14468C8.77703 6.93296 9.09909 6.82711 9.48649 6.82711C10.4955 6.82711 11 7.50729 11 8.86765V13.692H14V8.5163C14 7.18296 13.6847 6.17171 13.0541 5.48252C12.4234 4.79333 11.5901 4.44873 10.5541 4.44873C9.39189 4.44873 8.48649 4.94873 7.83784 5.94873V5.97576H7.82432L7.83784 5.94873V4.66495H4.83784C4.85585 4.95323 4.86486 5.84963 4.86486 7.35414C4.86486 8.85864 4.85585 10.9712 4.83784 13.692Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_38_94">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>

                    </div>
                </div>
                <div className="lg:w-1/3 w-full ">
                    <div className=" ml-20 felx felx-1">
                        <div className="mb-4">
                            <Typography variant="lead" color="white">Pages</Typography>
                        </div>
                        <div>
                            {
                                user.role=='admin'?(NavbarTitle.map(item => {
                                    return (
                                        <div key={item.label} className="text-gray-500 hover:text-green-300">
                                            <Link onClick={()=> dispatch(setNavbar(item.label))} href={item.url} >{item.label}</Link>
                                        </div>
                                    )
                                })):(
                                    NavbarTitle.filter(item=>item.role=='user').map(item => {
                                        return (
                                            <div key={item.label} className="text-gray-500 hover:text-green-300">
                                                <Link onClick={()=> dispatch(setNavbar(item.label))} href={item.url} >{item.label}</Link>
                                            </div>
                                        )
                                    })

                                )
                                
                            }
                        </div>
                    </div>

                </div>
                <div className="lg:w-1/3 w-full">
                    <div className="grid grid-cols-6" >
                        <div className="flex flex-col col-span-5">
                          
                            <Textarea className="h-28 p-4 bg-[#4F056236] text-white text-xl border-[#0A7ACC]" label='Please leave your opinion' color="blue" value={sendUs} onChange={(e) => setSentUs(e.target.value)} />
                        </div>

                        <div className="w-20 h-7 mb-2 place-self-end  cursor-pointer text-center text-gray-400  bg-gradient-to-r from-[#633A72] to-[rgba(217, 217, 217, 0.00)]"
                            onClick={() => setSentUs('')}>
                            Send
                        </div>

                    </div>

                </div>
            </div>
            <div className="flex flex-1 justify-center mt-10">
                <div className="w-[1000px] h-[2px] bg-gray-800">

                </div>
            </div>
            <div className="flex flex-1 justify-center items-center mt-2">
                <div className="scale-150 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M5.5 10.125C7.77817 10.125 9.625 8.27817 9.625 6C9.625 3.72183 7.77817 1.875 5.5 1.875C3.22183 1.875 1.375 3.72183 1.375 6C1.375 8.27817 3.22183 10.125 5.5 10.125Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.87504 7.03128C6.65856 7.3198 6.35679 7.5329 6.01248 7.6404C5.66817 7.7479 5.29876 7.74435 4.95657 7.63025C4.61439 7.51616 4.31677 7.29729 4.10588 7.00466C3.89498 6.71204 3.7815 6.36047 3.78149 5.99977C3.78149 5.63906 3.89497 5.2875 4.10586 4.99486C4.31676 4.70223 4.61437 4.48337 4.95655 4.36926C5.29874 4.25516 5.66814 4.25161 6.01246 4.3591C6.35678 4.4666 6.65854 4.6797 6.87503 4.96822" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <Typography variant="paragraph" color="white">{`${moment(Date.now()).format('YYYY')} ${ourSiteName} Inc. All rights reserved`}</Typography>
            </div>
        </div>
    )
}
export default Footer;