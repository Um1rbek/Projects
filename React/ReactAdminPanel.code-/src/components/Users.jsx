import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./admin-components/Navbar";
import Sidebar from "./admin-components/Saidebar";
import Table from "./admin-components/Table";
import PostModal from "./admin-components/PostModal";
import PutModal from "./admin-components/PutModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showPutModal, setShowPutModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Usersni olish
  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  // Yangi user qo‘shish
  const handleAdd = (newUser) => {
    axios
      .post("https://fakestoreapi.com/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setShowPostModal(false);
      })
      .catch((err) => console.error("Error adding user:", err));
  };

  // Userni o‘chirish
  const handleDelete = (id) => {
    axios.delete(`https://fakestoreapi.com/users/${id}`).then(() => {
      setUsers((prev) => prev.filter((item) => item.id !== id));
    });
  };

  // Userni yangilash
  const handleEdit = (updatedUser) => {
    axios
      .put(`https://fakestoreapi.com/users/${updatedUser.id}`, updatedUser)
      .then((res) => {
        setUsers((prev) =>
          prev.map((item) => (item.id === updatedUser.id ? res.data : item))
        );
        setShowPutModal(false);
        setSelectedUser(null);
      });
  };

  // Table dagi "Edit" tugmasi bosilganda
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowPutModal(true);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 overflow-auto">
          <button
            onClick={() => setShowPostModal(true)}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            + Add
          </button>
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          <div className="bg-white p-4 rounded shadow">
            <Table
              data={users}
              onDelete={handleDelete}
              onEdit={handleEditClick}
            />

            {/* POST MODAL */}
            {showPostModal && (
              <PostModal
                isOpen={showPostModal}
                onClose={() => setShowPostModal(false)}
                endpoint="https://fakestoreapi.com/users"
                fields={["username", "email", "password"]}
                onSubmit={handleAdd}
              />
            )}

            {/* PUT MODAL */}
            {showPutModal && (
              <PutModal
                isOpen={showPutModal}
                onClose={() => setShowPutModal(false)}
                endpoint="https://fakestoreapi.com/users"
                item={selectedUser}
                fields={["username", "email", "password"]}
                onSubmit={handleEdit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
