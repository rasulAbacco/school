import React, { useState } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Building2,
  CheckCircle,
  Clock,
} from "lucide-react";
import PageLayout from "../../components/PageLayout";
import AddSchool from "./AddSchool";

export default function Schools() {
  const [search, setSearch] = useState("");
const [openModal, setOpenModal] = useState(false);

  // Dummy Data (later replace with API)
  const schoolsData = [
    {
      id: 1,
      name: "Green Valley High School",
      city: "Hyderabad",
      status: "Active",
      students: 1200,
    },
    {
      id: 2,
      name: "Sunrise Public School",
      city: "Bangalore",
      status: "Pending",
      students: 850,
    },
    {
      id: 3,
      name: "Oxford International School",
      city: "Chennai",
      status: "Active",
      students: 1500,
    },
  ];

  // Filter schools
  const filteredSchools = schoolsData.filter((school) =>
    school.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageLayout>
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Building2 className="text-yellow-500" />
            Schools Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage all registered schools in the platform
          </p>
        </div>

        {/* Add School Button */}
        <button
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white shadow-md"
            style={{
                background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
            }}
            >
            <Plus size={18} />
            Add School
        </button>

      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex items-center gap-3">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search schools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Schools Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">School Name</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-center">Students</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredSchools.map((school) => (
              <tr
                key={school.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-semibold text-gray-800">
                  {school.name}
                </td>

                <td className="p-4 text-gray-600">{school.city}</td>

                <td className="p-4 text-center font-medium">
                  {school.students}
                </td>

                {/* Status Badge */}
                <td className="p-4 text-center">
                  {school.status === "Active" ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
                      <CheckCircle size={14} />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs font-semibold">
                      <Clock size={14} />
                      Pending
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

            {/* Empty State */}
            {filteredSchools.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-gray-500"
                >
                  No schools found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Modal */}
        {openModal && (
        <AddSchool
            onClose={() => setOpenModal(false)}
            onSave={(data) => console.log("Saved School:", data)}
        />
        )}

    </div>
    </PageLayout>
  );
}
