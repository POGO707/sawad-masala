'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const productImages = [
        '/images/products/red-chilli.jpg',
        '/images/products/turmeric.jpg',
        '/images/products/garam-masala.jpg',
        '/images/products/cumin.jpg',
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative min-h-[90vh] md:min-h-[85vh] bg-secondary overflow-hidden flex items-center">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] hidden lg:block"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-12 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>

            <div className="container-padding relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6 tracking-wide">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            100% PURE & HANDCRAFTED
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 leading-[1.1]">
                            Swad Masala <br />
                            <span className="text-primary italic">Bharat Ka Asli Swad</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Experience the magic of traditional stone-ground spices. No chemicals, no preservatives—just pure, authentic flavors delivered fresh to your doorstep.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="/products" className="btn-primary px-10 py-4 text-lg shadow-xl shadow-primary/20 flex items-center justify-center group">
                                Order Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/about" className="btn-secondary px-10 py-4 text-lg flex items-center justify-center">
                                Our Story
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-gray-900">5000+</span>
                                <span className="text-xs uppercase tracking-widest font-bold">Happy Families</span>
                            </div>
                            <div className="w-px h-8 bg-gray-300"></div>
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-gray-900">100%</span>
                                <span className="text-xs uppercase tracking-widest font-bold">Natural</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Product Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-[500px] mx-auto">
                            {/* Decorative Ring */}
                            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, rotate: 10, y: 20 }}
                                    animate={{ opacity: 1, rotate: 0, y: 0 }}
                                    exit={{ opacity: 0, rotate: -10, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex items-center justify-center p-8"
                                >
                                    <div className="relative w-full h-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white group">
                                        <Image
                                            src={productImages[currentImageIndex]}
                                            alt="Product Preview"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Floating Spice Elements (Visual only) */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl p-2 hidden md:block"
                            >
                                <div className="w-full h-full bg-primary/5 rounded-xl flex items-center justify-center text-primary font-bold text-[10px] text-center">
                                    STONE GROUND
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -bottom-8 -left-8 w-28 h-28 bg-white rounded-2xl shadow-xl p-2 hidden md:block"
                            >
                                <div className="w-full h-full bg-accent/5 rounded-xl flex items-center justify-center text-accent font-bold text-[10px] text-center">
                                    NO PRESERVATIVES
                                </div>
                            </motion.div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)}
                                className="p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all"
                                aria-label="Previous product"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % productImages.length)}
                                className="p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all"
                                aria-label="Next product"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider
