import Image from "next/image"

const SettingIcon = ({ src, classn }) => {
    let alt = src.split('/')[2];
    return (
        <div className={`mx-2 h-full cursor-pointer md:w-10 contain bg-slate-900 contain-content rounded-full flex justify-center items-center `}>
            <Image
                width={500}
                height={500}
                src={src}
                alt={alt}
                className={`${classn ? classn : ""}`}
            />
        </div>
    )
}

export default SettingIcon
