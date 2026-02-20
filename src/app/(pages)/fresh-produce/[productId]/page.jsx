"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/redux/slices/cartSlice";
import toast from "react-hot-toast";
import {
  getProductById,
  getRelatedProducts,
} from "@/app/lib/data/miniMartProducts";

export default function ProductDetail({ params }) {
  const dispatch = useDispatch();

  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const product = getProductById(unwrappedParams.productId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/fresh-produce"
            className="text-gray-900 underline hover:text-gray-700"
          >
            Back to Mini Mart
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const cartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
      category: product.category,
    };

    dispatch(addToCart(cartItem));

    toast.success(`Added ${quantity} x ${product.name} to cart!`, {
      duration: 3000,
      style: {
        background: "#10b981",
        color: "#fff",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#10b981",
      },
    });

    setQuantity(1);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Coconut Products":
        return "bg-amber-100 text-amber-700";
      case "Mini Mart":
        return "bg-green-100 text-green-700";
      case "Local Crafts":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014661/pexels-valeriya-kobzar-42371713-11790418_qg4q8s.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute top-0 left-0 right-0 h-32 z-[5]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-16">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            {product.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/fresh-produce" className="hover:text-white transition">
              Fresh-Produce
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{product.name}</span>
          </div>
        </main>
      </div>

      {/* Product Detail Section */}
      <section className="py-12 px-6 sm:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT - Images (STICKY) */}
            <div>
              <div className="sticky top-32 lg:top-24">
                <div className="space-y-4">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-32 overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === index
                            ? "border-gray-900"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Product Info (SCROLLABLE) */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
              </div>

              {/* Stock Status */}
              <div
                className={`p-4 rounded-xl border-2 ${
                  product.inStock
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-green-900">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-4">
                <p className="text-3xl font-bold text-gray-900">
                  From ${product.price.toFixed(2)} AUD
                </p>
              </div>

              {/* Category Badge */}
              <div>
                <span
                  className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getCategoryColor(product.category)} inline-block`}
                >
                  {product.category}
                </span>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)} AUD
              </button>

              {/* Product Information */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Information
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Origin:</span>{" "}
                    {product.specifications.origin}
                  </p>
                  <p>
                    <span className="font-semibold">Size:</span>{" "}
                    {product.specifications.size}
                  </p>
                  <p>
                    <span className="font-semibold">Weight:</span>{" "}
                    {product.specifications.weight}
                  </p>
                  {product.specifications.ingredients && (
                    <p>
                      <span className="font-semibold">Ingredients:</span>{" "}
                      {product.specifications.ingredients}
                    </p>
                  )}
                  {product.specifications.materials && (
                    <p>
                      <span className="font-semibold">Materials:</span>{" "}
                      {product.specifications.materials}
                    </p>
                  )}
                  {product.specifications.shelf_life && (
                    <p>
                      <span className="font-semibold">Shelf Life:</span>{" "}
                      {product.specifications.shelf_life}
                    </p>
                  )}
                  {product.specifications.care && (
                    <p>
                      <span className="font-semibold">Care:</span>{" "}
                      {product.specifications.care}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About This Product
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* How to Use */}
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  How to Use:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {product.howToUse}
                </p>
              </div>

              {/* Shipping & Returns */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Shipping & Returns
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>📦 Available for pickup at our Mini Mart location</p>
                  <p>
                    🚚 Local delivery available within the Saffron Shores
                    Collective
                  </p>
                  <p>↩️ Returns accepted within 7 days for unopened products</p>
                  <p>💰 Full refund for damaged or defective items</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/fresh-produce/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <span
                          className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getCategoryColor(relatedProduct.category)} inline-block w-fit mb-3`}
                        >
                          {relatedProduct.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-base font-bold text-gray-900 mt-auto">
                          From ${relatedProduct.price.toFixed(2)} AUD
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
