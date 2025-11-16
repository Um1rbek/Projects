import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);
  const location = useLocation()?.pathname;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let url = "";
    if (location === "/products") {
      url = "https://fakestoreapi.com/products";
    } else if (location === "/users") {
      url = "https://fakestoreapi.com/users";
    } else if (location === "/carts") {
      url = "https://fakestoreapi.com/carts";
    }

    if (url) {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("API error:", err);
          setLoading(false);
        });
    }
  }, [location]);



  const handleDelete = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((data) => {
      alert("item delet")
    });
  };
    
  
 
  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="m-6 overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead>
          {location === "/products" ? (
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Actions</th>
            </tr>
          ) : location === "/users" ? (
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Actions</th>
            </tr>
          ) : location === "/carts" ? (
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">User ID</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Products Count</th>
              <th className="border p-2">Actions</th>
            </tr>
          ) : null}
        </thead>

        <tbody>
          {location === "/products"
            ? data.map((item, i) => (
                <tr key={item.id}>
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2">${item.price}</td>
                  <td className="border p-2">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                  </td>
                  <td className="border p-2 space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : location === "/users"
            ? data.map((item, i) => (
                <tr key={item.id}>
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{item.name.firstname}</td>
                  <td className="border p-2">{item.name.lastname}</td>
                  <td className="border p-2">{item.username}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.phone}</td>
                  <td className="border p-2">{item.address.city}</td>
                  <td className="border p-2 space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : location === "/carts"
            ? data.map((item, i) => (
                <tr key={item.id}>
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{item.userId}</td>
                  <td className="border p-2">{item.date}</td>
                  <td className="border p-2">{item.products.length}</td>
                  <td className="border p-2 space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
