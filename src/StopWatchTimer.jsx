import React,{useState, useEffect} from 'react'
import "./StopWatchTimer.css"

export default function StopWatchTimer() {
    const[sec, setSec] = useState(0)
    const[running, setRunning] = useState(false)
    const[message, setMessage] = useState("")

    useEffect(()=>{
        let intervalId
        if(running)
        {
            intervalId = setInterval(()=>{
                setSec((prev)=>prev+1)
            }, 1000)
        }
        return ()=> clearInterval(intervalId);
    }, [running])

    const handleStart = ()=>{
        setRunning(true)
        setMessage("The timer has been started ▶ ")
    }

    const handleStop = ()=>{
        setRunning(false)
        setMessage("The timer has been Pause ⏸ ")
    }

    const handleReset = ()=>{
        setSec(0);
        setRunning(false);
        setMessage("The timer has been Reset ↻ ")
    }

    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    const time =
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);


return (
    <div>
        <div className="outer">
            <div className="inner">
                <h2> Time :  {time}</h2>
                <button style={{backgroundColor: "#2563eb"}} onClick={handleStart}>Start</button>
                <button style={{backgroundColor: "#ea580c"}} onClick={handleStop}>Pause</button>
                <button style={{backgroundColor: "#64748b" }} onClick={handleReset}>Reset</button>
                <h5>{message}</h5>
            </div>
        </div>
    </div>
)
}
