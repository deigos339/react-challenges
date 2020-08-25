import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [stateText, setStateText] = useState({value:""});
  console.log(stateText);

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h4>  
            {stateText.value} 
          </h4>
          <input 
           type="text" 
           placeholder="write whatever you want"
           onKeyUp={(e)=>setStateText({ value: e.target.value})}
          >
          </input>
        </div>
      </header>
    </div>
  );
}

export default App;
