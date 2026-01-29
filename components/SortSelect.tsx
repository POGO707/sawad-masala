'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface SortSelectProps {
    currentSort: string
}

const SortSelect = ({ currentSort }: SortSelectProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleSortChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', value)
        router.push(`/products?${params.toString()}`)
    }

    return (
        <select
            defaultValue={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
        </select>
    )
}

export default SortSelect
