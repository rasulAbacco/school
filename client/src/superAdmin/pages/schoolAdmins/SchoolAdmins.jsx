import React, { useState } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  UserCog,
  ShieldCheck,
  Mail,
} from "lucide-react";

// import AddSchoolAdmin from "./AddSchoolAdmin";

export default function SchoolAdmins() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // Dummy Admin Data (Replace with API later)
  const adminsData = [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@greenvalley.com",
      school: "Green Valley High School",
      status: "Active",
    },
    {
      id: 2,
      name: "Sneha Reddy",
      email: "sneha@sunrise.com",
      school: "Sunrise Public School",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Amit Sharma",
      email: "amit@oxford.com",
      school: "Oxford International School",
      status: "Active",
    },
  ];

  // Search Filter
  const filteredAdmins = adminsData.filter((admin) =>
    admin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <UserCog className="text-blue-500" />
            School Admins
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage all school admin accounts in the platform
          </p>
        </div>

        {/* Add Admin Button */}
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white shadow-md hover:opacity-90"
          style={{
            background: "linear-gradient(135deg,#3B82F6,#2563EB)",
          }}
        >
          <Plus size={18} />
          Add Admin
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex items-center gap-3">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search school admins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Admins Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          {/* Table Head */}
          <thead className="bg-blue-50 text-blue-700 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">Admin Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">School</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredAdmins.map((admin) => (
              <tr
                key={admin.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Name */}
                <td className="p-4 font-semibold text-gray-800">
                  {admin.name}
                </td>

                {/* Email */}
                <td className="p-4 text-gray-600 flex items-center gap-2">
                  <Mail size={14} className="text-blue-400" />
                  {admin.email}
                </td>

                {/* School */}
                <td className="p-4 text-gray-700">{admin.school}</td>

                {/* Status */}
                <td className="p-4 text-center">
                  {admin.status === "Active" ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">
                      <ShieldCheck size={14} />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                      <ShieldCheck size={14} />
                      Blocked
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                      <Edit size={16} className="text-blue-500" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* Empty */}
            {filteredAdmins.length === 0 && (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  No school admins found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {openModal && (
        <AddSchoolAdmin onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
}
