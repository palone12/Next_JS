import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection =mongoose.connection;
        connection.on('connected',() => {
            console.log('DB Connected')
        })

        connection.on('error',(err)=> {
            console.log('Error Connecting Database');
            process.exit();
        })
    } catch (error) {
        console.log('Something Went Wrong');
        console.log(error)
    }
}