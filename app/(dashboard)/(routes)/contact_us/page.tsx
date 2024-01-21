import React from 'react';

const FormComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 rounded shadow-md dark:shadow-lg w-3/4 border-2 bg-white">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Contact Us</h2>

        <form action="https://formcarry.com/s/mkndowea" method="post">

          <div className="mb-6">
            <label htmlFor="fname" className="block text-sm font-medium text-gray-600">First Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter your first name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500" required />
          </div>

          <div className="mb-6">
            <label htmlFor="lname" className="block text-sm font-medium text-gray-600">Last Name:</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter your last name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              required
              pattern="[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Subject:</label>
            <textarea id="subject" name="subject" placeholder="Write something.." className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500" style={{ height: '200px' }} required></textarea>
          </div>

          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default FormComponent;
