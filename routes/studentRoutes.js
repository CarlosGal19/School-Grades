import express from 'express';
import { getStudent, getStudents, addStudent } from '../controllers/studentController.js';

const router = express.Router();

router.get('/:id', (req, res) => {
    getStudent(req, res);
});

router.get('/', (req, res) => {
    getStudents(req, res);
});

router.post('/', (req, res) => {
    addStudent(req, res);
});

export default router;
