import { NextRequest, NextResponse } from 'next/server'

// In production, this would fetch from MongoDB
const products = [
  {
    id: '1',
    name: 'Garam Masala',
    description: 'Aromatic blend of 12 authentic spices, slow-roasted for authentic flavor.',
    price: 299,
    category: 'masalas',
    image: '/images/products/garam-masala.jpg',
    ingredients: ['Black Cardamom', 'Cinnamon', 'Cloves', 'Black Pepper', 'Cumin', 'Coriander'],
    rating: 4.8,
    reviews: 125,
    weight: '100g',
    isBestSeller: true,
    isNew: false,
    stock: 50
  },
  {
    id: '2',
    name: 'Red Chilli Powder',
    description: 'Pure, sun-dried red chillies ground to perfection for that authentic heat.',
    price: 249,
    category: 'powders',
    image: '/images/products/red-chilli.jpg',
    ingredients: ['Dried Red Chillies'],
    rating: 4.9,
    reviews: 98,
    weight: '100g',
    isBestSeller: true,
    isNew: false,
    stock: 75
  },
  {
    id: '3',
    name: 'Turmeric Powder',
    description: 'High-curcumin turmeric sourced from the finest farms of India.',
    price: 199,
    category: 'powders',
    image: '/images/products/turmeric.jpg',
    ingredients: ['Turmeric Root'],
    rating: 4.7,
    reviews: 156,
    weight: '200g',
    isBestSeller: false,
    isNew: false,
    stock: 100
  },
  {
    id: '4',
    name: 'Cumin Powder',
    description: 'Freshly roasted and ground cumin seeds for an earthy, nutty flavor.',
    price: 179,
    category: 'powders',
    image: '/images/products/cumin.jpg',
    ingredients: ['Cumin Seeds'],
    rating: 4.8,
    reviews: 84,
    weight: '100g',
    isBestSeller: false,
    isNew: true,
    stock: 60
  },
  {
    id: '5',
    name: 'Premium Turmeric',
    description: 'Special selection of premium turmeric with extra high curcumin content.',
    price: 349,
    category: 'powders',
    image: '/images/products/turmeric-premium.jpg',
    ingredients: ['Premium Turmeric Root'],
    rating: 4.9,
    reviews: 42,
    weight: '200g',
    isBestSeller: false,
    isNew: true,
    stock: 30
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const sort = searchParams.get('sort') || 'popular'
    const search = searchParams.get('search') || ''

    let filteredProducts = [...products]

    if (category && category !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.category === category)
    }

    if (search) {
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Apply sorting
    switch (sort) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      default:
        filteredProducts.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
    }

    return NextResponse.json(filteredProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}