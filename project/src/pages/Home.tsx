import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      icon: '💻',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance to drive your business forward.',
      icon: '🎯',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure for modern businesses.',
      icon: '☁️',
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology.',
      icon: '🚀',
    },
  ];

  const testimonials = [
    {
      quote: "Tech Solution transformed our business operations completely. Their expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      position: "CEO, InnovaCorp",
      rating: 5,
    },
    {
      quote: "Working with Tech Solution was a game-changer. They delivered beyond our expectations.",
      author: "Michael Chen",
      position: "CTO, FutureTech",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and innovative. Tech Solution is our go-to technology partner.",
      author: "Emily Rodriguez",
      position: "COO, GrowthLabs",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                Enterprise Technology Solutions
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Tech Solution
            </h1>
            <p className="text-2xl md:text-3xl text-slate-100 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Strategic Digital Transformation & Enterprise Solutions
            </p>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Delivering world-class enterprise technology solutions that drive operational excellence, 
              accelerate digital transformation, and create sustainable competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center border border-amber-400/20"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center backdrop-blur-sm"
              >
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group p-8 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-6 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300 shadow-lg">
                    <Icon className="h-10 w-10 text-slate-700" />
                  </div>
                  <div className="text-5xl font-bold text-slate-900 mb-3">{stat.number}</div>
                  <div className="text-slate-600 font-semibold text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Enterprise Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Strategic Technology Services
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive enterprise technology solutions designed to accelerate digital transformation, 
              optimize operations, and drive sustainable business growth across global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-slate-200"
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="group inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore All Solutions
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                About Us
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                Enterprise Technology Leadership
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A premier enterprise technology solutions provider with a proven track record of delivering 
                strategic digital transformation initiatives for Fortune 500 companies and emerging market leaders.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Enterprise-grade technology expertise',
                  'Proven Fortune 500 client success record',
                  'Strategic business-first approach',
                  'Continuous innovation and R&D investment',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Discover Our Story
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
                <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-7xl font-bold mb-4">10+</div>
                    <div className="text-xl font-semibold">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <Award className="h-14 w-14 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Client Success Stories
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped enterprise clients achieve remarkable digital transformation 
              results and sustainable competitive advantages through strategic technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-slate-700 hover:border-slate-600"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed italic font-medium">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm font-medium">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Lead Digital Transformation?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Partner with us to accelerate your digital transformation journey and unlock unprecedented 
            business value through strategic enterprise technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center border border-amber-400/20"
            >
              Schedule Strategic Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/team"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center backdrop-blur-sm"
            >
              Meet Leadership Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;