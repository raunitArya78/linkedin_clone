import React, { useState } from 'react';
import "../index.css";
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'jobseeker'
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, role } = formData;
        axios.post(`${import.meta.env.VITE_API_URL}/register`, { name, email, password, role })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(error => console.error('Error signing up:', error));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-lg">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Create your career with us today!
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="jobseeker">Job Seeker</option>
                                <option value="recruiter">Recruiter</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
