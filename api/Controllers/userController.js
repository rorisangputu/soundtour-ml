import User from '../Models/userModel.js'; // Adjust the path as needed

// Create a new user with a phone number
export const createUser = async (req, res) => {
  try {
    const { phoneNumber } = req.body; // Destructure the phoneNumber from the request body

    // Create a new user instanc
    const newUser = new User({ phoneNumber });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};

