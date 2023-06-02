import React from 'react'

function Countries() {
    const [country, setCountry] = React.useState(null)
    function handleCountries(e){
        setCountry(e.target.value)
    }
    return (
    <div className='border border-2 border-info m-2 p-2'>
        <h1>Countries</h1>
        <select onChange={handleCountries}>
            <option value={null} disabled selected>Please Select Country</option>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="Srilanka">Srilanka</option>
        </select>
        <h1>Selected Country:{country}</h1>
    </div>
  )
}

export default Countries