'use client'

import { ShieldCheck, Truck, Leaf, Heart, Award, Zap } from 'lucide-react'

const TrustBadges = () => {
    const badges = [
        { icon: Leaf, title: '100% Natural', desc: 'No chemicals or preservatives', color: 'text-green-600', bg: 'bg-green-50' },
        { icon: Award, title: 'Pure Quality', desc: 'Traditional stone-ground', color: 'text-amber-600', bg: 'bg-amber-50' },
        { icon: Zap, title: 'Fast Delivery', desc: 'Across India in 3-5 days', color: 'text-blue-600', bg: 'bg-blue-50' },
        { icon: Heart, title: 'Made with Love', desc: 'Authentic family recipes', color: 'text-red-600', bg: 'bg-red-50' },
    ]

    return (
        <div className="container-padding">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
                {badges.map((badge, i) => {
                    const Icon = badge.icon
                    return (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className={`w-20 h-20 ${badge.bg} rounded-3xl flex items-center justify-center mb-6 ${badge.color} transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-sm`}>
                                <Icon className="w-10 h-10" />
                            </div>
                            <h4 className="font-display font-bold text-gray-900 mb-2 text-lg">{badge.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-[150px]">{badge.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrustBadges
