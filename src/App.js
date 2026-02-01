import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useContext, useMemo, useCallback,useReducer,useId} from "react";

function App() {
    const id = useId();

    return(
        <div>
        <label htmlFor="name">이름</label>
        <input id="name"/>
        </div>
    )
}


export default App;
