import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 md:p-6">
      <div className="bg-gray-200 p-4 flex flex-col items-center justify-center h-52 text-center border border-gray-300 rounded-3xl transition-transform duration-500 hover:scale-90">
        <h2 className="mb-2 text-xl font-semibold">Home</h2>
        <p>Welcome to the Job Portal! Your gateway to your dream job.</p>
        <Link
          href="/"
          className="inline-block mt-4 py-2 px-4 bg-green-600 text-white rounded-lg transition-transform duration-300 hover:bg-green-500 hover:text-red-500 hover:scale-110"
        >
          Learn More
        </Link>
      </div>

      <div className="bg-gray-200 p-4 flex flex-col items-center justify-center h-52 text-center border border-gray-300 rounded-3xl transition-transform duration-500 hover:scale-90">
        <h2 className="mb-2 text-xl font-semibold">Jobs</h2>
        <p>
          Browse through a wide range of job listings and find your perfect
          match.
        </p>
        <Link
          href="/Jobs"
          className="inline-block mt-4 py-2 px-4 bg-green-600 text-white rounded-lg transition-transform duration-300 hover:bg-green-500 hover:text-red-500 hover:scale-110"
        >
          Explore Jobs
        </Link>
      </div>

      <div className="bg-gray-200 p-4 flex flex-col items-center justify-center h-52 text-center border border-gray-300 rounded-3xl transition-transform duration-500 hover:scale-90">
        <h2 className="mb-2 text-xl font-semibold">Companies</h2>
        <p>
          Discover the companies looking to hire talented professionals like
          you.
        </p>
        <Link
          href="/Companies"
          className="inline-block mt-4 py-2 px-4 bg-green-600 text-white rounded-lg transition-transform duration-300 hover:bg-green-500 hover:text-red-500 hover:scale-110"
        >
          Explore Companies
        </Link>
      </div>

      <div className="bg-gray-200 p-4 flex flex-col items-center justify-center h-52 text-center border border-gray-300 rounded-3xl transition-transform duration-500 hover:scale-90">
        <h2 className="mb-2 text-xl font-semibold">Contact Us</h2>
        <p>Have any questions? Feel free to get in touch with us.</p>
        <Link
          href="/Contact"
          className="inline-block mt-4 py-2 px-4 bg-green-600 text-white rounded-lg transition-transform duration-300 hover:bg-green-500 hover:text-red-500 hover:scale-110"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
