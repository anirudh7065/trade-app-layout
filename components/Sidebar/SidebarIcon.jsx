import Image from "next/image"

const SidebarIcon = ({ src }) => {
    let alt = src.split('/');

    return (
        <div className="w-[80%] h-[15%] hover:border-l-2 px-2 cursor-pointer">
            <Image
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                className='w-full h-full  focus:border-l-emerald-500 px-2'
            />
        </div>
    )
}

export default SidebarIcon
