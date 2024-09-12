import { Sheet, SheetClose, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import Image from 'next/image';
import { sheetData } from '@/constants';


const MobileNav = () => {
    return (
        <nav className='lg:hidden flex justify-between items-center h-[7vh] bg-slate-700 px-4 py-4'>
            <section className="w-full max-w-[264px] ">
                <Sheet>
                    <SheetTitle />
                    <SheetTrigger asChild>
                        <Image
                            src="./logo/hamburger.svg"
                            width={30}
                            height={30}
                            alt="hamburger icon"
                            className="cursor-pointer lg:hidden mt-2"
                        />
                    </SheetTrigger>

                    <SheetContent side="left" className="border-none bg-slate-700">
                        <SheetDescription />
                        <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                            {sheetData.map((data, index) => {
                                return {
<SheetClose asChild key={index}>
                                    {data}
                                </SheetClose>
}
                            })}
                        </section>
                    </SheetContent>
                </Sheet>
            </section>
            <Image
                src="./logo/logo.svg"
                width={25}
                height={25}
                alt="logo"
                className="cover items-center lg:hidden w-8 h-8"
            />
        </nav>
    )
}

export default MobileNav
