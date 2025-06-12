import React, { useState, useRef, useEffect } from "react";
import {
    MdHome,
    MdGroup,
    MdWork,
    MdChat,
    MdNotifications,
    MdArrowDropDown,
    MdSearch,
    MdMenu,
    MdBookmark,
    MdTag,
    MdEvent,
    MdAdd,
    MdInfo,
    MdImage,
    MdVideocam,
    MdArticle,
    MdThumbUp,
    MdFavorite,
    MdRepeat,
    MdSend,
    MdMoreHoriz,
    MdCelebration,
    MdArrowForward,
    MdPublic,
    MdSettings,
    MdHelp,
    MdLanguage,
    MdLogout
} from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // Dropdown state for profile menu
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);

    // Add username state
    // const username = "Raunit Arya";

    const [username, setUsername] = useState(""); // 👈 Add username state
    const [showSignoutAlert, setShowSignoutAlert] = useState(false);

    const navigate = useNavigate();

    axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

    const handleLogout = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
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
    
    axios.defaults.withCredentials = true

    useEffect(() => {
    axios.defaults.withCredentials = true; // ensure cookies are sent
    axios.get(`${import.meta.env.VITE_API_URL}/verify`, {withCredentials: true})
      .then((res) => {
        if (res.data.status) {
          setUsername(res.data.user.name); // 👈 Store name in state
        } else {
          navigate("/login"); // token invalid
        }
      })
      .catch(() => navigate("/login")); // error fetching user
  }, []);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
            <div className="w-full bg-slate-100">
                <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
                    <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-10 h-10 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                            </svg>
                            <div className="relative w-64">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-blue-50 pl-10 py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                                <span className="absolute left-2 top-2 text-gray-500">
                                    <MdSearch size={20} />
                                </span>
                            </div>
                        </div>
                        <nav className="hidden md:flex">
                            <ul className="flex items-center gap-1">
                                <li className="group">
                                    <a href="#" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-700 transition-colors">
                                        <MdHome size={24} />
                                        <span className="text-xs">Home</span>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-blue-700 transition-all duration-300"></div>
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="#" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-700 transition-colors">
                                        <MdGroup size={24} />
                                        <span className="text-xs">My Network</span>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-blue-700 transition-all duration-300"></div>
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="#" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-700 transition-colors">
                                        <MdWork size={24} />
                                        <span className="text-xs">Jobs</span>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-blue-700 transition-all duration-300"></div>
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="#" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-700 transition-colors">
                                        <MdChat size={24} />
                                        <span className="text-xs">Messaging</span>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-blue-700 transition-all duration-300"></div>
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="#" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-700 transition-colors">
                                        <MdNotifications size={24} />
                                        <span className="text-xs">Notifications</span>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-blue-700 transition-all duration-300"></div>
                                    </a>
                                </li>
                                <li className="border-l pl-2 ml-2" ref={profileRef}>
                                    <button
                                        className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-700 cursor-pointer transition-colors list-none"
                                        onClick={() => setProfileOpen((v) => !v)}
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc0Njg4NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="profile"
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <div className="flex items-center">
                                            <span className="text-xs">Me</span>
                                            <MdArrowDropDown size={20} />
                                        </div>
                                    </button>
                                    {profileOpen && (
                                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border overflow-hidden z-20">
                                            <div className="p-4 border-b">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTc0Njg4NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                                                        alt="profile"
                                                        className="w-14 h-14 rounded-full"
                                                    />
                                                    <div>
                                                        <h4 className="font-semibold">{username}</h4>
                                                        <p className="text-sm text-gray-600">UX Designer at Design Co.</p>
                                                    </div>
                                                </div>
                                                <button className="mt-2 w-full py-1 px-4 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium transition-colors">
                                                    View Profile
                                                </button>
                                            </div>
                                            <div className="p-2">
                                                <h5 className="font-semibold p-2">Account</h5>
                                                <ul>
                                                    <li className="hover:bg-gray-100 rounded-lg transition-colors">
                                                        <a href="#" className="block p-2 text-sm flex items-center">
                                                            <MdSettings className="mr-2" size={18} />
                                                            Settings &amp; Privacy
                                                        </a>
                                                    </li>
                                                    <li className="hover:bg-gray-100 rounded-lg transition-colors">
                                                        <a href="#" className="block p-2 text-sm flex items-center">
                                                            <MdHelp className="mr-2" size={18} />
                                                            Help
                                                        </a>
                                                    </li>
                                                    <li className="hover:bg-gray-100 rounded-lg transition-colors">
                                                        <a href="#" className="block p-2 text-sm flex items-center">
                                                            <MdLanguage className="mr-2" size={18} />
                                                            Language
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="p-2 border-t">
                                                <ul>
                                                    <li className="hover:bg-gray-100 rounded-lg transition-colors">
                                                        <button onClick={handleLogout} className="block p-2 text-sm w-full text-left flex items-center">
                                                            <MdLogout className="mr-2" size={18} />
                                                            Sign Out
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </nav>
                        <div className="md:hidden">
                            <button className="p-2 text-gray-500 hover:text-blue-700 rounded-full hover:bg-gray-100 transition-colors">
                                <MdMenu size={24} />
                            </button>
                        </div>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto py-6 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Sidebar */}
                        <div className="md:col-span-1">
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
                                <div className="h-20 bg-blue-100 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
                                        alt="profile background"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 text-center relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTc0Njg4NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="profile"
                                        className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 -top-10"
                                    />
                                    <div className="mt-12">
                                        <h2 className="font-semibold text-lg hover: cursor-pointer">
                                            {username}
                                        </h2>
                                        <p className="text-sm text-gray-600">UX Designer at Design Co.</p>
                                    </div>
                                    <div className="border-t border-b my-3 py-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Who viewed your profile</span>
                                            <span className="font-semibold text-blue-600">38</span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-2">
                                            <span className="text-gray-500">Views of your post</span>
                                            <span className="font-semibold text-blue-600">142</span>
                                        </div>
                                    </div>
                                    <div className="text-left pt-2">
                                        <a href="#" className="text-sm text-gray-500 flex items-center group">
                                            <MdBookmark className="mr-1 text-yellow-500 group-hover:animate-pulse" size={18} />
                                            My Items
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20">
                                <div className="p-3 border-b"><h3 className="font-semibold">Recent</h3></div>
                                <div className="p-2">
                                    <ul>
                                        <li className="hover:bg-gray-100 rounded transition-colors">
                                            <a href="#" className="flex items-center p-2 text-sm text-gray-600">
                                                <MdGroup className="mr-3 text-gray-500" size={20} />
                                                UX Designer Group
                                            </a>
                                        </li>
                                        <li className="hover:bg-gray-100 rounded transition-colors">
                                            <a href="#" className="flex items-center p-2 text-sm text-gray-600">
                                                <MdTag className="mr-3 text-gray-500" size={20} />
                                                User Experience
                                            </a>
                                        </li>
                                        <li className="hover:bg-gray-100 rounded transition-colors">
                                            <a href="#" className="flex items-center p-2 text-sm text-gray-600">
                                                <MdEvent className="mr-3 text-gray-500" size={20} />
                                                Design Conference 2025
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3 border-t">
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Groups</a>
                                </div>
                                <div className="p-3 border-t flex justify-between items-center">
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Events</a>
                                    <MdAdd className="text-gray-500 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors" size={30} />
                                </div>
                                <div className="p-3 border-t">
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Followed Hashtags</a>
                                </div>
                                <div className="p-4 border-t text-center">
                                    <button className="text-gray-500 font-medium hover:bg-gray-100 w-full py-1 rounded transition-colors">
                                        Discover more
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Feed */}
                        <div className="md:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                                <div className="flex gap-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw0fHxwcm9maWxlfGVufDB8fHx8MTc0Njg4NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="profile"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-3 text-gray-500 text-left flex-grow transition-colors">
                                        Start a post
                                    </button>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <button className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors">
                                        <MdImage className="mr-2 text-blue-500" size={20} />
                                        <span className="text-sm text-gray-500">Photo</span>
                                    </button>
                                    <button className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors">
                                        <MdVideocam className="mr-2 text-green-500" size={20} />
                                        <span className="text-sm text-gray-500">Video</span>
                                    </button>
                                    <button className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors">
                                        <MdEvent className="mr-2 text-amber-500" size={20} />
                                        <span className="text-sm text-gray-500">Event</span>
                                    </button>
                                    <button className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors">
                                        <MdArticle className="mr-2 text-rose-500" size={20} />
                                        <span className="text-sm text-gray-500">Write article</span>
                                    </button>
                                </div>
                            </div>
                            {/* Post 1 */}
                            <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
                                <div className="p-4 border-b">
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <img
                                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTc0NjkzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="user"
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <h4 className="font-semibold flex items-center">
                                                    John Miller
                                                    <span className="text-sm text-gray-500 font-normal ml-1">• 2nd</span>
                                                </h4>
                                                <p className="text-xs text-gray-500">Senior Developer at Tech Solutions</p>
                                                <p className="text-xs text-gray-500">
                                                    2h • <MdPublic className="text-[11px] align-[0.1em]" />
                                                </p>
                                            </div>
                                        </div>
                                        <button className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors group">
                                            <span className="material-symbols-outlined text-gray-500 group-hover:text-gray-700"> <MdMoreHoriz /></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <p>
                                        Excited to share that our team just launched a new feature! After months of hard
                                        work and collaboration, we&#x27;ve released our new AI-powered recommendation
                                        engine. 🚀 #TechInnovation #ProductDevelopment
                                    </p>
                                </div>
                                <div className="px-4 pb-1 flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span className="flex items-center justify-center rounded-full bg-blue-100 w-5 h-5">
                                            <MdThumbUp className="text-[14px] text-blue-600" />
                                        </span>
                                        <span className="flex items-center justify-center rounded-full bg-red-100 w-5 h-5">
                                            <MdFavorite className="text-[14px] text-red-600" />
                                        </span>
                                        <span>87</span>
                                    </div>
                                    <div>12 comments • 3 shares</div>
                                </div>
                                <div className="flex border-t px-2 py-1">
                                    <button className="flex items-center justify-center gap-1 flex-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        <MdThumbUp className="text-gray-500" size={20} />
                                        <span className="text-sm text-gray-500">Like</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 flex-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        <MdRepeat className="text-gray-500" size={20} />
                                        <span className="text-sm text-gray-500">Repost</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 flex-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        <MdSend className="text-gray-500" size={20} />
                                        <span className="text-sm text-gray-500">Send</span>
                                    </button>
                                </div>
                            </div>
                            {/* Post 2 */}
                            <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
                                <div className="p-4 border-b">
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <img
                                                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw1fHx1c2VyfGVufDB8fHx8MTc0NjkzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="user"
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <h4 className="font-semibold flex items-center">
                                                    Emily Rodriguez
                                                    <span className="text-sm text-gray-500 font-normal ml-1">• 2nd</span>
                                                </h4>
                                                <p className="text-xs text-gray-500">Marketing Manager at Global Brands</p>
                                                <p className="text-xs text-gray-500">
                                                    1d • <MdPublic className="text-[11px] align-[0.1em]" />
                                                </p>
                                            </div>
                                        </div>
                                        <button className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors group">
                                            <span className="material-symbols-outlined text-gray-500 group-hover:text-gray-700"><MdMoreHoriz /></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <p>
                                        Just published our latest marketing case study! We increased engagement by 200%
                                        through our multi-channel approach. Check it out and let me know what you think!
                                        📊 #DigitalMarketing #CaseStudy
                                    </p>
                                </div>
                                <div className="w-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                        alt="marketing dashboard"
                                        className="w-full"
                                    />
                                </div>
                                <div className="px-4 py-1 flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span className="flex items-center justify-center rounded-full bg-blue-100 w-5 h-5">
                                            <MdThumbUp className="text-[14px] text-blue-600" />
                                        </span>
                                        <span className="flex items-center justify-center rounded-full bg-green-100 w-5 h-5">
                                            <MdCelebration className="text-[14px] text-green-600" />
                                        </span>
                                        <span>124</span>
                                    </div>
                                    <div>28 comments • 15 shares</div>
                                </div>
                                <div className="flex border-t px-2 py-1">
                                    <button className="flex items-center justify-center gap-1 flex-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        <MdThumbUp className="text-gray-500" size={20} />
                                        <span className="text-sm text-gray-500">Like</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 flex-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        <MdRepeat className="text-gray-500" size={20} />
                                        <span className="text-sm text-gray-500">Repost</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 flex-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        <MdSend className="text-gray-500" size={20} />
                                        <span className="text-sm text-gray-500">Send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Widgets */}
                        <div className="hidden lg:block lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden sticky top-20">
                                <div className="p-3 border-b flex justify-between items-center">
                                    <h3 className="font-semibold">Add to your feed</h3>
                                    <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors"><MdInfo /></span>
                                </div>
                                <div className="p-3">
                                    <div className="flex items-start gap-2 mb-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjb25uZWN0aW9ufGVufDB8fHx8MTc0Njk3NDMyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="connection"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-semibold">Alex Chen</h4>
                                            <p className="text-xs text-gray-500">CTO at Innovate Tech</p>
                                            <button className="mt-1 border border-gray-500 rounded-full px-4 py-1 text-sm font-medium flex items-center hover:bg-gray-100 transition-colors">
                                                <span className="material-symbols-outlined text-sm mr-1"><MdAdd /></span> Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 mb-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1545987796-200677ee1011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw2fHxjb25uZWN0aW9ufGVufDB8fHx8MTc0Njk3NDMyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="connection"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-semibold">Priya Sharma</h4>
                                            <p className="text-xs text-gray-500">Product Designer at Design Hub</p>
                                            <button className="mt-1 border border-gray-500 rounded-full px-4 py-1 text-sm font-medium flex items-center hover:bg-gray-100 transition-colors">
                                                <span className="material-symbols-outlined text-sm mr-1"><MdAdd /></span> Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <img
                                            src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw3fHxjb25uZWN0aW9ufGVufDB8fHx8MTc0Njk3NDMyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="connection"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-semibold">Michael Torres</h4>
                                            <p className="text-xs text-gray-500">Software Engineer at Cloud Solutions</p>
                                            <button className="mt-1 border border-gray-500 rounded-full px-4 py-1 text-sm font-medium flex items-center hover:bg-gray-100 transition-colors">
                                                <span className="material-symbols-outlined text-sm mr-1"><MdAdd /></span> Follow
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border-t">
                                    <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center transition-colors">
                                        View all recommendations
                                        <span className="material-symbols-outlined ml-1"><MdArrowForward /></span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-80">
                                <div className="p-3 border-b"><h3 className="font-semibold">LinkedIn News</h3></div>
                                <div className="p-3">
                                    <ul className="space-y-3">
                                        <li>
                                            <a href="#" className="group">
                                                <h4 className="font-semibold text-sm group-hover:text-blue-700 transition-colors">
                                                    Tech industry sees hiring surge
                                                </h4>
                                                <p className="text-xs text-gray-500">2d ago • 5,243 readers</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group">
                                                <h4 className="font-semibold text-sm group-hover:text-blue-700 transition-colors">
                                                    Remote work trends in 2025
                                                </h4>
                                                <p className="text-xs text-gray-500">3d ago • 4,128 readers</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group">
                                                <h4 className="font-semibold text-sm group-hover:text-blue-700 transition-colors">
                                                    New AI tools revolutionizing industry
                                                </h4>
                                                <p className="text-xs text-gray-500">1d ago • 8,742 readers</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group">
                                                <h4 className="font-semibold text-sm group-hover:text-blue-700 transition-colors">
                                                    Top companies for work-life balance
                                                </h4>
                                                <p className="text-xs text-gray-500">5d ago • 3,927 readers</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group">
                                                <h4 className="font-semibold text-sm group-hover:text-blue-700 transition-colors">
                                                    Skills in demand for 2025
                                                </h4>
                                                <p className="text-xs text-gray-500">6d ago • 6,512 readers</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-[23rem] mt-4">
                                <div className="p-3 border-b flex justify-between items-center">
                                    <h3 className="font-semibold">Job Recommendations</h3>
                                    <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors"><MdWork /></span>
                                </div>
                                <div className="p-3">
                                    <div className="flex items-start gap-2 mb-3">
                                        <span className="material-symbols-outlined flex-shrink-0 p-2 bg-blue-100 text-blue-700 rounded-full"><MdWork /></span>
                                        <div>
                                            <h4 className="font-semibold text-sm">Senior UX Designer</h4>
                                            <p className="text-xs text-gray-500">Creative Solutions Inc.</p>
                                            <p className="text-xs text-gray-500">Remote • Posted 2d ago</p>
                                            <button className="mt-1 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium text-blue-600 flex items-center hover:bg-blue-50 transition-colors">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 mb-3">
                                        <span className="material-symbols-outlined flex-shrink-0 p-2 bg-green-100 text-green-700 rounded-full"><MdWork /></span>
                                        <div>
                                            <h4 className="font-semibold text-sm">Product Manager</h4>
                                            <p className="text-xs text-gray-500">TechForward</p>
                                            <p className="text-xs text-gray-500">San Francisco, CA • Posted 1d ago</p>
                                            <button className="mt-1 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium text-blue-600 flex items-center hover:bg-blue-50 transition-colors">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="material-symbols-outlined flex-shrink-0 p-2 bg-purple-100 text-purple-700 rounded-full"><MdWork /></span>
                                        <div>
                                            <h4 className="font-semibold text-sm">UI/UX Designer</h4>
                                            <p className="text-xs text-gray-500">Global Innovations</p>
                                            <p className="text-xs text-gray-500">New York, NY • Posted 3d ago</p>
                                            <button className="mt-1 border border-blue-600 rounded-full px-4 py-1 text-sm font-medium text-blue-600 flex items-center hover:bg-blue-50 transition-colors">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border-t">
                                    <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center transition-colors">
                                        See all job recommendations
                                        <span className="material-symbols-outlined ml-1"><MdArrowForward /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="bg-white mt-8 border-t py-6">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">About</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">Accessibility</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">Help Center</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">Privacy &amp; Terms</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">Ad Choices</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">Advertising</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">Business Services</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">Get the LinkedIn app</a>
                            <a href="#" className="hover:text-blue-700 hover:underline transition-colors">More</a>
                        </div>
                        <div className="flex justify-center items-center mt-4">
                            <svg className="w-6 h-6 text-blue-700 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                            </svg>
                            <span className="text-xs text-gray-500">LinkedIn Corporation © 2025</span>
                        </div>
                    </div>
                </footer>
                <div className="fixed bottom-0 right-5 z-10 hidden md:block">
                    <div className="bg-white rounded-t-lg shadow-lg border border-gray-300 w-80">
                        
                            <div className="flex items-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Home;