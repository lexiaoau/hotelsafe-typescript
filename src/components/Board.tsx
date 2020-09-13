import React, { useCallback } from 'react';
import "./Board.css";
import { Square } from "./Square";
import { useDispatch } from "react-redux";
import {
    CHANGE_PIN_ADD,
    CHANGE_PIN_CLEAR,
    CHANGE_PIN_TOGGLE_LOCK,
  } from '../actions'



export const Board: React.FC = () => {
    const dispatch = useDispatch();

    const onpinclear = useCallback(
        () => dispatch({ type:  CHANGE_PIN_CLEAR }),
        [dispatch]
    );

    const onlockchange = useCallback(
        () => dispatch({ type:  CHANGE_PIN_TOGGLE_LOCK }),
        [dispatch]
    );

    const onaddnumber = useCallback(
        (val) => dispatch({ type:  CHANGE_PIN_ADD , payload:  val}),
        [dispatch]
    );

    return (
        <div className="board">
            <div className="firstRow">
                {/** ?? any way to get value rather than hard code? */}
                <Square value="1" onClick={() => onaddnumber("1")} />
                <Square value="2" onClick={() => onaddnumber("2")} />
                <Square value="3" onClick={() => onaddnumber("3")} />
            </div>
            <div className="secondRow">
                <Square value="4" onClick={() => onaddnumber("4")} />
                <Square value="5" onClick={() => onaddnumber("5")} />
                <Square value="6" onClick={() => onaddnumber("6")} />
            </div>
            <div className="thirdRow">
                <Square value="7" onClick={() => onaddnumber("7")} />
                <Square value="8" onClick={() => onaddnumber("8")} />
                <Square value="9" onClick={() => onaddnumber("9")} />
            </div>
            <div className="fourthRow">
                <Square value="CLR" onClick={onpinclear} />
                <Square value="0" onClick={() => onaddnumber("0")} />
                <Square value="ENTER" onClick={onlockchange} />
            </div>
        </div>
    );
};

export default Board;
