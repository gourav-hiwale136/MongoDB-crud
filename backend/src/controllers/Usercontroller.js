import express from 'express'
import User from '../models/newschema.js'


export const getall =  async (req, res) => {
  try {
    let data = await User.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getone = async (req, res) => {
  try {
    let data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const adduser = async (req, res) => {
  try {
    let data = new User(req.body);
    await data.save();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateuser = async (req, res) => {
  try {
    let data = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ data, message: "Edited" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteuser = async (req, res) => {
  try {
    let data = await User.findByIdAndDelete(req.params.id);
    res.json({ data, message: "Deleted " });
  } catch (error) {
    console.log(error);
  }
};