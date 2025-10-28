import User from "../models/userSchema.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'



export const addNew = async (req, res) => {
  try {
    const { book, auther } = req.body;
    console.log("Received Data:", book, auther);

    const newUser = new User({ book, auther });
    await newUser.save();

    console.log("Data saved", newUser);
    res.status(201).json({ message: "Book added successfully", data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getAll = async (req, res) => {
  try {
    const allbooks = await User.find();
    if (allbooks.length === 0) {
      return res.status(404).json({ message: " No books found " });
    }
    res
      .status(200)
      .json({ message: "Books fetch successfully", data: allbooks });
    console.log("Data Fetched", allbooks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
};
