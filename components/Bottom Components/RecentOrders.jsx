import RecentOrderItems from './RecentOrderItems'

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
                    <RecentOrderItems Customer={'John Doe'} OrderNo={'12345'} Amount={'$100'} Status={'Delivered'} />
                    <RecentOrderItems Customer={'Brock Lesnor'} OrderNo={'15645'} Amount={'$200'} Status={'Pending'} />
                    <RecentOrderItems Customer={'John cina'} OrderNo={'25845'} Amount={'$500'} Status={'Cancelled'} />
                    <RecentOrderItems Customer={'Abraham Doe'} OrderNo={'196545'} Amount={'$450'} Status={'Delivered'} />
                    <RecentOrderItems Customer={'Lucifer Mornigstar'} OrderNo={'566545'} Amount={'$600'} Status={'Pending'} />
                    <RecentOrderItems Customer={'Modi'} OrderNo={'123545'} Amount={'$1000'} Status={'Delivered'} />
                    <RecentOrderItems Customer={'Modi'} OrderNo={'123545'} Amount={'$1000'} Status={'Delivered'} />

                </tbody>
            </table>
        </div>
    )
}

export default RecentOrders
