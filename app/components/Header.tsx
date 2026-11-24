export default function Header() {
    return (
        <header className="text-center w-[100dvw] flex flex-col gap-6 items-center">
            <h1 className="h-[100px] mt-6 text-[1.5em] font-inria text-cinza flex items-center justify-center">EZEQUIAS GS COSTA</h1>

            <div className="w-[80dvw] aspect-video flex justify-center md:w-[600px]
                            ">
                <iframe
                    className="w-[100%] h-[100%]"
                    src="https://www.youtube.com/embed/eyALmJu72zw?autoplay=1&mute=1&playsinline=1&rel=0&cc_load_policy=0"
                    title="Vídeo de apresentação"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div> 
        </header>
    );
}