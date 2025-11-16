import React, { useState, useEffect } from "react";
import axios from "axios";
import Saidbar from "./admin-components/Saidebar";
import Navbar from "./admin-components/Navbar";
import Table from "./admin-components/Table";
import PostModal from "./admin-components/PostModal";
import PutModal from "./admin-components/PutModal";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showPutModal, setShowPutModal] = useState(false);
  const [selectedCart, setSelectedCart] = useState(null);

  // API dan carts olish
  useEffect(() => {
    axios.get("https://fakestoreapi.com/carts").then((res) => setCarts(res.data));
  }, []);

  // Yangi cart qo‘shish
  const handleAdd = (newCart) => {
    axios.post("https://fakestoreapi.com/carts", newCart).then((res) => {
      setCarts([...carts, res.data]);
      setShowPostModal(false);
    });
  };

  // Cartni tahrirlash
  const handleEdit = (updatedCart) => {
    axios
      .put(`https://fakestoreapi.com/carts/${updatedCart.id}`, updatedCart)
      .then((res) => {
        setCarts(
          carts.map((cart) => (cart.id === updatedCart.id ? res.data : cart))
        );
        setShowPutModal(false);
        setSelectedCart(null);
      });
  };

  // Table orqali Edit tugmasi bosilganda
  const handleEditClick = (cart) => {
    setSelectedCart(cart);
    setShowPutModal(true);
  };

  return (
    <div className="flex">
      <Saidbar />

      <div className="min-h-screen bg-gray-100 flex-1">
        <Navbar />

        {/* Add Button */}
        <button
          onClick={() => setShowPostModal(true)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          + Add
        </button>

        {/* Add Modal */}
        {showPostModal && (
          <PostModal
            isOpen={showPostModal}
            onClose={() => setShowPostModal(false)}
            endpoint="https://fakestoreapi.com/carts"
            fields={["userId", "date", "products"]}
            onSubmit={handleAdd}
          />
        )}

        {/* Edit Modal */}
        {showPutModal && (
          <PutModal
            isOpen={showPutModal}
            onClose={() => setShowPutModal(false)}
            endpoint="https://fakestoreapi.com/carts"
            item={selectedCart}
            fields={["userId", "date", "products"]}
            onSubmit={handleEdit}
          />
        )}

        {/* Table with Edit option */}
        <Table
          data={carts}
          onEdit={handleEditClick} // Edit tugmasi shu orqali ishlaydi
        />
      </div>
    </div>
  );
};

export default Carts;
