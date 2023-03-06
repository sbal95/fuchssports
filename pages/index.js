import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Watch from "@/components/Watch";
import BigTitle from "@/components/bigTitle";
import Footer from "@/components/footter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 ">
        <div className="w-screen h-screen object-contain top-0 ">
          <Navbar />
          <BigTitle />
          <Watch />
          <Footer />
        </div>
      </div>
    </>
  );
}
