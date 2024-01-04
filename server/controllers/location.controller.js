import locationModel from "../models/location.model.js"

const addlocationFunction = async(req,res) => { 
    var {locationname} = req.body
    var dataToInsert = {
        locationname : locationname
    }
    try{
        var locationModelInstance = new locationModel(dataToInsert)
        var ansAfterInsert = await locationModelInstance.save()
        res.status(200).send({msg:'location Inserted',data:ansAfterInsert})
    }
    catch(err){
        console.log(err);
        res.status(403).send({msg:err})
    }
    //res.send({msg:'Add location Function Called'})
}

const showlocationFunction = async(req,res) => {
    try{
        var ansAfterGet = await locationModel.find()
        res.status(200).send({msg:"Show location Data",data:ansAfterGet})
    }
    catch(err){
        console.log(err);
        res.status(403).send({error : err})
    }
    //res.send({msg:'Show location Function Called'})
}

const deletelocationFunction = async(req,res) => {
    console.log(req.params);
    try{
        var ansAfterDelete = await locationModel.findByIdAndDelete(req.params.locationid)
        res.status(200).send({msg:'location Deleted',data:ansAfterDelete})
    }
    catch(err){
        console.log(err);
        res.send({error:err})
    }
   //res.send({msg:'Delete location Function Called'})
}

const editlocationFunction = async(req,res) => {
    console.log(req.params);
    try{
        var ansAfterUpdate = await locationModel.findByIdAndUpdate(req.params.locationid,req.body)
        res.status(200).send({msg:'location Updated',data:ansAfterUpdate})
    }
    catch(err){
        console.log(err);
        res.send({error:err})
    }
    //res.send({msg:'Update location Function Called'})
}

export {
    addlocationFunction,
    showlocationFunction,
    deletelocationFunction,
    editlocationFunction
}