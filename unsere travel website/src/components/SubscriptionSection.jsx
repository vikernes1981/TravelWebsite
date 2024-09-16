import React, { useState } from 'react';

const SubscriptionSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <div 
            className="subscription-section bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center bg-cover"
            style={{ 
                backgroundImage: 'url(https://img.freepik.com/premium-vector/white-gray-minimal-abstract-background_74563-2537.jpg?w=2000)',
                borderRadius: '50% 1% 1% 1%'
            }}
        >
            <h2 className="text-2xl text-black font-bold mb-4 text-center">Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default SubscriptionSection;