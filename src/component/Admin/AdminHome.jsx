'use client';

import React, { useState } from 'react';

const AdminHome = ({ data }) => {
  const [formData, setFormData] = useState({
    first_title: '',
    second_title: '',
    thirt_title: '',
    last_title: '',
    sub_title: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    github: '',
    home_img: '',
    project: '',
    service: '',
    client: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await fetch('/api/admin/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status) {
        alert('Data POST Success Full');
        window.location.reload()
      } else {
        alert('Fail Request');
      }
    } catch (error) {
      alert('Something went wrong');
    }
  };


  const handleDelete = async (id) => {
    try {
      const res = await fetch('/api/admin/home', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });

      const result = await res.json();
      if (result.status) {
        alert('Data Delete Success');
        window.location.reload();
      } else {
        alert('Delete Request Failed');
      }
    } catch (error) {
      alert('Something went wrong while deleting the data');
    }
  };


  return (
    <div className="bg-gray-700 text-white items-center rounded">
      <div className="font-bold text-3xl text-center m-2 pt-4 italic">This Is Home Page</div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-y-2 text-center text-[22px]">
        {/* Input Section */}
        <div>
          <h1 className="text-2xl font-semibold p-2 underline decoration-wavy">Input Section</h1>
          {['first_title', 'second_title', 'thirt_title', 'last_title', 'sub_title', 'home_img','facebook','twitter','linkedin','github','project','service','client'].map((field, index) => (
            <div className="text-start p-2" key={index}>
              <label htmlFor={field}>{field.replace('_', ' ').toUpperCase()}:</label>
              <input
                type="text"
                className="p-2 placeholder:italic placeholder:text-slate-400 block bg-black w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 sm:text-sm"
                placeholder={`${field.replace('_', ' ').toUpperCase()}...`}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {/* Output Section */}
        <div className='bg-gray-500 rounded p-4'>
          <h1 className="text-2xl font-semibold p-2 underline decoration-wavy">Output Section</h1>

          <div className="mt-5">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <div key={index} className='text-[25px]'>
                  <div className=''>
                    <p className="text-3xl underline ">Title</p>
                    <span className='text-red-500'>{item.first_title}</span>
                    <span className='text-orange-700'> {item.second_title}</span>
                    <span className='text-green-900'> {item.thirt_title}</span>
                    <span className='text-black'> {item.last_title}</span>
                  </div>
                  <div className="">
                    <p className="text-3xl underline">Sub Description</p>
                    <p className='font-bold text-black italic'>{item.sub_title}</p>
                  </div>
                  <div>
                    <p className="text-3xl underline my-5">Home Page Image</p>
                    <div className="flex justify-center">
                      <img src={item.home_img} alt="home image" className="w-1/2 h-auto rounded" />
                    </div>
                    <div className="flex justify-center">
                      <p className="text-4xl text-gray-400 mr-2">project <span className='text-red-500'>{item.project}+</span></p>
                      <p className="text-4xl text-gray-400 mr-2">service <span className='text-red-500'>{item.service}+</span></p>
                      <p className="text-4xl text-gray-400 mr-2">client <span className='text-red-500'>{item.client}+</span></p>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

              ))
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
