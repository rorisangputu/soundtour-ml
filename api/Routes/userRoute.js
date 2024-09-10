import express from 'express';
import { createUser } from '../Controllers/userController.js'; // Adjust the path as needed

const router = express.Router();

// Route to create a new user with a phone number
router.post('/', createUser);


export default router;
