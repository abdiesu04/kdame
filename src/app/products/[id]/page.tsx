'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Star, Truck, Shield, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  images: string[];
  sizes: string[];
  colors: string[];
  features: string[];
  category: string;
}

interface ProductsMap {
  [key: number]: Product;
}

// Mock data - in a real app, this would come from an API
const products: ProductsMap = {
  1: {
    id: 1,
    name: 'Traditional Ethiopian Coffee Set',
    price: 199.99,
    description: 'Authentic handcrafted Ethiopian coffee set including a traditional clay jebena (coffee pot), ceramic cups, and a wooden stand. Perfect for experiencing the true Ethiopian coffee ceremony.',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Complete Set', 'Basic Set', 'Premium Set'],
    colors: ['Traditional Clay', 'Black Clay', 'Decorated'],
    features: [
      'Handcrafted clay jebena',
      'Set of 6 ceramic cups',
      'Wooden serving stand',
      'Traditional coffee tray',
      'Authenticity certificate'
    ],
    category: 'Home & Living'
  },
  2: {
    id: 2,
    name: 'Handwoven Ethiopian Basket',
    price: 89.99,
    description: 'Beautiful handwoven basket made by skilled Ethiopian artisans using traditional techniques. Perfect for serving bread or as a decorative piece.',
    rating: 4.6,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Natural', 'Multicolor', 'Earth Tones'],
    features: [
      'Hand-woven grass construction',
      'Traditional patterns',
      'Durable design',
      'Multipurpose use',
      'Fair trade certified'
    ],
    category: 'Home & Living'
  },
  3: {
    id: 3,
    name: 'Ethiopian Silver Jewelry Set',
    price: 299.99,
    description: 'Exquisite handcrafted silver jewelry set featuring traditional Ethiopian designs. Includes necklace, earrings, and bracelet.',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['Silver', 'Antique Silver', 'Gold-Plated'],
    features: [
      'Pure silver construction',
      'Traditional patterns',
      'Adjustable sizes',
      'Gift box included',
      'Authenticity certificate'
    ],
    category: 'Jewelry'
  },
  4: {
    id: 4,
    name: 'Traditional Ethiopian Scarf',
    price: 129.99,
    description: 'Handwoven cotton scarf with traditional Ethiopian patterns and designs. Made using ancient weaving techniques.',
    rating: 4.9,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['White/Gold', 'Natural/Green', 'Blue/White'],
    features: [
      'Hand-woven cotton',
      'Traditional patterns',
      'Lightweight fabric',
      'Versatile use',
      'Fair trade certified'
    ],
    category: 'Fashion'
  },
  5: {
    id: 5,
    name: 'Classic Leather Watch',
    price: 299.99,
    description: 'Elegant leather watch with traditional Ethiopian design elements. Features premium leather straps and precise timekeeping.',
    rating: 4.7,
    reviews: 178,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['Brown', 'Black', 'Tan'],
    features: [
      'Premium leather strap',
      'Traditional design elements',
      'Water-resistant',
      'Precise movement',
      'Gift box included'
    ],
    category: 'Accessories'
  },
  6: {
    id: 6,
    name: 'Canvas Backpack',
    price: 89.99,
    description: 'Durable canvas backpack featuring Ethiopian patterns and leather accents. Perfect for daily use or travel.',
    rating: 4.5,
    reviews: 142,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['Olive', 'Brown', 'Black'],
    features: [
      'Durable canvas construction',
      'Leather accents',
      'Multiple compartments',
      'Laptop sleeve',
      'Water-resistant coating'
    ],
    category: 'Fashion'
  },
  7: {
    id: 7,
    name: 'Wireless Earbuds',
    price: 199.99,
    description: 'High-quality wireless earbuds with Ethiopian-inspired design elements and premium sound quality.',
    rating: 4.6,
    reviews: 234,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1631867675167-90a456a90863?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['Black', 'White', 'Gold'],
    features: [
      'Premium sound quality',
      'Long battery life',
      'Touch controls',
      'Noise cancellation',
      'Charging case included'
    ],
    category: 'Electronics'
  },
  8: {
    id: 8,
    name: 'Smart Fitness Watch',
    price: 249.99,
    description: 'Advanced fitness tracker with Ethiopian design elements. Monitors health metrics and provides smart notifications.',
    rating: 4.8,
    reviews: 189,
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1434494817513-cc112a976e36?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['Black', 'Silver', 'Rose Gold'],
    features: [
      'Heart rate monitoring',
      'Sleep tracking',
      'Water-resistant',
      'GPS enabled',
      'Long battery life'
    ],
    category: 'Electronics'
  },
  9: {
    id: 9,
    name: 'Premium Leather Wallet',
    price: 79.99,
    description: 'Handcrafted leather wallet with traditional Ethiopian patterns. Features multiple card slots and spacious design.',
    rating: 4.7,
    reviews: 167,
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1517254797898-04edd251bcd1?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['Brown', 'Black', 'Tan'],
    features: [
      'Genuine leather',
      'Multiple card slots',
      'Bill compartment',
      'RFID protection',
      'Gift box included'
    ],
    category: 'Accessories'
  },
  10: {
    id: 10,
    name: 'Designer Sunglasses',
    price: 159.99,
    description: 'Stylish sunglasses with Ethiopian-inspired design elements. Provides UV protection and modern aesthetics.',
    rating: 4.6,
    reviews: 145,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['Standard'],
    colors: ['Black', 'Tortoise', 'Gold'],
    features: [
      'UV protection',
      'Polarized lenses',
      'Durable frame',
      'Carrying case',
      'Cleaning cloth'
    ],
    category: 'Fashion'
  },
  11: {
    id: 11,
    name: 'Mechanical Keyboard',
    price: 129.99,
    description: 'High-performance mechanical keyboard with Ethiopian design elements. Features customizable RGB lighting.',
    rating: 4.9,
    reviews: 256,
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['TKL', 'Full Size'],
    colors: ['Black', 'White', 'Gray'],
    features: [
      'Mechanical switches',
      'RGB backlighting',
      'N-key rollover',
      'Detachable cable',
      'Customizable keys'
    ],
    category: 'Electronics'
  },
  12: {
    id: 12,
    name: 'Premium Denim Jacket',
    price: 149.99,
    description: 'Classic denim jacket with Ethiopian-inspired embroidery. Made from premium quality denim.',
    rating: 4.7,
    reviews: 167,
    images: [
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1523205565295-f8e91625443b?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Indigo', 'Light Wash', 'Dark Wash'],
    features: [
      'Premium denim',
      'Traditional embroidery',
      'Button closure',
      'Multiple pockets',
      'Adjustable cuffs'
    ],
    category: 'Fashion'
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products[productId];

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link
          href="/categories"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Browse Categories
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        size: selectedSize,
        color: selectedColor,
      },
    });
  };

  // Get related products (excluding current product)
  const relatedProducts = Object.values(products)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="lg:w-2/3">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
            <Image
              src={product.images[mainImage]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden ${
                  mainImage === index ? 'ring-2 ring-yellow-500' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="text-2xl font-bold">${product.price}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-4">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedColor === color
                        ? 'border-yellow-600 text-yellow-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-4">Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedSize === size
                        ? 'border-yellow-600 text-yellow-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border rounded-lg"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-yellow-600 text-white rounded-full font-semibold mb-4 hover:bg-yellow-700 transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
            </motion.button>

            {/* Features */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-gray-600" />
                <span className="text-sm">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-gray-600" />
                <span className="text-sm">2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Product Details</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600">{product.description}</p>
          <ul className="mt-4 space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-yellow-600" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}