'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, Search, ShoppingCart, User, ChevronDown, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useCart();

  const navItems = [
    { 
      name: 'Collections', 
      href: '/categories',
      submenu: ['Traditional Wear', 'Home & Living', 'Accessories', 'Jewelry']
    },
    { 
      name: 'New Arrivals', 
      href: '/categories' 
    },
    { 
      name: 'Heritage', 
      href: '/categories',
      submenu: ['Our Story', 'Artisans', 'Craftsmanship']
    },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white py-2 px-4 text-center text-sm">
          <span className="font-medium">Free Worldwide Shipping on Orders Over $200</span>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 pl-2">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-2xl sm:text-3xl font-serif relative">
                  <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold tracking-tight">
                    Kdame
                  </span>
                  <span className="text-gray-900 font-medium ml-2">
                    Gebiya
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className="text-gray-700 font-medium group-hover:text-yellow-600 transition-colors py-2 px-2 lg:px-3 rounded-md hover:bg-gray-50 flex items-center gap-1 text-sm lg:text-base"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          href="/categories"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-600"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-lg mx-4 lg:mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for artisan crafts..."
                  className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-50 rounded-full text-gray-700"
              >
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-50 rounded-full text-gray-700 relative"
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {state.items.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 bg-yellow-500 rounded-full text-xs text-white flex items-center justify-center font-medium"
                  >
                    {state.items.length}
                  </motion.span>
                )}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 hover:bg-gray-50 rounded-full text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden fixed inset-0 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <motion.div 
          className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-medium">Menu</h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <Link 
                  href={item.href}
                  className="block text-lg font-medium text-gray-900 hover:text-yellow-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href="/categories"
                        className="block text-gray-600 hover:text-yellow-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 