import express from 'express';
import { getStudent, getStudents } from '../controllers/studentController.js';

const router = express.Router();

router.get('/:id', (req, res) => {
    getStudent(req, res);
});

router.get('/', (req, res) => {
    getStudents(req, res);
});

export default router;
