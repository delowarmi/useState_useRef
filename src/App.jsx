
import { useState ,useRef} from 'react'
import './App.css'
// useState function {sompunno page k render kore }
function App() {
  let [count,setCount] =useState(0);

  let countRef=useRef(0)
// use state 
let handleClick =()=>{
  count++
  setCount(count)
  // use state  
    }
  // useRef 
  let handleClick2=()=>{
    console.log(countRef.current++)
  }
  // useRef 

  return (
    <>
    {/* useState  */}
    <h1>useState</h1>
    <h3>{count}</h3>
    <button onClick={handleClick}>Click</button>
    {/* useState  */}

    {/* useRef   */}
    <h1>useRef</h1>
    <h3>{countRef.current}</h3>
    <button onClick={handleClick2}>Click</button>
      
    {/* useRef  */}
      
    </>
  )
 
 
}
// useState function

// useRef function single akta part k render kore
 

// useRef function 

export default App
