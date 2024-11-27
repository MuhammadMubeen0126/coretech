import React from "react";

const Services = () => {
  const services = [
    {
        id: 1,
        title: "Smart Security",
        description:
          "We provide advanced security solutions including network security, IP surveillance (CCTV), and access control systems. Our team works closely with clients to design cost-effective, custom security systems that ensure the protection of both physical and digital assets.",
        image: "/assets/images/smart-security.png",
      },
      {
        id: 2,
        title: "License Plate Recognition Systems",
        description:
          "Our LPR systems capture and convert vehicle data into digital information, enabling smart solutions for parking, tolling, and security. This technology is a growing trend in both Europe and the Americas.",
        image: "/assets/images/license-plate.png",
      },
      {
        id: 3,
        title: "Unified IP-PBX Solutions",
        description:
          "Our IP-PBX solutions offer comprehensive telephony services, including video conferencing and instant messaging. Scalable for businesses of all sizes, our systems include proactive monitoring and remote management features.",
        image: "/assets/images/IP-PBX.png",
      },
      {
        id: 4,
        title: "Fire Protection Systems",
        description:
          "We design and install fire alarm systems that provide early warnings to ensure safety and prevent property damage. Our systems are compliant with global standards and are essential for hospitals, schools, and other public buildings.",
        image: "/assets/images/fire-protection.png",
      },
      {
        id: 5,
        title: "Smart Access Control Systems",
        description:
          "Control access to your property with our cutting-edge solutions, designed to secure both residential and commercial spaces. Our systems help manage foot traffic, prevent unauthorized access, and protect sensitive information.",
        image: "/assets/images/smart-access.png",
      },
      {
          id: 6,
          title: "Smart Home Automation (IoTECH)",
          description:
            "Our AI-powered smart home devices offer seamless Wi-Fi connectivity, cloud functionality, and aesthetic designs. Our solutions reduce energy consumption and provide homeowners with unmatched convenience and control.",
          image: "/assets/images/smart-home.png",
        },
        {
          id: 7,
          title: "Network & Server Management",
          description:
            "We provide extensive support for Microsoft-based networks, including security compliance, active directory management, and network monitoring. Our services ensure smooth operations and timely issue resolution.",
          image: "/assets/images/network-server.png",
        },
        {
          id: 8,
          title: "Solar Power Solutions",
          description:
            "Harness the power of the sun with our solar energy systems. Whether you’re in a remote location or looking for cost-effective energy alternatives, our solutions are efficient, maintenance-free, and environmentally friendly.",
          image: "/assets/images/solar-power.png",
        },
        {
          id: 9,
          title: "Structured Cabling",
          description:
            "We specialize in both copper and fiber optic cabling to create robust and efficient network infrastructures. A well-designed cabling system can significantly improve your company’s daily operations and long-term success.",
          image: "/assets/images/structured-cabling.png",
        },
        {
          id: 10,
          title: "Enterprise Wireless Networks",
          description:
            "Our wireless engineers design and deploy wireless solutions tailored to your specific needs. We have extensive experience working with major wireless providers such as Huawei, Cisco Meraki, and Ubiquiti Unifi.",
          image: "/assets/images/enterprise-wireless.png",
        },
        {
          id: 11,
          title: "Virtual Desktop Infrastructure (VDI)",
          description:
            "Our VDI solutions simplify network management, offering centralized control for IT administrators while enhancing user experience. This system is ideal for growing enterprises with expanding technical needs.",
          image: "/assets/images/vdi.png",
        },
    ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Services
          </span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col items-center bg-white shadow-lg rounded-xl p-8 border border-gray-100 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-full shadow-md mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4 transition-colors group-hover:text-blue-600">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {`#${service.id}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
