const express=require("express")
const router=express.Router()
const {getAllPrints,postPrints,UpdatePrints,deletePrints,getEachPrints}=require("../controller/prints")



router.route("/").get(getAllPrints).post(postPrints)


router.route("/:printsid").get(getEachPrints).delete(deletePrints)
router.route("/:printsid/:update").patch(UpdatePrints)
module.exports=router