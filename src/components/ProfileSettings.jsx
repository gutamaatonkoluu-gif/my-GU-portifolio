import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ProfileSettings() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedName = localStorage.getItem("profileName");
    const storedBio = localStorage.getItem("profileBio");
    const storedImg = localStorage.getItem("profileImage");
    if (storedName) setName(storedName);
    if (storedBio) setBio(storedBio);
    if (storedImg) setPreview(storedImg);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSave = () => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileBio", bio);
    if (preview) localStorage.setItem("profileImage", preview);
    else localStorage.removeItem("profileImage");
    alert("✅ Profile updated successfully!");
  };

  return (
    <section
      id="profile"
      className="py-16 bg-[#180e01] min-h-screen flex flex-col items-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-[#f57c00] mb-8"
      >
        My Profile
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#3e2723] p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <div className="flex flex-col items-center">
          <img
            src={preview || "/profile.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-[#f57c00] object-cover mb-4"
          />
          <div className="flex gap-4">
            <button
              onClick={() => fileInputRef.current.click()}
              className="bg-[#f57c00] hover:bg-[#ffa726] text-white px-4 py-2 rounded-lg font-semibold"
            >
              Upload
            </button>
            <button
              onClick={handleRemoveImage}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Remove
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <div>
          <label className="block text-[#b0b0b0] mb-1">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-[#4e342e] text-[#f5f5f5] focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-[#b0b0b0] mb-1">Short Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
            className="w-full p-3 rounded bg-[#4e342e] text-[#f5f5f5] focus:outline-none"
            placeholder="Tell us about yourself"
          />
        </div>

        <motion.button
          onClick={handleSave}
          whileHover={{ scale: 1.05 }}
          className="w-full bg-[#f57c00] hover:bg-[#ffa726] text-white py-3 rounded-lg font-bold transition-all"
        >
          Save Changes
        </motion.button>
      </motion.div>
    </section>
  );
}
