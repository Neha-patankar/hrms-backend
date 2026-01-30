const express = require("express");
const {
  markAttendance,
  getAttendanceByEmployee,
} = require("../controllers/attendanceController");

const router = express.Router();

router.post("/", markAttendance);
router.get("/:employeeId", getAttendanceByEmployee);

module.exports = router;
