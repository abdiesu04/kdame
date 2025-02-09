'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
  isMobile?: boolean;
}

const FilterSidebar = ({ onFilterChange, isMobile = false }: FilterSidebarProps) => {
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Accessories'
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      onFilterChange({ categories: newCategories, priceRange });
      return newCategories;
    });
  };

  const handlePriceChange = (value: number, index: number) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = value;
    setPriceRange(newPriceRange);
    onFilterChange({ categories: selectedCategories, priceRange: newPriceRange });
  };

  return (
    <div className={`${isMobile ? 'block lg:hidden' : 'hidden lg:block'}`}>
      {isMobile && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg mb-4"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      )}

      <motion.div
        className={`${
          isMobile
            ? 'fixed inset-y-0 left-0 w-80 bg-white shadow-lg z-50 overflow-y-auto'
            : 'w-64'
        } ${isOpen ? 'block' : 'hidden'}`}
        initial={isMobile ? { x: -320 } : false}
        animate={isMobile ? { x: isOpen ? 0 : -320 } : false}
      >
        <div className="p-6">
          {isMobile && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="h-6 w-6" />
            </button>
          )}

          <h2 className="text-lg font-semibold mb-6">Filters</h2>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Price Range</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Min Price</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">${priceRange[0]}</span>
              </div>
              <div>
                <label className="text-sm text-gray-600">Max Price</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSelectedCategories([]);
              setPriceRange([0, 1000]);
              onFilterChange({ categories: [], priceRange: [0, 1000] });
            }}
            className="w-full px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FilterSidebar; 