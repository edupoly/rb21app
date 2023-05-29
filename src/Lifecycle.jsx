import React from 'react'

function Lifecycle() {
    console.log("First Line of Component")
    
    const [count, setCount] = React.useState(0)
    const [a,setA]=React.useState(23)

    React.useEffect(()=>{console.log("no dep array Use effect called")})
    React.useEffect(()=>{console.log("empty dep array Use effect called")},[]);
    React.useEffect(()=>{console.log("How are you gopi")},[a])
    React.useEffect(()=>{console.log("How are you sahiti")},[count])

    return (
        <div className='border border-2 border-success m-2 p-4'>
            <h1>Lifecycle</h1>
            <h1>Count:{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Inc</button>
            <button>Dec</button>
            <br />
            <input type="text" onKeyUp={(e)=>{setA(e.target.value)}}/>
            <h1>{a}</h1>
            {console.log("Inside template")}

        </div>
  )
}

export default Lifecycle