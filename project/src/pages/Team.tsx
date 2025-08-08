import React from 'react';
import { Linkedin, Twitter, Mail, Users, Award, Lightbulb } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Boggula Balaji',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Visionary leader with over 10 years of experience in technology and business strategy. Balaji founded Tech Solution with the mission to transform businesses through innovative technology solutions.',
      skills: ['Strategic Planning', 'Technology Leadership', 'Business Development', 'Team Building'],
      achievements: [
        'Led 500+ successful projects',
        'Built team from 3 to 50+ professionals',
        'Industry recognition for innovation'
      ]
    },
    {
      name: 'Katkam Charan',
      position: 'Co-Founder & CTO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Technical expert with deep expertise in software architecture and emerging technologies. Charan oversees all technical aspects of our solutions and drives innovation across the organization.',
      skills: ['Software Architecture', 'Cloud Computing', 'DevOps', 'Machine Learning'],
      achievements: [
        'Architected scalable solutions for major clients',
        'Patents in cloud computing',
        'Speaker at tech conferences'
      ]
    },
    {
      name: 'Kancham Sunil Reddy',
      position: 'Co-Executive & COO',
      image: 'https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg',
      bio: 'Operations expert focused on delivering excellence in project execution and client satisfaction. Sunil ensures smooth operations and maintains our high standards of service delivery.',
      skills: ['Operations Management', 'Project Delivery', 'Client Relations', 'Quality Assurance'],
      achievements: [
        '99% client satisfaction rate',
        'Streamlined operations processes',
        'Excellence in project delivery'
      ]
    }
  ];

  const departments = [
    {
      icon: Users,
      name: 'Development Team',
      count: '20+',
      description: 'Expert developers skilled in modern technologies and frameworks'
    },
    {
      icon: Award,
      name: 'Quality Assurance',
      count: '8+',
      description: 'Dedicated QA professionals ensuring excellence in every project'
    },
    {
      icon: Lightbulb,
      name: 'Design & UX',
      count: '6+',
      description: 'Creative designers crafting exceptional user experiences'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
              Leadership Team
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Executive Leadership
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
              Meet the visionary leaders driving Tech Solution's strategic direction and operational excellence. 
              Our executive team combines decades of enterprise technology expertise with proven business acumen.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Strategic Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our executive leadership team brings together strategic vision, operational excellence, 
              and deep technology expertise to drive transformational business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">{member.name}</h3>
                  <p className="text-lg text-amber-600 font-bold mb-6">{member.position}</p>
                  <p className="text-slate-600 leading-relaxed mb-8">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-4">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Organization Structure
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Expert Teams & Departments
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our organization is structured around specialized centers of excellence, each delivering 
              world-class expertise and contributing to comprehensive enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-slate-200 text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-8 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300 shadow-lg">
                    <Icon className="h-10 w-10 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{dept.name}</h3>
                  <div className="text-4xl font-bold text-amber-600 mb-6">{dept.count}</div>
                  <p className="text-slate-600 leading-relaxed">{dept.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Corporate Culture
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Excellence-Driven Culture
            </h2>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              We cultivate a high-performance culture of strategic innovation, collaborative excellence, 
              and continuous professional development where every team member contributes to transformational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Strategic Innovation',
                description: 'We drive breakthrough thinking and embrace emerging technologies to maintain competitive leadership.',
                icon: '💡'
              },
              {
                title: 'Collaborative Excellence',
                description: 'Cross-functional teamwork and transparent communication drive our collective success.',
                icon: '🤝'
              },
              {
                title: 'Professional Development',
                description: 'We invest in continuous learning through advanced training, certifications, and industry leadership.',
                icon: '📚'
              },
              {
                title: 'Executive Balance',
                description: 'We maintain optimal work-life integration to sustain peak performance and personal fulfillment.',
                icon: '⚖️'
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-200 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Join Our Leadership Team
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            We seek exceptional leaders and senior professionals who share our commitment to enterprise excellence 
            and strategic innovation. Join a team that's defining the future of enterprise technology solutions.
          </p>
          <a
            href="mailto:careers@techsolution.com"
            className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Mail className="mr-3 h-6 w-6" />
            Submit Executive Profile
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;