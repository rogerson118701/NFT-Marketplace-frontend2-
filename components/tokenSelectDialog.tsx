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
import { Tokens,TokensType,Networks,NetworkType } from '@/constant';
import { RootState } from '@/store/store';
import { setOriginChain, setOriginToken } from '@/store/features/ChainSlice';


const TokenSelectDialog: React.FC = () => {
const dispatch=useDispatch();
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResult,setSearchResult]=useState<TokensType[]>([])
    const originToken = useSelector((state: RootState) => state.Chain.originToken)
    const transferChain = useSelector((state: RootState) => state.Chain.transferChain)
    useEffect(()=>{
        const restTokens=Tokens.filter((token:TokensType)=>token.chainname!==transferChain?.chainname)
        const regex = new RegExp(searchText, 'i'); 
        const results: TokensType[] = [];
        for (const token of restTokens) {
          if (regex.test(token.unit)) {
            results.push(token);
          }
        }
        setSearchResult(results);
    },[searchText,transferChain])

    const handleOpen = () => setOpen((cur) => !cur);

    const listitemClick=(token:TokensType)=>{
       dispatch(setOriginToken(token));
       dispatch(setOriginChain(Networks.find((network:NetworkType)=>network.chainname==token.chainname)));
        
        setOpen(false);
    }

    return (
        <div>
            <div className="flex flex-1 bg-[#421851] w-[256px] gap-2 items-center hover:cursor-pointer hover:bg-[#50075C]" onClick={handleOpen}>

                {
                    originToken?.chainname ? (
                        <Image className="mx-4  rounded-full" src={originToken.image} width={40} height={40} alt="chainname" />

                    ) : (
                        <div className="mx-4 border-[1px] border-gray-700 rounded-full w-[40px] h-[40px]">

                        </div>
                    )
                }
                <div className="flex flex-col">
                    <Typography variant="small" color="gray">Token</Typography>
                    <div className="flex flex-1 gap-1 items-center">
                        <Typography variant="paragraph" color="white">{originToken?.chainname ? `${originToken.unit}` : `Select`}</Typography>
                        <Image src="/blockchains/chevron-down.svg" width={24} height={24} alt="arraw" />
                    </div>
                </div>

            </div>
            <Dialog className="bg-[#230B33] rounded-none" size="xs" open={open} handler={handleOpen}>
                <DialogHeader>
                    <div className="flex flex-col w-full gap-5">
                        <div className="flex flex-1 justify-between items-center">
                            <div>
                                <Typography variant="h5" color="white">
                                    Token
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
                <DialogBody className="dialog-content overflow-auto h-[600px]">
                    <List className="-ml-[16px] -mr-[16px]  rounded-none">
                        {
                            searchResult.map((token,index)=>{
                                return(
                                    <ListItem key={index} className="hover:bg-[#3d3d3d] focus:bg-[#421851] h-[55px] rounded-none"
                                     onClick={()=>listitemClick(token)}>
                                        <div className="flex flex-1 items-center justify-between">
                                            <div className="flex flex-1 gap-4 items-center">
                                                <Image src={token.image} alt={token.chainname} width={35} height={35}/>
                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="gray">{token.chainname}</Typography>
                                                    <Typography variant="paragraph" color="white">{token.unit}</Typography>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                    <Typography variant="small" color="gray">{'-'}</Typography>
                                                    <Typography variant="paragraph" color="white">{'-'}</Typography>
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
export default TokenSelectDialog;