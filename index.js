import express from "express"

const app = new express()
const PORT = process.env.PORT || 3001

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
