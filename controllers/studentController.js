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

export { getStudent, getStudents };
