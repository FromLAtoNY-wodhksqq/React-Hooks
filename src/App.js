import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useContext, useMemo, useCallback,useReducer,useId,useLayoutEffect,useTransition,useDeferredValue,useImperativeHandle} from "react";

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} />;
});

function App() {
    const ref = useRef();

    return (
        <div>
            <Input ref={ref} />
            <button onClick={() => ref.current.focus()}>
                포커스
            </button>
        </div>
    );
}
export default App;
