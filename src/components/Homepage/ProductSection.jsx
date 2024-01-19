import React from 'react'
import { ProductCard } from './ProductCard'
import './stylesheets/ProductSection.css'

export const ProductSection = () => {
  return (
    <div className='product-wrapper'>
        <h4 className="text-danger"> Latest Products </h4>
            <div className='product-cards-container'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
    </div>
  )
}
