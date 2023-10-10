import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const dateOptions = {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const formattedTime = time.toLocaleTimeString(undefined, timeOptions);
  const formattedDate = time
    .toLocaleDateString(undefined, dateOptions)
    .replace(/\//g, ".");

  return (
    <div className="space_btw">
      <div className="clock">{formattedTime}</div>
      <div className="date">{formattedDate}</div>
    </div>
  );
}

export default Clock;
