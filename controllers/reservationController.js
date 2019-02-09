const express   = require('express');
const router    = express.Router();
const Reservation = require('../models/ReservationSchema');

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