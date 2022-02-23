import React from 'react'
import Box from '@mui/material/Box';
import BlogImg from '../assets/images/blogImg.PNG'

function Blog() {
    return (
        <Box className="lg:flex block justify-between items-center md:pr-10 pr-5 lg:pl-36 md:pl-20 pl-10 pt-5">
            <Box className="lg:w-[48%] w-[100%] lg:mt-0 mt-10">
                <h1 className="md:text-4xl sm:text-3xl text-xl font-bold text-[#A5BC52]">
                    A Deep Dive Into <br/>The Polygon Network
                </h1>
                <h1 className="sm:text-2xl text-sm font-bold text-white mt-5">
                    What is <span className="border border-[#A5BC52] px-4 ml-2 rounded-full">Athame Finance</span>
                </h1>
                <p className="text-white my-5">
                Athame Finance is a protocol running on Polygon Network which enables investors of all sizes to invest in StrongBlock Nodes. StrongBlock Nodes requires a minimum investment amount of $4.795.60 and runs on a Ethereum Mainnet which has very high gas fees. These conditions make StrongBlock inaccessible for most investors. On contrary, Amathe Finance has a minimum investment amount of $10 per share and minimal gas fees. The amount generated from share sales are bridged to Ethereum Mainnet and used to purchase StrongBlock Nodes.  Revenue generated from thise nodes are bridged back to Polygon on optimal intervals and distributed to shareholders.
                </p>
                <button className="bg-[#A5BC52] px-7 py-2 rounded-full mt-5 text-white font-bold drop-shadow-[0_2px_15px_#A5BC52]">Learn More</button>
            </Box>
            <Box className='w-[50%] lg:flex hidden'>
                <img src={BlogImg} alt=""/>
            </Box>
        </Box>
    )
}

export default Blog
