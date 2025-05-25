import FrontView from "@/components/home/FrontView";
import QuatosView from "@/components/home/QuotasView";
import UpCard from "@/components/home/UpCard";
import Image from "next/image";



export default function Home() {
  return (
    <div className="w-full h-full flex justify-center bg-almostWhite">
      <main className="w-[576px] flex min-h-screen flex-col items-center justify-start">
        <UpCard />
        <FrontView />
        {/* <QuatosView /> */}
      </main>
    </div>
  );
}
