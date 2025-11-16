import React from 'react';
import Navbar from './admin-components/Navbar';
import Sidebar from './admin-components/Saidebar';
import { PieChart, DollarSign, Users, ShoppingBag } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Umumiy foyda",
      value: "$24,500",
      icon: <DollarSign className="text-yellow-400" size={28} />,
      bg: "bg-black text-white",
    },
    {
      title: "Yangi foydalanuvchilar",
      value: "1,240",
      icon: <Users className="text-green-500" size={28} />,
      bg: "bg-white text-black border",
    },
    {
      title: "Buyurtmalar",
      value: "325",
      icon: <ShoppingBag className="text-yellow-400" size={28} />,
      bg: "bg-green-600 text-white",
    },
    {
      title: "Statistika",
      value: "64%",
      icon: <PieChart className="text-white" size={28} />,
      bg: "bg-yellow-400 text-black",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-5 flex items-center justify-between hover:scale-105 transition-transform duration-300 ${item.bg}`}
              >
                <div>
                  <h2 className="text-sm opacity-70">{item.title}</h2>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
                <div className="ml-4">{item.icon}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
