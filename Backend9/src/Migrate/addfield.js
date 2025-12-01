
import mongoose from "mongoose";
import dotenv from 'dotenv'
import CONNECTDB from "../config/db.js";
import User from "../models/newSchema.js";

const fieldname = process.argv[2]
const action = process.argv[3]
const ModelName = User
dotenv.config()
const run = async() => {
   await CONNECTDB(process.env.MONGO_URL);
   if(action == "up"){
    let user = await ModelName.updateMany(
      { [fieldname]: { $exists: false } },
      { $set: { [fieldname]: 0 } }
    );
    console.log({
      acknowledgement: user.acknowledged,
      fieldName:fieldname,
      Action:"added"
    });
   }else if(action == "down"){
            let user = await ModelName.updateMany(
              {},
              { $unset: { [fieldname]: "" } }
            );
            console.log({
              acknowledgement: user.acknowledged,
              fieldName: fieldname,
              Action: "removed",
            });
   }else{
    console.log("Wrong command Please enter 'up' or 'down' ")
   }

   mongoose.connection.close()
  
}

run()
