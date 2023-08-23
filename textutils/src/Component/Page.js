
import React, { useState, useEffect } from 'react'

function Page() {
    const [count, setCount] =useState(0);
    const [data, setData] =useState(100);
    useEffect ( () => {
       console.log("hi");
    },
   [count]
    )
    useEffect ( () => {
        console.log("hi");
     },
   [data]
     )
    return (
    
      <div>
        <h1> useEffect</h1>
        <h3>count: {count}</h3>
        <h3>count: {data}</h3>
        <button onClick={() => setCount(count+1)}>Update Now</button>
        <button  onClick={() => setData(data-1)}>Decreasse now</button>
        </div>
    )
  }
  

export default Page;