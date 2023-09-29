import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not defined");
    }
    if (isConnected) {
        return console.log("=> using existing database connection");
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "QueueOverflow",
        });
        isConnected = true;
        console.log("=> database connection established");
    } catch (e) {
        console.log("=> database connection failed");
        console.log(e);
    }
};
