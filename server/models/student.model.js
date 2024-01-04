import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    username:String,
    birthdate:String,
    location:String,
    gender:String,
    hobby:String,
    file:String
    }
);

const studentModel = mongoose.model('students', studentSchema);
export default studentModel;