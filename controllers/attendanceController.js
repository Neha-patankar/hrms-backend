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
