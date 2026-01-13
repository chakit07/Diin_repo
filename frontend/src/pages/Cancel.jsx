import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const Cancel = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="flex justify-center mb-6">
                    <XCircle className="w-20 h-20 text-red-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
                <p className="text-gray-600 mb-8">
                    The payment process was cancelled. No charges were made to your account.
                    If you encountered any issues, please feel free to contact our support team.
                </p>
                <div className="space-y-4">
                    <Link
                        to="/pricing"
                        className="block w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition duration-200"
                    >
                        Try Again
                    </Link>
                    <Link
                        to="/contact"
                        className="block w-full py-3 px-6 text-primary-600 hover:text-primary-700 font-medium transition duration-200"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cancel;
