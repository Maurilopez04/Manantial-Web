import React from "react";

const Services = ({ icon, title, description, onClick }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-8 animate-slide-up">
      <div className="bg-white p-4 border border-4 border-blue-800 rounded-lg shadow-lg text-center h-full flex flex-col">
        <div className="bg-blue-800 p-4 rounded-full mx-auto mb-4 inline-block">
          <div className="text-white text-4xl">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button
          className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white font-semibold rounded-lg shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={onClick}
        >
          Participar
        </button>
      </div>
    </div>
  );
};

export default Services;
