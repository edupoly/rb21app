
import { useEffect, useRef } from 'react';
import './App.css';
import Child from './Child';

function App() {
  var ref1=useRef();
  var ref2=useRef();
  var ref3=useRef();
  var ref4=useRef();
  useEffect(()=>{
    ref1.current.focus();
  },[])
  function checkEnter(e){
    if(e.key==='Enter'){
      ref2.current.focus();
    }
  }
  function checkEnter2(e){
    if(e.key==='Enter'){
      ref3.current.focus();
    }
  }
  return (
    <div style={{border:'2px solid red',padding:'10px',margin:'10px'}}>
      <input type="text" ref={ref1} onKeyUp={checkEnter}/><br/>
      <input type="text" ref={ref2} onKeyUp={checkEnter2}/><br/>
      <Child ref={[ref3,ref4]} ></Child>
    </div>
  );
}

export default App;
