import multer from 'multer';
import studentModel from '../models/student.model.js';

var uniqueTime= Date.now();


const fileStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./assets/uploads/')
    },
    filename:function(req,file,cb){
        cb(null,uniqueTime+file.originalname)
    }
});

const upload = multer({ storage: fileStorage }).single('userfilepath');

const register =(req,res)=>{

    upload(req,res, async function(err){
        if (err instanceof multer.MulterError){
            console.log(err);
        } else if (err){
            console.log(err);
        }
        console.log(req.body);
        console.log(req.file);

        var dataToInsert = req.body;
        dataToInsert.file = req.file.filename;

        try{
            var instance = new studentModel(dataToInsert);
            var ans_insert = await instance.save();
            res.status(200).send({msg: " Added",data: ans_insert })
            console.log("-----------------------------");
        }
        catch{
            res.status(200).send({msg: " Something went wrong",data: null })
        }
    })
}

const show = async(req,res)=>{

    try{
        var ansFromDB = await studentModel.find();
        // console.log(ansFromDB);
        res.status(200).send({data:ansFromDB})
    }
    catch(err){
        res.status(403).send({error:err})
    }
}

const showById = async (req, res) => {
    // res.send({msg:'Get user by id Function Called'})
    // console.log(req.params);
    try {
        var ansAfterShow = await studentModel.findById(req.params.userid)
        console.log(ansAfterShow);
        res.status(200).send({ msg: 'Data Shown', data: ansAfterShow })
    }
    catch (err) {
        console.log(err);
        res.status(403).send({ msg: err })
    }
}
const edit = async (req, res) => {
    
    try{
        var ansAfterUpdate = await studentModel.findByIdAndUpdate(req.params.userid,req.body);
        res.status(200).send({data:ansAfterUpdate,msg:" Updated"})
    }
    catch(err){
        console.log(err);
        res.status(403).send ({error:err})
    }
}

const deletes =async (req, res) => {
    try{
        var ansAfterDelete = await studentModel.findByIdAndDelete(req.params.userid);
        res.status(200).send({data:ansAfterDelete,msg:" Deleted"})
    }
    catch(err){
        console.log(err);
        res.status(403).send ({error:err})
    }
}

export {register,show,edit,deletes,showById};