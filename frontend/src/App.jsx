import {useState} from "react"
import ReChartsComponent from "./recharts/pages";
import ChartJSComponent from "./chart-js/pages"
import './App.css'
function App() {
  const [stateChart, setStateChart] = useState('chartJS');

  const handleClickBTN = (type) => {
    setStateChart(type)
  }

  return (
    <>
      <div style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
        <button style={{marginRight:'8px', border:`1px solid ${stateChart === "chartJS" ? "gray" : "white"}`}} onClick={() => {handleClickBTN("chartJS")}}>
          Chart JS
        </button>
        <button style={{border:`1px solid ${stateChart === "recharts" ? "gray" : "white"}`}} onClick={() => {handleClickBTN("recharts")}}>
          Recharts
        </button>
      </div>
      {
        stateChart === "chartJS" ? <ChartJSComponent /> : <ReChartsComponent/>
      }
    </>
  )
}

export default App
