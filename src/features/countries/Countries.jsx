import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countries'
function Countries() {
    var {isLoading,data}=useGetAllCountriesQuery('')
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h1>Countries </h1>
        {
            isLoading && <h1>Loading....</h1>
        }
        {
            !isLoading && (
                data.map((c)=>{
                    return <li>{c.name.common}</li>
                })
            )
        }
    </div>
  )
}

export default Countries