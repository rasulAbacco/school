import React, { useState } from "react";
import { X, Building2, Mail, Phone, MapPin } from "lucide-react";

export default function AddSchool({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    adminEmail: "",
    phone: "",
    plan: "Free",
    status: "Active",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Later connect API here
    console.log("New School Data:", formData);

    if (onSave) onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
            <Building2 className="text-blue-500" />
            Add New School
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* School Name */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              School Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter school name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm font-semibold text-gray-600 flex gap-1 items-center">
              <MapPin size={14} /> City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Admin Email */}
          <div>
            <label className="text-sm font-semibold text-gray-600 flex gap-1 items-center">
              <Mail size={14} /> Admin Email
            </label>
            <input
              type="email"
              name="adminEmail"
              placeholder="admin@school.com"
              value={formData.adminEmail}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold text-gray-600 flex gap-1 items-center">
              <Phone size={14} /> Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter contact number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Plan + Status */}
          <div className="grid grid-cols-2 gap-4">
            {/* Subscription Plan */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                School
              </label>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Free">Primary School</option>
                <option value="Pro">Secondary School</option>
                <option value="Enterprise">Senior Secondary School</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Blocked">Blocked</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-xl font-semibold text-white shadow-md hover:opacity-90"
              style={{
                background: "blue",
              }}
            >
              Save School
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
