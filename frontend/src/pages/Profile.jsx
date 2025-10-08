import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const [user, setUser] = useState(null);
  const {backendUrl,token}=useContext(ShopContext)

  // Fetch user profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(backendUrl+"/api/user/profile"
        ,{headers:{token}});
        setUser(res.data.user);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 text-center transform hover:scale-[1.02] transition duration-300">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={
              user.profilePic ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 text-sm mb-4">{user.email}</p>

        <div className="bg-blue-50 rounded-lg p-4 mb-4 text-left text-gray-700">
          <p className="mb-2">
            <span className="font-semibold text-gray-900">Joined:</span>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Phone:</span>{" "}
            {user.phone || "Not added"}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
