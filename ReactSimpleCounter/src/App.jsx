import SimpleCounter from "./SimpleCounter"
import { useEffect, useState } from "react"
import calculateSeconds from "././timeFunction";

function App() {
  const [counter, setCounter] = useState(0);

useEffect(() =>{
  const interval = setInterval(()=> {
    setCounter(counter => counter + 1)
  }, 1000);



  return () => clearInterval(interval) 
}, [counter])


  return (
    <>
<SimpleCounter
  thousandsDigit = {calculateSeconds(counter, 1000)}
  hundredsDigit = {calculateSeconds(counter, 100)}
  tensDigit = {calculateSeconds(counter, 10)}
  onesDigit = {calculateSeconds(counter, 1)}
/>


    </>
  )
}

export default App
