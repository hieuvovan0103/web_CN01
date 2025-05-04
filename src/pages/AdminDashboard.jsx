import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  Settings,
  BarChart2,
  MessageSquare,
  PowerOff
} from 'lucide-react';
import {Button} from "@headlessui/react";

const AdminDashboard = () => {
  // Sample data - in a real app, this would come from an API
  const stats = [
    { title: "Total Sales", value: "12,450,000đ", change: "+12%", trend: "up" },
    { title: "Orders", value: "342", change: "+5%", trend: "up" },
    { title: "Products", value: "56", change: "+3", trend: "up" },
    { title: "Customers", value: "1,234", change: "-2%", trend: "down" }
  ];

  const recentOrders = [
    { id: "#TS-1001", customer: "Nguyễn Văn A", date: "2023-05-01", amount: "450,000đ", status: "Completed" },
    { id: "#TS-1002", customer: "Trần Thị B", date: "2023-05-02", amount: "300,000đ", status: "Processing" },
    { id: "#TS-1003", customer: "Lê Văn C", date: "2023-05-02", amount: "600,000đ", status: "Shipped" },
    { id: "#TS-1004", customer: "Phạm Thị D", date: "2023-05-03", amount: "150,000đ", status: "Pending" }
  ];


  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('user'); // Xóa cookie có tên 'user_info'
    navigate('/login'); // Chuyển hướng sau khi xóa
  };

  // const user = Cookies.get('user');
  // if (user) {
  //   const parsedUser = JSON.parse(user);
  //   console.log(parsedUser.name); // ví dụ: hiển thị username
  // }

  const userInfoRaw = Cookies.get('user');
  const userName = userInfoRaw ? JSON.parse(userInfoRaw).name : 'Admin';
  return (
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-800">T Shop Admin</h1>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/admin" className="flex items-center p-2 text-gray-700 bg-lime-100 rounded-lg">
                  <LayoutDashboard className="w-5 h-5" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/products" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Package className="w-5 h-5" />
                  <span className="ml-3">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/orders" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="ml-3">Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/customers" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Users className="w-5 h-5" />
                  <span className="ml-3">Customers</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/reports" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <BarChart2 className="w-5 h-5" />
                  <span className="ml-3">Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/messages" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                  <span className="ml-3">Messages</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/settings" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Settings className="w-5 h-5" />
                  <span className="ml-3">Settings</span>
                </Link>
              </li>
              <li>
                <Button onClick={handleLogout} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <PowerOff className="w-5 h-5" />
                  <span className="ml-3">Log out</span>
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <header className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
            <p className="text-gray-600">Welcome back, {userName}!</p>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                  <p className="text-2xl font-bold mt-1 mb-2">{stat.value}</p>
                  <p className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    {stat.change} {stat.trend === "up" ? "↑" : "↓"} from last month
                  </p>
                </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <Link to="/admin/orders" className="text-sm text-lime-600 hover:underline">
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === "Completed" ? "bg-green-100 text-green-800" :
                          order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                              order.status === "Shipped" ? "bg-yellow-100 text-yellow-800" :
                                  "bg-gray-100 text-gray-800"}`}>
                        {order.status}
                      </span>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
              <p className="text-gray-600 mb-4">Add a new product to your store inventory</p>
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded">
                Add Product
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">View Inventory</h3>
              <p className="text-gray-600 mb-4">Manage your product inventory and stock levels</p>
              <button className="w-full bg-white border border-lime-500 text-lime-500 hover:bg-lime-50 py-2 px-4 rounded">
                View Inventory
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Customer Messages</h3>
              <p className="text-gray-600 mb-4">You have 5 unread customer messages</p>
              <button className="w-full bg-white border border-lime-500 text-lime-500 hover:bg-lime-50 py-2 px-4 rounded">
                View Messages
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;