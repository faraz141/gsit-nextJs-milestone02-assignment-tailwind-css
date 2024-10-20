'use client';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const tempErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      tempErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message) {
      tempErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      alert('Form submitted successfully');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to reach out for any inquiries.
        </p>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:border-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-3 py-2 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:border-blue-500 resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
