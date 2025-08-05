import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships based on trust and results."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion-Driven",
      description: "We love what we do, and it shows in the quality of our work and client relationships."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "10+ years in digital strategy and business development. Passionate about helping businesses grow through innovative digital solutions.",
      social: { linkedin: "#", twitter: "#", email: "alex@cadistechnology.com" }
    },
    {
      name: "Sarah Williams",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "Award-winning designer with expertise in brand identity and product design. Believes in the power of design to transform businesses.",
      social: { linkedin: "#", twitter: "#", email: "sarah@cadistechnology.com" }
    },
    {
      name: "David Chen",
      role: "Head of Marketing",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Digital marketing expert with a track record of driving 300%+ growth for clients. Data-driven approach to campaign optimization.",
      social: { linkedin: "#", twitter: "#", email: "david@cadistechnology.com" }
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Product Designer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      bio: "UX/UI specialist focused on creating intuitive and engaging user experiences. Former design lead at major tech companies.",
      social: { linkedin: "#", twitter: "#", email: "emma@cadistechnology.com" }
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
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cadis Technology</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              We're a passionate team of digital experts dedicated to transforming businesses 
              through innovative marketing strategies, exceptional design, and cutting-edge technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2020, Cadis Technology emerged from a simple belief: that every business 
                  deserves access to world-class digital expertise. Our founders, coming from backgrounds 
                  in Fortune 500 companies and successful startups, saw an opportunity to bridge the gap 
                  between enterprise-level digital strategies and growing businesses.
                </p>
                <p>
                  What started as a small team of three has grown into a dynamic agency of passionate 
                  professionals, each bringing unique expertise in digital marketing, product design, 
                  and brand development. We've had the privilege of working with over 50 companies, 
                  from innovative startups to established enterprises.
                </p>
                <p>
                  Today, we continue to push boundaries, embrace new technologies, and most importantly, 
                  deliver results that exceed expectations. Our mission remains unchanged: to help 
                  businesses thrive in the digital age through strategic innovation and exceptional execution.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-cyan-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in digital marketing, 
              design, and technology to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-slate-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-slate-400 hover:text-cyan-600 transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-slate-400 hover:text-cyan-600 transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-slate-400 hover:text-cyan-600 transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">Our Mission</h2>
            <p className="text-xl text-cyan-100 leading-relaxed">
              "To empower businesses of all sizes with innovative digital solutions that drive growth, 
              enhance brand presence, and create meaningful connections with their audiences. We believe 
              in the transformative power of great design, strategic marketing, and cutting-edge technology."
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;