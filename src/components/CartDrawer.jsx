"use client";

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from '@/app/lib/redux/slices/cartSlice';

export default function CartDrawer({ isOpen, onClose }) {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full sm:w-96 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Your Cart {isClient && `(${cartItems.length})`}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <X className="h-6 cursor-pointer w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {!isClient || cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-24 h-24 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-xl font-medium text-gray-900 mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-gray-600">
                Add some delicious items to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  {/* PRE-ORDER Badge - Top Corner (Option 3) */}
                  {item.isPreOrder && (
                    <div className="absolute -top-2 -left-2 z-10">
                      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        📅 PRE-ORDER
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.variant}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      ${item.price.toFixed(2)} AUD
                    </p>

                    {/* Delivery Date & Time (for all items) */}
                    {item.deliveryDate && (
                      <div className="mt-2 text-xs text-gray-600">
                        <p>📅 {item.deliveryDate}</p>
                        {item.pickupTime && (
                          <p>🕐 Pickup: {item.pickupTime}</p>
                        )}
                      </div>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                      >
                        <Minus className="h-3 cursor-pointer w-3" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                      >
                        <Plus className="h-3 cursor-pointer w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-700 transition"
                  >
                    <Trash2 className="h-5 cursor-pointer w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {isClient && cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            {/* Clear Cart */}
            <button
              onClick={handleClearCart}
              className="text-sm text-red-600 cursor-pointer hover:text-red-700 transition"
            >
              Clear Cart
            </button>

            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)} AUD</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-gray-900 cursor-pointer text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}