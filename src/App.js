import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useContext, useMemo, useCallback,useReducer,useId,useLayoutEffect,useTransition,useDeferredValue} from "react";

function App() {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text);

    return (
        <div>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <p>즉시 값: {text}</p>
            <p>지연 값: {deferredText}</p>
        </div>
    );
}
export default App;
