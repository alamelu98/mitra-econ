const asyncWrapper=require("../middleware/async")
const Originals=require("../models/originals")
const StatusCodes=require("http-status")
const BadRequestError=require("../error/badrequest")
const getAllOriginals=asyncWrapper(async(req,res)=>
{
    const originals=await Originals.find()

    res.status(StatusCodes.OK).json({
        originals:originals
    })
})


const postOriginals=asyncWrapper(async(req,res)=>
{
    const originals=await Originals.create({...req.body})

    res.status(StatusCodes.OK).json({
        originals:originals
    })
})

const UpdateOriginals=asyncWrapper(async(req,res)=>
{
    const id=req.params.Originalsid
    const update=req.params.update
    
    const originals=await Originals.findByIdAndUpdate(id,{[update]:"Hello"})
    if(!originals){
        throw new BadRequestError("product not found")
    }
    
    res.status(StatusCodes.OK).json({
       message:`Item updated ${update}`
    })
})
const deleteOriginals=asyncWrapper(async(req,res)=>
{
    const id=req.params.Originalsid
    const originals=await Originals.findByIdAndDelete(id)
    if(!originals){
        throw new BadRequestError("Product not found")
    }
    res.status(StatusCodes.OK).json({
        "message":"delete Originals"
    })
})
const getEachOriginals=asyncWrapper(async(req,res)=>
{
    const id=req.params.Originalsid
    const originals=await Originals.findById(id)
    if(!originals){
        throw new BadRequestError("Product not found")
    }
    res.status(StatusCodes.OK).json({
        originals:originals
    })
})
module.exports={getAllOriginals,postOriginals,UpdateOriginals,deleteOriginals,getEachOriginals}