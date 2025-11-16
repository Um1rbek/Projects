import React, { useState, useEffect } from "react";
import axios from "axios";

const PutModal = ({ isOpen, onClose, endpoint, item, fields }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(item || {});
  }, [item]);

  if (!isOpen) return null;

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`${endpoint}/${item.id}`, formData);
      alert(`✅ ID:${item.id} ma'lumot yangilandi!`);
      onClose();
    } catch (error) {
      alert("❌ Xatolik yuz berdi");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Item</h2>

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
            Bekor
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Yangilash
          </button>
        </div>
      </div>
    </div>
  );
};

export default PutModal;
