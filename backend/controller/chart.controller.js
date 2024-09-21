
export const chartJS = async (req, res) => {
  console.log("Chart")
  const changePercent = 2 * Math.random();
  let changeAmount = lastPrice * (changePercent / 100)
  changeAmount  *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  lastPrice += changeAmount
  const data = {price: lastPrice, day: ++day}
  socketIOParameterData("stockData", data)
}


export const recharts = (_req, _res) => {
    const data = {
      name: 2,
      x: Math.random() * 10,
      y: Math.random() * 10,
    }
    socketIOParameterData("message", data)
}


const socketIOParameterData = (triggerMessage, data) => {
  console.log("Sa")
  // io.on("connection", (socket) => {
  //   console.log("Sm")
  //   const interval =  setInterval(() =>   {
  //     console.log("hit")
  //     const changePercent = 2 * Math.random();
  //     let changeAmount = lastPrice * (changePercent / 100)
  //     changeAmount  *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  //     lastPrice += changeAmount
  //     socket.emit(triggerMessage, data)
  //   }, 2000)
  //   socket.on('disconnect', () => {
  //     console.log("Dc")
  //     clearInterval(interval)
  //   })
  // })
}

