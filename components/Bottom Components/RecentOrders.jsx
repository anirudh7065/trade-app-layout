import RecentOrderItems from './RecentOrderItems'
import { recentOrders } from '@/constants'

const RecentOrders = () => {
    return (
        <div className="w-full h-full px-4 overflow-y-auto no-scroll">
            <table className='w-full text-left '>

                <thead className=''>
                    <tr className='py-4 text-xs font-extrabold'>
                        <th>Customer</th>
                        <th>Order No.</th>
                        <th>Amount</th>
                        <th className='text-center'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recentOrders.map((data, index) => {
                            return <RecentOrderItems key={index} {...data} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RecentOrders
