import { useState, useRef, useEffect } from "react";

interface CountDownTimerProps {
  endtime: string
}

export default function CountDownTimer({endtime}: CountDownTimerProps) {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(0);

    useEffect(() => {
        if (endtime) {
          // Calculate the difference between end time and current time in milliseconds
          const endTimeInMs = new Date(endtime).getTime();
          const currentTimeInMs = Date.now();
          const timeDifference = Math.max(endTimeInMs - currentTimeInMs, 0); // Ensure non-negative difference
    
          // Set the initial time to the calculated difference
          setTime(timeDifference);
    
          intervalRef.current = setInterval(() => {
            // Decrement time by 1 second (1000 milliseconds)
            setTime((prevTime) => Math.max(prevTime - 10, 0)); // Ensure non-negative time
          }, 10);
        } else {
          clearInterval(intervalRef.current);
        }
    
        return () => clearInterval(intervalRef.current);
      }, [endtime]);
    

    const formatTime = (time: number) => {
        const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
        const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
        const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds, milliseconds };
    };
    const { days, hours, minutes, seconds, milliseconds } = formatTime(time);

    return(
        <div className="countdown">
        <div className="timer-container">
          <div className="timer-box">
            <h1 title="Days">{days}</h1>
            <span>Days</span>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Hours">{hours}</h1>
            <span>Hours</span>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Minutes">{minutes}</h1>
            <span>Minutes</span>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Seconds">{seconds}</h1>
            <span>Seconds</span>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Milliseconds">{milliseconds}</h1>
            <span>ms</span>
          </div>
        </div>
      </div>
    )
}