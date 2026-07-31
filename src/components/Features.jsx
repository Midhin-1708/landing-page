function Features() {
  const features = [
    {
      title: "Responsive Design",
      description:
        "Fully optimized layouts that work seamlessly on mobile, tablet, laptop, and desktop devices.",
    },
    {
      title: "Fast Performance",
      description:
        "Lightweight and optimized React applications for a smooth user experience.",
    },
    {
      title: "Reusable Components",
      description:
        "Build scalable applications using reusable and maintainable React components.",
    },
    {
      title: "Modern UI",
      description:
        "Clean, attractive, and user-friendly interfaces designed with Tailwind CSS.",
    },
    {
      title: "Secure Development",
      description:
        "Follow best coding practices to build secure and reliable web applications.",
    },
    {
      title: "Easy Customization",
      description:
        "Simple structure that allows quick updates and easy feature enhancements.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose DevSphere?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We combine creativity, technology, and innovation to build
            high-quality digital solutions that help businesses succeed.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-600">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;