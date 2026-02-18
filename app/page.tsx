"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SocialButtons from '@/components/SocialButtons';
import { Code, Bot, Cpu, Database, Zap, Users, Building, Briefcase, Award, ExternalLink, Github, Gamepad2, Calculator, Lock, GraduationCap, Calendar, MapPin, Mail, Phone, Linkedin, MessageCircle, Send, BrainCircuit } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Services data
  const services = [
    {
    title: "CUSTOM WEB DEVELOPMENT",
    description: "Building responsive and modern web applications using cutting-edge technologies",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    icon: Code  // <-- Yeh line add karni hai
  },
    {
    title: "GRAPHIC DESIGNING",
    description: "Creative and visually appealing designs crafted to enhance brand identity and user experience.",
    image: "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg",
    icon: Code  // <-- Yeh line add karni hai
  },
    {
    title: "ELECTRONIC DEVICE CIRCUIT PROJECT",
    description: "Designing and implementing electronic circuits for various applications",
    image: "https://images.pexels.com/photos/6755093/pexels-photo-6755093.jpeg",
    icon: Cpu  // <-- Yeh line add karni hai
  },
    {
    title: "DATA STRUCTURE AND ALGORITHM PROJECT",
    description: "Implementing efficient algorithms and data structures for optimal performance",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/5380589/pexels-photo-5380589.jpeg"
  },
    {
    title: "DIGITAL LOGIC DESIGN PROJECT",
    description: "Creating digital systems and logic circuits for computational tasks",
    icon: Cpu, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/8471981/pexels-photo-8471981.jpeg"
  },
     {
    title: "PYTHON PROGRAMMING PROJECTS",
    description: "Developing applications and solutions using Python programming language",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
    
   {
    title: "C/C++ PROGRAMMING PROJECTS",
    description: "Developing efficient system-level programs and problem-solving solutions using C",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087150%2Fcover_image%2Fregular_1708x683%2Fcover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-09c602d672400e97949703273ad4fc66.png"
  },{
    title: "JAVA PROGRAMMING PROJECTS",
    description: "Building robust applications and scalable solutions with Java",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/270623/pexels-photo-270623.png"
  },
    {
    title: "MOBILE APP DEVELOPMENT",
    description: "Building innovative and user-friendly mobile applications for seamless interaction and automation.",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg"
  },

    {
    title: "OPERATING SYSTEM PROJECT",
    description: "Designing process management, memory handling, file systems, and resource allocation for efficient OS functionality.",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg"
  },
    {
    title: "LINUX OPERATING SYSTEM PROJECT",
    description: "Implementing a Linux-based system with file sharing capabilities and role-based access control to manage users and resources efficiently.",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/11034131/pexels-photo-11034131.jpeg"
  },  
    {
    title: "SOFTWARE AND AUTOMATION SYSTEMS",
    description: "Designing and delivering innovative software and automation systems to streamline operations, enhance productivity and drive business growth.",
    icon: Code, // <-- Yeh line add kar diya gaya
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg"
  },         

  ];

  // Experience data
const experiences = [
  {
    title: "FREELANCE",
    services: [
      "WEB DEVELOPMENT",
      "MOBILE APPLICATION DEVELOPMENT", 
      "DIGITAL MARKETING",
      "GRAPHIC DESIGNING",
    ],
    icon: Code, // <-- Add the icon here (Code icon)
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
  },
  {
    title: "GRAPHIC DESIGNING",
    company: "FREELANCE",
    services: [
      "BRAND IDENTITY DESIGN (Logos, Business Cards, Brand Guidelines)",
      "LOGO DESIGN",
      "MARKETING MATERIALS (Brochures, Flyers, Posters)",
      "WEB AND SOCIAL MEDIA DESIGN (Website Graphics, Social Media Posts)",
      "SOCIAL MEDIA CONTENT CREATION (Custom Graphics, Infographics, Animated Posts)",
      "ILLUSTRATION (Custom Illustrations for Various Uses)"
    ],
    icon: Code, // <-- Add the icon here (Code icon)
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
    title: "DIGITAL MARKETING",
    company: "FREELANCE",
    services: [
      "DEVELOPING AND EXECUTING DIGITAL MARKETING STRATEGIES TO DRIVE BRAND AWARENESS AND CUSTOMER ENGAGEMENT",
      "MANAGING SOCIAL MEDIA PLATFORMS, CREATING POSTS, AND RUNNING PAID AD CAMPAIGNS",
      "CREATING AND ANALYZING CONTENT FOR EMAIL MARKETING, NEWSLETTERS, AND BLOGS",
      "SEO OPTIMIZATION AND INCREASING ONLINE PRESENCE THROUGH ORGANIC SEARCH",
      "CONDUCTING MARKET RESEARCH TO UNDERSTAND TARGET AUDIENCE AND COMPETITION"
    ],
    icon: Cpu, // <-- Add the icon here (Cpu icon)
    image: "https://images.pexels.com/photos/8499580/pexels-photo-8499580.jpeg"
  },
];


  // Projects data
  const projects = [
    {
      title: "ZOUQ AL KHAMEES RESTAURANT WEBSITE",
      description: "Developing a modern, responsive website for Zouq Al Khamees Restaurant to enhance customer experience, featuring online menu browsing, ordering, and reservation systems.",
      category: "WEB DEVELOPMENT",
      icon: Code,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
    },
    {
      title: "MOBILE APPLICATION DEVELOPMENT",
      description: "Creating powerful and intuitive mobile applications that enhance user experience and drive engagement, offering seamless functionality across different platforms.",
      category: "MOBILE APPLICATION DEVELOPMENT",
      icon: Code,
      image: "https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg"
    },
    {
      title: "HOSTPITAL MANAGEMENT SYSTEM",
      description: "A comprehensive software solution built with Python to streamline hospital operations, including patient management, appointment scheduling, and billing. Designed to improve efficiency and accuracy in healthcare facilities.",
      category: "PYTHON PROGRAMMING",
      icon: Code,
      image: "https://images.pexels.com/photos/6129210/pexels-photo-6129210.jpeg"
    },
   {
      title: "CAFE MANAGEMENT SYSTEM",
      description: "A data-driven system to manage cafe operations, including inventory tracking, order processing, and sales analysis, designed to streamline business operations and improve decision-making through real-time data insights.",
      category: "OOP JAVA",
      icon: Code,
      image: "https://images.pexels.com/photos/6612738/pexels-photo-6612738.jpeg"
   },

    {
      title: "GRAPHIC DESIGNING",
      description: "Creating visually striking and engaging designs tailored to enhance brand identity, marketing materials, and user experience across digital and print media.",
      category: "DESIGN",
      icon: Code,
      image: "https://images.pexels.com/photos/2576194/pexels-photo-2576194.jpeg"
    },
    {
      title: "TRAFFIC LIGHT CONTROL SYSTEM",
      description: "Electronic Circuit Project",
      category: "ELECTRONIC",
      icon: Code,
      image: "https://i.ytimg.com/vi/shtKAoMzABQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCrujukQt2XZtorfE8836Ai4H3dcA"
    },
    {
      title: "WATER LEVEL INDICATOR",
      description: "Applied Physics Project",
      category: "PHYSICS",
      icon: Code,
      image: "https://m.media-amazon.com/images/I/61Qo4FkR5HL.jpg"
    },
    {
      title: "LIBRARY MANAGEMENT SYSTEM",
      description: "C++ Application",
      category: "C++",
      icon: Code,
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
    },
    {
      title: "LINE FOLLOWING ROBOT CAR",
      description: "Digital Logic Design Project",
      category: "DIGITAL LOGIC DESIGN",
      icon: Code,
      image: "https://images.pexels.com/photos/7868890/pexels-photo-7868890.jpeg"
    }
  ];

  // Skills data
  const technicalSkills = [
    { name: "HTML/CSS", percentage: 90, color: "bg-blue-500" },
    { name: "Tailwind CSS", percentage: 85, color: "bg-cyan-500" },
    { name: "Javascript", percentage: 85, color: "bg-cyan-600" },
    { name: "UI/UX", percentage: 75, color: "bg-green-500" },
    { name: "Bootstrap", percentage: 75, color: "bg-green-600" },
    { name: " PHP", percentage: 70, color: "bg-green-700" },
    { name: "My SQL", percentage: 70, color: "bg-green-700" },
    { name: "Python", percentage: 95, color: "bg-blue-600" },
    { name: "Java", percentage: 80, color: "bg-blue-400" },
    { name: "Generative AI & Agentic AI", percentage: 90, color: "bg-blue-500" },
    { name: " Express js", percentage: 95, color: "bg-red-600" },
    { name: "Node js", percentage: 75, color: "bg-red-400" },
    { name: "Git Version Control", percentage: 85, color: "bg-red-500" },
    { name: "Typescript", percentage: 80, color: "bg-yellow-600" },
    { name: "React js", percentage: 75, color: "bg-yellow-400" },
    { name: "jQuery", percentage: 85, color: "bg-yellow-500" },
    { name: "C/C++", percentage: 80, color: "bg-indigo-500" },
    { name: "Flutter Developer Dart", percentage: 85, color: "bg-purple-500" },
    { name: "Firebase", percentage: 90, color: "bg-pink-500" },
    { name: "REST APIs", percentage: 90, color: "bg-pink-500" },
    { name: "Git", percentage: 90, color: "bg-pink-500" },
    { name: "Canva", percentage: 90, color: "bg-pink-500" },
    { name: "Adobe Photoshop", percentage: 90, color: "bg-pink-500" },
    { name: "Adobe Effects", percentage: 90, color: "bg-pink-500" },




  ];

  const softSkills = [
    { name: "Communication", icon: Users },
    { name: "Public Speaking", icon: Users },
    { name: "Problem Solving", icon: Users },
    { name: "Team Collaboration", icon: Users },
    { name: "Adaptability", icon: Users },
    { name: "Critical Thinking", icon: Users },
    { name: "Time Management", icon: Users },
    { name: "Leadership", icon: Award },
  ];

  // Education data
const education = [
  {
    degree: "Bachelor of Computer Science (BSCS)",
    institution: "Iqra University",
    status: "Ongoing",
    location: "Karachi",
    year: "Present",
    type: "Bachelor's Degree",
    color: "bg-blue-500"
  },
  {
    degree: "Higher Diploma Software Engineering",
    institution: "Aptech Certified Computer Professional (ACCP)",
    status: "Completed",
    location: "Karachi",
    year: "2025",
    type: "Professional Course",
    color: "bg-green-500"
  },
  {
    degree: "Agentic AI & Robotics Engineering",
    institution: "PIAIC",
    status: "Completed",
    location: "Online",
    year: "2025",
    type: "Professional Course",
    color: "bg-purple-500"
  },
  {
    degree: "Devops",
    institution: "Al Nafi",
    status: "Completed",
    location: "Online",
    year: "2024",
    type: "Professional Course",
    color: "bg-purple-500"
  },
  {
    degree: "Artifical Intelligence",
    institution: "Al Nafi",
    status: "Completed",
    location: "Online",
    year: "2024",
    type: "Professional Course",
    color: "bg-purple-500"
  },
  {
    degree: "Mobile App Development",
    institution: "Iqra University",
    status: "Completed",
    location: "Karachi",
    year: "2025",
    type: "Professional Course",
    color: "bg-purple-500"
  },
  {
    degree: "Prompt Context Engineering andGenerative AI",
    institution: "Aptech",
    status: "Completed",
    location: "Karachi",
    year: "2025",
    type: "Professional Course",
    color: "bg-purple-500"
  },
  {
    degree: "Freelancing",
    status: "Completed",
    location: "Online",
    year: "2024",
    type: "Professional Course",
    color: "bg-orange-500"
  },
  {
    degree: "Graphic Designer",
    status: "Completed",
    location: "Online",
    year: "2024",
    type: "Professional Course",
    color: "bg-red-500"
  },
  {
    degree: "Intermediate",
    institution: "Pakistan Air Force College",
    status: "Completed",
    location: "Karachi",
    year: "2022",
    type: "Pre-Engineering",
    color: "bg-red-500"
  },
  {
    degree: "Matriculation",
    institution: "Javed Bahria Model School",
    status: "Completed",
    location: "Karachi",
    year: "2020",
    type: "Computer Science",
    color: "bg-red-500"
  }
];

  // Contact info
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shariqwork2001@gmail.com",
      href: "mailto:shariqwork2001@gmail.com",
      color: "bg-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 317 1025656",
      href: "tel:+923171025656",
      color: "bg-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://pk.linkedin.com/",
      color: "bg-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/Hanzala-Afridi",
      color: "bg-gray-800"
    }
  ];

  const achievements = [
    "Freelance Frontend Developer & Mobile App Developer, delivering projects that meet the unique needs of clients",
    "Full-Stack Developer for multiple websites, including projects such as Zouq Al Khamis Restaurant website and Masks & Shine Backend",
    "Experienced in building mobile applications using Flutter and Dart, along with web development technologies like HTML, CSS, JavaScript, React, and Node.js",
    "DevOps and AI enthusiast with certifications in Prompt Engineering, AI & Robotics Engineering, and more",
    "Graphic Designer, creating impactful visuals for restaurants, brands, and agencies using tools like Canva, Adobe Photoshop, and After Effects",
    "Interested in exploring the intersection of AI, automation, and software development to create innovative and scalable solutions"
    
  ];

  return (
    <div className="min-h-screen">
      {/* HOME SECTION */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    MALIK MUHAMMAD SHARIQ
                  </span>
                </h1>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 leading-snug max-w-3xl">
                 Freelancer | Frontend Developer | Mobile App Developer | Graphic Designer | Computer Science Undergraduate | Agentic AI | Full-Stack Developer | DevOps Certified | UI/UX Designer | Data Science Learner | DevOps Certified | Prompt Engineering Certified | Higher Diploma Certified Software Engineer | APTech Certified Computer Professional
                </h3>

                
              </div>
              
              <SocialButtons />
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/home.jpeg"
                    alt="MALIK MUHAMMAD SHARIQ"
                    width={448}
                    height={448}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
                  About{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    Me
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  I am Malik Muhammad Shariq, a Computer Science undergraduate with a diverse skill set that spans across frontend and mobile app development, graphic design, and AI technologies. I am currently pursuing my Bachelor's degree at Iqra University and am certified in multiple fields such as DevOps, AI, and Software Engineering.

                  Throughout my academic and freelance journey, I have cultivated a strong passion for creating innovative solutions. I am actively involved in developing software applications, websites, and mobile apps that help businesses grow and streamline operations. Additionally, I enjoy exploring the world of data science and continuously improve my skills in the AI domain.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">Highlighted Achievements & Interests:</h3>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <SocialButtons />
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/about.jpeg"
                    alt="MALIK MUHAMMAD SHARIQ"
                    width={448}
                    height={448}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Delivering innovative software solutions for businesses
            </p>
            <p className="text-lg text-gray-500 max-w-4xl mx-auto">
              Building smart business solutions & guiding students with future-ready projects
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
                      <IconComponent size={24} className="text-purple-600" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional journey building innovative solutions and leading successful projects
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                      <Image
                        src={experience.image}
                        alt={experience.company || 'Default Company'}
                        width={600}
                        height={400}
                        className="object-cover w-full h-80 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-6 left-6 bg-white/90 p-3 rounded-full">
                        <IconComponent size={28} className="text-emerald-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-emerald-600 font-medium text-sm uppercase tracking-wide">
                          {experience.title}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {experience.company}
                      </h3>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-700">
                          {experience.title === "Project Manager" ? "Delivered:" : "Services:"}
                        </h4>
                        <ul className="space-y-2">
                          {experience.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 leading-relaxed">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of innovative solutions across various technologies and domains
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
                      <IconComponent size={20} className="text-orange-600" />
                    </div>

                    {/* Hover overlay with actions */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
                        <ExternalLink size={16} />
                        <span>View</span>
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center space-x-2">
                        <Github size={16} />
                        <span>Code</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                Skills
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise in modern technologies and essential soft skills for project success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-violet-100 p-3 rounded-lg">
                  <Code size={28} className="text-violet-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? '' : 'w-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.percentage}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-fuchsia-100 p-3 rounded-lg">
                  <Users size={28} className="text-fuchsia-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Soft Skills</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-white p-3 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                          <IconComponent size={24} className="text-violet-600" />
                        </div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-xl border border-violet-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-lg">
                    <Award size={20} className="text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Key Strengths</h3>
                    <p className="text-sm text-gray-600">Strong foundation in both technical expertise and interpersonal skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning journey in technology and engineering
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-yellow-500"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${edu.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <GraduationCap size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      {edu.status === 'Ongoing' && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Education Card */}
                  <div className="flex-1 bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                        <span className={`px-3 py-1 ${edu.color} text-white text-sm font-medium rounded-full`}>
                          {edu.type}
                        </span>
                        {edu.status === 'Ongoing' && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full animate-pulse">
                            {edu.status}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      {edu.institution}
                    </p>

                    <div className="flex items-center space-x-2">
                      <Award size={20} className={`${edu.color.replace('bg-', 'text-')}`} />
                      <span className="text-gray-700 font-medium">
                        {edu.status === 'Ongoing' ? 'Currently pursuing' : 'Successfully completed'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 border border-amber-200">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <Award size={32} className="text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Academic Excellence</h2>
              </div>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Committed to continuous learning and staying updated with the latest technologies. 
                Currently pursuing multiple specialized programs in AI and emerging technologies 
                to enhance expertise and contribute to innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss your project ideas and how we can work together to create something amazing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <MessageCircle size={28} className="text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:transform hover:scale-105 group"
                      >
                        <div className={`${info.color} p-3 rounded-lg group-hover:shadow-lg transition-shadow`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                            {info.label}
                          </h3>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Message */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Let's Create Something Amazing!</h3>
                <p className="text-indigo-100 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with passionate individuals. 
                  Whether you need web development, chatbot solutions, or project consultation, 
                  I'm here to help bring your ideas to life.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Send size={28} className="text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                    placeholder="Tell me about your project or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}