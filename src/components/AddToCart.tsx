"use client";

import { addToCart } from '@/server-actions/add-to-cart';
import { ShoppingCart } from 'lucide-react';
import React, { useTransition } from 'react'
import { toast } from 'react-hot-toast';

export default function AddToCart({
  _id, quantity, price, name
}: {
  _id: string; quantity: number, price: number, name: string
}) {
  let [_, startTransition] = useTransition();

  return ( 
    <div className="add-to-cart">
      <button className="btn" onClick={() => {
        startTransition(
          () => {
            void addToCart({
              product_id: _id,
              quantity
            })
            toast.success(`${quantity}x ${name} has been added to your cart.`, {
              duration: 5000
            })
          }
        );
      }}>
        <ShoppingCart height={20} width={20} /> Add to Cart
      </button>

      <p className="price">
        ${price}.00
      </p>
    </div>
  )
}
