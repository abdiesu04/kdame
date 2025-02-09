'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Star, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Traditional Ethiopian Coffee Set',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60',
    category: 'Home & Living'
  },
  {
    id: 2,
    name: 'Handwoven Ethiopian Basket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=60',
    category: 'Home & Living'
  },
  {
    id: 3,
    name: 'Ethiopian Silver Jewelry Set',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=60',
    category: 'Jewelry'
  },
  {
    id: 4,
    name: 'Traditional Ethiopian Scarf',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&auto=format&fit=crop&q=60',
    category: 'Fashion'
  }
];

const categories = [
  {
    name: 'Traditional Wear',
    description: 'Elegant Ethiopian clothing and modern fashion',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop&q=60',
    link: '/categories'
  },
  {
    name: 'Home & Living',
    description: 'Beautiful crafts for your home',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=60',
    link: '/categories'
  },
  {
    name: 'Accessories',
    description: 'Handcrafted jewelry and accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=60',
    link: '/categories'
  }
];

const testimonials = [
  {
    name: 'Abeba Tadesse',
    role: 'Cultural Curator',
    content: 'As someone who values our heritage, I\'m amazed by how Kdame Gebiya presents Ethiopian craftsmanship in such a beautiful, modern way.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Yared Alemu',
    role: 'Art Collector',
    content: 'Every piece I\'ve purchased tells a story of our rich culture. The quality and authenticity are unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Tigist Bekele',
    role: 'Fashion Designer',
    content: 'The traditional textiles and patterns available here inspire my modern designs. A perfect blend of heritage and contemporary style.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60'
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-12 lg:py-0">
        {/* Luxury Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/patterns/luxury-pattern.png')] opacity-[0.03] bg-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-6 lg:space-y-8 text-center lg:text-left"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center justify-center lg:justify-start w-full lg:w-auto"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 border border-yellow-200 shadow-sm">
                    <span className="text-yellow-700 text-sm font-medium tracking-wide">PREMIUM ETHIOPIAN MARKETPLACE</span>
                  </span>
                </motion.div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight text-gray-900"
                  >
                    <span className="block">Discover the</span>
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600">
                      Finest Crafts
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  >
                    Experience the epitome of Ethiopian luxury. Each piece tells a story of unparalleled craftsmanship and heritage.
                  </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/categories"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Explore Collection
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/categories"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 rounded-full text-base sm:text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
                  >
                    View Catalog
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200"
                >
                  {[
                    { number: "100%", label: "Authentic" },
                    { number: "500+", label: "Master Artisans" },
                    { number: "50+", label: "Regions" }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl mx-4 lg:mx-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=60"
                  alt="Modern Marketplace"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                
                {/* Image Overlay Content */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Modern Shopping Experience</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Discover quality products from trusted sellers</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-yellow-600 font-medium tracking-wider uppercase text-sm sm:text-base">Discover Our Collections</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 text-gray-900">Shop by Category</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link href={category.link} className="group">
                  <div className="relative h-[20rem] sm:h-[24rem] lg:h-[28rem] rounded-2xl overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{category.name}</h3>
                        <p className="text-sm sm:text-base text-gray-100 mb-3 sm:mb-4 line-clamp-2">{category.description}</p>
                        <span className="inline-flex items-center text-yellow-300 font-medium group-hover:text-yellow-200 transition-colors text-sm sm:text-base">
                          Explore Collection <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-yellow-600 font-medium tracking-wider uppercase">Handpicked for You</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Explore our curated selection of premium Ethiopian products, each piece telling a unique story of craftsmanship and heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 text-white rounded-full font-medium hover:bg-yellow-500 transition-colors"
            >
              View All Products <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-yellow-600 font-medium tracking-wider uppercase">What Our Customers Say</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-gray-900">Customer Stories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-yellow-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-yellow-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4 sm:mb-6 font-medium">
                Stay Updated with Kdame Gebiya
              </h2>
              <p className="text-yellow-50 text-base sm:text-lg mb-8 sm:mb-10 opacity-90">
                Subscribe to our newsletter for exclusive offers, new arrivals, and Ethiopian craft stories
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-base"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap text-base shadow-lg hover:shadow-xl"
                >
                  Subscribe Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Kdame Gebiya</h3>
              <p className="text-gray-400">Discover authentic Ethiopian craftsmanship and modern designs.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/categories" className="text-gray-400 hover:text-white transition-colors">Shop All</Link></li>
                <li><Link href="/categories" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
                <li><Link href="/categories" className="text-gray-400 hover:text-white transition-colors">Featured</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="https://github.com/abdiesu04" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Developer: abdiesu04
                </Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kdame Gebiya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 