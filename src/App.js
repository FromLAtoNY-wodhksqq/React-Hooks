import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useContext, useMemo, useCallback,useReducer,useId,useLayoutEffect,useTransition} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    const [tran, stran] = useTransition();

    const handleClick = () => {
        setCount(c => c + 1);

        stran(() => {
            const bigList = [];
            for (let i = 0; i < 10000; i++) {
                bigList.push(i);
            }
            setList(bigList);
        });
    };

    return (
        <div>
            <button onClick={handleClick}>증가</button>
            <p>count: {count}</p>
            {tran && <p>로딩중</p>}
        </div>
    );
}

export default App;
