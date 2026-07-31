function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            About DevSphere
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            DevSphere is a modern software company specializing in building
            responsive, scalable, and user-friendly web applications using
            React, Tailwind CSS, and the latest web technologies.
          </p>

        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">

            <h3 className="text-2xl font-semibold text-indigo-600">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600">
              Our mission is to empower businesses by delivering innovative,
              reliable, and high-quality web solutions that help them grow in
              the digital world.
            </p>

          </div>

         
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">

            <h3 className="text-2xl font-semibold text-indigo-600">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600">
              Our vision is to become a trusted global technology partner,
              creating impactful digital experiences through innovation and
              excellence.
            </p>

          </div>

        </div>

       
        <div className="text-center mt-12">

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
            Read More
          </button>

        </div>

      </div>
    </section>
  );
}

export default About;