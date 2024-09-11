import Image from "next/image"
import SidebarIcon from "./SidebarIcon"
import { sidebarData } from "@/constants"

const Sidebar = () => {
    return (
        <div className='w-[5%] h-[100vh] bg-slate-800 hidden lg:flex flex-col gap-10 items-center fixed left-0 top-0'>
            <div className="top flex flex-col justify-center items-center gap-5">
                <div className="logo contain-content p-2 h-[10vh] w-5/6 mx-auto ">
                    <Image

                        src={'./logo/logo.svg'} alt="logo" width={500} height={500}
                        className='w-full'
                    />
                </div>
                <div className="navigate w-full flex flex-col justify-center items-center gap-8">
                    {sidebarData.map((data, index) => {
                        return <SidebarIcon key={index} {...data} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
