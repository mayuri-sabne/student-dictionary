import mongoose from 'mongoose';
const { Schema } = mongoose;

const locationSchema = new Schema({
    locationname:String,
    }
);

const locationModel = mongoose.model('location', locationSchema);
export default locationModel;