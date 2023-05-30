

import {useMemo, useState} from 'react'
function App() {
  const [a, setA] = useState(10)
  const [b, setB] = useState(20)
  const [c, setC] = useState(30)
  
  var addition=useMemo(()=>{
    alert("HI")
    return a+b
  },[a,b])

  return (
    <div>
      <input type="text" onChange={(e)=>{setC(e.target.value)}}/>
      <br/>
      <input type="text" onChange={(e)=>{setA(+e.target.value)}}/>
      <br/>
      <input type="text" onChange={(e)=>{setB(+e.target.value)}}/>
      <h1>{addition}</h1>

    </div>
  );
}

export default App;
// useState,useEffect,useRef,useMemo,useCallback
// React.memo