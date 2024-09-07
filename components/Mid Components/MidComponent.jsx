import CarOptions from '@/components/Mid Components/CardOptions';
import { ChartComponent } from '@/components/Mid Components/Chart';
import Image from 'next/image';

const MidComponent = () => {
    return (
        <div className='lg:h-[40%] w-full flex lg:flex-row flex-col justify-evenly items-center my-4'>
            <div className="chart flex flex-col justify-between w-full lg:w-[55%] lg:h-full h-auto gap-2 p-2 bg-slate-800 rounded-xl my-2 lg:my-0">
                <div className="top flex justify-between items-center w-full p-2">
                    <h1 className='text-2xl font-extrabold'>Activity</h1>
                    <button className='bg-slate-600 bg-blend-screen text-[13px] rounded-3xl py-2 px-4 font-bold flex gap-1 items-center'>Weekly
                        <Image src='./logo/white-arrow.png' width={10} height={10} alt='arrow'/>
                    </button>
                </div>
                <ChartComponent />
            </div>
            <div className='flex p-4 flex-col gap-2 lg:justify-between net-profit bg-slate-800 w-full lg:w-1/4 lg:h-full h-auto rounded-lg py-2 '>
                <CarOptions title={'Goals'} classn={'bg-orange-800'} img={'./logo/aim-orange.png'} />
                <CarOptions title={'Popular Dishes'} classn={'bg-purple-900'} img={'./logo/burger.png'} />
                <CarOptions title={'Menus'} classn={'bg-cyan-800'} img={'./logo/dish.png'} />
            </div>
        </div>
    )
}

export default MidComponent
