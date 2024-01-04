import mongoose from 'mongoose';

async function dbconnection(){
    return await mongoose.connect('mongodb+srv://admin:nYDc1NAQP7HGXOJo@cluster0.u8mvxwl.mongodb.net/record');
}

export default dbconnection;