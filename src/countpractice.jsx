import { useEffect, useState } from "react"
import React  from "react"

const CountPractice=()=>{
  // useEffect
  useEffect(()=> {
    console.log("Button Clicked")
    console.log("state changed")
  },[])
 // useState() => state lai manage garxa/change garcha
  const [count, setCount] =useState(0)
 
return(
  <>
  <h1 className="text-2xl text-red-500 justify-center">hello React Developer</h1>
  <div class="flex justify-center">
  <button onClick={()=>setCount(count+1)} class="px-3 py-3 bg-amber-500 rounded-1.5xl">Increase</button>
  <h2 class='text-2xl'>{count}</h2>
  <button onClick={()=>setCount(count-1)} class="px-3 py-3 bg-amber-200 rounded-1.5xl">Decrease</button>
  </div>
  </>



)
}
export default CountPractice

//useState, useEffect
