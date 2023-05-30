import React, { forwardRef } from 'react'

var Child=forwardRef((props,refs)=>{
    return (
      <div style={{border:'2px solid blue',padding:'10px',margin:'10px'}}>
          <h1>Child</h1>
          <input type="text" ref={refs[0]}/>
      </div>
    )
  })

export default Child