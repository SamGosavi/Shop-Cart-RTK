import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addItem} from '../store/cartSlice'

function Products() {
   
  const dispatch = useDispatch();
  
  const[products,setProducts] =useState([]);
  const [error,setError] = useState(false);

  
  useEffect(()=>{
    const fetchProducts = async()=>{
      try {
        setError(false)
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(true);  
      }
        
    } 
    setTimeout(()=>{
      fetchProducts();
    },1000)
  },[]) 


  if(error){
    return <h2 style={{textAlign:'center',marginTop:'150px'}}>Oops...Something went wrong</h2>
  }



  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
            <div className='card' key={product.id}>
               <img src={product.image} alt="" />
               <h4 className='title'>{product.title}</h4>
               <h5 className='prc'>${product.price}</h5>
               <button onClick={()=>dispatch(addItem(product))} className='btn'>Add to Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Products
