import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {

    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });
        
    const navigate = useNavigate();

    axios.defaults.withCredentials = true; // Ensure cookies are sent with requests


    useEffect(() => {
      axios
        .get("http://localhost:5000/verify", { withCredentials: true })
        .then((res) => {
          if (res.data.status) {
            if (res.data.user.role === "recruiter") {
              navigate("/recruiter-home");
            } else {
              navigate("/home");
            }
          }
        })
        .catch(() => {
          // stay on login
        });
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, password } = formData;

          try {
            const result = await axios.post("http://localhost:5000/login", {
              name,
              password,
            });
            if (result.data.message === "Login successful") {
              const role = result.data.role;
              if (role === "recruiter") {
                navigate("/recruiter-home");
              } else {
                navigate("/home");
              }
            } else {
              alert("Login failed: " + result.data.error);
            }
          } catch (error) {
            console.error("Error logging in:", error);
            alert(
              "Login failed: " + (error.response?.data?.error || error.message)
            );
          }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;