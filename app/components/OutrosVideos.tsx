export default function OutrosVideos() {
    return (
        <section className="text-center w-[100dvw] mt-10 flex flex-col gap-6 items-center">

            <div className="w-[80dvw] aspect-video grid gap-10 justify-around items-center md:flex md:max-w-[600px]
                            ">
               

                 <div className="w-[80dvw] aspect-video flex justify-center md:w-[600px]
                            ">
                <iframe
                    className="w-[100%] h-[100%]"
                    src="https://www.youtube.com/embed/GQWINkodvFs?autoplay=0&mute=1&playsinline=1&rel=0"
                    title="Vídeo de apresentação"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div> 

              
                <div className="w-[80dvw] aspect-video flex justify-center md:w-[600px]
                            ">
                <iframe
                    className="w-[100%] h-[100%]"
                    src="https://www.youtube.com/embed/sQY1nYGFnf4?autoplay=0&mute=1&playsinline=1&rel=0"
                    title="Vídeo de apresentação"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div> 
            </div>
        </section>
    );
}