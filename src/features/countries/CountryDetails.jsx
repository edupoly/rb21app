import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCountryDetailsByNameQuery } from '../../services/countriesApi';

function CountryDetails() {
    var {cname} = useParams();
    var {isLoading,data}=useGetCountryDetailsByNameQuery(cname);
    console.log(data)
  return (
    <div>
        <h1>CountryDetails</h1>
        {
            isLoading && (<h1>Please wait....</h1>)
        }
        {
            !isLoading && (
                <>
                    <h1>{data[0].name.common}</h1>
                    <img src={data[0].flags[0]} width="200px" alt="" />
                </>
            )

        }
    </div>
  )
}

export default CountryDetails