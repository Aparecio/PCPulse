import React from 'react'
import './stylesheets/ProductCard.css';

export const ProductCard = ({ }) => {
  return (
    <div className='product-card-wrapper'>
      <div className="item">
          <div className="img-box">
              <img src="https://i1.wp.com/gelatologia.com/wp-content/uploads/2020/07/placeholder.png?ssl=1" alt="Awesome Sunglasses"/>
          </div>

          <div className="details">
              <h2> ITEM NAME </h2>
              <div className="price"> $99.99 </div>
              <label> Specifications </label>
                <a href="#" className='main-contentBtn'>View Details</a>
                <a href="#" className='main-contentBtn'>Add to Cart</a>
          </div>
      </div>
    </div>
  )
}
