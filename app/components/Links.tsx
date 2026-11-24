import Image from "next/image"

export default function Links () {
    return (
        <section className="flex flex-col mt-[30px] w-[100dvw] h-[38dvh] items-center justify-around">
            <div className="h-[60px] text-cinza font-inria text-[1.5em]">
                <h2>Redes sociais</h2>
            </div>
            <a className="links" href="https://www.instagram.com/ezequias.teclas?vrfl=MWR5Mjg3NG1nMWs2OA==">
                <p>Instagram </p> 
               <Image src="/instagram.png" 
               alt="Instagram" 
               width={30} height={30}
                />
                </a>
            <a className="links" href="https://www.youtube.com/@kairoqueiroz">
                 <p>youtube</p> 
                <Image src="/youtube.png" 
                alt="YouTube" 
                width={30} height={30}
                 />
</a>
            <a className="links" href="#">
                 <p>tiktok</p>
                <Image src="/tiktok.png" 
                alt="TikTok" 
                width={30} height={30} 
                />

            </a>


        </section>
    )
}