import React, { useState, useEffect } from 'react'

function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }

  const dateString = time.toLocaleDateString("en-US", options)

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-500 ">
      <div className=' bg-blue-500 shadow-lg   p-40 rounded-md text-white  '>
        <h1 className="font-light text-5xl ml-14">{time.toLocaleTimeString()}</h1>
        <p className="mt-5 text-2xl">{dateString}</p>
      </div>
    </div>
  )
}

export default DigitalClock


