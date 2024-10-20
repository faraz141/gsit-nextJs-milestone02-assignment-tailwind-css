import React from 'react';

const companies = [
  {
    name: 'Company Name 1',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 2',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 3',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 4',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 5',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 6',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 7',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const CompaniesGrid: React.FC = () => {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-semibold mt-12 text-center">COMPANIES</h1>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
        {companies.map((company, index) => (
          <section
            className="bg-gray-100 p-4 text-center border border-gray-300 rounded-2xl transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <div className="companyListing">
              <h3 className="mb-2 text-lg font-medium">{company.name}</h3>
              <p>Location: {company.location}</p>
              <p>Description: {company.description}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CompaniesGrid;
