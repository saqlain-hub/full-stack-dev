const students = [
  {
    id: 1,
    fname: "Saqlain",
    lname: "Javed",
  },
  {
    id: 2,
    fname: "Saqlain",
    lname: "Shahzad",
  },
];

const createStudent = (req, res) => {
  students.push(req.body);
  res.status(201).json(req.body);
};

const getAllStudents = (req, res) => {
  res.json(students);
};

const getStudent = (req, res) => {
  const id = +req.params.id;
  const student = students.find((s) => s.id === id);

  res.json(student);
};

const replaceStudent = (req, res) => {
  const id = +req.params.id;
  const studentIndex = students.findIndex((s) => s.id === id);
  students.splice(studentIndex, 1, { id: id, ...req.body });
  res.status(201).json();
};

const updateStudent = (req, res) => {
  const id = +req.params.id;
  const studentIndex = students.findIndex((s) => s.id === id);
  const student = students[studentIndex];
  const log = { ...student, ...req.body };
  console.log(log);
  students.splice(studentIndex, 1, { ...student, ...req.body });
  res.status(201).json("patch");
};

const deleteStudent = (req, res) => {
  const id = +req.params.id;
  const studentIndex = students.findIndex((s) => s.id === id);
  const student = students[studentIndex];
  students.splice(studentIndex, 1);
  res.status(201).json(student);
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudent,
  replaceStudent,
  updateStudent,
  deleteStudent,
};
