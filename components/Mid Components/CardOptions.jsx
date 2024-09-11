import Image from "next/image"

const CardOptions = ({ img, title, className }) => {
    return (
        <div className="h-1/4 w-full flex justify-evenly items-center text-center">
            <div className={`img  lg:p-3 p-2 w-[13%]  opacity-90 rounded-full flex justify-center items-center ${className}`}>
                <Image src={img} alt={title} width={200} height={200}
                className="w-full h-full"
                />
            </div>
            <h1 className="text-xl  w-[60%] px-2  h-4/6 text-left content-center ">{title}</h1>
            <div className="arrow lg:h-1/2 h-[15%] w-[5%]content-center">
            <Image src={`/logo/select-arrow.png`} alt={title} width={100} height={100} className="h-full w-full"  />
            </div>
        </div>
    )
}

export default CardOptions
