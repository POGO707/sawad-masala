'use client'

import { Instagram } from 'lucide-react'

const InstagramFeed = () => {
    const reels = [
        "https://www.instagram.com/reel/DROzJShE1dp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DQVvCOiE0Qt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DQDtXj_gBFQ/?utm_source=ig_web_copy_link",
        "https://www.instagram.com/reel/DROzJShE1dp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DQVvCOiE0Qt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DQDtXj_gBFQ/?utm_source=ig_web_copy_link",
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {reels.map((url, i) => (
                <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-white rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm border border-gray-100 block"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-gray-200 font-display text-sm bg-gray-50">
                        @swadmasala
                    </div>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white p-4">
                        <Instagram className="w-8 h-8 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="text-xs font-bold tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">VIEW REEL</span>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default InstagramFeed
