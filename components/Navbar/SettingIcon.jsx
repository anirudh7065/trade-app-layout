import Image from "next/image"

const SettingIcon = ({ src, className }) => {
    let alt = src.split('/')[2];
    return (
        <div className={'w-[100%] h-[100%] cursor-pointer md:w-10 contain bg-slate-900 contain-content rounded-full flex justify-center items-center'}>
            <Image
                width={500}
                height={500}
                src={src}
                alt={alt}
                className={className}     
                />
        </div>
    )
}

export default SettingIcon
