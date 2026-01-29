'use client'

import { useCart } from '@/components/CartProvider'
import { useState } from 'react'
import { ArrowLeft, Send, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutPage() {
    const { items, getTotal, clearCart } = useCart()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Format the WhatsApp message
        const phone = "919876543210" // Replace with actual WhatsApp number
        const orderDetails = items.map(item => `- ${item.name} (${item.quantity} x ₹${item.price})`).join('\n')
        const total = getTotal()

        const message = `*New Order from Swad Masala*\n\n` +
            `*Customer Details:*\n` +
            `Name: ${formData.name}\n` +
            `Phone: ${formData.phone}\n` +
            `Address: ${formData.address}, ${formData.city} - ${formData.pincode}\n\n` +
            `*Order Summary:*\n` +
            `${orderDetails}\n\n` +
            `*Total Amount: ₹${total}*\n\n` +
            `Please confirm my order. Thank you!`

        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank')

        // Optionally clear cart after redirect
        // clearCart()
    }

    if (items.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center container-padding text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <ShoppingBag className="w-12 h-12" />
                </div>
                <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Your cart is empty</h1>
                <p className="text-gray-600 mb-8 max-w-md">
                    You need to add some spices to your cart before you can checkout.
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
                <Link href="/cart" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Cart
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Checkout Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Delivery Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your mobile number"
                                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Full Address</label>
                                <textarea
                                    name="address"
                                    required
                                    rows={3}
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="House No, Street, Area"
                                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="City"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Pincode</label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        required
                                        value={formData.pincode}
                                        onChange={handleInputChange}
                                        placeholder="6-digit Pincode"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary py-5 text-lg flex items-center justify-center group mt-8"
                            >
                                Confirm Order via WhatsApp
                                <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-gray-100 sticky top-24">
                            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Order Summary</h2>

                            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-sm font-bold text-gray-900">{item.name}</h3>
                                            <p className="text-xs text-gray-500">{item.quantity} x ₹{item.price}</p>
                                        </div>
                                        <span className="font-bold text-gray-900">₹{item.quantity * item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 border-t border-gray-100 pt-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-gray-900">₹{getTotal()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-accent font-bold">FREE</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between text-2xl font-display font-bold text-gray-900">
                                    <span>Total</span>
                                    <span className="text-primary">₹{getTotal()}</span>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-secondary rounded-2xl border border-primary/10 flex items-start space-x-3">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                                    <Image src="/logo.png" alt="Logo" width={20} height={20} className="object-contain" />
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Your order will be sent to our WhatsApp. We will confirm the availability and share payment details there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
