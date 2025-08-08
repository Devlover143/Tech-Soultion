import React from 'react';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive technological advancement.',
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring quality and reliability in every project.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients and team members.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We are committed to continuous learning and adaptation to stay ahead of industry trends and technologies.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Tech Solution was established with a vision to transform businesses through technology.',
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, setting the foundation for growth.',
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to include specialized experts in various technology domains.',
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple awards for innovation and excellence in technology solutions.',
    },
    {
      year: '2024',
      title: '500+ Projects',
      description: 'Reached the milestone of successfully completing over 500 projects for satisfied clients.',
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding our services globally to serve clients across different continents.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
              About Tech Solution
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Enterprise Technology Excellence
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
              A premier enterprise technology solutions provider delivering strategic digital transformation 
              and innovative business solutions to Fortune 500 companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mr-6 shadow-lg">
                    <Target className="h-10 w-10 text-slate-700" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">Strategic Mission</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To empower global enterprises by delivering innovative, scalable, and secure technology solutions 
                  that drive operational excellence, accelerate digital transformation, and create sustainable 
                  competitive advantages in rapidly evolving markets.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mr-6 shadow-lg">
                    <Eye className="h-10 w-10 text-amber-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">Future Vision</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To be the world's most trusted enterprise technology partner, recognized for transformative 
                  innovation, operational excellence, and measurable business impact. We envision a future where 
                  intelligent technology seamlessly integrates with business strategy to unlock unlimited potential.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 shadow-2xl">
                <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <Award className="h-20 w-20 mx-auto mb-6" />
                    <div className="text-5xl font-bold mb-4">Excellence</div>
                    <div className="text-xl font-semibold">In Everything We Do</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Core Values
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Principles That Drive Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              These fundamental principles guide every strategic decision, client engagement, 
              and technology solution we deliver across global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-slate-200"
                >
                  <div className="p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl w-fit mb-6 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300 shadow-lg">
                    <Icon className="h-10 w-10 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Company Timeline
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              A Decade of Innovation
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From strategic inception to industry leadership, discover the key milestones that have 
              shaped our journey to becoming a premier enterprise technology solutions provider.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-amber-200 to-orange-200 hidden lg:block rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-xl hidden lg:block z-10"></div>

                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200">
                      <div className="flex items-center mb-4">
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Global Impact
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Measurable Excellence
            </h2>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Quantifiable results that demonstrate our unwavering commitment to enterprise excellence 
              and transformational client success across global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Enterprise Projects' },
              { number: '250+', label: 'Global Clients' },
              { number: '100+', label: 'Expert Consultants' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-slate-200 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;