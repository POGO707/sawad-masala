'use client'

import { MessageCircle } from 'lucide-react'

const WhatsAppFloat = () => {
    const handleWhatsAppClick = () => {
        const phone = "919876543210"
        const message = "Hi Swad Masala! I'd like to know more about your products."
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-24 right-6 lg:bottom-8 lg:right-8 bg-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-accent text-[10px] items-center justify-center font-bold">1</span>
            </span>
        </button>
    )
}

export default WhatsAppFloat
