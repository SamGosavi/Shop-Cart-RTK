import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/cartSlice';

function Cart() {
  
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);
  
  return (
    <div>
      <h3 style={{textAlign:'center'}}>Cart</h3>
      <div className="cartWrapper">
        {products.map(product=>(
           <div key={product.id} className='cartCard'>
              <img className='image' src={product.image} alt="" />
              <h5 className='titleHead'>{product.title}</h5>
              <h5 className='headPrice'>$ {product.price} 
               <span className='symbol'>&#10006;</span><span><button >-</button><input type="text" id="count" /><button>+</button></span>
               </h5>
              <button onClick={()=>dispatch(removeItem(product.id))} className="btn">Remove</button>
           </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
