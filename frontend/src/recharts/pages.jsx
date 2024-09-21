import {useState,useEffect} from "react"
import socketIOClient from "socket.io-client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ReChartsComponent() {
  const [data, setData] = useState([{
    name:0,
    x: 0,
    y: 0
  }])

  useEffect(() => {
    // 5173
    const socket = socketIOClient("http://127.0.0.1:5000")
    socket.on("message", (response) => {
      setData(data => {
        if(data.length > 10) {
          data.splice(0, 1)
        }
        response.name = data[data.length - 1].name + 1
        return [...data, response]
      })
    })
  }, [])

  return (
    <>
      <LineChart
        width={1000}
        height={400}
        data={data} 
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={76} />
        <YAxis angle={8} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="x"
          stroke="#8884d8"
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#387908"
          strokeDasharray="5 5"
        />
      </LineChart>
    </>
  )
}

export default ReChartsComponent
