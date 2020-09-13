import React from "react";
import "./App.css";
import StoredState from "./components/commonTypes/state";
import { useSelector } from "react-redux";
import Board from "./components/Board";

const App: React.FC = () => {
    const enteredPin = useSelector((state: StoredState) => state.enteredPin);
    const errorMsg = useSelector((state: StoredState) => state.errorMsg);
    const isLocked = useSelector((state: StoredState) => state.isLocked);

    let lightColor = isLocked ? "red" : "green";

    return (
        <div className="App">
            <div className="buttondiv">
                <Board />
            </div>
            <div className="rightdiv">
                <div className="textdiv">
                    <input className="textinput" value={enteredPin} readOnly />
                    <label>{errorMsg}</label>
                </div>
                <div></div>
                <div className="checkboxdiv">
                    {/* use svg to draw a circle, how could it be responsive?? */}
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="50%"
                            cy="50%"
                            r="10"
                            stroke="black"
                            fill={lightColor}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};


export default App;
