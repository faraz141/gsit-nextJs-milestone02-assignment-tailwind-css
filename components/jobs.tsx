import React from 'react';

const Jobs = () => {
  return (
    <div>
      <div className="content-jobs">
        <h2 className="text-3xl font-semibold mt-12 text-center">
          Available Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 md:p-8">
          <div className="jobs-box transform transition-transform duration-500 hover:scale-110 hover:bg-green-600 hover:text-red-600 rounded-lg">
            <div className="job-div bg-gray-100 p-4 text-center border border-gray-300 rounded-2xl">
              <h3 className="text-xl mb-2">Job Title 1</h3>
              <p>Company: Company Name</p>
              <p>Location: City, Country</p>
              <p className="mb-4">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
              <button className="jobs-button mt-4 bg-green-500 text-white py-2 px-4 rounded-md transition-transform duration-300 hover:bg-green-600 hover:text-red-600 hover:scale-110">
                Apply Now
              </button>
            </div>
          </div>

          <div className="jobs-box transform transition-transform duration-500 hover:scale-110 hover:bg-green-600 hover:text-red-600 rounded-lg">
            <div className="job-div bg-gray-100 p-4 text-center border border-gray-300 rounded-2xl">
              <h3 className="text-xl mb-2">Job Title 1</h3>
              <p>Company: Company Name</p>
              <p>Location: City, Country</p>
              <p className="mb-4">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
              <button className="jobs-button mt-4 bg-green-500 text-white py-2 px-4 rounded-md transition-transform duration-300 hover:bg-green-600 hover:text-red-600 hover:scale-110">
                Apply Now
              </button>
            </div>
          </div>

          <div className="jobs-box transform transition-transform duration-500 hover:scale-110 hover:bg-green-600 hover:text-red-600 rounded-lg">
            <div className="job-div bg-gray-100 p-4 text-center border border-gray-300 rounded-2xl">
              <h3 className="text-xl mb-2">Job Title 1</h3>
              <p>Company: Company Name</p>
              <p>Location: City, Country</p>
              <p className="mb-4">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
              <button className="jobs-button mt-4 bg-green-500 text-white py-2 px-4 rounded-md transition-transform duration-300 hover:bg-green-600 hover:text-red-600 hover:scale-110">
                Apply Now
              </button>
            </div>
          </div>

          <div className="jobs-box transform transition-transform duration-500 hover:scale-110 hover:bg-green-600 hover:text-red-600 rounded-lg">
            <div className="job-div bg-gray-100 p-4 text-center border border-gray-300 rounded-2xl">
              <h3 className="text-xl mb-2">Job Title 1</h3>
              <p>Company: Company Name</p>
              <p>Location: City, Country</p>
              <p className="mb-4">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
              <button className="jobs-button mt-4 bg-green-500 text-white py-2 px-4 rounded-md transition-transform duration-300 hover:bg-green-600 hover:text-red-600 hover:scale-110">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
