import React from 'react'
import { useGetAllProductsQuery } from '../../services/productsApi'

function Products() {
    var {isLoading,data}=useGetAllProductsQuery()
  return (
    <div>
        <h1>Products</h1>
        {isLoading&&<h1>Loading....</h1>}
        {
            !isLoading && (
                data.map((p)=>{
                    return <li>{p.title}</li>
                })
            )
        }
    </div>
  )
}

export default Products