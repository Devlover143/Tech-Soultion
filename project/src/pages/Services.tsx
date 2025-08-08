import React from 'react';
import { CheckCircle, ArrowRight, Code, Cloud, Smartphone, BarChart3, Shield, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business needs and requirements.',
      features: [
        'Custom Web Applications',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Database Design & Optimization',
        'Legacy System Modernization',
        'Agile Development Methodology'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PostgreSQL'],
      color: 'blue'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: [
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Disaster Recovery Planning',
        'Cloud Security Implementation',
        'Multi-cloud Strategy'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      color: 'indigo'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: [
        'Data Warehouse Design',
        'Business Intelligence Dashboards',
        'Predictive Analytics',
        'Real-time Reporting',
        'Data Visualization',
        'Machine Learning Integration'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'TensorFlow'],
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance Management',
        'Identity & Access Management',
        'Security Monitoring',
        'Incident Response'
      ],
      technologies: ['SIEM', 'OAuth', 'SSL/TLS', 'Firewalls', 'VPN', 'Encryption'],
      color: 'red'
    },
    {
      icon: Cog,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to align IT initiatives with business objectives.',
      features: [
        'Technology Strategy Planning',
        'Digital Transformation',
        'Process Optimization',
        'Vendor Management',
        'IT Governance',
        'Change Management'
      ],
      technologies: ['ITIL', 'Agile', 'DevOps', 'Lean', 'Six Sigma', 'COBIT'],
      color: 'orange'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business needs, challenges, and objectives to create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the solution architecture and creates detailed technical specifications and mockups.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build your solution using industry best practices, with regular updates and milestone reviews.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing ensures your solution meets all requirements and performs flawlessly.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We handle the deployment process and ensure a smooth transition to your new solution.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance services keep your solution running optimally.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-200',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business operations 
              and drive sustainable growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-colors duration-200 ${getColorClasses(service.color)}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href="/contact"
                      className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology that ensures successful project delivery while maintaining 
              transparency and communication throughout the development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 font-bold text-lg px-3 py-1 rounded-full mr-4">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Tech Solution?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that not only meet your current needs but also position you for future success.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Team',
                    description: 'Our team of certified professionals brings years of experience across various technologies and industries.'
                  },
                  {
                    title: 'Proven Track Record',
                    description: 'Over 500 successful projects delivered for clients ranging from startups to enterprise organizations.'
                  },
                  {
                    title: 'Agile Methodology',
                    description: 'We use agile development practices to ensure flexibility, transparency, and rapid delivery.'
                  },
                  {
                    title: 'Ongoing Support',
                    description: '24/7 support and maintenance services to keep your solutions running smoothly.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 shadow-2xl">
                <div className="h-full w-full rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">99%</div>
                    <div className="text-xl">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project requirements and explore how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="group inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;