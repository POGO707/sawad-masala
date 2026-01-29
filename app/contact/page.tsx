'use client'

import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        alert('Thank you for your message! We will get back to you soon.')
    }

    return (
        <div className="min-h-screen bg-secondary py-12">
            <div className="container-padding">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Get in Touch</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Have questions about our spices or your order? We're here to help!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Phone</p>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Email</p>
                                        <p className="text-gray-600">info@swadmasala.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Address</p>
                                        <p className="text-gray-600">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent text-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center">
                            <MessageCircle className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
                            <p className="text-white/80 mb-6 text-sm">Get instant support on WhatsApp for your orders and queries.</p>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-accent px-6 py-3 rounded-full font-bold hover:bg-secondary transition-colors"
                            >
                                Chat Now
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your email"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="What is this about?"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto btn-primary px-12 py-4 flex items-center justify-center group"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
