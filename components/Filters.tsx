'use client'

interface FiltersProps {
    currentCategory: string
}

const Filters = ({ currentCategory }: FiltersProps) => {
    const categories = [
        { id: 'all', label: 'All Spices' },
        { id: 'masalas', label: 'Spice Blends' },
        { id: 'powders', label: 'Pure Powders' },
        { id: 'seeds', label: 'Whole Seeds' },
    ]

    const handleCategoryChange = (id: string) => {
        const url = new URL(window.location.href)
        url.searchParams.set('category', id)
        window.location.href = url.toString()
    }

    return (
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-2xl font-display font-bold mb-8 text-gray-900">Categories</h3>
            <div className="space-y-3">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`w-full text-left px-5 py-3 rounded-2xl transition-all duration-300 group flex items-center justify-between ${currentCategory === cat.id
                                ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20'
                                : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                            }`}
                    >
                        <span>{cat.label}</span>
                        {currentCategory === cat.id && (
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                    </button>
                ))}
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-display font-bold mb-8 text-gray-900">Price Range</h3>
                <div className="space-y-6">
                    <input
                        type="range"
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                        min="0"
                        max="1000"
                    />
                    <div className="flex justify-between text-sm font-bold text-gray-400">
                        <span>₹0</span>
                        <span className="text-primary">₹1000+</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 p-6 bg-secondary rounded-3xl border border-primary/10">
                <h4 className="font-bold text-primary-dark mb-2">Need Help?</h4>
                <p className="text-xs text-gray-500 mb-4">Can't find what you're looking for? Chat with our spice experts.</p>
                <a
                    href="https://wa.me/919876543210"
                    className="text-sm font-bold text-primary hover:underline flex items-center"
                >
                    Chat on WhatsApp →
                </a>
            </div>
        </div>
    )
}

export default Filters
