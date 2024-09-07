import Image from "next/image"
import SettingIcon from "./SettingIcon"
import MobileNav from "./MobileNav"
const Navbar = () => {
    return (
        <>
            <nav className='hidden bg-slate-800 lg:h-[10vh] w-[95%] fixed top-0 right-0 z-0 lg:flex justify-between items-center px-4 '>
                <div className="logo h-4/6 flex justify-center items-start">
                    <input type="text" name="search" id="search" placeholder={`Search`}
                        className='w-full h-5/6border-2 bg-blend-overlay border-gray-900 rounded-lg focus:bg-none bg-search bg-no-repeat box-border px-9 py-2 bg-gray-700 ' />
                </div>
                <div className="settings w-1/5 h-1/2 flex gap-2">
                    <SettingIcon src={'./logo/email.png'} classn={' w-1/2 '} />
                    <SettingIcon src={'./logo/settings.png'} classn={' w-1/2 '} />
                    <SettingIcon src={'./logo/bell.png'} classn={' w-1/2 '} />
                    <SettingIcon src={'./logo/avatar-3.png'} classn={' w-full '} />
                </div>
            </nav>
            <MobileNav />
        </>
    )
}

export default Navbar
