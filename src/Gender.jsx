import React,{useState} from 'react'

function Gender() {
    const [gender, setGender] = useState(null)
    function handleGender(e){
        setGender(e.target.value)
    }
    return (
        <div className='border border-2 border-danger m-2 p-2'>
            <h1>Gender</h1>
            <input type="radio" onChange={handleGender} value='male' name='gen'/>:Male
            <input type="radio" onChange={handleGender} value='female' name='gen'/>:Female
            <input type="radio" onChange={handleGender} value='others' name='gen'/>:Others
            <h1>Selected Gender:{gender}</h1>
        </div>
    )
}

export default Gender