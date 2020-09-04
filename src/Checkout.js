
import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'

function Checkout() {
    const [{basket}] = useStateValue() 
    return (
        <div className='checkout'>
          <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._cb423492668_.jpg" alt="Not Sure"/>  
          {basket.length === 0 ? (
            <div>
              <h2>Your Shopping Cart is Empty</h2>
              <p>You have no items in your cart. To buy one or more items, click "Add to Cart" below the item.</p>
            </div>
          ) : (
            <div>
              <h2 className='checkout__title'>Your Shopping Cart</h2>
              {basket.map(item =>  (
                <CheckoutProduct 
                id={item.id} 
                title={item.title} 
                image={item.image} 
                price={item.price} 
                rating={item.rating} 
                />
              ))}
            </div>
          )}
        </div>
    )
}

export default Checkout
