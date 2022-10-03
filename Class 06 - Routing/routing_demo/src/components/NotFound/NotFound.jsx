import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    // setTimeout(() => {
    //   navigate("/");
    // }, 5000);

    if (secondsLeft <= 0) {
      navigate("/");
    }

    const countdown = setInterval(() => {
      console.log("seconds left", secondsLeft);
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    // show them first without clearing the interval
    return () => clearInterval(countdown);
  }, [navigate, secondsLeft]);

  return (
    <>
      <h1 style={{ color: "red", fontSize: "2rem" }}>Page not found!!</h1>
      <h3>You will get redirected in {secondsLeft} seconds</h3>
    </>
  );
};
