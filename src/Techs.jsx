import React from 'react'

function Techs() {
    const [techs, setTechs] = React.useState([])
    function handleTechs(e){
        if(e.target.checked===true){
            setTechs([...techs,e.target.value])
        }
        else{
            var temp =[...techs];
            temp = temp.filter((t)=>{
                if(t===e.target.value){
                    return false
                }
                else{
                    return true
                }
            })
            setTechs([...temp])
        }
        
    }
    return (
    <div className='border border-2 border-info m-2 p-2'>
        <h1>Techs</h1>
        <input type="checkbox" value='nodejs' onChange={handleTechs}/>:Nodejs
        <input type="checkbox" value='angular' onChange={handleTechs}/>:Angular
        <input type="checkbox" value='reactjs' onChange={handleTechs}/>:ReactJS
        <input type="checkbox" value='expressjs' onChange={handleTechs}/>:Expressjs
        <input type="checkbox" value='mongoDB' onChange={handleTechs}/>:MongoDB
        <h1>{techs}</h1>
    </div>
  )
}

export default Techs