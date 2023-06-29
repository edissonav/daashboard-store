import React from 'react'
import {RiHotelLine, RiLogoutCircleLine,RiAncientGateFill, RiMedalFill, RiPieChartFill,RiChatNewLine,RiNotification4Line,RiSettings2Line } from "react-icons/ri";
const Sidebar = (props) => {
    const {showMenu}= props;
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl transition-all ${showMenu ? "left-0" : "-left-full"}`}>
        <h1 className='text-4xl text-gray-300 uppercase font-bold text-center flex justify-center'> <RiHotelLine className='text-[#ec7c6a]' />
</h1>
        <div> <ul className='pl-4'>
            <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
                <a href="#" className='bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-white'>
                    <RiAncientGateFill className='text-2xl ' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='group-hover:bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiMedalFill className='text-2xl ' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='group-hover:bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiPieChartFill className='text-2xl ' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='group-hover:bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiChatNewLine className='text-2xl ' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='group-hover:bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiNotification4Line className='text-2xl ' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='group-hover:bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiSettings2Line className='text-2xl ' />
                </a>
            </li>
            
        </ul></div>
        <div>
            <ul className="pl-4">
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='group-hover:bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                    <RiLogoutCircleLine className='text-2xl ' />
                </a>
            </li>
            </ul>
        </div>
       
        
        </div>
  )
}

export default Sidebar