import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";


function App() {
    const[hour,setHour] = useState(0);
    const[minute,setMinute] = useState(0);
    const[message,setMessage] = useState("");

    useEffect(() => {
        setMessage("Time changed!!");

        const timer = setTimeout(() => {
            setMessage("");
        }, 1000);

        return () => clearTimeout(timer);
    }, [hour, minute]);

    const hourChange = (e) => {
        let newHour;

        if(hour >=23){
            newHour = 0;
        }
        else {
            newHour = hour + 1;
        }

        setHour(newHour);

    };

    const minuteChanged=()=>{
        let newMinute;

        if(minute >=59){
            newMinute = 0;
        }
        else{
            newMinute = minute+1;
        }

        setMinute(newMinute);
    }
    return (
      <div>
        <span>현재 시각:{hour}시 {minute}분</span>
        <button onClick={hourChange}>Hour</button>
            <button onClick={minuteChanged}>Minute</button>
          <div>{message}</div>
      </div>

  );
}

export default App;
