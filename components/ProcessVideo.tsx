'use client'

import { Play } from 'lucide-react'

const ProcessVideo = () => {
    const videoUrl = "https://www.instagram.com/reel/DPiT3yukyoh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

    return (
        <div className="container-padding">
            <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-primary-dark rounded-[3rem] overflow-hidden shadow-2xl aspect-video md:aspect-[21/9] flex items-center justify-center text-white group cursor-pointer block"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

                <div className="relative z-20 text-center p-8 md:p-16">
                    <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/80 text-xs font-bold mb-6 tracking-widest uppercase">
                        Our Heritage
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                        The Art of <br /> <span className="text-primary-light">Stone Grinding</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Witness the traditional process of how we carefully select, clean, and stone-grind our spices to preserve their natural oils and aroma.
                    </p>

                    <div className="relative inline-flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:scale-110">
                            <Play className="w-8 h-8 md:w-10 md:h-10 fill-primary ml-1" />
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            </a>
        </div>
    )
}

export default ProcessVideo
