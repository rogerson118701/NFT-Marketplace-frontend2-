import React, { useState,useEffect } from 'react';
import {
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    List,
    ListItem,
    IconButton,
} from '@material-tailwind/react'
import Image from 'next/image';
import { useDispatch,useSelector } from 'react-redux';
import { Networks,NetworkType } from '@/constant';
import { RootState } from '@/store/store';
import { setTransferChain } from '@/store/features/ChainSlice';
const NetworkSelectDialog: React.FC = () => {
const dispatch=useDispatch();
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResult,setSearchResult]=useState<NetworkType[]>([])
    const transferChain = useSelector((state: RootState) => state.Chain.transferChain)
    const originChain = useSelector((state: RootState) => state.Chain.originChain)
    useEffect(()=>{
        const regex = new RegExp(searchText, 'i'); 
        const results: NetworkType[] = [];
        for (const network of Networks) {
          if (regex.test(network.chainname)) {
            results.push(network);
          }
        }
        setSearchResult(results);
    },[searchText])

    const handleOpen = () => setOpen((cur) => !cur);

    const listitemClick=(network:NetworkType)=>{
       dispatch(setTransferChain(network));
        setOpen(false);
    }

    return (
        <div>
            <div className="ml-[1px] flex flex-col bg-[#421851] w-[152px] justify-center items-center hover:cursor-pointer hover:bg-[#50075C]" onClick={handleOpen}>
                            <Typography variant="small" color="gray">Network</Typography>
                            <div className="flex flex-1 gap-2">
                            <Typography variant="paragraph" color="white">{transferChain?.chainname?`${transferChain.chainname}`:`Select`}</Typography>
                            <Image src="/blockchains/chevron-down.svg" width={24} height={24} alt="arraw"/>
                            </div>
                            
            </div>
            <Dialog className="bg-[#230B33] rounded-none" size="xs" open={open} handler={handleOpen}>
                <DialogHeader>
                    <div className="flex flex-col w-full gap-5">
                        <div className="flex flex-1 justify-between items-center">
                            <div>
                                <Typography variant="h5" color="white">
                                    Network
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
                        <div className="flex flex-1 items-center bg-transparent border-[1px] border-gray-800 p-2">
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                                <circle cx="7.5" cy="7.5" r="6" color='#464646' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                </circle><path d="M12 12L15 15" color='#464646' stroke="currentColor" strokeLinejoin="round"></path>
                            </svg>
                            <input className="bg-transparent outline-none text-base text-gray-300 ml-5 placeholder-gray-800"
                                placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} autoFocus />
                        </div>
                    </div>

                </DialogHeader>
                <DialogBody className="dialog-content overflow-auto h-[500px]">
                    <List className="-ml-[16px] -mr-[16px]  rounded-none">
                        {
                            searchResult.map((network,index)=>{
                                return(
                                    <ListItem key={index} className="hover:bg-[#3d3d3d] focus:bg-[#421851] h-[55px] rounded-none"
                                     onClick={()=>listitemClick(network)} disabled={network.chainname==originChain?.chainname} >
                                        <div className="flex flex-1 items-center">
                                            <div className="flex flex-1 gap-4 items-center">
                                                <Image src={network.image} alt={network.chainname} width={35} height={35}/>
                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="gray">{network.chainname}</Typography>
                                                    <Typography variant="paragraph" color="white">{network.native}</Typography>
                                                </div>
                                            </div>
                                          
                                        </div>
                                    </ListItem>
                                )
                            })
                        }
                    </List>

                </DialogBody>
            </Dialog>
        </div>
    )
}
export default NetworkSelectDialog;