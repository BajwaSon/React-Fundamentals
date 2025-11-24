import React from "react";

const UserList = ({ users }) => {
  return (
    <div className="p-6 min-h-screen bg-gray-900 text-gray-200">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h1 class="text-xl font-semibold">Users</h1>
          <p class="text-gray-400 text-sm">
            A list of all the users including name, email, phone, country, title
            and role.
          </p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-700 bg-gray-800 rounded-xl overflow-hidden">
          <thead class="bg-gray-800 text-gray-300">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase">
                Full Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase">
                Email
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase">
                Phone
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase">
                Title
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase">
                Password
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase">
                Role
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase">
                Country
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-700">
            {users.map((user, idx) => (
              <tr class="hover:bg-gray-700/40" key={idx}>
                <td class="px-6 py-4">{user.fullName}</td>
                <td class="px-6 py-4 text-gray-300">{user.email}</td>
                <td class="px-6 py-4">{user.phoneNumber}</td>
                <td class="px-6 py-4">{user.password}</td>
                <td class="px-6 py-4">{user.title}</td>
                <td class="px-6 py-4">{user.role}</td>
                <td class="px-6 py-4">{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
