import React from 'react'
import Products from '../components/Products'

function Home() {
  return (
    <div>
      <h2 className='heading'>Welcome to Shoppers Store</h2>
      <section>
        <h3 className='sub-head'>Today's Deal Products</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home
