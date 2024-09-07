import Image from "next/image";

const RecentOrderItems = ({ Customer, OrderNo, Amount, Status }) => {
    let color = Status === 'Pending' || Status === 'Cancelled' ? "bg-red-500 text-red-900" : " bg-green-500 text-green-900"; 
    return (
        <tr className='text-xs font-extrabold border-b-2 border-b-gray-400'>
            <td className="flex items-center gap-2">
                <Image src={'./logo/avatar-3.png'} width={30} height={30} alt={'avatar'} className="rounded-full" />
                {Customer}
            </td>
            <td>{OrderNo}</td>
            <td>{Amount}</td>
            <td className={`text-left flex justify-center py-2`}>
                <span className={`${color} opacity-90 text-center py-1 px-2 rounded-lg md:w-1/2 h-1/2`} >{Status}</span>
            </td>
        </tr>
    )
}

export default RecentOrderItems
