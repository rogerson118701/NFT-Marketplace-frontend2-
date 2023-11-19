import React, { useState } from 'react';
import {
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    MenuItem,
    IconButton,
} from '@material-tailwind/react'
import clsx from 'clsx';
import { Wallet, AptosWallet } from '@/constant';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setWallet } from '@/store/features/WalletSlice';
import { RootState } from '@/store/store';

interface Props{
    dialogType:string
}
const ConnectWallet: React.FC<Props> = ({dialogType}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [walletTab, setWalletTab] = useState(0);
    const [walletRam, setWalletRam] = useState<any>({
        name: '',
        publicKey: null,
        image: ''
    });
    const usableTypes = useSelector((state: RootState) => state.Wallet.usableTypes)
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        if (walletRam.publicKey) {
            dispatch(setWallet({
                name: walletRam.name,
                publicKey: walletRam.publicKey,
                image: walletRam.image
            }))
        }
        setOpen(false)
    };

    const walletClick = (item: any) => {

        if (usableTypes.filter(type => type == item.name).length > 0) {
            setWalletRam(
                {
                    name: item.name,
                    publicKey: '0xBb75DBd11F6878DeC6FA43fB6728E71DBBC600Df',
                    image: item.image
                }
            )

        } else {
            window.open(item.url, '_blank');

        }
    }
    return (
        <div>
            {
                dialogType=='string'?
                <div className="flex flex-1 justify-end hover:cursor-pointer" onClick={handleOpen}>
                <Typography variant="paragraph" color="gray">Connect</Typography>
            </div>:<div>
            <Button variant="gradient" color="pink" className="w-[200px] h-[40px]  rounded-full"
            onClick={handleOpen}>
               CONNECT WALLETS
            </Button>
            </div>
            }
           
            <Dialog className="bg-[#230B33] rounded-none" size="xs" open={open} handler={handleClose}>
                <DialogHeader className="justify-between">
                    <Typography variant="h5" color="white">
                        Connect a Wallet
                    </Typography>
                    <IconButton
                        color="gray"
                        size="sm"
                        variant="text"
                        onClick={handleClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 34 34" fill="none">
                            <path d="M1 1L33 33" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M33 1L1 33" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </IconButton>
                </DialogHeader>
                <DialogBody className="dialog-content overflow-auto p-4 h-[600px]">
                    <div className="flex flex-1 gap-8">
                        <div className="flex flex-col gap-2 hover:cursor-pointer" onClick={() => setWalletTab(0)}>
                            <div className={clsx("text-base", walletTab == 0 ? "text-white" : "text-gray-500")}>Wallet</div>
                            <div className={clsx("w-[50px] h-[2px]", walletTab == 0 ? "bg-white" : "bg-transparent")} />
                        </div>
                        <div className="flex flex-col gap-2 hover:cursor-pointer" onClick={() => setWalletTab(1)}>
                            <div className={clsx("text-base", walletTab == 1 ? "text-white" : "text-gray-500")}>Unclaimed</div>
                            <div className={clsx("w-[75px] h-[2px]", walletTab == 1 ? "bg-white" : "bg-transparent")} />
                        </div>
                        <div className="flex flex-col gap-2 hover:cursor-pointer" onClick={() => setWalletTab(2)}>
                            <div className={clsx("text-base", walletTab == 2 ? "text-white" : "text-gray-500")}>Transactions</div>
                            <div className={clsx("w-[90px] h-[2px]", walletTab == 2 ? "bg-white" : "bg-transparent")} />
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-700 " />
                    {
                        walletTab == 0 && (<div>
                            <div className="flex flex-1  justify-between items-center mt-8">
                                <div className="flex flex-1 gap-3 items-center ">
                                    <Typography variant="small" color="white">EVM</Typography>
                                    <div className={clsx("w-[12px] h-[12px] rounded-full ",
                                        walletRam.publicKey && Wallet.filter(item => item.name == walletRam.name).length > 0 ? "bg-gradient-radial from-[#00C5F0] via-[rgba(30,172,165,0.3)] to-[rgba(0,255,0,0.0)]" : "bg-transparent  border-[1px] border-gray-600")} />

                                </div>
                                {
                                    walletRam.publicKey && Wallet.filter(item => item.name == walletRam.name).length > 0 && (
                                        <Typography className="hover:cursor-pointer" variant="small" color="gray"
                                            onClick={() => setWalletRam({ name: '', publicKey: null, image: '' })}>
                                            Disconnect
                                        </Typography>)
                                }
                            </div>

                            <ul className="flex flex-col gap-1 mt-4">
                                {
                                    Wallet.map(item => {
                                        return (
                                            <MenuItem key={item.name}
                                                className={clsx("flex border-[1px] focus:bg-transparent active:bg-transparent items-center gap-3 hover:bg-gray-900 rounded-none",
                                                    walletRam.name == item.name ? "bg-transparent border-purple-400 shadow-md" : "bg-transparent border-gray-900")}
                                                onClick={() => walletClick(item)}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={20}
                                                    height={20}

                                                />
                                                <Typography color={walletRam.name == item.name ? "white" : "gray"} variant="paragraph">
                                                    {walletRam.name == item.name ? "Connected with " + item.name : usableTypes.filter(type => type == item.name).length > 0 ? "Connect " + item.name : "Get " + item.name}
                                                </Typography>
                                            </MenuItem>
                                        )
                                    })
                                }
                            </ul>

                            <div className="flex flex-1  justify-between items-center mt-8">
                                <div className="flex flex-1 gap-3 items-center ">
                                    <Typography variant="small" color="white">APTOS</Typography>
                                    <div className={clsx("w-[12px] h-[12px] rounded-full ",
                                        walletRam.publicKey && AptosWallet.filter(item => item.name == walletRam.name).length > 0 ? "bg-gradient-radial from-[#00C5F0] via-[rgba(30,172,165,0.3)] to-[rgba(0,255,0,0.0)]" : "bg-transparent  border-[1px] border-gray-600")} />

                                </div>
                                {
                                    walletRam.publicKey && AptosWallet.filter(item => item.name == walletRam.name).length > 0 && (
                                        <Typography className="hover:cursor-pointer" variant="small" color="gray"
                                            onClick={() => setWalletRam({ name: '', publicKey: null, image: '' })}>
                                            Disconnect
                                        </Typography>)
                                }
                            </div>



                            <ul className="flex flex-col gap-1 mt-4">
                                {
                                    AptosWallet.map(item => {
                                        return (
                                            <MenuItem key={item.name}
                                                className={clsx("flex border-[1px] focus:bg-transparent active:bg-transparent items-center gap-3 hover:bg-gray-900 rounded-none",
                                                    walletRam.name == item.name ? "bg-transparent border-purple-400 shadow-md" : "bg-transparent border-gray-900")}
                                                onClick={() => walletClick(item)}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={20}
                                                    height={20}

                                                />
                                                <Typography color={walletRam.name == item.name ? "white" : "gray"} variant="paragraph">
                                                    {walletRam.name == item.name ? "Connected with " + item.name : usableTypes.filter(type => type == item.name).length > 0 ? "Connect " + item.name : "Get " + item.name}
                                                </Typography>
                                            </MenuItem>
                                        )
                                    })
                                }
                            </ul>

                        </div>)
                    }

                </DialogBody>

            </Dialog>
        </div>
    )
}
export default ConnectWallet;