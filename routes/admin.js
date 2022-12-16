const express=require("express")

const {loginAdmin,enterlogin,viewAllCustomer}=require("../controller/admin")


const router=express.Router()

router.route("/").get(loginAdmin).post(enterlogin)

router.route("/users").get(viewAllCustomer)


module.exports=router