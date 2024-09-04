const express = require("express");
const Trainer = require("../models/Trainer");
const { z } = require("zod");

exports.getTrainers = async(req, res) => {
    // res.json(teachers);
    try {
      const trainer = await Trainer.find();
      res.status(200).json({
        status:"success",
        trainer: trainer
      }
      );
    } catch (e) {
      res.status(500).json({
        status:"error",
        error: e.message 
      });
    }
}
//get pending trainers 
exports.getPendingTrainers = async(req,res) => {
  try{

     const pendingTrainers = await Trainer.find({
         isApproved :false
     });
     console.log(pendingTrainers);
     if(!pendingTrainers){
      res.json({
        message:"No pending trainers"
      })
     }
    // console.log(pendingTrainers);

     res.status(200).json({
         status: "success",
         pendingTrainers: pendingTrainers
        }
      );

  } catch(e){
     res.status(500).json({
      status:"error",
      error : e.message});
  }

}
//approve pending trainers
exports.approvePendingTrainers = async(req,res) => {
  try{
      const trainerId = req.params.id;
      const updatedTrainer = await Trainer.findByIdAndUpdate(
        trainerId, 
        { isApproved: true },
        { new: true } // Return the updated document
      );

      if(!updatedTrainer){
         res.status(404).json({
          message: "Trainer not found"
         })
      }

      res.status(200).json({
           message: 'Trainer approved successfully',
           trainer: updatedTrainer
      });

  } catch(e){
     res.status(500).json({error : e.message})
  }
}
//discard pending trainers
exports.discardPendingTrainers = async(req,res) => {
  try{
       const trainerId = req.params.id;
       const deleteTrainer = await Trainer.findByIdAndDelete(trainerId)
       if (deleteTrainer) {
        res.status(200).json({
          status:"success",
          deleteTrainer:deleteTrainer,
        });
      } else {
        res.status(404).json({
          message:"trainer not found"
        })
      }
  } catch(e){
     res.status(500).json({error : e.message})
  }
}
//get all the listings
exports.getListings = async(req, res) => {
    // res.json();
    try{

    } catch(e){
       res.status(500).json({error : e.message})
    }
}
//get pending listings
exports.getPendingListings = async(req,res) => {
  try{

  } catch(e){
     res.status(500).json({error : e.message})
  }
}
//approve pending listings
exports.approvePendingLsitings = async(req,res) => {
  try{

  } catch(e){
     res.status(500).json({error : e.message})
  }
}
//discard pending listings
exports.discardPendingListings = async(req,res) => {
  try{

  } catch(e){
     res.status(500).json({error : e.message})
  }
}