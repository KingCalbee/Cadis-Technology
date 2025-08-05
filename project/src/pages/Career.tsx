import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Coffee, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Career = () => {
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

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and unlimited PTO policy."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and skill-building opportunities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Great Team Culture",
      description: "Collaborative environment, team events, and a supportive, inclusive workplace."
    }
  ];

  const openPositions = [
    {
      title: "Senior Digital Marketing Strategist",
      department: "Marketing",
      location: "Remote / Tech City",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description: "Lead digital marketing campaigns and develop comprehensive strategies for our diverse client base.",
      requirements: [
        "5+ years of digital marketing experience",
        "Expertise in SEO, PPC, and social media marketing",
        "Experience with marketing analytics tools",
        "Strong project management skills"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Tech City / Hybrid",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      description: "Create intuitive and visually appealing user experiences for web and mobile applications.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Strong portfolio demonstrating design thinking",
        "Experience with user research and testing"
      ]
    },
    {
      title: "Brand Identity Designer",
      department: "Creative",
      location: "Tech City",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      description: "Develop compelling brand identities and visual systems for clients across various industries.",
      requirements: [
        "3+ years of brand design experience",
        "Expert knowledge of Adobe Creative Suite",
        "Strong typography and color theory skills",
        "Experience with brand strategy development"
      ]
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "Remote",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      description: "Build responsive, high-performance web applications using modern frontend technologies.",
      requirements: [
        "4+ years of frontend development experience",
        "Proficiency in React, TypeScript, and modern CSS",
        "Experience with responsive design principles",
        "Knowledge of web performance optimization"
      ]
    },
    {
      title: "Marketing Intern",
      department: "Marketing",
      location: "Tech City",
      type: "Internship",
      salary: "$20 - $25 per hour",
      description: "Support our marketing team with campaign development, content creation, and analytics.",
      requirements: [
        "Currently pursuing marketing or related degree",
        "Strong written and verbal communication skills",
        "Familiarity with social media platforms",
        "Eager to learn and grow in digital marketing"
      ]
    }
  ];

  const values = [
    "Innovation and creativity in everything we do",
    "Collaboration and open communication",
    "Continuous learning and professional growth",
    "Work-life balance and employee wellbeing",
    "Diversity, equity, and inclusion",
    "Client success and exceptional service"
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
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Be part of a dynamic team that's passionate about creating innovative digital solutions. 
              We're always looking for talented individuals who share our vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Work With Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe that happy employees create the best work. That's why we've built a culture 
              that prioritizes growth, creativity, and work-life balance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-cyan-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We're guided by core values that shape our culture and drive our success. 
                These principles influence how we work, collaborate, and serve our clients.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Open Positions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role to advance your career 
              in digital marketing, design, and technology.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 w-fit"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Don't See Your Role */}
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-cyan-100 leading-relaxed">
              We're always interested in connecting with talented individuals who share our passion 
              for digital innovation. Send us your resume and let's start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Career;