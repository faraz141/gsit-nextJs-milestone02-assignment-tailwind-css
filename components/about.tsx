import React from 'react';

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 md:p-8">
      <div className="flex justify-center">
        <img
          src="https://media.istockphoto.com/id/1866121862/photo/searching-for-job.webp?b=1&s=170667a&w=0&k=20&c=bdnEWJONH7_Ldv4cCCdjkqsJ-A0I4ymSm14PdifG1ns="
          alt="about-image"
          className="rounded-2xl mt-24 mb-24 md:mt-12 md:mb-12 w-[500px] h-[400px]"
        />
      </div>
      <div className="content-about">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          About Job Portal
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Welcome to the Job Portal, your premier destination for finding the
          perfect job and discovering outstanding career opportunities. Our
          mission is to connect job seekers with top employers, providing a
          seamless and efficient platform for both parties.
        </p>
        <p className="text-lg md:text-xl mb-4">
          Our job portal offers a vast array of features:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Comprehensive Job Listings:</strong> Browse thousands of job
            openings from various industries and locations.
          </li>
          <li>
            <strong>Company Profiles:</strong> Learn about potential employers,
            their work culture, and current job openings.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Easily navigate our
            website and find the information you need quickly.
          </li>
          <li>
            <strong>Personalized Job Alerts:</strong> Receive notifications
            about new job postings that match your preferences.
          </li>
          <li>
            <strong>Secure and Confidential:</strong> Your personal information
            is safe with us, ensuring a secure job search experience.
          </li>
        </ul>
        <p className="text-lg md:text-xl mt-4">
          We are dedicated to helping you achieve your career goals and find the
          job that best suits your skills and aspirations. Thank you for
          choosing Job Portal!
        </p>
      </div>
    </div>
  );
};

export default About;
