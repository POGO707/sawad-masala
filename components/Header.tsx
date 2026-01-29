'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import { useCart } from './CartProvider'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const { getCartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
    }
  }

  // Animated images for the header
  const animatedImages = [
    '/images/products/garam-masala.jpg',
    '/images/products/biryani-masala.jpg',
    '/images/products/turmeric.jpg',
    '/images/products/chilli.jpg',
    '/images/products/cumin.jpg',
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'
        }`}
    >
      {/* Top Animated Bar */}
      <div className="bg-primary/10 overflow-hidden py-1 border-b border-primary/5">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...animatedImages, ...animatedImages].map((img, i) => (
            <div key={i} className="inline-flex items-center mx-8">
              <div className="w-8 h-8 rounded-full bg-white shadow-sm overflow-hidden mr-2 border border-primary/20">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[8px] text-gray-400">IMG</div>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Bharat Ka Asli Swad</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-padding mt-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Swad Masala Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-primary-dark group-hover:text-primary transition-colors leading-none">
                Swad Masala
              </h1>
              <p className="text-[10px] text-gray-600 font-medium tracking-tight">
                BHARAT KA ASLI SWAD
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition-colors hover:text-primary ${pathname === item.path ? 'text-primary-dark font-semibold' : 'text-gray-700'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search spices..."
                className="pl-10 pr-4 py-2 w-48 xl:w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </form>
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className={`relative p-2 hover:bg-gray-100 rounded-full transition-colors ${pathname === '/cart' ? 'text-primary' : 'text-gray-700'}`}
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl rounded-b-3xl border-t border-gray-100 animate-slide-in">
            <div className="p-6">
              <form onSubmit={handleSearch} className="relative mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search spices..."
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </form>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block px-4 py-4 rounded-xl transition-colors ${pathname === item.path
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </header>
  )
}

export default Header