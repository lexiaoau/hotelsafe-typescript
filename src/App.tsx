import React from 'react';
import './App.css';
import logo from './hotelsafe.jpg'
import { NumberPad } from "./components/NumberPad";

// import { Counter } from "./Counter";

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div className="App" >
      <img src={logo} alt="Logo" />
      <NumberPad />
      
       {/* <TextField  person={{"firstName" :'tom' , "lastName":'lucas'}}  /> */}
      {/* <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter> */}
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
