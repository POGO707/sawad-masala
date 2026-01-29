import HeroSlider from '@/components/HeroSlider'
import FeaturedProducts from '@/components/FeaturedProducts'
import ProcessVideo from '@/components/ProcessVideo'
import Testimonials from '@/components/Testimonials'
import TrustBadges from '@/components/TrustBadges'
import InstagramFeed from '@/components/InstagramFeed'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swaadvaad | Premium Homemade Indian Spices',
  description: 'The Taste of Home in Every Dish. Shop 100% natural, traditional homemade spices with authentic recipes. Free delivery across India.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white">
        <TrustBadges />
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-dark mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our most loved spices, crafted with extra care and traditional expertise
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Process Video */}
      <section className="py-16 bg-white">
        <ProcessVideo />
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-dark mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join 5000+ happy families enjoying authentic homemade spices
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-dark mb-4">
              Follow Our Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See behind the scenes of how we make your favorite spices
            </p>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-primary">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience authentic homemade spices delivered fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center bg-white text-primary-dark px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors text-lg"
            >
              Shop All Products
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors text-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}