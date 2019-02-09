const express   = require('express');
const router    = express.Router();
const Reservation = require('../models/ReservationSchema');


// get res route - READ ALL
router.get('/', async (req, res)=>{
    try{
        const allRes = await Reservation.find({});
        res.json({
            status: 200,
            data: allRes
        })
    }catch(err){
        console.log(err);
    }
})

// post res route - CREATE
router.post('/', async (req,res)=>{
    try{
        const createdRes = await Reservation.create(req.body);
        res.json({
            status: 200,
            data: createdRes
        })
    }catch(err){
        console.log(err);
    }
})

module.exports = router;