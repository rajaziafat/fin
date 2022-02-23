import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../assets/images/athameWhiteLogo.PNG'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaLinkedinIn , FaFacebookF , FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <Box className='w-full bg-[#141A27] py-10 md:px-24 px-12'>
            <Box className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col justify-center border-b border-gray-700 pb-16">
            <Box className="lg:w-[50%] w-[70%]">
            <img src={Logo} alt="white-logo"/>
            <p className='text-sm text-white mt-10'>+1 (7635)547-12-97</p>
            <p className='text-sm text-white mt-2'>support@athame.finance</p>
            </Box>
            <Box className="text-gray-500 sm:mt-0 mt-10">
                <h1 className="text-white font-bold text-sm">Quick Links</h1>
                <ul className="mt-8 grid grid-cols-2">
                    <li>Products</li>
                    <li>Company</li>
                    <li className="mt-5">Information</li>
                    <li className="mt-5">Lift Media</li>
                </ul>
            </Box>
            <Box>
                <h1 className="text-white font-bold text-sm lg:mt-0 mt-10">Subscribe</h1>
                <Box className="flex mt-10">
                <input type="text" className="rounded-l-md h-10 pl-3 w-[100%]" style={{outline:"none",border:"none"}}/>
                <button className="h-10 rounded-r-md bg-[#A5BC52] px-3 text-white text-xl"><AiOutlineArrowRight/></button>
                </Box>
            </Box>
            </Box>
            <Box className="sm:flex block sm:justify-between justify-center mt-6">
                <Box className="flex sm:justify-start justify-center text-white">
                    <Box className="w-9 h-9 border border-white rounded-full flex items-center justify-center">
                    <FaLinkedinIn/>
                    </Box>
                    <Box className="w-9 h-9 border border-white rounded-full flex items-center justify-center ml-3">
                    <FaFacebookF/>
                    </Box>
                    <Box className="w-9 h-9 border border-white rounded-full flex items-center justify-center ml-3">
                    <FaTwitter/>
                    </Box>
                </Box>
                <p className='text-xs text-white sm:mt-0 mt-7 sm:text-start text-center'>@ 2022 All rightsreserved Designed</p>
            </Box>
        </Box>
    );
}

export default Footer;
