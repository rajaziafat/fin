import React,{useState} from 'react'
import Logo from '../assets/images/athameLogo.PNG'
import DashIcon from '../assets/images/dashboard.PNG'
import WhiteIcon from '../assets/images/whiteboard.PNG'
import Currency from '../assets/images/dollar.PNG'
import ConnectIcon from '../assets/images/connect.PNG'
import Currency2 from '../assets/images/dollar2.PNG'
import FAQ from '../assets/images/faq.PNG'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {GoThreeBars} from 'react-icons/go'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    const [check,setCheck]=useState(0)
    let handleNavBtn = () => {
        setCheck(1);
      };
      let handleClose = () => {
        setCheck(0);
      };
    return (   
    <>    
        {check===0 &&(
        <Box className="bg-gray-100 py-4 sm:px-6 px-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50 h-20">
            <img src={Logo} className="sm:w-[25%] w-[70%]" alt="athame-logo"/>
            <Box className="items-center justify-between ml-3 w-full lg:flex hidden">
                <Box className="flex items-center">
                    <a href="#table" className="flex items-center">
                    <img src={DashIcon} className="w-6 h-6 mr-2" alt=""/>
                    <Typography className="text-sm font-bold">
                        Dashboard
                    </Typography>
                    </a>
                    <a href="#whiteboard1" className="flex items-center ml-5">
                    <img src={WhiteIcon} className="w-6 h-6 mr-2" alt=""/>
                    <Typography className="text-sm font-bold">
                        Whiteboard
                    </Typography>
                    </a>
                    <a href="#FAQ1" className="flex items-center ml-5">
                    <img src={FAQ} className="w-6 h-6 mr-2" alt=""/>
                    <Typography className="text-sm font-bold">
                        FAQ
                    </Typography>
                    </a>
                </Box>
                <Box className="flex items-center">
                    <a href="#currency1" className="flex items-center">
                    <img src={Currency} className="w-6 h-6 mr-2" alt=""/>
                    <Typography className="text-sm font-black text-[#8247E5]">
                        $3635.65
                    </Typography>
                    </a>
                    <a href="#currency2" className="flex items-center ml-5">
                    <img src={Currency2} className="w-6 h-6 mr-2" alt=""/>
                    <Typography className="text-sm font-black text-[#8247E5]">
                        $684.65
                    </Typography>
                    </a>
                    <button className="flex items-center ml-5 px-5 py-2 bg-[#A5BC52] rounded-full">
                    <img src={ConnectIcon} className="w-6 h-6 mr-2" alt=""/>
                    <Typography className="text-sm font-bold text-white">
                        Connect Wallet
                    </Typography>
                    </button>
                </Box>
            </Box>
            <button className='lg:hidden flex text-2xl' style={{background:"none",outline:"none",border:"none"}} onClick={handleNavBtn}>
                <GoThreeBars/>
            </button>
        </Box>
        )}
        {check===1 &&(
            <div className="py-3 fixed top-0 right-0 left-0 w-full h-[100vh] bg-gray-100 z-50" id="mob">
              <div className="container-fluid px-md-4 px-2 flex justify-between">
                  <img src={Logo} className="logo-img" alt="" />
                <AiOutlineClose
                  className="mr-2 mt-3 text-2xl"
                  onClick={handleClose}
                />
              </div>
              <ul className="mt-8 px-5">
                  <li className="flex items-center border-b border-gray-400 pb-6">
                  <img src={DashIcon} className="w-6 h-6 mr-5" alt=""/>
                    <a href="#dashboard" className="text-sm font-bold">
                        Dashboard
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 pb-6 mt-6">
                  <img src={WhiteIcon} className="w-6 h-6 mr-5" alt=""/>
                    <a href="#whiteboard" className="text-sm font-bold">
                        WhiteBOARD
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 pb-6 mt-6">
                  <img src={FAQ} className="w-6 h-6 mr-5" alt=""/>
                    <a href="#faq" className="text-sm font-bold">
                        FAQ
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 pb-6 mt-6">
                  <img src={Currency} className="w-6 h-6 mr-5" alt=""/>
                    <a href="#currency3" className="text-sm font-bold">
                    $3635.65
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 pb-6 mt-6">
                  <img src={Currency2} className="w-6 h-6 mr-5" alt=""/>
                    <a href="#currency4" className="text-sm font-bold">
                    $684.64
                    </a>
                  </li>
                  <li className="flex items-center mt-6">
                  <button className="flex items-center px-5 py-2 bg-[#A5BC52] rounded-full">
                    <img src={ConnectIcon} className="w-6 h-6 mr-2" alt="wallet"/>
                    <Typography className="text-sm font-bold text-white">
                        Connect Wallet
                    </Typography>
                    </button>
                  </li>
              </ul>
          </div>
        )}
    </>
    )
}

export default Navbar
