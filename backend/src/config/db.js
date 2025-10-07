import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const url = process.env.mongourl;
// console.log(url)

const connectDB = async() => {
  try {
    await mongoose.connect(url)
    console.log("Database connected")
  } catch (error) {
    console.log(error)
  }
}

export default connectDB