import Student from "../models/student.model.js";

const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const addStudent = async (req, res) => {
    const student = req.body;
    const newStudent = new Student(student);
    try {
        await newStudent.save();
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export { getStudent, getStudents, addStudent };
