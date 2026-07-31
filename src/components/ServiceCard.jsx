function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2">

      <h3 className="text-2xl font-bold text-indigo-600">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
        Learn More
      </button>

    </div>
  );
}

export default ServiceCard;