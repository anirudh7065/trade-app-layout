import Image from "next/image"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FeedBack = ({ src, name, rating, feedback }) => {
    return (
        <div className='w-full h-[170px] my-2 py-4 bg-gray-900 rounded-lg '>
            <div className="top flex items-center h-[20%] w-[100%] gap-2 mx-2 my-2">
                <div className="imag w-[10%] h-[5vh] contain-content rounded-full">

                    <Image
                        src={src}
                        alt="rating"
                        width={500}
                        height={500}
                        className="w-full h-full "
                    />
                </div>
                <h1>{name}</h1>
            </div>
            <div className="btm w-full h-60% mx-2 py-2">
                <Rating readOnly={true} style={{ maxWidth: 70 }} value={rating} />
                <h1 className="text-[12px] mx-auto py-1 break-before-all">{feedback}</h1>
            </div>


        </div>
    )
}

export default FeedBack
