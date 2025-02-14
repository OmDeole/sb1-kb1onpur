import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="relative h-[85vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80"
          alt="Business Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Innovate.<br />
              Create.<br />
              Succeed.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Transform your vision into reality with our cutting-edge solutions and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" 
                className="group inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg">
                Explore Services
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Digital Strategy",
              description: "Transform your business with our comprehensive digital solutions.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            },
            {
              title: "Brand Development",
              description: "Create a powerful brand identity that resonates with your audience.",
              image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80"
            },
            {
              title: "Growth Marketing",
              description: "Scale your business with data-driven marketing strategies.",
              image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
            }
          ].map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-90"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <Link to="/services" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { number: "500+", label: "Clients", icon: Users },
              { number: "95%", label: "Success Rate", icon: TrendingUp },
              { number: "10+", label: "Years Experience", icon: Shield },
              { number: "24/7", label: "Support", icon: CheckCircle2 }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="w-12 h-12 mb-4 opacity-75" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Industry Expertise',
              description: 'Over a decade of experience delivering exceptional results.',
              icon: '🎯'
            },
            {
              title: 'Innovation First',
              description: 'Cutting-edge solutions that keep you ahead of the competition.',
              icon: '💡'
            },
            {
              title: 'Dedicated Support',
              description: 'Round-the-clock support to ensure your success.',
              icon: '🤝'
            }
          ].map((item, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <Link to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg">
            Get Started Today
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;