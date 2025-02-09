'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/product/FilterSidebar';

// Mock data - in a real app, this would come from an API
const products = [
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
  },
  {
    id: 5,
    name: 'Classic Leather Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=60',
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Canvas Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
    category: 'Fashion'
  },
  {
    id: 7,
    name: 'Wireless Earbuds',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60',
    category: 'Electronics'
  },
  {
    id: 8,
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60',
    category: 'Electronics'
  },
  {
    id: 9,
    name: 'Premium Leather Wallet',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
    category: 'Accessories'
  },
  {
    id: 10,
    name: 'Designer Sunglasses',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=60',
    category: 'Fashion'
  },
  {
    id: 11,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=60',
    category: 'Electronics'
  },
  {
    id: 12,
    name: 'Premium Denim Jacket',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&auto=format&fit=crop&q=60',
    category: 'Fashion'
  }
];

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export default function CategoriesPage() {
  const [filters, setFilters] = useState<{
    categories: string[];
    priceRange: [number, number];
  }>({
    categories: [],
    priceRange: [0, 1000]
  });
  const [sortBy, setSortBy] = useState<SortOption>('price-asc');

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      const matchesPrice = product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1];
      return matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <aside className="lg:w-64">
          <FilterSidebar onFilterChange={setFilters} />
          <FilterSidebar onFilterChange={setFilters} isMobile={true} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold">All Products</h1>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold mb-2">No products found</h2>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 