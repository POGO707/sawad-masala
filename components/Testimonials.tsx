'use client'

import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Priya Sharma',
            text: 'The aroma of Swad Masala Garam Masala reminds me of my grandmother\'s kitchen. Truly authentic and pure!',
            location: 'Delhi',
            rating: 5
        },
        {
            name: 'Rahul Verma',
            text: 'Never buying store-bought spices again. The difference in quality and taste is night and day. Highly recommended!',
            location: 'Mumbai',
            rating: 5
        },
        {
            name: 'Anjali Gupta',
            text: 'Fast delivery and excellent packaging. The spices are so fresh and the flavors are incredibly vibrant.',
            location: 'Bangalore',
            rating: 5
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 relative border border-gray-50 group">
                    <div className="absolute -top-6 left-10 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                        <Quote className="w-6 h-6 fill-white" />
                    </div>

                    <div className="flex mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                    </div>

                    <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">"{t.text}"</p>

                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold border border-primary/10">
                            {t.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{t.name}</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{t.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Testimonials
