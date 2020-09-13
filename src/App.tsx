import React from 'react';
import { TextField } from './TextField';
// import './App.css';

// import { Counter } from "./Counter";

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div>
       <TextField  person={{"firstName" :'tom' , "lastName":'lucas'}}  />
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
