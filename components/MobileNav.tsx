'use client'

import { Home, ShoppingBag, Info, Phone, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from './CartProvider'

const MobileNav = () => {
    const pathname = usePathname()
    const { getCartCount } = useCart()

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/products', label: 'Shop', icon: ShoppingBag },
        { path: '/cart', label: 'Cart', icon: ShoppingCart, count: true },
        { path: '/about', label: 'About', icon: Info },
        { path: '/contact', label: 'Contact', icon: Phone },
    ]

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 z-50 px-2 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.path

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-300 ${isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <div className="relative">
                                <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
                                {item.count && getCartCount() > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold border-2 border-white">
                                        {getCartCount()}
                                    </span>
                                )}
                            </div>
                            <span className={`text-[10px] mt-1 font-medium ${isActive ? 'font-bold' : ''}`}>
                                {item.label}
                            </span>
                            {isActive && (
                                <span className="w-1 h-1 bg-primary rounded-full mt-0.5 animate-pulse"></span>
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileNav
