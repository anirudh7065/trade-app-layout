import FeedBack from "@/components/Bottom Components/Feedback"
import { feedbackData } from "@/constants"
import RecentOrders from "@/components/Bottom Components/RecentOrders"

const BottomComponent = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:h-[40%] h-[100vh] w-full justify-evenly items-center'>
            <div className="w-full lg:w-[55%] flex flex-col h-full gap-2 p-2 bg-slate-800 rounded-xl my-2 lg:my-0">
                <h1 className='text-lg font-bold mx-4'>Recent Orders</h1>
                <RecentOrders />

            </div>
            <div className=" flex flex-col net-profit bg-slate-800 w-full lg:w-1/4 h-full rounded-lg px-4 py-2">
                <h1 className='text-lg font-bold h-[5%] content-center my-2'>Customer Feedback</h1>
                <div className="ratings overflow-y-auto no-scroll h-[90%] flex flex-col my-2 rounded-lg">
                    {
                        feedbackData.map((data, index) => {
                            return <FeedBack key={index} {...data} />
                        })
                 }
                </div>
            </div>

        </div>
    )
}

export default BottomComponent
