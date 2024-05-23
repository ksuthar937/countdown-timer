import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import { getDifferance, getTimerData } from "./utils/helper";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [diff, setDiff] = useState(0);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleInputTime = (e) => {
    const newDateTime = e.target.value;
    setDateTime(newDateTime);
    setDiff(getDifferance(newDateTime));
    setIsCompleted(false);
  };

  useEffect(() => {
    if (diff >= 0) {
      const { days, hours, minutes, seconds } = getTimerData(diff);
      setTimer({ days, hours, minutes, seconds });
    }
  }, [diff]);

  useEffect(() => {
    let intervalId;
    if (isRunning && diff > 0) {
      intervalId = setInterval(() => {
        setDiff((prev) => {
          const newDiff = prev - 1;
          return newDiff >= 0 ? newDiff : 0;
        });
      }, 1000);
    } else if (isRunning && diff === 0) {
      setIsCompleted(true);
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, diff]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRunning((prev) => !prev);
  };

  return (
    <main>
      <h1 className="title">
        Countdown <span>Timer</span>
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="datepicker"
          type="datetime-local"
          name="datetime"
          value={dateTime}
          onChange={handleInputTime}
          disabled={isRunning}
          required
        />
        {diff < 0 ? (
          <h4 className="warning">
            Please select a date and time in the future. Past selections are not
            permitted.
          </h4>
        ) : isRunning ? (
          <Button>Cancel Timer</Button>
        ) : (
          <Button>Start Timer</Button>
        )}
      </form>
      {!isCompleted ? (
        timer.days >= 100 ? (
          <h4 className="warning">Selected time is more than 100 days</h4>
        ) : (
          <div className="timer">
            <Card value={timer.days} type="Days" />
            <Card value={timer.hours} type="Hours" />
            <Card value={timer.minutes} type="Minutes" />
            <Card value={timer.seconds} type="Seconds" />
          </div>
        )
      ) : (
        <div>
          <h4 className="warning">
            Countdown Over! Whats next on your adventure?
          </h4>
          <audio autoPlay>
            <source src="tune.mp3" type="audio/ogg" />
          </audio>
        </div>
      )}
    </main>
  );
}

export default App;
