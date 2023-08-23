import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo is already connected");
    return;
  }

  try {
    console.log('test2');
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "WorldOfPrompts",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
