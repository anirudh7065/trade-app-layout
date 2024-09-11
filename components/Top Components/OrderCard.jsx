import Image from "next/image"
const OrderCard = ({ img, title, color, count, profit, loss, rev }) => {
        return (
        <div className='w-full lg:w-1/3 bg-slate-800 rounded-lg  p-4 flex flex-col justify-between'>
            <div className="lg:w-[100%] w-[80%] h-[80%] lg:h-[100%]">
                <div className={`w-[20%] lg:w-[35%] h-1/2 contain-content flex justify-center items-center p-2 ${color} rounded-lg`}>
                    <Image
                        src={img}
                        alt={title}
                        width={1000}
                        height={1000}
                        className={`w-full h-full `}
                    />
                </div>
                <span className='text-[12px] font-bold'>{title}</span>
            </div>
            <div className="bottom h-[20%] flex justify-between items-center">
                <h1 className='text-[22px] font-extrabold'>{count ? count : `$${rev}`}</h1>
                <h1 className={`text-[14px] font-bold ${profit ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                    {profit ? <Image src={'/logo/arrow-up.png'} alt='arrow' width={7} height={3} className="mr-1 h-1/2" /> : <Image src={'/logo/arrow-down.png'} alt='arrow' width={7} height={3} className="mr-1 h-1/2" />}
                    {profit ? profit : `-${loss}`}
                </h1>
            </div>
        </div>
    )
}

export default OrderCard
