import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const eventDate = new Date("2025-03-14T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        UNIVERSO'25 Begins In!
      </h1>
      <p className="-mb-10 text-center text-3xl md:text-6xl font-bold gradient-text mt-4">
        {timeLeft.days} D : {timeLeft.hours} H : {timeLeft.minutes} Min :{" "}
        {timeLeft.seconds} S
      </p>
    </div>
  );
}
