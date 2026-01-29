'use client'

import { useCart } from './CartProvider'
import { ShoppingCart, Star, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedProducts = () => {
    const { addToCart } = useCart()

    const products = [
        { id: '1', name: 'Garam Masala', price: 299, image: '/images/products/garam-masala.jpg', rating: 4.8, weight: '100g' },
        { id: '2', name: 'Red Chilli Powder', price: 249, image: '/images/products/red-chilli.jpg', rating: 4.9, weight: '100g' },
        { id: '3', name: 'Turmeric Powder', price: 199, image: '/images/products/turmeric.jpg', rating: 4.7, weight: '200g' },
        { id: '4', name: 'Cumin Powder', price: 179, image: '/images/products/cumin.jpg', rating: 4.8, weight: '100g' },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
                <div key={product.id} className="product-card group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col">
                    <Link href={`/products/${product.id}`} className="relative aspect-[4/5] bg-gray-50 overflow-hidden block">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute top-2 left-2 md:top-4 md:left-4">
                            <span className="bg-accent text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Pure
                            </span>
                        </div>

                        <button className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 md:p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                            <Heart className="w-4 h-4 md:w-5 h-5" />
                        </button>

                        <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-lg flex items-center text-[10px] md:text-xs font-bold text-primary shadow-sm">
                            <Star className="w-2.5 h-2.5 md:w-3 h-3 fill-primary mr-1" />
                            {product.rating}
                        </div>
                    </Link>

                    <div className="p-3 md:p-6 flex-grow flex flex-col">
                        <Link href={`/products/${product.id}`} className="mb-2 block">
                            <h3 className="text-sm md:text-xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                            <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-widest">{product.weight}</p>
                        </Link>

                        <div className="mt-auto flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-base md:text-2xl font-bold text-primary">₹{product.price}</span>
                            </div>
                            <button
                                onClick={() => addToCart({ ...product, quantity: 1 })}
                                className="bg-primary text-white p-2 md:px-4 md:py-2 rounded-lg md:rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 active:scale-95 flex items-center justify-center"
                                aria-label="Add to cart"
                            >
                                <ShoppingCart className="w-4 h-4 md:mr-2" />
                                <span className="hidden md:inline text-sm font-bold">Add</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedProducts
