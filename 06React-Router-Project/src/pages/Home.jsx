import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-50 to-cyan-100">

      <h1 className="text-5xl font-extrabold text-gray-800">
        Welcome to <span className="text-cyan-600">VijayShop</span>
      </h1>

      <p className="mt-4 max-w-xl text-gray-600 text-lg">
        Your one-stop destination for modern web services, premium solutions,
        and smart digital products.
      </p>

      <div className="mt-6 flex gap-4">
        <NavLink
          to="/service"
          className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
        >
          Explore Services
        </NavLink>

        <NavLink
          to="/contact"
          className="px-6 py-3 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50"
        >
          Contact Us
        </NavLink>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-4xl">
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="font-bold text-lg">Fast Delivery</h3>
          <p className="text-sm text-gray-600 mt-2">
            We ensure quick response and project delivery.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="font-bold text-lg">Secure Systems</h3>
          <p className="text-sm text-gray-600 mt-2">
            Your data is protected with best security practices.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="font-bold text-lg">Modern Design</h3>
          <p className="text-sm text-gray-600 mt-2">
            Clean UI/UX using latest frontend technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
