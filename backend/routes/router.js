import express from 'express';
const router = express.Router();


router.use(express.json());
router.use(express.urlencoded({ extended: true }));


import { getLocation } from '../controllers/controller.getLocation.js';


router.get("/",(Request,Response)=>{
    Response.send("Server running...");
});


router.get("/getLocation",getLocation);

export default router;