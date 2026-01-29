'use client'

import { useCart } from '@/components/CartProvider'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, getTotal } = useCart()

    if (items.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center container-padding text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <ShoppingBag className="w-12 h-12" />
                </div>
                <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Your cart is empty</h1>
                <p className="text-gray-600 mb-8 max-w-md">
                    Looks like you haven't added any spices to your cart yet. Explore our collection to find the perfect flavors for your kitchen.
                </p>
                <Link href="/products" className="btn-primary">
                    Browse Products
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-secondary py-8 md:py-12">
            <div className="container-padding">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-6">
                        {items.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex items-center gap-4 md:gap-6">
                                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                                    <p className="text-primary font-bold text-sm md:text-lg">₹{item.price}</p>

                                    {/* Mobile Quantity Controls */}
                                    <div className="flex items-center mt-2 md:hidden">
                                        <div className="flex items-center border border-gray-200 rounded-full px-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:text-primary transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-6 text-center font-bold text-xs">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:text-primary transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Quantity Controls */}
                                <div className="hidden md:flex items-center space-x-4">
                                    <div className="flex items-center border border-gray-200 rounded-full px-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="p-2 hover:text-primary transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="p-2 hover:text-primary transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 md:p-3 text-gray-400 hover:text-red-500 transition-colors"
                                    aria-label="Remove item"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg sticky top-24">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{getTotal()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-accent font-bold">FREE</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg md:text-xl font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>₹{getTotal()}</span>
                                </div>
                            </div>

                            <Link href="/checkout" className="w-full btn-primary py-4 text-lg flex items-center justify-center group">
                                Proceed to Checkout
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400 text-xs">
                                <div className="w-4 h-4 bg-accent/10 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                </div>
                                <span>Secure checkout powered by WhatsApp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
