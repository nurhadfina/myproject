// src/pages/admin/UserManagement.jsx
import React, { useEffect, useState } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // In a real app, fetch user data from your backend.
    // For this demo, we'll just use static data:
    setUsers([
      { id: 1, name: 'Alice', email: 'alice@email.com' },
      // ...
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                  {/* Add more actions like delete, edit, etc. */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
