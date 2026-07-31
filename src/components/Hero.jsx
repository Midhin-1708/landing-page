function Hero() {
  const stats = [
    {
      number: "500+",
      title: "Happy Clients",
    },
    {
      number: "200+",
      title: "Projects Completed",
    },
    {
      number: "10+",
      title: "Years Experience",
    },
  ];

  return (
    <section id="home" className="bg-gradient-to-r from-indigo-400 to-blue-400 text-black">
      <div className="max-w-7xl mx-auto px-6 py-24">

       
        <div className="text-center">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Modern Web Applications
          </h1>

          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            Create responsive, modern, and scalable websites using React,
            Tailwind CSS, reusable components, and best UI practices.
          </p>

          <button className="mt-10 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>

        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg text-center hover:scale-105 transition duration-300"
            >
              <h2 className="text-4xl font-bold">
                {item.number}
              </h2>

              <p className="mt-2 text-indigo-100">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Hero;