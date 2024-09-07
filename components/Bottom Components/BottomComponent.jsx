import FeedBack from "@/components/Bottom Components/Feedback"
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
                <div className="ratings overflow-y-auto no-scroll h-[90%] flex flex-col gap-4 my-2">
                    <FeedBack src={'./logo/avatar-3.png'} name={'John Doe'} rating={'4'} feedback={`lorem dhgchygcucud gcudwsycgudws cuydwchuydwc uydwegcuydwe gcuydwgc
                        uywdsgch ydwsgcydwgcu ydwgcudwfg chdwgdcuyjdwegrujyc bgdwerujycgdwesru ycgdwesrucw`} />
                    <FeedBack src={'./logo/avatar-3.png'} name={'John Doe'} rating={'5'} feedback={`lorem dhgchygcucud gcudwsycgudws cuydwchuydwc uydwegcuydwe gcuydwgc
                        uywdsgch ydwsgcydwgcu ydwgcudwfg chdwgdcuyjdwegrujyc bgdwerujycgdwesru ycgdwesrucw`} />
                    <FeedBack src={'./logo/avatar-3.png'} name={'John Doe'} rating={'1'} feedback={`lorem dhgchygcucud gcudwsycgudws cuydwchuydwc uydwegcuydwe gcuydwgc
                        uywdsgch ydwsgcydwgcu ydwgcudwfg chdwgdcuyjdwegrujyc bgdwerujycgdwesru ycgdwesrucw`} />
                    <FeedBack src={'./logo/avatar-3.png'} name={'John Doe'} rating={'3'} feedback={`lorem dhgchygcucud gcudwsycgudws cuydwchuydwc uydwegcuydwe gcuydwgc
                        uywdsgch ydwsgcydwgcu ydwgcudwfg chdwgdcuyjdwegrujyc bgdwerujycgdwesru ycgdwesrucw`} />

                </div>
            </div>

        </div>
    )
}

export default BottomComponent
