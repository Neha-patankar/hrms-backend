const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  const { employee, date, status } = req.body;
  if (!employee || !date || !status) {
    return res.status(400).json({ message: "All fields required" });
  }

  const record = new Attendance({ employee, date, status });
  await record.save();
  res.status(201).json(record);
};

exports.getAttendanceByEmployee = async (req, res) => {
  const records = await Attendance.find({ employee: req.params.employeeId });
  res.json(records);
};

exports.getAllAttendanceWithEmployee = async (req, res) => {
  try {
    const records = await Attendance.find().populate("employee");
    res.status(200).json(records);
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res.status(500).json({ message: "Failed to fetch attendance records" });
  }
};
