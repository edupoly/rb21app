import React from 'react'

function Controlled() {



    var rf1 = React.useRef();
    var rf2 = React.useRef();
    var rf3 = React.useRef();

    React.useEffect(()=>{
        rf1.current.focus();
    },[])

    function add(){
        var n1 = +rf1.current.value;
        var n2 = +rf2.current.value;
        var result = n1+n2;
        document.getElementById("res").innerHTML=result;
    }

    function checkEnter(e){
        if(e.key==='Enter'){
            rf2.current.focus();
        }
    }
    function checkEnter2(e){
        if(e.key==='Enter'){
            rf3.current.focus();
        }
    }
  return (
    <div className='border border-2 border-success m-2 p-4'>
        <h1>Controlled Component</h1>
        <input type="text" ref={rf1} onKeyUp={checkEnter}/><br />
        <input type="text" ref={rf2} onKeyUp={checkEnter2}/><br />
        <button onClick={add} ref={rf3}>Add</button>
        <h1>Result:<span id='res'></span></h1>
    </div>
  )
}

export default Controlled