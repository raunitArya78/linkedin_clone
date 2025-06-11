import React, { useState, useEffect } from "react";
import {
  MdHome,
  MdGroup,
  MdWork,
  MdAssignmentInd,
  MdChat,
  MdNotifications,
  MdMail,
  MdArrowDropDown,
  MdSettings,
  MdHelp,
  MdLogout,
  MdBookmark,
  MdSearch,
  MdAutoAwesome,
  MdLandscape,
  MdSource,
  MdPhoto,
  MdVideocam,
  MdEvent,
  MdFilterList,
  MdMoreHoriz,
  MdLocationOn,
  MdPersonSearch,
  MdSchedule,
  MdCheckCircle,
  MdAnalytics,
  MdLanguage
} from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const RecruiterHome = () => {
  const [showSignoutAlert, setShowSignoutAlert] = useState(false);
  const [username, setUsername] = useState("");
  const [showJobModal, setShowJobModal] = useState(false); // Popup state

  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/verify")
      .then((res) => {
        if (res.data.status) {
          setUsername(res.data.user.name);
        } else {
          navigate("/login");
        }
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/logout", {
        withCredentials: true,
      });
      setShowSignoutAlert(true);
      setTimeout(() => {
        setShowSignoutAlert(false);
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div id="webcrumbs">
      {/* Signout Alert */}
      {showSignoutAlert && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded shadow flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Signed out successfully!</span>
          </div>
        </div>
      )}
      <div className="max-w-[1280px] mx-auto p-4 font-sans bg-gray-100">
        {/* Header */}
        <header className="bg-white p-4 flex justify-between items-center shadow-md rounded-lg mb-4">
          <div className="flex items-center">
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
            </svg>
            <div className="ml-2 relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 w-64 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
              />
              <span className="absolute left-3 top-2 text-gray-500">
                <MdSearch size={20} />
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-1">
            <button className="flex flex-col items-center px-3 py-2 hover:text-primary-700 hover:bg-gray-100 rounded-md transition-all duration-300">
              <MdHome size={24} />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center px-3 py-2 hover:text-primary-700 hover:bg-gray-100 rounded-md transition-all duration-300">
              <MdGroup size={24} />
              <span className="text-xs">My Network</span>
            </button>
            <button className="flex flex-col items-center px-3 py-2 hover:text-primary-700 hover:bg-gray-100 rounded-md transition-all duration-300">
              <MdWork size={24} />
              <span className="text-xs">Jobs</span>
            </button>
            <button className="flex flex-col items-center px-3 py-2 text-blue-700 border-b-2 border-primary-700 hover:bg-gray-100 rounded-md transition-all duration-300">
              <MdAssignmentInd size={24} />
              <span className="text-xs">Recruiting</span>
            </button>
            <button className="flex flex-col items-center px-3 py-2 hover:text-primary-700 hover:bg-gray-100 rounded-md transition-all duration-300">
              <MdChat size={24} />
              <span className="text-xs">Messaging</span>
            </button>
            <button className="flex flex-col items-center px-3 py-2 hover:text-primary-700 hover:bg-gray-100 rounded-md transition-all duration-300">
              <MdNotifications size={24} />
              <span className="text-xs">Notifications</span>
            </button>
          </nav>
          <div className="flex items-center">
            <button className="rounded-full hover:bg-gray-100 p-2 transition-all duration-200 relative">
              <MdMail size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </button>
            <details className="relative ml-2">
              <summary className="list-none focus:outline-none">
                <div className="flex items-center cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc0ODQwNjY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 hover:border-primary-500 transition-all duration-300"
                  />
                  <MdArrowDropDown size={24} className="text-gray-500" />
                </div>
              </summary>
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 p-3">
                <div className="flex items-center mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc0ODQwNjY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{username}</p>
                    <p className="text-sm text-gray-600">Senior Technical Recruiter</p>
                  </div>
                </div>
                <button className="w-full text-center py-1 px-3 rounded-full border border-primary-500 text-primary-600 hover:bg-primary-50 transition-all duration-300 mb-2">
                  View Profile
                </button>
                <hr className="my-2" />
                <div className="space-y-2">
                  <button className="flex items-center w-full hover:bg-gray-100 p-2 rounded-md transition-all duration-300">
                    <MdSettings className="mr-2" size={20} />
                    Settings
                  </button>
                  <button className="flex items-center w-full hover:bg-gray-100 p-2 rounded-md transition-all duration-300">
                    <MdHelp className="mr-2" size={20} /> Help Center
                  </button>
                  <button
                    className="flex items-center w-full hover:bg-gray-100 p-2 rounded-md transition-all duration-300"
                    onClick={handleLogout}
                  >
                    <MdLogout className="mr-2" size={20} /> Sign Out
                  </button>
                </div>
              </div>
            </details>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar */}
          <section className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="relative">
                <div className="h-24 bg-primary-100 rounded-t-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTc0ODQwNjY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-white absolute bottom-0 transform translate-y-1/2 left-4 object-cover"
                />
              </div>
              <div className="mt-12 mb-4">
                <h2 className="text-xl font-bold">{username}</h2>
                <p className="text-sm text-gray-600">Senior Technical Recruiter at TechRecruit Inc.</p>
                <p className="text-xs text-gray-500 mt-1">San Francisco Bay Area</p>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Profile views</span>
                  <span className="font-semibold">187</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Job post views</span>
                  <span className="font-semibold">356</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Search appearances</span>
                  <span className="font-semibold">89</span>
                </div>
              </div>
              <hr className="my-3" />
              <button className="w-full text-left flex items-center py-2 text-sm font-medium text-blue-700 hover:bg-gray-50 rounded-md transition-all duration-300">
                <MdBookmark className="mr-2" size={20} /> My items
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold mb-3">Recruiting Tools</h3>
              <div className="space-y-2">
                <button className="flex items-center w-full p-2 text-sm hover:bg-gray-50 rounded-md transition-all duration-300">
                  <MdSearch className="mr-2 text-purple-600" size={20} />
                  Talent Search
                </button>
                <button className="flex items-center w-full p-2 text-sm hover:bg-gray-50 rounded-md transition-all duration-300">
                  <MdWork className="mr-2 text-purple-600" size={20} />
                  Job Postings
                </button>
                <button className="flex items-center w-full p-2 text-sm hover:bg-gray-50 rounded-md transition-all duration-300">
                  <MdAutoAwesome className="mr-2 text-purple-600" size={20} />
                  Recommended Candidates
                </button>
                <button className="flex items-center w-full p-2 text-sm hover:bg-gray-50 rounded-md transition-all duration-300">
                  <MdLandscape className="mr-2 text-purple-600" size={20} />
                  Recruiting Insights
                </button>
                <button className="flex items-center w-full p-2 text-sm hover:bg-gray-50 rounded-md transition-all duration-300">
                  <MdSource className="mr-2 text-purple-600" size={20} />
                  Sourcing Tools
                </button>
              </div>
              </div>
              {/* Recruiting Insights component below Recruiting Tools */}
              <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                <h3 className="font-semibold mb-3">Recruiting Insights</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm p-2 hover:bg-gray-50 rounded-md transition-all duration-300">
                    <span>Job view rate</span>
                    <span className="font-semibold text-green-600">+15%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm p-2 hover:bg-gray-50 rounded-md transition-all duration-300">
                    <span>Applicant quality</span>
                    <span className="font-semibold text-amber-600">Medium</span>
                  </div>
                  <div className="flex items-center justify-between text-sm p-2 hover:bg-gray-50 rounded-md transition-all duration-300">
                    <span>Response rate</span>
                    <span className="font-semibold text-red-600">-5%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-32 rounded-md mt-3 flex items-center justify-center">
                  <MdAnalytics className="text-gray-400 text-3xl" />
                </div>
              </div>
          </section>
          {/* Feed */}
          <section className="lg:w-2/4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw0fHxwcm9maWxlfGVufDB8fHx8MTc0ODQwNjY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Share a job or update..."
                    className="w-full border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex justify-between pt-2 flex-wrap gap-2">
                <button className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-all duration-300">
                  <MdPhoto className="text-blue-500 mr-1" size={20} />
                  <span className="text-sm">Photo</span>
                </button>
                <button className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-all duration-300">
                  <MdVideocam className="text-green-500 mr-1" size={20} />
                  <span className="text-sm">Video</span>
                </button>
                <button className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-all duration-300">
                  <MdEvent className="text-purple-500 mr-1" size={20} />
                  <span className="text-sm">Event</span>
                </button>
                <button className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-all duration-300">
                  <MdWork className="text-orange-500 mr-1" size={20} />
                  <span className="text-sm">Job</span>
                </button>
              </div>
            </div>
            {/* Active Candidates */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Active Candidates</h3>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded transition-all duration-300">
                    <MdFilterList size={20} />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded transition-all duration-300">
                    <MdMoreHoriz size={20} />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {/* Candidate 1 */}
                <div className=" p-3 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="flex items-start">
                    <img
                      src="https://images.unsplash.com/photo-1525017467541-995c08c663cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjYW5kaWRhdGV8ZW58MHx8fHwxNzQ4NTExMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Candidate"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-semibold">Michael Chen</h4>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-sm text-gray-600">Senior Software Engineer</p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <MdLocationOn className="text-sm mr-1" size={16} />
                        San Francisco, CA
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">React</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">TypeScript</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Node.js</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3 gap-2">
                    <button className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300">
                      Save
                    </button>
                    <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300">
                      Contact
                    </button>
                  </div>
                </div>
                {/* Candidate 2 */}
                <div className=" p-3 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="flex items-start">
                    <img
                      src="https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw1fHxjYW5kaWRhdGV8ZW58MHx8fHwxNzQ4NTExMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Candidate"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-semibold">Sophia Rodriguez</h4>
                        <span className="text-xs text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-sm text-gray-600">UX/UI Designer</p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <MdLocationOn className="text-sm mr-1" size={16} />
                        New York, NY
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Figma</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Adobe XD</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">User Research</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3 gap-2">
                    <button className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300">
                      Save
                    </button>
                    <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300">
                      Contact
                    </button>
                  </div>
                </div>
                {/* Candidate 3 */}
                <div className=" p-3 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="flex items-start">
                    <img
                      src="https://images.unsplash.com/photo-1698047681452-08eba22d0c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw2fHxjYW5kaWRhdGV8ZW58MHx8fHwxNzQ4NTExMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Candidate"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-semibold">David Williams</h4>
                        <span className="text-xs text-gray-500">4 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-600">DevOps Engineer</p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <MdLocationOn className="text-sm mr-1" size={16} />
                        Austin, TX
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Kubernetes</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">AWS</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Docker</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3 gap-2">
                    <button className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300">
                      Save
                    </button>
                    <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
              <button className="w-full text-primary-600 font-medium py-2 mt-4 hover:bg-gray-50 rounded-md transition-all duration-300">
                Show more candidates
              </button>
            </div>
           
            {/* Additional Component to fill space */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center">
              <h3 className="font-bold mb-3">Upcoming Interviews</h3>
              <div className="w-full">
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition">
                    <div>
                      <span className="font-semibold">Michael Chen</span>
                      <span className="ml-2 text-xs text-gray-500">Frontend Engineer</span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">10:00 AM, 12 Jun</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition">
                    <div>
                      <span className="font-semibold">Sophia Rodriguez</span>
                      <span className="ml-2 text-xs text-gray-500">UX/UI Designer</span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">2:00 PM, 14 Jun</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition">
                    <div>
                      <span className="font-semibold">David Williams</span>
                      <span className="ml-2 text-xs text-gray-500">DevOps Engineer</span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">11:30 AM, 18 Jun</span>
                  </li>
                </ul>
                <button className="w-full mt-4 py-2 rounded bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition">
                  View all interviews
                </button>
              </div>
            </div>
          </section>
          {/* Right Sidebar */}
              <section className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <h3 className="font-bold mb-3">Job Postings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Senior React Developer</h4>
                    <p className="text-xs text-gray-500">23 applicants</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">UX Designer</h4>
                    <p className="text-xs text-gray-500">17 applicants</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Product Manager</h4>
                    <p className="text-xs text-gray-500">42 applicants</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Draft</span>
                    </div>
                    <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Data Scientist</h4>
                    <p className="text-xs text-gray-500">11 applicants</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Closed</span>
                    </div>
                  </div>
                  <button
              className="w-full text-blue-600 font-medium py-2 mt-4 border border-blue-600 rounded-md hover:bg-blue-50 transition-all duration-300"
              onClick={() => setShowJobModal(true)}
            >
              Post a new job
            </button>
                </div>
                {/* Popup Modal for Posting New Job */}
                {showJobModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.0)" }}>
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative border border-gray-200">
                      <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                        onClick={() => setShowJobModal(false)}
                        aria-label="Close"
                      >
                        &times;
                      </button>
                      <h3 className="font-bold text-lg mb-4">Post a new job</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                            placeholder="e.g. Senior React Developer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                            placeholder="e.g. San Francisco, CA (Remote)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Employment Type
                          </label>
                          <select
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          >
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                            <option>Temporary</option>
                            <option>Internship</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                          </label>
                          <textarea
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 min-h-[100px]"
                            placeholder="Describe the role, responsibilities, and requirements..."
                          ></textarea>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <button
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300"
                            onClick={() => setShowJobModal(false)}
                          >
                            Save as Draft
                          </button>
                          <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                            onClick={() => setShowJobModal(false)}
                          >
                            Post Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <h3 className="font-bold mb-3">Recruiting Activity</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm">Weekly Messages</span>
                    <span className="text-sm font-semibold">64</span>
                  </div>
                  <div className="w-full bg-gray-200 color-rounded-full h-2">
                    <div className="bg-violet-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span> <span>InMail credits: 28 left</span>
                  </div>
                  <hr className="my-4" />
                  <h4 className="font-medium mb-3 text-sm">Your Pipeline</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                  <span className="flex items-center">
                    <MdPersonSearch className="mr-2 text-blue-500" size={20} />
                    Sourced
                  </span>
                  <span>38</span>
                    </div>
                    <div className="flex justify-between text-sm">
                  <span className="flex items-center">
                    <MdMail className="mr-2 text-green-500" size={20} />
                    Contacted
                  </span>
                  <span>27</span>
                    </div>
                    <div className="flex justify-between text-sm">
                  <span className="flex items-center">
                    <MdSchedule className="mr-2 text-purple-500" size={20} />
                    Scheduled
                  </span>
                  <span>12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                  <span className="flex items-center">
                    <MdCheckCircle className="mr-2 text-orange-500" size={20} />
                    Interviewed
                  </span>
                  <span>8</span>
                    </div>
                  </div>
                  <button className="w-full text-gray-700 font-medium py-2 mt-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300">
                    View detailed report
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-bold mb-2">Suggested Candidates</h3>
                  <p className="text-sm text-gray-600 mb-3">Based on your recent searches</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1643483831271-b7df86be5495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw3fHxjYW5kaWRhdGV8ZW58MHx8fHwxNzQ4NTExMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Candidate"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Emily Johnson</h4>
                    <p className="text-xs text-gray-600">Full Stack Developer</p>
                  </div>
                    </div>
                    <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1643484701735-9c47d925859b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw4fHxjYW5kaWRhdGV8ZW58MHx8fHwxNzQ4NTExMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Candidate"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Robert Lee</h4>
                    <p className="text-xs text-gray-600">iOS Developer</p>
                  </div>
                    </div>
                    <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1644904105846-095e45fca990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw5fHxjYW5kaWRhdGV8ZW58MHx8fHwxNzQ4NTExMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Candidate"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Jessica Taylor</h4>
                    <p className="text-xs text-gray-600">Product Designer</p>
                  </div>
                    </div>
                  </div>
                  <button className="w-full  text-blue-700  font-medium py-2 mt-4 hover:bg-blue-50 rounded-md transition-all duration-300">
                    View all suggestions
                  </button>
                </div>
              </section>
                </main>
                {/* Footer */}
        <footer className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold text-sm mb-2">LinkedIn Recruiter</h4>
              <ul className="text-xs space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Community Guidelines</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Privacy &amp; Terms</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Sales Solutions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Safety Center</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2">Accessibility</h4>
              <ul className="text-xs space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Accessibility</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Ad Choices</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Mobile</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2">Talent Solutions</h4>
              <ul className="text-xs space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Marketing Solutions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Learning Solutions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Advertising</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 hover:underline transition-all duration-300">Small Business</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2">Business Solutions</h4>
              <div className="flex items-center space-x-3 mt-2">
                <a href="#" className="hover:text-blue-600 transition-all duration-300">
                  <FaTwitter className="text-lg" />
                </a>
                <a href="#" className="hover:text-blue-600 transition-all duration-300">
                  <FaFacebook className="text-lg" />
                </a>
                <a href="#" className="hover:text-pink-600 transition-all duration-300">
                  <FaInstagram className="text-lg" />
                </a>
                <a href="#" className="hover:text-red-600 transition-all duration-300">
                  <FaYoutube className="text-lg" />
                </a>
              </div>
              <div className="mt-4 text-xs">
                <p>LinkedIn Corporation © 2023</p>
              </div>
            </div>
          </div>
        </footer>
        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center z-10">
          <button className="flex flex-col items-center px-3 py-1">
            <MdHome size={24} />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center px-3 py-1">
            <MdGroup size={24} />
            <span className="text-xs">Network</span>
          </button>
          <button className="flex flex-col items-center px-3 py-1 text-blue-600">
            <MdAssignmentInd size={24} />
            <span className="text-xs">Recruiting</span>
          </button>
          <button className="flex flex-col items-center px-3 py-1">
            <MdNotifications size={24} />
            <span className="text-xs">Alerts</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default RecruiterHome;
