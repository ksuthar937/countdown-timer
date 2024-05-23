import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import { getDifferance, getTimerData } from "./utils/helper";

function App() {
  const [isRunning, setIsRunning] = useState(false);
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
  };

  useEffect(() => {
    if (diff >= 0) {
      const { days, hours, minutes, seconds } = getTimerData(diff);
      console.log(seconds);
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
        {isRunning ? (
          <Button>Cancel Timer</Button>
        ) : (
          <Button>Start Timer</Button>
        )}
      </form>
      <div className="timer">
        <Card value={timer.days} type="Days" />
        <Card value={timer.hours} type="Hours" />
        <Card value={timer.minutes} type="Minutes" />
        <Card value={timer.seconds} type="Seconds" />
      </div>
    </main>
  );
}

export default App;
