import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import {Button} from "@material-tailwind/react"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import clsx from 'clsx';
import ConnectWallet from '@/components/connectWallet';
import TokenSelectDialog from '@/components/tokenSelectDialog';
import TransferTokenSelectDialog from '@/components/transferTokenSelectDialog';
import NetworkSelectDialog from '@/components/networkSelectDialog';
import GasDialog from '@/components/gasDialog';
import { setWallet } from '@/store/features/WalletSlice';
import { Networks, NetworkType } from '@/constant';
import { setOriginToken, setTransferToken, setOriginChain, setTransferChain } from '@/store/features/ChainSlice';


const Bridge: React.FC = () => {
    const dispatch = useDispatch();
    const wallet = useSelector((state: RootState) => state.Wallet)
    const originChain = useSelector((state: RootState) => state.Chain.originChain)
    const originToken = useSelector((state: RootState) => state.Chain.originToken)
    const transferToken = useSelector((state: RootState) => state.Chain.transferToken)
    const [transferAmount, setTransferAmount] = useState(0);
    const [moneyType, setMoneyType] = useState('USD');

    useEffect(() => {
        if (originToken.chainname || transferToken.chainname) {
            dispatch(setTransferChain(Networks.find((network: NetworkType) => network.chainname == transferToken.chainname)));
            dispatch(setOriginChain(Networks.find((network: NetworkType) => network.chainname == originToken.chainname)));
        }

    }, [dispatch, originToken, transferToken])
    const disconnectClick = () => {
        dispatch(setWallet({
            name: '',
            publicKey: null,
            image: ''
        }))
    }
    const replaceClick = () => {
        if (originToken.chainname || transferToken.chainname) {
            const ramToken = originToken;
            dispatch(setOriginToken(transferToken))
            dispatch(setTransferToken(ramToken))
        }
    }

    return (
        <div className="bg-[#230B33]  flex min-h-screen flex-col justify-center items-center">
            <div className="flex flex-col mt-[50px] w-[423px]">
                {
                    wallet?.publicKey ? (
                        <div className="flex flex-1 justify-between items-center">
                            <div className="flex flex-1 gap-2">
                                <Image src={wallet.image} width={20} height={20} alt='walletimage' />
                                <Typography variant="small" color="gray">{wallet.publicKey.slice(0, 5) + "..." + wallet.publicKey.slice(-5)}</Typography>
                            </div>

                            <div className="hover:cursor-pointer" onClick={disconnectClick} >
                                <Typography variant="paragraph" color="gray">Disconnect</Typography>
                            </div>
                        </div>
                    ) : (
                        <ConnectWallet dialogType='string' />
                    )
                }
                <div className="flex flex-col border-[1px] p-1 border-gray-700 w-[423px]">
                    <div className="flex flex-1 gap-1 h-[69px]">
                        <TokenSelectDialog />
                        <div className="ml-[1px] flex flex-col bg-[#421851] w-[171px] justify-center items-center">
                            <Typography variant="small" color="gray">Network</Typography>
                            <Typography variant="paragraph" color="gray">{originChain?.chainname ? `${originChain.chainname}` : `Select`}</Typography>
                        </div>

                    </div>
                    <div className="flex flex-1 justify-between items-center m-4 bg-[rgba(255,255,255,0.0)] h-[66px]">
                        <div className="flex flex-1 items-center">
                            <div className="w-[48px] h-[26px] rounded-1 bg-[#3D1D42] text-center text-[#938989] cursor-pointer hover:bg-[#421851]">max</div>
                            <div className="ml-4">
                                <input className={clsx("outline-none text-xl bg-[rgba(255,255,255,0.0)]  p-1 border-transparent", Number(transferAmount) > 0 ? "text-white" : "text-gray-700")}
                                    type="number"
                                    value={transferAmount} onChange={(e:any) => setTransferAmount(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <Typography variant="small" color="teal">Balance</Typography>
                            <div className="flex flex-1 justify-end">
                                <Typography variant="small" color="gray">0.000</Typography>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
            <div className="flex my-10 items-center hover:scale-110 hover:cursor-pointer" onClick={replaceClick}>
                <Image src="/images/transfer.svg" alt="transfersvg" width={35} height={29} />
            </div>
            <div className="flex flex-col w-[423px]">
                {
                    wallet?.publicKey ? (
                        <div className="flex flex-1 justify-between items-center">
                            <div className="flex flex-1 gap-2">
                                <Image src={wallet.image} width={20} height={20} alt='walletimage' />
                                <Typography variant="small" color="gray">{wallet.publicKey.slice(0, 5) + "..." + wallet.publicKey.slice(-5)}</Typography>
                            </div>

                            <div className="hover:cursor-pointer" onClick={disconnectClick}>
                                <Typography variant="paragraph" color="gray">Disconnect</Typography>
                            </div>
                        </div>
                    ) : (
                        <ConnectWallet dialogType='string' />
                    )
                }
                <div className="flex flex-col border-[1px] p-1 border-gray-700 w-[423px]">
                    <div className="flex flex-1 gap-1 h-[69px]">
                        <TransferTokenSelectDialog />
                        <NetworkSelectDialog />
                    </div>
                    <div className="flex flex-1 justify-between items-center m-4 bg-[rgba(255,255,255,0.0)] h-[66px]">
                        <div className="flex flex-1 text-white items-center">
                            ---
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-1 gap-3">
                                <div className={clsx("text-sm cursor-pointer", moneyType == 'USD' ? "text-white" : "text-gray-600")} onClick={() => setMoneyType('USD')}>USD</div>
                                <div className={clsx("text-sm cursor-pointer", moneyType == 'EUR' ? "text-white" : "text-gray-600")} onClick={() => setMoneyType('EUR')}>EUR</div>
                            </div>
                            <div className="flex flex-1 justify-end">
                                <Typography variant="small" color="gray">0.000</Typography>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-1 justify-between mt-4">
                    <p className="text-gray-500 text-sm">Gas on destination</p>
                    <GasDialog/>
                </div>
                <div className="flex flex-1 justify-between mt-2">
                    <p className="text-gray-500 text-sm">fee</p>
                    <p className="text-gray-500 text-sm">- -</p>
                </div>
                <div className="flex flex-1 justify-center mt-5 w-full">
                    <Button variant="gradient"  color="pink" className="w-full  rounded-none">CONNECT</Button>
                </div>
                
            </div>
            <div className="absolute top-[100px] right-10">
                {
                    wallet.publicKey?(
                        <div className="flex flex-1 gap-4 items-center w-[200px] h-[40px] border-pink-300 border-[1px] rounded-full">
                            <Image className="ml-5"  src={wallet.image} alt={wallet.name} width={25} height={25}/>
                            <p className="text-gray-500 text-sm">{wallet.publicKey.slice(0, 5) + "..." + wallet.publicKey.slice(-5)}</p>

                        </div>
                    ):(
                        <div>
                            <ConnectWallet dialogType='button'/>
                        </div>
                    )
                }
                  
            </div>
            <div className="absolute bottom-[20px] left-10">
                <div className="flex flex-col gap-3">
                    <p className="text-gray-500 text-sm">Supported Chains:</p>
                    <div className="flex flex-1 gap-2">
                        {
                            Networks.map(network=>{
                                return(
                                    <Image key={network.chainname}
                                    src={network.image}
                                    width={20}
                                    height={20}
                                    alt={network.chainname}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Bridge;