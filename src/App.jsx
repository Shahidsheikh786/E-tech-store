
import "./Style.scss"
import Header from "./Components/Header"
import Main from "./Components/Main"
import { useState } from "react";


const App = () => {
  const [inputValue, setInputValue] = useState("");
  
  return (
  <div>
  <Header setInputValue={setInputValue}/>
  <Main setInputValue={setInputValue} inputValue={inputValue}/>
  </div>
  )
}

export default App;