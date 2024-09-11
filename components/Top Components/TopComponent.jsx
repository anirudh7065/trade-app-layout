'use client'
import {orderCardData} from "@/constants/index"
import OrderCard from "./OrderCard"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Image from "next/image"


const TopComponent = () => {
    return (
        <div className='flex lg:flex-row flex-col h-auto lg:h-[25%] w-full justify-evenly items-center'>
            <div className="orders w-full lg:w-[55%] flex lg:flex-row flex-col h-full gap-2  ">
                {orderCardData.map((data, index) => {
                    return <OrderCard key={index} color={data.color} {...data}  />
                })}
            </div>

            <div className=" flex net-profit bg-slate-800 w-full lg:w-1/4 h-full my-2 lg:my-0 rounded-lg px-4 py-2">
                <div className="left h-full w-[60%] flex flex-col justify-evenly">
                    <h2 className='text-lg font-bold'>Net Profit</h2>
                    <h1 className='text-[28px] font-extrabold'>$6782.25</h1>
                    <h1 className={`text-[18px] font-bold text-green-600 flex items-center`}>
                        <Image src={'/logo/arrow-up.png'} alt='arrow' width={7} height={3} className="mr-1 h-1/2" />
                        3
                    </h1>
                </div>
                <div className=" w-[40%] h-full flex justify-center items-center ">
                    <div style={{ width: 70, height: 70,  }} className="text-center whitespace-pre-wrap">
                        <CircularProgressbar value={80} text="80%" styles={buildStyles({
                            textSize: '20px', // Adjust text size here
                            pathColor: '#4db8ff',
                            textColor: '#4db8ff',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#fff',
                        })} />
                        <h1 className="text-[6px] font-bold text-center my-2">*The values here has been rounded off</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopComponent
