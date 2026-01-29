'use client'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white py-16">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Swad Masala Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <h3 className="text-2xl font-display font-bold">Swad Masala</h3>
                        </Link>
                        <p className="text-white/70 leading-relaxed">
                            Bringing the authentic flavors of Bharat to every kitchen. 100% natural, traditional homemade spices crafted with love.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4 text-white/70">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4 text-white/70">
                            <li>Email: info@swadmasala.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Address: India</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Follow Our Journey</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                <span className="sr-only">Instagram</span>
                                {/* Insta Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                <span className="sr-only">Facebook</span>
                                {/* FB Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.516 4.396-4.516 1.25 0 2.324.093 2.637.135v3.057h-1.81c-1.419 0-1.694.675-1.694 1.664v2.187h3.384l-.441 3.429h-2.943v8.783h6.135c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.324-1.325z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Swad Masala. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
