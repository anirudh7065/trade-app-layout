import Image from "next/image";

const RecentOrderItems = ({ Customer, OrderNo, Amount, Status }) => {
    let color = Status === 'Pending' || Status === 'Cancelled' ? "bg-red-500 text-red-900" : " bg-green-500 text-green-900"; 
    return (
        <tr className='text-xs font-extrabold border-b-2 border-b-gray-400 content-center'>
            <td className="">
                <div className="my-4 flex items-center gap-x-2">

                <Image src={'/logo/avatar-3.png'} width={30} height={30} alt={'avatar'} className="rounded-full" />
                <span className="">{Customer}</span>
                </div>
            </td>
            <td>{OrderNo}</td>
            <td>{Amount}</td>
            <td className="flex justify-center items-center">
                <span className={`${color} opacity-90 text-center py-1 px-2 my-6 rounded-lg md:w-1/2 h-1/2`} >{Status}</span>
            </td>
        </tr>
    )
}

export default RecentOrderItems
