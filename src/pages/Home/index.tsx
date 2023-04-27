import { useEffect, useRef, useState } from "react";
import { Container, InputsTime, Time, TimeButton, TimeInput } from "./styles";
import { Button } from "react-bootstrap";

export function Temporizador() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inputMinutes, setInputMinutes] = useState("3");
  const [inputSeconds, setInputSeconds] = useState("0");
  const [isFinished, setIsFinished] = useState(false);

  const intervalRef = useRef(null);

  const handleInputMinutesChange = (e) => {
    setInputMinutes(e.target.value);
  };

  const handleInputSecondsChange = (e) => {
    setInputSeconds(e.target.value);
  };

  const startTimer = () => {
    const minutesNum = parseInt(inputMinutes);
    const secondsNum = parseInt(inputSeconds);
    if (isNaN(minutesNum) || isNaN(secondsNum)) {
      setMinutes(0);
      setSeconds(0);
      setIsFinished(false);
      return;
    }
    const totalSeconds = minutesNum * 60 + secondsNum;
    if (!isPaused || totalSeconds > 0) {
      setIsPaused(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds === 0) {
            setMinutes((minutes) => {
              if (minutes === 0) {
                clearInterval(intervalRef.current);
                setMinutes(3);
                setSeconds(0);
                setIsPaused(true);
                setInputMinutes("3");
                setInputSeconds("0");
                return minutes;
              } else {
                return minutes - 1;
              }
            });
            return 59;
          } else {
            return seconds - 1;
          }
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsPaused(true);
    setMinutes(3);
    setSeconds(0);
    setInputMinutes("3");
    setInputSeconds("0");
    setIsFinished(false);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    setMinutes(parseInt(inputMinutes));
    setSeconds(parseInt(inputSeconds));
  }, [inputMinutes, inputSeconds]);

  return (
    <Container>
      <Time>
        <strong>
          {" "}
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </strong>
      </Time>
      <InputsTime>
        <label>
          Minutos
          <TimeInput
            type="number"
            value={inputMinutes}
            onChange={handleInputMinutesChange}
       
          />
        </label>
        <label>
          Segundos
          <TimeInput
            type="number"
            value={inputSeconds}
            onChange={handleInputSecondsChange}
         
          />
        </label>
      </InputsTime>
      <TimeButton>
        <Button
          onClick={startTimer}
          disabled={
            !isPaused &&
            inputMinutes === "" &&
            inputSeconds === "" &&
            !isFinished
          }
          variant="success"
        >
          Iniciar
        </Button>
        <Button
          variant="primary"
          onClick={pauseTimer}
          disabled={isPaused || isFinished}
        >
          Pausar
        </Button>{" "}
        <Button variant="danger" onClick={resetTimer}>
          Zerar
        </Button>{" "}
      </TimeButton>
    </Container>
  );
}
