import React from 'react';

const FormComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 rounded shadow-md dark:shadow-lg w-3/4 border-2 black">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <form action="https://formspree.io/f/mnqeaved" method="post">

          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter your first name" className="w-full p-2 border border-gray-300 rounded my-1" required />

          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter your last name" className="w-full p-2 border border-gray-300 rounded my-1" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded my-1"
            required
            pattern="[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}"
          />

          <label htmlFor="subject">Subject:</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} className="w-full p-2 border border-gray-300 rounded my-1" required></textarea>

          <input type="submit" value="Submit" className="bg-green-600 text-white p-2 rounded cursor-pointer hover:bg-green-700 mt-4" />

        </form>
      </div>
    </div>
  );
};

export default FormComponent;