import ServiceCard from "./ServiceCard";

function Services() {

  const services = [
    {
      title: "Web Development",
      description:
        "Build modern, responsive and high-performance websites using React and Tailwind CSS.",
    },
    {
      title: "UI / UX Design",
      description:
        "Create beautiful, user-friendly interfaces that deliver excellent user experiences.",
    },
    {
      title: "API Integration",
      description:
        "Connect applications with secure APIs and third-party services for better functionality.",
    },
  ];

  return (
    <section id="services" className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            DevSphere provides innovative digital solutions that help businesses
            grow faster and smarter.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;