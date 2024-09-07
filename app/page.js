import BottomComponent from "@/components/Bottom Components/BottomComponent";
import MidComponent from "@/components/Mid Components/MidComponent";
import TopComponent from "@/components/Top Components/TopComponent";


export default function Home() {
  return (
    <div className="w-full lg:w-[95%] py-4 lg:fixed lg:top-[10vh] lg:right-0 overflow-y-auto h-screen scroll-smooth  lg:h-[calc(100vh-10vh)] bg-slate-900  px-3 no-scroll">
      <h1 className='font-extrabold text-2xl py-2 lg:mx-20 text-center lg:text-left '>Dashboard</h1>

      <TopComponent />
        <MidComponent />
        <BottomComponent/>
    </div>
  );
}
