const express = require("express");
const {
  getAllStudents,
  getStudent,
  replaceStudent,
  updateStudent,
  createStudent,
  deleteStudent,
} = require("../controller/student.js");

const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.put("/:id", replaceStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

exports.router = router;
