const StatusCode=require("http-status")
const asyncWrapper=require("../middleware/async")
const Cart=require("../models/cart")

const getAllCart=asyncWrapper(async(req,res)=>
{
    const cart=await Cart.find()

    res.status(StatusCode.OK).json({
        cart:cart
    })
})

const postCart=asyncWrapper(async(req,res)=>
{
   
    const cart1= await Cart.create({...req.body})

    res.status(StatusCode.OK).json({
        cart:cart1,
    })
})

const UpdateCart=asyncWrapper(async(req,res)=>
{
    const id=req.params.Cartid
    const quantity=req.params.quantity
    
    const cart=await Cart.findByIdAndUpdate(id,{[quantity]:34})
    if(!cart){
        throw new BadRequestError("product not found")
    }
    
    res.status(StatusCodes.OK).json({
       message:`Item updated ${update}`
    })
    res.status(StatusCode.OK).json({
        "message":"update Cart"
    })
})
const deleteCart=(req,res)=>
{
    res.status(StatusCode.OK).json({
        "message":"delete Cart"
    })
}
const getEachCart=(req,res)=>
{
    res.status(StatusCode.OK).json({
        "message":"get each Cart"
    })
}
module.exports={getAllCart,postCart,UpdateCart,deleteCart,getEachCart}