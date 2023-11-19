import React,{useState,useEffect} from 'react';
import {
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  Switch,
    IconButton,
} from '@material-tailwind/react'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import clsx from 'clsx';
import Image from 'next/image';

const GasDialog:React.FC=()=>{
    const [open, setOpen] = useState(false);
    const [tab,setTab]=useState('medium');
    const [gasfee,setGasFee]=useState(0);
    const [customamoutFlag, setCustomAmountFlag]=useState(false);
    const [addDisable,setAddDisble]=useState(true);
    const [limitfee,setLimitFee]=useState(0.1);
    const transferChain = useSelector((state: RootState) => state.Chain.transferChain);
   useEffect(()=>{
    if(transferChain?.chainname)
        setAddDisble(false);

   },[transferChain])

    
    const customAmountClick=()=>{
        setCustomAmountFlag(!customamoutFlag);
        if(!customamoutFlag)
            setTab('custom')
        else
            setTab('medium')
    }
    

    const handleOpen = () =>{
        if(!addDisable)
            setOpen((cur) => !cur);
    } 
    return(
        <div>
            <Typography variant="small" color={addDisable?"gray":"light-blue"} onClick={handleOpen} className="hover:cursor-pointer">{'Add'}</Typography>
            <Dialog className="bg-[#230B33] rounded-none" size="xs" open={open} handler={handleOpen}>
            <DialogHeader>
                    <div className="flex flex-col w-full gap-5">
                        <div className="flex flex-1 justify-between items-center">
                            <div>
                                <Typography variant="h5" color="white">
                                    Get Ready for your destination
                                </Typography>
                            </div>
                            <div>
                                <IconButton
                                    color="gray"
                                    size="sm"
                                    variant="text"
                                    onClick={handleOpen}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 34 34" fill="none">
                                        <path d="M1 1L33 33" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M33 1L1 33" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>
                                </IconButton>
                            </div>
                        </div>
                       
                    </div>

                </DialogHeader>
                <DialogBody className="dialog-content overflow-auto h-[500px]">
                    <div className="flex flex-wrap">
                        <p className="text-gray-400 text-sm">Choose the amount of</p>
                        <Typography className="mx-1" variant="small" color="light-blue">{transferChain?.nativeunit}</Typography>
                        <p className="text-gray-400 text-sm">you want to swap.</p>
                        <p className="text-gray-400 text-sm">The total amount you will pay in your wallet includes the gas you will be airdropping to your destination.</p>
                        
                    </div>
                    <div className="grid grid-cols-3 my-6">
                        <div className={clsx("flex-auto text-center text-xs text-white p-2 hover:cursor-pointer",tab=='none'?"bg-[#1164A0]":"bg-[#421851] hover:bg-[#50075C]")} 
                            onClick={()=>{
                                setTab('none');
                                if(customamoutFlag)
                                    setCustomAmountFlag(false);
                                }}>NONE</div>
                        <div className={clsx("flex-auto text-center text-xs text-white p-2 hover:cursor-pointer",tab=='medium'?"bg-[#1164A0]":"bg-[#421851] hover:bg-[#50075C]")} 
                            onClick={()=>{
                                setTab('medium');
                                if(customamoutFlag)
                                    setCustomAmountFlag(false);
                                }}>MEDIUM</div>
                        <div className={clsx("flex-auto text-center text-xs text-white p-2 hover:cursor-pointer",tab=='max'?"bg-[#1164A0]":"bg-[#421851] hover:bg-[#50075C]")} 
                                onClick={()=>{
                                    setTab('max');
                                    if(customamoutFlag)
                                    setCustomAmountFlag(false);
                                    }}>MAX</div>
                       
                    </div>
                    <div className="flex flex-1 items-center justify-between mr-3">
                         <p className="text-gray-400 text-sm">Custom amount</p>
                        <Switch className="bg-transparent border-[1px] border-gray-800" color="light-blue" crossOrigin="anonymous" checked={customamoutFlag} 
                        onClick={customAmountClick} />
                    </div>
                    <div className="flex flex-1 justify-between border-[1px] border-gray-700 rounded-none p-1 mt-5">
                        <div className="flex flex-1 items-center">
                            <Image src={transferChain?.image} alt={transferChain?.native} width={25} height={25}/>
                            <div className="ml-4">
                                <input className={clsx("appearance-none outline-none text-sm bg-[rgba(255,255,255,0.0)]  p-1 border-transparent", Number(gasfee) > 0 ? "text-white" : "text-gray-700")}
                                    type="number"
                                    value={gasfee} onChange={(e:any) => setGasFee(e.target.value)} />
                            </div>
                        </div>
                        <div className="bg-[#421851] text-center text-xs text-gray-500 p-2 hover:cursor-pointer hover:bg-[#50075C]"
                        onClick={()=>{
                            setTab('max');
                            if(customamoutFlag)
                            setCustomAmountFlag(false);
                        }}
                        >MAX</div>
                    </div>
                    <div className="flex flex-1 justify-end mt-4">
                        {gasfee>limitfee&&(
                            <Typography variant="small" color="red">
                                Requested airdrop exceeds max: 0.1 ETH
                            </Typography>

                    )}</div>
                </DialogBody>
                <DialogFooter>
                    <div className="flex flex-1 justify-between">
                        <p className="text-gray-400 text-sm">Cost</p>
                        <p className="text-gray-400 text-sm">0.06757BNB</p>
                    </div>
                </DialogFooter>
            </Dialog>
        </div>
    )
}
export default GasDialog;