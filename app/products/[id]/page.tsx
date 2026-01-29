'use client'

import { useParams } from 'next/navigation'
import { useCart } from '@/components/CartProvider'
import { ShoppingCart, Star, ShieldCheck, Truck, Leaf, Award, ArrowLeft, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const products = [
    {
        id: '1',
        name: 'Garam Masala',
        description: 'Aromatic blend of 12 authentic spices, slow-roasted for authentic flavor. Our Garam Masala is the heart of every Indian kitchen, crafted with a secret family recipe passed down through generations.',
        price: 299,
        category: 'masalas',
        image: '/images/products/garam-masala.jpg',
        ingredients: ['Black Cardamom', 'Cinnamon', 'Cloves', 'Black Pepper', 'Cumin', 'Coriander', 'Nutmeg', 'Mace'],
        rating: 4.8,
        reviews: 125,
        weight: '100g',
        isBestSeller: true,
    },
    {
        id: '2',
        name: 'Red Chilli Powder',
        description: 'Pure, sun-dried red chillies ground to perfection for that authentic heat. We select only the finest chillies to ensure a vibrant color and a punch of flavor that elevates any dish.',
        price: 249,
        category: 'powders',
        image: '/images/products/red-chilli.jpg',
        ingredients: ['Dried Red Chillies'],
        rating: 4.9,
        reviews: 98,
        weight: '100g',
        isBestSeller: true,
    },
    {
        id: '3',
        name: 'Turmeric Powder',
        description: 'High-curcumin turmeric sourced from the finest farms of India. Known for its medicinal properties and vibrant golden hue, our turmeric is processed with care to retain its natural oils.',
        price: 199,
        category: 'powders',
        image: '/images/products/turmeric.jpg',
        ingredients: ['Turmeric Root'],
        rating: 4.7,
        reviews: 156,
        weight: '200g',
        isBestSeller: false,
    },
    {
        id: '4',
        name: 'Cumin Powder',
        description: 'Freshly roasted and ground cumin seeds for an earthy, nutty flavor. Our cumin powder adds a deep, smoky aroma to your curries and snacks.',
        price: 179,
        category: 'powders',
        image: '/images/products/cumin.jpg',
        ingredients: ['Cumin Seeds'],
        rating: 4.8,
        reviews: 84,
        weight: '100g',
        isBestSeller: false,
    },
    {
        id: '5',
        name: 'Premium Turmeric',
        description: 'Special selection of premium turmeric with extra high curcumin content. This is our finest grade turmeric, perfect for those who seek the best in quality and health benefits.',
        price: 349,
        category: 'powders',
        image: '/images/products/turmeric-premium.jpg',
        ingredients: ['Premium Turmeric Root'],
        rating: 4.9,
        reviews: 42,
        weight: '200g',
        isBestSeller: false,
    }
]

export default function ProductDetailPage() {
    const params = useParams()
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState<any>(null)

    useEffect(() => {
        const foundProduct = products.find(p => p.id === params.id)
        setProduct(foundProduct)
    }, [params.id])

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-secondary py-8 md:py-16">
            <div className="container-padding">
                <Link href="/products" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
                    {/* Product Image */}
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        {product.isBestSeller && (
                            <div className="absolute top-6 left-6">
                                <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    Best Seller
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <div className="mb-8">
                            <div className="flex items-center space-x-2 text-primary font-bold text-sm mb-4 uppercase tracking-widest">
                                <span>{product.category}</span>
                                <span>•</span>
                                <span>{product.weight}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4 leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                                    <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                                    <span className="font-bold text-gray-900">{product.rating}</span>
                                </div>
                                <span className="text-gray-400 text-sm font-medium">{product.reviews} Reviews</span>
                            </div>
                            <p className="text-3xl font-bold text-primary mb-8">₹{product.price}</p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>
                        </div>

                        {/* Ingredients */}
                        <div className="mb-10">
                            <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Ingredients</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.ingredients.map((ing: string, i: number) => (
                                    <span key={i} className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-gray-600 border border-gray-100 shadow-sm">
                                        {ing}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1 shadow-sm">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 hover:text-primary transition-colors"
                                >
                                    <Minus className="w-5 h-5" />
                                </button>
                                <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 hover:text-primary transition-colors"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                            <button
                                onClick={() => addToCart({ ...product, quantity })}
                                className="w-full sm:flex-grow btn-primary py-4 text-lg flex items-center justify-center group"
                            >
                                <ShoppingCart className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                                Add to Cart
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-10">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                    <Leaf className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-gray-700">100% Natural</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                    <Award className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-gray-700">Stone Ground</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-gray-700">Fast Delivery</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-gray-700">Pure Quality</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
