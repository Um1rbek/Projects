import React, { useState } from "react";
import axios from "axios";

const PostModal = ({ isOpen, onClose, endpoint, fields }) => {
  const [formData, setFormData] = useState({});

  if (!isOpen) return null;

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleSubmit = async () => {

      axios.post(endpoint, formData);
      alert("✅ Ma'lumot muvaffaqiyatli qo'shildi!");
      onClose();
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">+ Add New</h2>

        {fields.map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            className="mb-3 w-full border p-2 rounded"
            value={formData[field] || ""}
            onChange={(e) => handleChange(e, field)}
          />
        ))}

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
