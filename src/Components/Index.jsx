import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Indexbanner from "./Indexbanner";

const products = [
  {
    id: 1,
    name: "QSFP 40G 20Km",
    category: "SFP",
    price: "27000",
    image: "/assets/images/QSFP.png",
  },
  {
    id: 2,
    name: "Joint Encluser 24 Core",
    category: "Networking",
    price: "3000",
    image: "/assets/images/encluser.png",
  },
  {
    id: 3,
    name: "dhaua Camera 2MP",
    category: "Cameras",
    price: "3000",
    image: "/assets/images/dahua.png",
  },
  {
    id: 4,
    name: "POE Switch 8 Port",
    category: "Networking",
    price: "RS: 6500",
    image: "/assets/images/PoeSwitch.jpg",
  },
  {
    id: 5,
    name: "2 Core Fiber Cable",
    category: "Networking",
    price: "18000",
    image: "/assets/images/fiber.png",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div>
        <Indexbanner />
    <div>
      {/* Search Bar */}
      <section className="bg-gray-100 py-8 px-6 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
            <div className="relative w-full md:w-3/4">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute top-3 right-4 text-gray-400" />
            </div>
            <button className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-4 py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-700 transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Products
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Category: {product.category}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mt-8 text-center">
              No products found matching your search.
            </p>
          )}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-600 py-16 px-6 md:px-16 lg:px-24 text-center text-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8">
            Join hands with <span className="font-bold">CORETECH</span> and
            experience the future of IT innovation.
          </p>
          <a
            href="/contact"
            className="py-4 px-8 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Index;
