const asyncWrapper = require("../middleware/async");
const Admin=require("../models/admin")
const UnAuthError=require("../error/unauthenticated");
const UserLogin = require("../models/UserLogin");



const loginAdmin=asyncWrapper(async(req,res)=>
{
    const tempUser={
        username:"ALDE123",
        password:"Alde@345"
    }
    console.log("hello")

    await Admin.create({...tempUser})
    
    res.status(200).json({message:"Login with your username and password"})
})

const enterlogin=asyncWrapper(async(req,res)=>
{
    const {username,password}=await req.body
    if(!username || !password){
      throw  new UnAuthError("Enter the details")    }
    const user=await Admin.findOne({username})
    if(!user)
    {
        throw new UnAuthError("Customer not found")    }
    const isSamePass=await user.compareAdminPassword(password)
    if(!isSamePass)
    {
       throw new UnAuthError("Invalid Password")    }
    const token=user.getToken()

    res.status(200).json({message:"Succesfully logged in",user_token:token})
})

const viewAllCustomer=asyncWrapper(async(req,res)=>
{
    const allUsers=await UserLogin.find()

    res.status(200).json({items:allUsers})
})

module.exports={loginAdmin,enterlogin,viewAllCustomer}