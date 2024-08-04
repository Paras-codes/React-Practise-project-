import { useState } from "react";  

function App() {
  const [counter, setCounter] = useState(0);
 
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)} >Add</button> {" "}
     <button onClick={()=>setCounter(counter-1)}>Dec</button>
    </>
  )
}

export default App
