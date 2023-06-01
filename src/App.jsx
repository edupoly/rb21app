
import { createContext } from 'react';
import First from './First';

export var UserContext=createContext('UserContext');

function App() {
  var name='Gopi'
  return (
    <UserContext.Provider value={name}>
      <div style={{border:'2px solid red',padding:'5px',margin:'5px'}}>
          <h1>App:{name}</h1>
          <First></First>
      </div>
    </UserContext.Provider>
  );
}

export default App;
