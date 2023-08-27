
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

const port = 8080
app.get("/", (req, res) =>    {
     res.send("Hello")
})

app.listen(port, () =>   {
     console.log(`Connect success ${port}`)
})

