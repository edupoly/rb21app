import React from 'react'
import { useGetAllProductsQuery } from '../../services/products'
function Products() {
    console.log(useGetAllProductsQuery())
  return (
    <div className='border border-2 border-secondary m-2 p-2'>
        <h1>Products</h1>
    </div>
  )
}

export default Products