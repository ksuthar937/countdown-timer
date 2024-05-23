import { useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import { getDifferance, getFormatedTime } from "./utils/helper";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [dateTime, setDateTime] = useState("");

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  console.log(dateTime);

  // const curr = getFormatedTime(new Date());
  // const sel = getFormatedTime(dateTime);

  // console.log(curr);
  // console.log(sel);

  console.log(getDifferance(dateTime));

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
          onChange={(e) => setDateTime(e.target.value)}
          disabled={isRunning}
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
