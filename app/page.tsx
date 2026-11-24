import Image from "next/image";
import Header from './components/Header'
import Links from './components/Links'
export default function Home() {
  return (
   <main className="max-w-[498px] ">
    <Header/>
    <Links/>
   </main>
  );
}
