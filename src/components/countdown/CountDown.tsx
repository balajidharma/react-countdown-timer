import { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function CountDown() {
  const formValues = useSelector((state: RootState) => state.countdown);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(0);

  useEffect(() => {
    if (formValues.endtime) {
      // Calculate the difference between end time and current time in milliseconds
      const endTimeInMs = new Date(formValues.endtime).getTime();
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
  }, [formValues.endtime]);

  const formatTime = (time: number) => {
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
    const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds, milliseconds };
  };
  const { days, hours, minutes, seconds, milliseconds } = formatTime(time);

  return (
    <div>
      <h1>{formValues.name}</h1>
      <div className="countdown">
        <div className="timer-container">
          <div className="timer-box">
            <h1 title="Days">{days}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Hours">{hours}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Minutes">{minutes}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Seconds">{seconds}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1 title="Milliseconds">{milliseconds}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}