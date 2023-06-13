import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useGetAllCountriesQuery } from '../../services/countriesApi'
import { Link } from 'react-router-dom';
function Countries() {
    var {data,isLoading}=useGetAllCountriesQuery();
    
  return (
    <div className='border border-2 border-info m-2 p-2'>
        <h1>Countries</h1>
        <ul>
            {isLoading && (
                        <>
                            <div class="spinner-grow" style={{width:"4rem",height:"4rem"}} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow" style={{width:"3rem",height:"3rem"}} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow" style={{width:"2rem",height:"2rem"}} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow" style={{width:"1rem",height:"1rem"}} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                           
                        </>
                        )
            }
            {
                !isLoading && data.map((c)=>{return <li>
                    <Link to={`/countryDetails/${c.name.common}`}>{c.name.common}</Link>
                    </li>})
            }
        </ul>
    </div>
  )
}

export default Countries