import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function Countries() {
    var [countries,setContries]=useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setContries([...res.data])
        })
    },[])
    return (
        <div className='border border-5 border-danger m-2 p-2'>
            <h1>Countries</h1>
            <div className='d-flex flex-wrap'>
                <ul className='w-25'>
                    {
                        countries.map((c)=>{
                            return <li>{c.name.common}</li>
                        })
                    }
                </ul>
                <div className='w-50'>
                    <h1>Country Details</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Countries