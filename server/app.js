import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import cors from 'cors';
import dbconnection from './database/mongodb.js';
import studentRoute from './routes/student.route.js';
import locationRoute from './routes/location.route.js';

dbconnection()
.then((res)=>{
    console.log("db connected");
})
.catch(err=>{
    console.log("error",err);
});

const app = express();
app.use(cors());
app.use(express.static('./'));
app.use(bodyParser.json());

app.use('/student',studentRoute);
app.use('/location',locationRoute);

app.listen(process.env.PORT,()=>{
    console.log('app starting');
})