'use client'

import ProductGrid from '@/components/ProductGrid'
import Filters from '@/components/Filters'
import SortSelect from '@/components/SortSelect'
import { Metadata } from 'next'
import { Suspense, useState } from 'react'
import { Filter, X } from 'lucide-react'

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const category = typeof searchParams.category === 'string' ? searchParams.category : 'all'
  const sort = typeof searchParams.sort === 'string' ? searchParams.sort : 'popular'
  const search = typeof searchParams.search === 'string' ? searchParams.search : ''

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Banner */}
      <div className="bg-primary-dark text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="container-padding relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Our Spice Collection
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Handcrafted with traditional methods for authentic taste. Each spice tells a story of heritage and quality.
          </p>
        </div>
      </div>

      <div className="container-padding py-8 md:py-12">
        <div className="grid lg:grid-cols-4 gap-8 md:gap-12">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <Filters currentCategory={category} />
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-[100] lg:hidden">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
              <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl p-6 animate-slide-in">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-display font-bold">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <Filters currentCategory={category} />
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                    {category === 'all' ? 'All Spices' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Showing the finest selection of Indian spices
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl font-bold text-sm shadow-sm"
                  >
                    <Filter className="w-4 h-4 text-primary" />
                    Filters
                  </button>
                  <div className="flex-1 sm:flex-none">
                    <SortSelect currentSort={sort} />
                  </div>
                </div>
              </div>
            </div>

            <Suspense fallback={<ProductsLoading />}>
              <ProductGrid
                category={category}
                sort={sort}
                search={search}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductsLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl md:rounded-3xl shadow-sm p-4 animate-pulse border border-gray-50">
          <div className="aspect-[4/5] bg-gray-100 rounded-xl md:rounded-2xl mb-4"></div>
          <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-100 rounded w-1/2 mb-6"></div>
          <div className="flex justify-between items-center">
            <div className="h-6 bg-gray-100 rounded w-1/4"></div>
            <div className="h-10 bg-gray-100 rounded-xl w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}