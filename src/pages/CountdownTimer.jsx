import React, { useEffect, useState } from 'react';

function CountDownTimer() {
  const [isRun, setIsRun] = useState(false);
  const [inputSeconds, setInputSeconds] = useState(0); 
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    let intervalPom;

    if (isRun && remainingSeconds > 0) {
      intervalPom = setInterval(() => {
        setRemainingSeconds((prevSecond) => {
          if (prevSecond > 1) {
            return prevSecond - 1; 
          } else {
            alert('Vaqt tugadi');
            clearInterval(intervalPom);
            setIsRun(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalPom);
    };
  }, [isRun, remainingSeconds]);

  const handleStart = () => {
    if (inputSeconds > 0) {
      setRemainingSeconds(inputSeconds); 
      setIsRun(true);
    } else {
      alert('Iltimos, musbat son kiriting!');
    }
  };

  return (
    <div className="bg-blue-600 p-[407px] flex  items-center justify-center">
      <h1 className="text-white text-center text-3xl mb-4">Timer</h1>
      <div className="border flex flex-row p-5 w-[400px] mx-auto rounded-xl bg-gray-700">
        <input
          type="number"
          className="bg-gray-300 p-[15px] rounded-md text-xl mr-2 flex-1"
          onChange={(e) => {
            const value = Number(e.target.value);
            setInputSeconds(value > 0 ? value : 0); 
          }}
          placeholder="Enter seconds"
        />
        <button
          className="bg-blue-600 text-white px-5 py-3 rounded-md text-xl"
          onClick={handleStart}
        >
          Start
        </button>
      </div>
      <div className="text-center mt-5 text-white text-2xl">
        {isRun
          ? `Time remaining: ${remainingSeconds} seconds`
          : remainingSeconds > 0
          ? `Last entered: ${inputSeconds} seconds`
          : 'Timer stopped or completed.'}
      </div>
    </div>
  );
}

export default CountDownTimer;
