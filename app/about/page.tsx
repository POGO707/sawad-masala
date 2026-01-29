import Image from 'next/image'
import { Award, Leaf, Heart, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-secondary">
            {/* Hero Section */}
            <section className="relative bg-primary-dark text-white py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-4xl md:text-7xl font-display font-bold mb-6">Our Story</h1>
                    <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Bringing the authentic flavors of Bharat to every kitchen through traditional methods and pure ingredients.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24">
                <div className="container-padding">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/images/products/garam-masala.jpg"
                                alt="Traditional Spices"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>
                        <div>
                            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs mb-6 tracking-widest uppercase">
                                Our Heritage
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-dark mb-8 leading-tight">The Essence of <br /> Swad Masala</h2>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                Founded with a passion for preserving traditional Indian culinary heritage, Swad Masala is more than just a spice brand. We are a family-driven initiative dedicated to bringing back the "Asli Swad" (real taste) that has been lost in the age of mass production.
                            </p>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                Our spices are sourced directly from farmers who share our commitment to quality. We use traditional stone-grinding methods to ensure that the natural oils and aromas of the spices are preserved, giving you a flavor that is unmatched.
                            </p>

                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                                    <Leaf className="w-8 h-8 text-green-500 mb-3" />
                                    <h4 className="font-bold text-gray-900 text-sm">100% Pure</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">No Fillers</p>
                                </div>
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                                    <Award className="w-8 h-8 text-amber-500 mb-3" />
                                    <h4 className="font-bold text-gray-900 text-sm">Handcrafted</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Small Batches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-white rounded-[3rem] md:rounded-[5rem] shadow-sm mx-4 md:mx-8 mb-16">
                <div className="container-padding text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-dark mb-16">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        <div className="p-10 rounded-[3rem] bg-secondary hover:shadow-xl transition-all duration-500 group">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary shadow-sm group-hover:rotate-6 transition-transform">
                                <ShieldCheck className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Authenticity</h3>
                            <p className="text-gray-600 leading-relaxed">We stay true to traditional recipes passed down through generations, ensuring every pack carries the real taste of home.</p>
                        </div>
                        <div className="p-10 rounded-[3rem] bg-secondary hover:shadow-xl transition-all duration-500 group">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary shadow-sm group-hover:rotate-6 transition-transform">
                                <Award className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Quality</h3>
                            <p className="text-gray-600 leading-relaxed">Only the finest ingredients make it into our spice blends. We never compromise on the purity of our products.</p>
                        </div>
                        <div className="p-10 rounded-[3rem] bg-secondary hover:shadow-xl transition-all duration-500 group">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary shadow-sm group-hover:rotate-6 transition-transform">
                                <Heart className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Community</h3>
                            <p className="text-gray-600 leading-relaxed">Supporting local farmers and promoting sustainable agriculture is at the heart of everything we do.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
