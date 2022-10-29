import './App.css';
import HomeRouting from "./Components/routing/HomeRouting";
import {useCallback, useState} from "react";
import Spinner from "./Components/scren/spinner/Spinner";

function App() {
    const [statusRendering,setRendering] = useState(false);
    const setter = useCallback(()=>{
        let timer = setTimeout(()=>{
            setRendering(true)
            clearTimeout(timer);
        },5000)
    },[])
  return (
    <div className="App">
        {(window.addEventListener('load',setter))}
        {statusRendering === true?<HomeRouting/>:<Spinner/>}
    </div>
  );
}
export default App;
