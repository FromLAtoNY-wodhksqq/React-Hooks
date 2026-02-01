
import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect,useRef,useContext,useMemo} from "react";

function App() {
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);

    const sum= useMemo(() => {
        return a + b;
    }, [a, b]);

    const sub = a - b;

    return (
        <div>
            <h1>a: {a}</h1>
            <h1>b: {b}</h1>
            <h1>Sum: {sum}</h1>
            <h1>Sub: {sub}</h1>

            <button onClick={() => setA(a + 1)}>a 증가</button>
            <button onClick={() => setB(b + 1)}>b 증가</button>
        </div>
    );
}

export default App;
