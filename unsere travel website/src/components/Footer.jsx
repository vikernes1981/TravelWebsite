import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-center py-2 fixed inset-x-0 bottom-0 w-full text-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex justify-around">
                    <div>
                        <h1 className="font-bold mb-1 text-teal-400 text-3xl">Jadoo.</h1>
                        <p>Book your trip in minute,</p>
                        <p>get Full Control for much longer.</p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2 text-teal-300">Company</h5>
                        <ul>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">About</a></li>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Careers</a></li>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Mobile</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2 text-teal-300">Contact</h5>
                        <ul>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Help/FAQ</a></li>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Press</a></li>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Affiliates</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2 text-teal-300">More</h5>
                        <ul>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Airline Fees</a></li>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Airline</a></li>
                            <li><a href="#" className="text-teal-200 hover:text-teal-400">Low Fare Tips</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-center mb-2">
                            <a href="#" className="mx-1 text-teal-400 hover:text-teal-600">
                                <i className="fab fa-facebook-f w-6 h-6 rounded-full"></i>
                            </a>
                            <a href="#" className="mx-1 text-teal-300 hover:text-teal-500">
                                <i className="fab fa-twitter w-6 h-6 rounded-full"></i>
                            </a>
                            <a href="#" className="mx-1 text-teal-500 hover:text-teal-700">
                                <i className="fab fa-instagram w-6 h-6 rounded-full"></i>
                            </a>
                        </div>
                        <h5 className="font-bold mb-2 text-teal-300">Discover our App</h5>
                        <div className="flex justify-center">
                            <a href="#" className="mx-1 text-gray-200 hover:text-gray-400 border border-gray-200 rounded p-1">
                                <i className="fab fa-google-play w-12 h-6 rounded-full"></i>
                            </a>
                            <a href="#" className="mx-1 text-gray-200 hover:text-gray-400 border border-gray-200 rounded p-1">
                                <i className="fab fa-apple w-12 h-6 rounded-full"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-gray-400">&copy; 2023 Unsere Travel Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
