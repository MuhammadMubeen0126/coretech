import React from "react";
import {
  FaHandsHelping,
  FaRegHandshake,
  FaClipboardList,
  FaClock,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  const values = [
    { icon: <FaHandsHelping size={40} />, title: "Teamwork" },
    { icon: <FaRegHandshake size={40} />, title: "Commitment" },
    { icon: <FaClipboardList size={40} />, title: "Responsibility" },
    { icon: <FaClock size={40} />, title: "Efficiency" },
    { icon: <FaHeadset size={40} />, title: "Customer Care" },
    { icon: <FaChartLine size={40} />, title: "Growth" },
  ];

  return (
    <div className="relative">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-16 lg:px-24">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              CORETECH
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            At <span className="font-bold text-blue-700">CORETECH</span>, we are
            passionate about delivering innovative solutions that shape the
            future of technology in Pakistan. Since our inception in 2012 under
            the leadership of{" "}
            <span className="font-bold text-blue-700">OPTICODE</span>, we have
            been committed to providing cutting-edge IT services that empower
            businesses and individuals alike.
          </p>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <img
            src="/assets/images/Cloud.png"
            alt="Cloud Illustration"
            className="w-3/4 md:w-full max-w-md h-auto transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-30 z-[-1] rounded-full"></div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between relative">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            Our Vision
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our vision is to establish{" "}
            <span className="font-bold text-blue-700">CORETECH</span> as a
            recognized leader in IT solutions and services, surpassing customer
            expectations while maintaining a robust presence in the market. We
            strive to attract top-tier professionals who are both talented and
            motivated.
          </p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <div className="absolute bg-blue-700 rounded-full h-64 w-64 md:h-80 md:w-80 blur-xl -z-10"></div>
          <img
            src="/assets/images/Contact.png"
            alt="Vision Illustration"
            className="w-40 md:w-52 lg:w-64 max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="/assets/images/ProfileGraphic.png"
            alt="Mission Illustration"
            className="w-40 md:w-64 lg:w-80 max-w-full h-auto object-cover rounded-full border-4 border-blue-700 shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            We aim to provide state-of-the-art products and solutions to the IT
            industry in Pakistan, fostering enduring relationships built on
            trust and respect. As we continue to grow, we remain focused on the
            values that have guided us from the beginning.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
          Our Values
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          At <span className="font-bold text-blue-700">CORETECH</span>, our core
          values guide our day-to-day operations and long-term growth:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-blue-700 mb-4 transform transition-transform duration-500 group-hover:scale-110">
                {value.icon}
              </div>
              <p className="font-bold text-gray-800">{value.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
          Meet Our Team
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team of passionate professionals is dedicated to delivering
          top-notch IT solutions. Together, we’re shaping the future of
          technology in Pakistan.
        </p>
        <div className="flex justify-center">
          <img
            src="/assets/images/TeamPicture.png"
            alt="Our Team"
            className="rounded-xl shadow-lg max-w-full w-80 sm:w-96 lg:w-[600px] h-auto transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
