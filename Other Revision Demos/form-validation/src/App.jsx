import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import UserList from "./components/userList";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confPassword: "",
    title: "",
    role: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const formDataHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    const numberRegex = /^\+?[0-9]{7,15}$/;
    const countryRegex = /^(?!$|Select).+/;

    if (formData.password.length < 8) {
      setError("⚠️ Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confPassword) {
      setError("⚠️ Please check your confirm password.");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setError(
        "⚠️ Password must include: one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }

    if (!numberRegex.test(formData.phoneNumber)) {
      setError("⚠️ Please verify your mobile number");
      return;
    }

    if (!countryRegex.test(formData.country)) {
      setError("⚠️ Please verify your country selection.");
      return;
    }

    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confPassword: "",
      title: "",
      role: "",
      country: "",
    });
    setError("");

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        title: formData.title,
        role: formData.role,
        country: formData.country,
      },
    ]);

    setShowTable(true);

    toast.success("Form submitted successfully! ✅");

    e.target.reset();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Add New Account
        </h2>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="fullName"
              value={formData.fullName}
              onChange={formDataHandler}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="email"
              value={formData.email}
              onChange={formDataHandler}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={formDataHandler}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="password"
              value={formData.password}
              onChange={formDataHandler}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="confPassword"
              value={formData.confPassword}
              onChange={formDataHandler}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Product Director"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="title"
              value={formData.title}
              onChange={formDataHandler}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Role
            </label>
            <input
              type="text"
              id="role"
              placeholder="Member"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="role"
              value={formData.role}
              onChange={formDataHandler}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Country
            </label>
            <select
              id="country"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="country"
              value={formData.country}
              onChange={formDataHandler}
              required
            >
              <option value="">Select your country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 bg-gray-700 border-gray-600 rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
              I agree to the{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Terms and Conditions
              </a>
            </label>
          </div>

          {error && (
            <p className="w-full text-center bg-red-50 border border-red-300 text-red-600 text-sm py-2 rounded-md mt-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
            Log in
          </a>
        </p>
      </div>

      {showTable && <UserList users={users} />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
