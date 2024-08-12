const express = require("express");
const router = express.Router();
const Classroom = require("../models/Classroom");

// Create Classroom
router.post("/", async (req, res) => {
 try {
  const newClassroom = new Classroom(req.body);
  await newClassroom.save();
  res.status(201).json(newClassroom);
 } catch (err) {
  res.status(400).json({ message: err.message });
 }
});

// Get All Classrooms
router.get("/", async (req, res) => {
 try {
  const classrooms = await Classroom.find();
  res.json(classrooms);
 } catch (err) {
  res.status(400).json({ message: err.message });
 }
});

module.exports = router;
