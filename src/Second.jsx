import React from 'react'
import Third from './Third'
import { UserContext } from './App'
function Second() {
  return (
    <div style={{border:'2px solid green',padding:'5px',margin:'5px'}}>
        <h1>Second</h1>
        <UserContext.Consumer>
            {
                (us)=>{
                    return (<h1>{us}</h1>)
                }
            }
        </UserContext.Consumer>
        <Third></Third>
    </div>
  )
}

export default Second