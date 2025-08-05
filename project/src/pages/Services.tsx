import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Palette, 
  Target, 
  Search, 
  Share2, 
  BarChart3, 
  Smartphone, 
  Monitor, 
  PenTool,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive growth and maximize ROI.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Marketing Analytics & Reporting"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Product Design",
      description: "User-centered design solutions that create exceptional digital experiences.",
      features: [
        "User Experience (UX) Design",
        "User Interface (UI) Design",
        "Prototyping & Wireframing",
        "User Research & Testing",
        "Design Systems",
        "Mobile App Design"
      ],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Brand Identity",
      description: "Distinctive brand identities that capture your essence and resonate with audiences.",
      features: [
        "Logo Design & Branding",
        "Brand Strategy Development",
        "Visual Identity Systems",
        "Brand Guidelines",
        "Marketing Collateral",
        "Brand Positioning"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  const additionalServices = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and organic visibility"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Build and engage your community across all platforms"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Design",
      description: "Responsive designs optimized for mobile experiences"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Creative Design",
      description: "Print and digital design for all your marketing needs"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience through comprehensive research and analysis."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Based on our findings, we develop a tailored strategy that aligns with your objectives and market opportunities."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Our team brings the strategy to life through creative design and technical implementation using best practices."
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "We launch your project and continuously monitor performance, making data-driven optimizations for better results."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              We offer comprehensive digital solutions to help your business thrive in today's 
              competitive landscape. From strategy to execution, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`rounded-2xl p-8 bg-gradient-to-br ${service.color}`}>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
                      <div className="text-white mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">
                        Professional {service.title.toLowerCase()} services tailored to your business needs 
                        and designed to deliver measurable results.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Additional Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expand your digital capabilities with our comprehensive suite of specialized services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-cyan-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results 
              and exceeds client expectations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Let's discuss how our services can help you achieve your business goals. 
              Contact us today for a free consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;