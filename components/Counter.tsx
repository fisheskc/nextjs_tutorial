"use client";
import { useState } from 'react'

const Counter = () => {
    // We can use the default value, which is zero.
    const [count, setCount] = useState(0)
    return (
    // We will set up some custom width
    // As a side note in tailwind, if you want to provide some custom values
    // w-[100px] - we just use square brackets. You can use this with other CSS properties as well
    // We provide the value & we are looking for the count.
    // We provide the callback function where we use the setCount & the current count plus one
    <div className="flex flex-col items-center w-[100px]">
      <p className="text-5x1 font-bold">{count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 rounded text-white px-4 py-3 mt-4">increment</button>
    </div>
  )
}

export default Counter
