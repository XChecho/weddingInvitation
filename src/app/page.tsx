import DressCode from "@/components/home/DressCode";
import EventsDetail from "@/components/home/EventsDetail";
import MainView from "@/components/home/MainView";




export default function Home() {
  return (
    <div className="w-full h-full flex justify-center bg-whiteBrown">
      <main className="w-full max-w-[576px] flex min-h-screen flex-col items-center justify-start pb-20">
        <MainView />
        <EventsDetail />
        <DressCode />
        {/* <FrontView /> */}
        {/* <QuatosView /> */}
      </main>
    </div>
  );
}
