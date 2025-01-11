'use client';
import React, { useState, useEffect } from 'react';

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts data when component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('/api/admin/contact');
        const result = await res.json();
        if (result.status) {
          setContacts(result.data); // Set contacts data
        } else {
          alert('Failed to fetch contacts');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching data.');
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch('/api/admin/contact', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();
      if (result.status) {
        alert('Delete Successful');
        setContacts(contacts.filter(contact => contact.id !== id)); // Remove deleted contact from state
      } else {
        alert('Delete Failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred!');
    }
  };

  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg p-4">
      <table className="table-auto w-full text-left text-white border-collapse border border-gray-600">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-600">ID</th>
            <th className="px-4 py-2 border border-gray-600">Full Name</th>
            <th className="px-4 py-2 border border-gray-600">Mobile Number</th>
            <th className="px-4 py-2 border border-gray-600">Email</th>
            <th className="px-4 py-2 border border-gray-600">Message</th>
            <th className="px-4 py-2 border border-gray-600">Created At</th>
            <th className="px-4 py-2 border border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-700">
                <td className="px-4 py-2 border border-gray-600">{contact.id}</td>
                <td className="px-4 py-2 border border-gray-600">{contact.full_name || '-'}</td>
                <td className="px-4 py-2 border border-gray-600">{contact.mobile_number || '-'}</td>
                <td className="px-4 py-2 border border-gray-600">{contact.email || '-'}</td>
                <td className="px-4 py-2 border border-gray-600">{contact.message || '-'}</td>
                <td className="px-4 py-2 border border-gray-600">
                  {new Date(contact.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2 border border-gray-600">
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No contacts available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContact;
