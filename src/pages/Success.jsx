import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your payment has been processed successfully.
                    A confirmation email has been sent to you.
                </p>
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="block w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition duration-200"
                    >
                        Go to Dashboard
                    </Link>
                    <Link
                        to="/projects"
                        className="block w-full py-3 px-6 text-primary-600 hover:text-primary-700 font-medium transition duration-200"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
