import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useContext, useMemo, useCallback,useReducer} from "react";
const numb = {
    a: 10,
    b: 20,
};


function reducer(state, action) {
    switch (action.type) {
        case "A증가":
            return { ...state, a: state.a + 1 };
        case "B증가":
            return {...state, b: state.b + 1 };
        default:
            return state;
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, numb);
    const { a, b } = state;

    const sum = useCallback(() => {
        return a + b;
    }, [a, b]);

    const sub = a - b;

    return (
        <div>
            <h1>a: {a}</h1>
            <h1>b: {b}</h1>
            <h1>Sum: {sum()}</h1>
            <h1>Sub: {sub}</h1>

            <button onClick={() => dispatch({ type: "A증가" })}>
                a 증가
            </button>
            <button onClick={() => dispatch({ type: "B증가" })}>
                b 증가
            </button>
        </div>
    );
}

export default App;
