import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import { ourSiteName } from '@/constant';
import { OurTeamMember } from '@/constant';
import {Button} from "@material-tailwind/react"
import { Socket,io } from 'socket.io-client';
 let socket:Socket;
export interface ContactUs{
    name:string
    email: string,
    phonenumber: string,
    telegramusername: string,
    position:string,
    describe:string
}
const AboutUs: React.FC = () => {
    const [form, setForm] = useState<ContactUs>({
        name:"",
        email: "",
        phonenumber: "",
        telegramusername: "",
        position:"",
        describe:""

    });
   
    useEffect(() => {socketInitializer()}, [])

    const socketInitializer = async () => {
      await fetch('/api/socket')
      socket = io()
  
      socket.on('connect', () => {
        console.log('connected')
      })
      socket.on('serverres', msg => {
        console.log(msg)
      })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const contacttoUs=()=>{
        //console.log(form);
        socket.emit('contactus', form)
    }
    return (
        <div className="bg-[#230B33]  flex min-h-screen flex-col items-center ">
            <div className="flex flex-col gap-1 justify-center mt-[150px]">
                <p className="text-center text-[#D6C6C6] font-inter text-[64px]">We are here to</p>
                <p className="text-center text-[#009FFF] font-inter text-[64px]">guarantee your success</p>
                <div className="flex flex-1 justify-center">
                    <div className="bg-[#D0D5DD]  w-[711px] h-[7px]" />
                </div>

            </div>
            <div className="relative flex  justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="980" height="401" viewBox="0 0 1280 401" fill="none">
                    <path d="M41.8855 400.291C19.0343 401.223 2.27171e-07 382.95 4.99896e-07 360.08L4.31389e-06 40.2448C4.57894e-06 18.0182 18.0182 -3.03027e-05 40.2448 -3.00377e-05L1239.76 -1.57336e-05C1261.98 -1.54686e-05 1280 18.0182 1280 40.2448L1280 311.137C1280 332.725 1262.97 350.468 1241.4 351.348L41.8855 400.291Z" fill="url(#paint0_linear_21_529)" />
                    <defs>
                        <linearGradient id="paint0_linear_21_529" x1="641.596" y1="402" x2="641.596" y2="-2.28666e-05" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#009FFF" />
                            <stop offset="1" stopColor="#0079FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <p className="absolute top-[70px] left-[30px] w-[920px] text-[#D6C6C6] font-inter text-[30px]">
                {`${ourSiteName} provides web site that help business owners and leaders build a more valuable business. We worked with their founder to build a professional, modern site that follows the Next.js framework and blockchain technology to clearly communicates the value it adds to potential clients`}
                </p>


                <div className="absolute top-[250px] left-[60px]">
                    <Image src="/images/rectangle-62.png" alt="ourphoto" width={900} height={350} />
                </div>

            </div>
            <div className="flex flex-col mt-[180px]">
                <div className="flex flex-1 justify-center">
                    <p className="text-[#D1C7C7] text-[64px] font-inter">Our</p>
                    <p className="ml-4 text-[#009FFF] text-[64px] font-inter">Mission</p>
                </div>
                <div className="bg-[#D0D5DD] w-[711px] h-[7px]" />
            </div>
            <div className="grid grid-cols-4 gap-8 mt-[20px] pl-[200px] pr-[200px]">
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Unmatched service</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">Support corporate clients and financial investors with their growth strategy and international development.</div>
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Specific</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">{`${ourSiteName} ’ core expertise lies in the ability to support our clients in understanding, analysing and executing commercial and investment strategies in specific markets.`}</div>
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Experience</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">Experience in working with and assisting a wide range of clients from international corporations to small/medium-sized businesses, from large corporate debt providers to mid-market private equity investors.</div>
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Technology</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">The best combination of technology and people.</div>

            </div>
            <div className="flex flex-col mt-[40px]">
                <div className="flex flex-1 justify-center">
                    <p className="text-[#D1C7C7] text-[64px] font-inter">Our</p>
                    <p className="ml-4 text-[#009FFF] text-[64px] font-inter">Commitment</p>
                </div>
                <div className="bg-[#D0D5DD] w-[711px] h-[7px]" />
            </div>
            <div className="grid grid-cols-4 gap-8 mt-[20px] pl-[200px] pr-[200px]">
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Ethics</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">{`Ethics for ${ourSiteName} means ensuring our customers the confidentiality and uniqueness of the service they are provided. A client must be reassured by the fact that the service provided to them is made-to-measure and will not be recycled for their competitors.`}</div>
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Quality</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">{`${ourSiteName} is committed to ensuring that our advice and recommendations are based on the best combination of methods, information research, creativity and internal quality assurance. `}</div>
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Continuity</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">{`${ourSiteName} considers that the continuity of relations on the long term with its clients is the guarantee of the satisfaction of these and the quality of the services provided.`}</div>
                <div className="  text-inter text-[24px] text-[#E5DEDE]">Technology</div>
                <div className=" col-span-3  text-inter text-[24px] text-[#E5DEDE]">The best combination of technology and people.</div>
            </div>
            <div className="flex flex-col mt-[40px]">
                <div className="flex flex-1 justify-center">
                    <p className="text-[#009FFF] text-[64px] font-inter">Our Success Team</p>
                </div>
                <div className="horizantal-content overflow-x-auto w-[1200px] mt-[20px] flex flex-1 gap-5  ">
                {
                    OurTeamMember.map(member=>{
                        return(
                        
                        <div key={member.name} className="flex flex-col justify-center items-center">
                             <Image
                             className="rounded-lg"
                             src={member.image}
                             alt={member.image}
                             width={380}
                             height={452}
                         
                         />
                         <p className="text-[20px] text-white font-inter">{member.name}</p>
                        </div>
                  
                        )
                    })
           
                }
            </div>
            </div>
           

            <div className="flex flex-col mt-[40px] items-center">
                <div className="flex flex-1 justify-center">
                    <p className="text-[#009FFF] text-[64px] font-inter">Get in touch</p>
                </div>
               <p className="text-[#E8EFF5] text-[24px] font-inter">We’d love to hear from you. Please fill out this form.</p>
               <form className="flex flex-col mt-[40px] gap-5">
                   
                        <div className="flex  items-center">
                            <p className="text-gray-600 text-[20px] font-inter">Name</p>
                            <input className="bg-transparent ml-5 outline-none text-[24px] text-gray-300 "
                                name="name" value={form.name}
                                onChange={handleChange}
                             autoFocus />
                        </div>
                        
                        <div className="w-[500px] -mt-3 h-[1px] bg-gray-700"/>
                        <div className="flex  items-center">
                            <p className="text-gray-600 text-[20px] font-inter">Email</p>
                            <input className="bg-transparent ml-5 outline-none text-[24px] text-gray-300 "
                            name="email" value={form.email}
                            onChange={handleChange} />
                        </div>
                        
                        <div className="w-[500px] -mt-3 h-[1px] bg-gray-700"/>
                        <div className="flex  items-center">
                            <p className="text-gray-600 text-[20px] font-inter">Phone Number</p>
                            <input className="bg-transparent ml-5 outline-none text-[24px] text-gray-300 "
                            name="phonenumber" value={form.phonenumber}
                            onChange={handleChange} />
                        </div>
                        
                        <div className="w-[500px] -mt-3 h-[1px] bg-gray-700"/>
                        <div className="flex  items-center">
                            <p className="text-gray-600 text-[20px] font-inter">Telegram Username</p>
                            <input className="bg-transparent ml-5 outline-none text-[24px] text-gray-300 "
                            name="telegramusername" value={form.telegramusername}
                            onChange={handleChange}  />
                        </div>
                        
                        <div className="w-[500px] -mt-3 h-[1px] bg-gray-700"/>
                        <div className="flex  items-center">
                            <p className="text-gray-600 text-[20px] font-inter">Title/Position</p>
                            <input className="bg-transparent ml-5 outline-none text-[24px] text-gray-300 " 
                            name="position" value={form.position}
                            onChange={handleChange} />
                        </div>
                        
                        <div className="w-[500px] -mt-3 h-[1px] bg-gray-700"/>
                        <div className="flex  items-center">
                            <p className="text-gray-600 text-[20px] font-inter">Describe</p>
                            <input className="bg-transparent ml-5 outline-none text-[24px] text-gray-300 " 
                            name="describe" value={form.describe}
                            onChange={handleChange}/>
                        </div>
                        
                        <div className="w-[500px] -mt-3 h-[1px] bg-gray-700"/>
                        <div className="flex flex-1 justify-center mt-2 mb-40 w-full">
                    <Button onClick={contacttoUs} variant="gradient"  color="light-blue" className="w-full  rounded-none">Connect with us</Button>
                </div>

               </form>  
            </div>
            
        </div>
    )
}
export default AboutUs;