const express = require("express");
const {
  markAttendance,
  getAttendanceByEmployee,
 getAllAttendanceWithEmployee,
} = require("../controllers/attendanceController");

const router = express.Router();

router.post("/", markAttendance);


router.get("/all", getAllAttendanceWithEmployee);
router.get("/:employeeId", getAttendanceByEmployee);

module.exports = router;
