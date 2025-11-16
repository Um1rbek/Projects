
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostModal from "./admin-components/PostModal";
import PutModal from "./admin-components/PutModal";
import Sidebar from "./admin-components/Saidebar";
import Navbar from "./admin-components/Navbar";
import Table from "./admin-components/Table";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showPutModal, setShowPutModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        alert("Item Deleted");
        setProducts(products.filter(p => p.id !== id));
      });
  };

  const handleAdd = (newProduct) => {
    axios.post("https://fakestoreapi.com/products", newProduct)
      .then((res) => {
        setProducts([...products, res.data]);
        setShowPostModal(false);
      });
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setShowPutModal(true);
  };

  const handleUpdate = (updatedProduct) => {
    axios.put(`https://fakestoreapi.com/products/${updatedProduct.id}`, updatedProduct)
      .then((res) => {
        setProducts(products.map(p => p.id === updatedProduct.id ? res.data : p));
        setShowPutModal(false);
        setEditProduct(null);
      });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <button
            onClick={() => setShowPostModal(true)}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            + Add
          </button>

          <Table data={products} onDelete={handleDelete} onEdit={handleEdit} />

          {showPostModal && (
  <PostModal 
  isOpen={showPostModal} 
  onClose={() => setShowPostModal(false)} 
  endpoint="https://fakestoreapi.com/products" 
  fields={["title", "price", "description", "category", "image"]}
/>

          )}

          {showPutModal && editProduct && (
<PutModal
  isOpen={showPutModal}
  onClose={() => setShowPutModal(false)}
  endpoint="https://fakestoreapi.com/users"
  item={selectedUser}
  fields={["username", "email", "phone"]}
/>

          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
