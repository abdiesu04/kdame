'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id,
        name,
        price,
        image,
        quantity: 1
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href={`/products/${id}`} className="block">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Quick Actions */}
      <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart className="h-5 w-5 text-gray-600" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <ShoppingCart className="h-5 w-5 text-gray-600" />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${id}`} className="block group-hover:text-blue-600 transition-colors">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{category}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">${price.toFixed(2)}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 