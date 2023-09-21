import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  // return await mongoose.connect(process.env.MONGODB_URL);
  return await mongoose.connect("mongodb+srv://boytailoradejola:adejolaboii123@cluster0.0t1d8qp.mongodb.net/?retryWrites=true&w=majority");
}