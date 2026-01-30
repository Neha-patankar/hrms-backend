const Employee = require("../models/Employee");

exports.addEmployee = async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;
    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted successfully" });
};
