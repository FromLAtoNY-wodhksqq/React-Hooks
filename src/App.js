import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
    const[time,setTime] = useState(1);

    const handleClick = (e) => {
        let newTime;
        if(time >=23){
            newTime = 0;
        }
        else{
            newTime = time+1;
        }
        setTime(newTime);
    };
    return (
      <div>
        <span>현제 시각:{time}시</span>
        <button onClick={handleClick}>Update</button>
      </div>
  );
}

export default App;
