import Image from "next/image";
import OutrosVideos from "./components/OutrosVideos";
import Header from './components/Header'
import Links from './components/Links'
export default function Home() {
  return (
   <main className="max-w-[498px] md:min-w-[498px] md:max-w-[1920px] ">
    <Header/>
    <Links/>
    <OutrosVideos/>
   </main>
  );
}
