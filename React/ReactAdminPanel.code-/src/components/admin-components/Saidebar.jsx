import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-green-700 text-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-4 text-2xl font-bold border-b border-green-500">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="block p-2 rounded hover:bg-green-600 hover:text-yellow-400 transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block p-2 rounded hover:bg-green-600 hover:text-yellow-400 transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="block p-2 rounded hover:bg-green-600 hover:text-yellow-400 transition"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/carts"
              className="block p-2 rounded hover:bg-green-600 hover:text-yellow-400 transition"
            >
              Carts
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="block p-2 rounded hover:bg-green-600 hover:text-yellow-400 transition"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
