const express=require("express")
const router=express.Router()
const {getAllPastActivities,createPastActivities,getPastActivitiesById,filterPastActivitiesByUserId,updatePastActivities,
    deletePastActivities
 }=require("../controllers/pastActivitiesControllers.js")

router.post("/createPastActivities",createPastActivities)
router.get("/getAllpastactivities",getAllPastActivities)
router.get("/getPastActivitiesById/:id",getPastActivitiesById )
router.get("/filterPastActivitiesByUserId/:userId",filterPastActivitiesByUserId )
router.put("/updatePastActivities/:id",updatePastActivities)
router.delete("/deletePastActivities/:id",deletePastActivities)


module.exports = router;