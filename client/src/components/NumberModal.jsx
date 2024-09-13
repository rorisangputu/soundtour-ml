import { useState } from 'react';
import logo from '../assets/st-logo-gradient.png';
import newRequest from '../Utils/newRequest.js'; // Import the axios instance

const NumberModal = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state for loading

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true
        console.log(phoneNumber);
        try {
            await newRequest.post('/', { phoneNumber });
            setIsSubmitted(true); // Show the success message
            setIsLoading(false); // Stop loading after success
        } catch (error) {
            setError('Error submitting phone number');
            console.log(error);
            setIsLoading(false); // Stop loading after error
        }
    };

    // Close the modal
    const handleCloseModal = () => {
        setPhoneNumber(''); // Reset phone number
        setIsSubmitted(false); // Reset submission status
        setError(''); // Reset error
        setIsLoading(false); // Reset loading
        onClose(); // Close modal
    };

    if (!isOpen) return null; // If the modal is not open, return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg flex flex-col justify-center items-center p-6">
                <img src={logo} className='h-20 w-20 mb-5' alt="" />
                {isSubmitted ? (
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-4">Submitted</h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 text-green-500 mx-auto mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <p className="text-green-600">Your phone number has been submitted successfully!</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-lg font-light mb-4 text-center">GET THE SOUND</h2>
                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <input
                                type="tel"
                                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
                                    disabled={isLoading} // Disable button while loading
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-orange-600 text-white rounded-md"
                                    disabled={isLoading} // Disable button while loading
                                >
                                    {isLoading ? 'Submitting...' : 'Submit'} {/* Show loading text */}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NumberModal;
