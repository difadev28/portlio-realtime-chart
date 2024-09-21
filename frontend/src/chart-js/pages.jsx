import {useState,useEffect} from "react"
import io from "socket.io-client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function ChartJSComponent() {
  return (
    <>
      <RealtimeChart/>
    </>
  )
}

const RealtimeChart = () => {
  const socket = io("http://127.0.0.1:5000")
  const [dataPoints, setDataPoints] = useState([])
  useEffect(() => {
    socket.on("stockData", (data) => {
      setDataPoints(currentPoints => {
        if(currentPoints.length > 10) {
          currentPoints.splice(0, 1)
        }
        return [...currentPoints, data]
      })
    })
  }, [])

  const chartData = {
    labels: dataPoints.map(point => point.day),
    datasets: [
      {
        label: "Stock Price",
        data: dataPoints.map(point => point.price),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)"
      }
    ]
  }

  return (
    <div style={{width:"1000px", height: "400px"}}>
      <Line data={chartData}/>
    </div>
  )
}

export default ChartJSComponent
