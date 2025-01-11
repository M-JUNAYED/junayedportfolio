'use client'
import React, { useState } from 'react'

const AdminEducation = ({data}) => {
    const [formData, setFormData] = useState({
        session: '',
        degree: '',
        institute_name: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/admin/education', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await res.json();
            if (result.status) {
                alert('Success');
                window.location.reload()
            } else {
                alert('Fail');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred!');
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await fetch('/api/admin/education', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });

            const result = await res.json();
            if (result.status) {
                alert('Delete Successful');
            } else {
                alert('Delete Failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred!');
        }
    };

    return (
        <div className='text-[25px] text-white bg-gray-700 rounded'>
            <h1 className="text-3xl font-bold italic text-center pt-3">This Is About Page</h1>
            <div className="grid grid-cols-2 justify-center p-3">
                <div className="">
                    <p className="text-2xl italic text-center">DATA INPUT</p>
                    <div className="">
                        {['session', 'degree', 'institute_name'].map((field, index) => (
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
                </div>



                <div className="bg-black rounded p-4">
                    <p className="text-2xl italic text-center">OUTPUT</p>
                    <div className="mt-5  text-center">
                        {data && data.length > 0 ? (
                            data.map((item, index) => (
                                <div key={index} className='text-[25px]'>
                                    <div className=''>
                                        <p className="text-3xl underline ">Session</p>
                                        <span className='text-red-500'>{item.session}</span>
                                    </div>
                                    <div className="">
                                        <p className="text-3xl underline">Degree</p>
                                        <p className='font-bold bg-red-600 rounded m-2 text-black italic'>{item.degree}</p>
                                    </div>
                                    <div>
                                        <p className="text-3x underline my-5">Institute Name</p>
                                        <div className="flex justify-center">
                                            <p className='text-[20px] font-bold italic'>{item.institute_name}</p>
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

export default AdminEducation;
