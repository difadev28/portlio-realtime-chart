import express from 'express'
import http from "http"
import * as socketIo from "socket.io"
import chartRouter from './routes/chart.routes.js'


const app = express()
const PORT = 5000;
const httpServer = http.createServer(app)
const io = new socketIo.Server(httpServer)
let lastPrice = Math.random() * 100 + 50;
let day = 0;

io.on("connection", (socket) => {
    const interval =  setInterval(() =>   {
      const changePercent = 2 * Math.random();
      let changeAmount = lastPrice * (changePercent / 100)
      changeAmount  *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
      lastPrice += changeAmount
      const dataRecharts = {
        name: 2,
        x: Math.random() * 10,
        y: Math.random() * 10,
      }
      socket.emit('message', dataRecharts)
      socket.emit('stockData', {price: lastPrice, day: ++day})
    }, 2000)
    socket.on('disconnect', () => {
        clearInterval(interval)
    })
})

app.use(express.json())
app.use("/api/chart", chartRouter)
httpServer.listen(PORT, () => console.log(`Server running on port 5000`))