import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Service 1',
      description: 'Detailed description of service 1 and its benefits.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
    },
    {
      title: 'Service 2',
      description: 'Detailed description of service 2 and its benefits.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
    },
    {
      title: 'Service 3',
      description: 'Detailed description of service 3 and its benefits.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;