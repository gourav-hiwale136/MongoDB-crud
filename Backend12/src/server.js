import express from "express"
import dotenv from "dotenv"
import routes from "../src/routes/userRoutes.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/users",routes)

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
})