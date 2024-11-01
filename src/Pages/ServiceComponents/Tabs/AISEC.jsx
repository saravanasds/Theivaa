import React from "react";

import { FaArrowLeft } from "react-icons/fa6";
import IT from "../../../assets/HomeImages/AISECT.jpeg";
import IT2 from "../../../assets/HomeImages/IT2.jpeg";
import uni1 from "../../../assets/HomeImages/uni1.jpeg";
import digi from "../../../assets/HomeImages/digi.jpg";

import aisectimg from "../../../assets/HomeImages/aisectimg.jpg";

const AISEC = () => {
  const aisect = [
    {
      title: " Java Programming Course ",
      heading: "Course Overview :",
      content: `Explore advanced concepts in Java programming, focusing on building robust, scalable applications. This course delves into object-oriented programming, design patterns, and Java frameworks.`,
      heading1: "key topics :",
      details: [
        "Advanced Java Concepts: Inheritance, polymorphism, and encapsulation.",
        "Object-Oriented Design: UML diagrams, design patterns, and principles.",
        "Java Frameworks: Spring, Hibernate, and Java EE",
        "Exception Handling and Concurrency: Managing errors and multi-threading in Java applications.",
        "Java Development Tools: Integrated Development Environments (IDEs), build tools, and version control.",
      ],
    },
    {
      title: "Data Analysis ",
      heading: "Course Overview :",
      content: `Learn how to transform raw data into actionable insights through statistical methods, data mining, and visualization techniques. This course prepares you for roles involving data-driven decision-making.`,
      heading1: "key topics :",
      details: [
        "Data Mining: Techniques for discovering patterns and relationships in large datasets.",
        "Statistical Analysis: Descriptive statistics, inferential statistics, and hypothesis testing.",
        "Data Visualization: Tools and techniques for creating meaningful visual representations of data.",
        "Data Cleaning and Preparation: Methods for handling missing data, outliers, and data transformation.",
        "Tools and Software: Proficiency in tools like Python (Pandas, NumPy), R, SQL, and visualization tools like Tableau or Power BI.",
      ],
    },
    {
      title: "Web Technology ",
      heading: "Course Overview :",
      content: ` This course covers the fundamentals of web development, from creating static pages to dynamic, interactive web applications. It includes both front-end and back-end technologies.`,
      heading1: "key topics :",
      details: [
        "HTML/CSS: Fundamentals of structuring and styling web pages.",
        "JavaScript: Programming for interactivity, including ES6+ features.",
        "Front-End Frameworks: Libraries and frameworks such as React, Angular, or Vue.js.",
        "Back-End Development: Server-side scripting with Node.js, Python (Django/Flask), or PHP.",
        "Web Servers and Databases: Understanding HTTP, RESTful APIs, and database management (SQL/NoSQL).",
      ],
    },
    {
      title: "Artificial Intelligence (AI) ",
      heading: "Course Overview :",
      content: `Dive into the world of AI and machine learning, exploring how to build intelligent systems and apply algorithms to real-world problems.`,
      heading1: "key topics :",
      details: [
        "Machine Learning: Supervised and unsupervised learning algorithms, model training, and evaluation.",
        "Deep Learning: Neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).",
        "Natural Language Processing (NLP): Techniques for analyzing and generating human language.",
        "AI Applications: Practical applications in various industries, including image recognition, recommendation systems, and autonomous systems.",
        "AI Tools and Frameworks: Hands-on experience with TensorFlow, PyTorch, and Scikit-learn.",
      ],
    },
    {
      title: " DevOps Engineer Course",
      heading: "Course Overview :",
      content: ` DevOps Engineers focus on the integration of development and operations processes to improve the efficiency of software deployment and infrastructure management. Coding is crucial for automating processes and managing systems`,
      heading1: "key topics :",
      details: [
        "DevOps Fundamentals",
        "Continuous Integration and Deployment (CI/CD)",
        "Infrastructure as Code (IaC)",
        "Containerization and Orchestration",
        "Monitoring and Security",
      ],
    },
  ];

  const aisect2 = [
    {
      title: "Business Process Outsourcing (BPO)",
      heading: "Course Overview :",
      content: `Learn the essentials of Business Process Outsourcing, including how to effectively manage and streamline business functions. This course covers key BPO processes, strategies for selecting outsourcing partners, and performance management.`,
      heading1: "key topics :",
      details: [
        "BPO Fundamentals",
        "Process Management",
        "Outsourcing Strategies",
        "Performance Metrics",
      ],
    },
    {
      title: "Search Engine Optimization Course",
      heading: "Course Overview :",
      content: `Master the techniques to improve your website's search engine rankings. This course covers keyword research, on-page and off-page SEO, and analytics to drive organic traffic and enhance online visibility.`,
      heading1: "key topics :",
      details: [
        "Keyword Research",
        "On-Page SEO",
        "Off-Page SEO",
        "Analytics and Reporting",
      ],
    },
    {
      title: "PGDCA Course",
      heading: "Course Overview :",
      content: ` The Postgraduate Diploma in Computer Applications (PGDCA) equips students with a solid foundation in computer science and applications. This course covers essential software development skills, programming languages, and IT fundamentals, preparing graduates for diverse roles in the tech industry.`,
      heading1: "key topics :",
      details: [
        "Data Structures and Algorithms",
        "Database Management",
        "Software Engineering",
        "Networking and Security",
      ],
    },
    {
      title: "Affiliate Marketing Course",
      heading: "Course Overview :",
      content: `Learn how to drive sales and revenue through affiliate marketing. This course includes setting up affiliate programs, managing affiliate relationships, and tracking performance to maximize earnings.`,
      heading1: "key topics :",
      details: [
        "Affiliate Program Setup",
        "Partner Management",
        "Campaign Optimization",
        "Performance Tracking",
      ],
    },
    {
      title: "Social Media Marketing Course",
      heading: "Course Overview :",
      content: `Enhance your skills in social media marketing with this comprehensive course. Learn to create effective content, run targeted ad campaigns, and analyze social media metrics to boost brand engagement.`,
      heading1: "key topics :",
      details: [
        "Content Creation",
        "Social Media Strategy",
        "Ad Campaigns",
        "Analytics and Metrics",
      ],
    },
    {
      title: "Digital Marketing Mastery Course",
      heading: "Course Overview :",
      content: `Master the art of digital marketing with this all-encompassing course. Discover strategies for SEO, PPC, email marketing, and content marketing to enhance your online presence and drive measurable results.`,
      heading1: "Key Topics :",
      details: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing",
        "Analytics and Conversion Optimization",
      ],
    },
  ];

  return (
    <>
      <div className=" lg:py-10 lg:px-10 py-5 px-5 border-2 border-primary">
        <div
          className="flex flex-col justify-center items-center pb-10 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
           <span className="text-lg lg:text-3xl text-darkred font-semibold tracking-wider"> Skill Knowledge Provider at Palani </span>
          <h2 className="lg:w-3/4 px-5 h-auto text-center lg:text-2xl text-sm font-semibold text-primary tracking-wider py-5">
        Empowering Your Learning Journey with Cutting-Edge Technology
          </h2>
          <p className="lg:w-3/4 lg:text-base text-sm text-gray-700 tracking-wider text-center">
            To create the best computer graduates to work efficiently and
            competently in this digital era. Today right from small handy
            gadgets to big room size machinery is working on the principles of
            computer science.
          </p>
        </div>
        <div className="w-full flex lg:flex-row flex-col justify-around items-center shadow-lg  lg:mb-5 border-2 border-primary lg:py-0 py-3 ">
          <h2 className="lg:text-3xl text-xl text-darkred font-semibold tracking-wider lg:py-5 lg:mb-0 mb-3">
            Our Services
          </h2>
          <nav className="flex justify-around items-center lg:gap-20 font-semibold text-gray-700">
            <h2 className="rounded-lg px-8 py-1 tracking-wider  hover:bg-primary hover:text-white">
              IT
            </h2>
            <h2 className=" rounded-lg px-8 py-1 tracking-wider hover:bg-primary hover:text-white ">
              ITes
            </h2>
          </nav>
        </div>

        <h2 className="lg:text-3xl text-xl tracking-wider font-bold text-darkred text-center mt-10 lg:mb-10 mb-5">
          Information Technology (IT){" "}
        </h2>

        <div
          id="IT"
          className="flex lg:flex-row flex-col lg:justify-start justify-center gap-10 lg:mt-10 "
        >
          <div className=" lg:w-2/3 flex flex-col justify-center  gap-8">
            {aisect.map((aisect1, index) => (
              <div
                key={index}
                className=""
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <h2 className="lg:text-xl text-lg font-bold tracking-wider text-darkred mb-3">
                  {aisect1.title}
                </h2>
                <h2 className="lg:text-lg text-md text-primary font-semibold mb-1">
                  {aisect1.heading}
                </h2>
                <p className="lg:text-base text-sm tracking-wider text-gray-700 leading-tight list-disc mb-5  ">
                  {aisect1.content}
                </p>
                <h3 className="lg:text-md text-md text-primary tracking-wider font-semibold mb-1 uppercase">
                  {aisect1.heading1}
                </h3>
                <ul className="lg:text-base text-sm text-gray-700 tracking-wider list-disc pl-5">
                  {aisect1.details.map((explain, index) => (
                    <li key={index}>{explain}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="h-auto shadow-lg p-5 border-primary border-[1px] text-center pb-8 hover:scale-[1.05] transform transition-all duration-500 rounded-lg">
              <img src={aisectimg} alt="aisect" className="w-full lg:h-auto  h-1/2"/>
              <h2 className="lg:text-2xl text-lg font-bold text-darkred white mb-5 tracking-wider pt-5">
                AISECT UNIVERSITY
              </h2>
              <button className=" lg:text-lg text-base text-primary shadow-lg border-2 border-secondary hover:border-b-2 lg:px-10 px-5 py-2 rounded-lg font-semibold ">
                <a href="https://www.aisectuniversityjharkhand.ac.in/academics/cs-and-it">
                  View More
                </a>
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col gap-10 ">
            <img
              src={IT2}
              alt=""
              className="lg:w-full lg:h-auto h-52 object-cover lg:mt-10 lg:block hidden"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            />
            <div className="lg:w-full p-5 flex flex-col justify-center items-center text-center border-2 border-primary rounded-lg list-disc shadow-lg hover:shadow-xl">
              <h2 className="lg:text-xl text-lg font-semibold  tracking-wider mb-5 text-darkred">
                Provided Courses in IT :
              </h2>
              <ul className="lg:text-base text-sm text-gray-700 tracking-wider ">
                <li>Certificate in Java Programming Course</li>
                <li>Certificate in Data Analysis Course</li>
                <li>Certificate in Web Technology Course</li>
                <li>Certificate in Artificial Intelligence Course</li>
                <li>Certificate in DevOps Engineer Course</li>
              </ul>
            </div>
            <div className="lg:w-full h-auto p-5 rounded-lg bg-white gap-5 border-2 hover:shadow-lg lg:mb-5">
              <img
                src={uni1}
                alt=""
                className="w-full h-auto rounded-t-lg object-cover"
              />
              <div className="p-5 text-center ">
                <h2 className="lg:text-xl text-lg font-bold text-darkred mb-5 tracking-wider">
                  AISECT UNIVERSITY
                </h2>
                <p className="lg:text-base text-sm text-gray-700 lg:mb-5  tracking-wider">
                  AISECT University, Jharkhand established the Department of
                  Computer Science & IT to create the best computer graduates to
                  work efficiently and competently in this digital era. Today
                  right from small handy gadgets to big room size machinery is
                  working on the principles of computer science. Computer
                  science is a study of hardware, software, design, mechanism
                  and architecture of computer as well as processing,
                  interpreting, analyzing, predicting, and communicating
                  ‘information’encoded in bits and bytes in RAM. Being one of
                  the top BCA colleges in India, the AISECT department of
                  computer science & IT focuses on imparting theoretical
                  knowledge and practical training to let students learn and
                  understand computation, computer languages, programming, and
                  architecture of the computer. Today every industry is
                  dependent upon computer programming and its applications.
                  Everything is computerized and therefore it has entirely
                  changed the course of working style. Everyday technology is
                  getting upgraded and breakthroughs in the field of computer
                  science are taking over every industry and therefore demand
                  for computer graduates is increasing day by day. Being the
                  best BCA college in India, the faculty of the department of
                  computer science & IT aims at providing a conducive
                  environment for study and research in various streams of
                  computer science to create best professionals equipped with
                  the following skillsets. Being best computer science and IT
                  college in Jharkhand the AISECT department of computer science
                  has designed the various computer science and IT courses to
                  give a lauch pad to students to start a career in Information
                  Technology and make them eligible to tackle every professional
                  challenge for their bright future.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //second  */}

        <div id="ITes">
          <h2 className="lg:text-3xl text-lg tracking-wider font-bold text-darkred text-center mt-20 lg:mb-5">
            Information Technology-Enabled Services (ITes){" "}
          </h2>
          <div className="flex lg:flex-row flex-col justify-center gap-10 pt-10">
            <div className=" lg:w-2/3 grid lg:grid-cols-2 gap-8  ">
              {aisect2.map((aisect3, index) => (
                <div
                  key={index}
                  className="border-b-2 lg:pb-8 pb-4"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                    {aisect3.title}
                  </h2>
                  <h2 className="lg:text-lg text-md text-primary font-semibold mb-1">
                    {aisect3.heading}
                  </h2>
                  <p className="lg:text-base text-sm tracking-wider text-gray-700 leading-tight list-disc mb-5  ">
                    {aisect3.content}
                  </p>
                  <h3 className="lg:text-md text-md text-primary tracking-wider font-semibold mb-1 uppercase">
                    {aisect3.heading1}
                  </h3>
                  <ul className="lg:text-base text-sm text-gray-700 tracking-wider list-disc pl-5">
                    {aisect3.details.map((explain, index) => (
                      <li key={index}>{explain}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="lg:w-1/3 flex flex-col  gap-10 ">
              <img
                src={IT}
                alt=""
                className="lg:w-full lg:h-auto object-cover"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
              />
              <div className="lg:w-full p-5 flex flex-col justify-center items-center text-center border-2 border-primary rounded-lg list-disc shadow-lg">
                <h2 className="lg:text-2xl text-lg font-semibold  tracking-wider mb-5 text-darkred">
                  Provided Courses in ITes :
                </h2>
                <ul className="lg:text-base text-sm  text-gray-700 tracking-wider">
                  <li>Certificate in BPO Course</li>
                  <li>Certificate in SEO Course</li>
                  <li>Certificate in Animation Designing Course</li>
                  <li>Certificate in Affiliate Marketing Course</li>
                  <li>Certificate in Social Media Marketing Course</li>
                </ul>
              </div>
              <div className="border-2 shadow-lg rounded-lg hover:shadow-xl">
                <img
                  src={digi}
                  alt=""
                  className="w-full lg:h-80 h-36 rounded-t-lg object-cover p-5"
                />
                <div className="p-5 ">
                  <h2 className="lg:text-xl text-sm font-semibold  tracking-wider mb-5 text-gray-700 text-center">
                    Get Your Marketing and (Information Technology-Enabled
                    Service) Career to the Next Level With Us
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-10">
          <button className="lg:px-6 lg:py-2 px-3 py-1 bg-primary text-white lg:text-base text-sm font-semibold tracking-wider rounded-lg">
            <a href="/services" className="flex gap-3">
              <FaArrowLeft className="mt-1" />
              Go Back
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default AISEC;
