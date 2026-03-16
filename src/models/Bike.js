import mongoose from "mongoose"

const BikeSchema = new mongoose.Schema({
  name:String,
  price:Number,
  image:String
})

export default mongoose.models.Bike ||
mongoose.model("Bike",BikeSchema)