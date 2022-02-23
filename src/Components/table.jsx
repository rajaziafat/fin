import React,{useState} from 'react'
import Icon1 from '../assets/images/table1.PNG'
import Icon2 from '../assets/images/table2.PNG'
import Icon3 from '../assets/images/table3.PNG'
import Icon4 from '../assets/images/table4.PNG'
import Icon5 from '../assets/images/table5.PNG'
import Icon6 from '../assets/images/table6.PNG'
import Icon7 from '../assets/images/table7.PNG'
import Icon8 from '../assets/images/table8.PNG'
import Icon9 from '../assets/images/table9.PNG'
import Icon10 from '../assets/images/table10.PNG'
import StarDollar from '../assets/images/starDollar.PNG'
import DollarSign from '../assets/images/dollarSign.PNG'
import Gift from '../assets/images/giftImg.PNG'
import Box from '@mui/material/Box';

function Table() {
    const [count,setCount]=useState(0)
    let handleSub=()=>{
        if(count===0){
            setCount(0)
        }
        else{
            setCount(count-1)
        }
    }
    return (
        <Box className="pt-24" id="table">
        <Box className="bg-[#101620] p-6 md:mx-24 sm:mx-10 mx-5 rounded-2xl" >
            <Box className="flex flex-wrap gap-3 justify-evenly border-b border-gray-700 pb-8">
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon1} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>StrongBlockAPR</p>
                            <p className="mt-1 font-bold">~230%</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon2} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Owned Nodes</p>
                            <p className="mt-1 font-bold">92</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon3} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Total Investment</p>
                            <p className="mt-1 font-bold">463,685 $</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon4} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Total Revenue <br/> Distributed</p>
                            <p className="mt-1 font-bold">~230%</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon5} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Total Shares</p>
                            <p className="mt-1 font-bold">47,265</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon6} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Strong Price</p>
                            <p className="mt-1 font-bold">471.42 $</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon7} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Not Claimed <br/> Revenue</p>
                            <p className="mt-1 font-bold">7,283.47 $</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon8} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Capital Waiting <br/> To Be Invest</p>
                            <p className="mt-1 font-bold">8,158.65 $</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon9} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Till Next Node</p>
                            <p className="mt-1 font-bold">173%</p>
                        </div>
                </Box>
                <Box className="pl-3 pt-3 h-24 w-52 bg-[#1C2636] flex rounded-lg">
                    <Box className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <img src={Icon10} alt="icon" />
                    </Box>
                        <div className="text-white ml-4">
                            <p>Share Holder Count</p>
                            <p className="mt-1 font-bold">1372</p>
                        </div>
                </Box>
            </Box>
            <Box className="mt-8 lg:flex block gap-5">
                <Box className="lg:w-[60%] w-[100%] pl-7 pr-4 py-5 bg-[#1C2636] rounded-lg lg:flex block gap-5">
                    <Box className="lg:w-[60%] w-[100%]">
                        <h1 className="text-white text-xl font-bold">Connected Wallet</h1>
                        <h1 className="text-white text-xl font-bold mt-1">Share Owned : 0</h1>
                        <Box className="bg-[#101620] p-4 mt-3 rounded-lg flex justify-between">
                            <Box>
                            <p className="text-white font-normal text-sm">Current Revenue Not Yet Distributed</p>
                            <p className="text-xl text-white font-bold mt-3">365.65$</p>
                            </Box>
                            <Box className="w-14 h-14 rounded-lg bg-[#A5BC52] flex justify-center items-center">
                            <img src={DollarSign} alt="dollar" />
                            </Box>
                        </Box>
                            <p className="text-white mt-5 text-gray-500 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quae quisquam minus accusamus mollitia soluta nam numquam asperiores unde. Magnam earum </p>
                    </Box>
                    <Box className="lg:w-[40%] w-[100%] lg:mt-0 mt-5 lg:py-0 py-5 rounded-lg bg-[#E1FE7B] flex flex-col justify-center items-center px-5">
                        <img src={Gift} className="bg-[#A5BC52] rounded-3xl px-2 pt-2 pb-3 h-20 w-20" alt="gift" />
                        <h1 className="mt-2 font-bold">Next Reward Distribution</h1>
                        <h1 className="mt-2 font-bold">23 Feb 2022</h1>
                        <p className='font-semibold mt-2 text-xs text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos consectetur itaque ullam tempora adipisci.</p>
                    </Box>
                </Box>
                <Box className="lg:w-[40%] w-[100%] lg:mt-0 mt-5 px-7 py-5 bg-[#1C2636] rounded-lg">
                <h1 className="text-white text-xl font-bold mt-1">Buy Athame.Finance Shares</h1>
                <Box className="sm:flex block mt-3 gap-5">
                    <Box className="md:w-[55%] w-[100%]">
                        <h1 className="text-white text-sm font-bold mt-1">Share Count</h1>
                        <Box className="w-[100%] h-16 mt-2 bg-[#131C2A] rounded-lg py-2 px-2 flex items-center justify-between">
                            <button className='bg-[#0B121D] px-4 py-2 text-2xl text-[#E1FE7B] flex items-center rounded-l-lg' onClick={handleSub}>-</button>
                            <Box className='w-[50%] mx-2 h-10 bg-[#131C2A] text-xl text-white flex justify-center items-center'>{count}</Box>
                            <button className='bg-[#0B121D] px-4 py-2 text-2xl text-[#E1FE7B] flex items-center rounded-r-lg' onClick={()=>{setCount(count+1)}}>+</button>
                        </Box>
                    </Box>
                    <Box className="md:w-[45%] w-[100%]">
                        <h1 className="text-white text-sm font-bold mt-1">Total</h1>
                        <Box className="w-[100%] h-16 mt-2 bg-[#131C2A] rounded-lg flex justify-between items-center px-5">
                        <h1 className="text-white text-xl font-bold">100</h1>
                        <img src={StarDollar} alt="star-dollar" />
                        </Box>
                    </Box>
                </Box>
                <p className='font-semibold mt-2 text-xs text-white'>Sed ut perspiciatis unde omnis iste natus error sit  voluptatem</p>
                <button className='bg-[#A5BC52] w-full mt-7 text-white font-bold rounded-full py-3'>Approve</button>
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default Table
