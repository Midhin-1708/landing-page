function Footer() {
  const quickLinks = [
    "Home",
    "About",
    "Services",
    "Features",
    "Contact",
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-indigo-400">
              DevSphere
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              DevSphere builds responsive, scalable and modern web
              applications using React and Tailwind CSS.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-indigo-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              Email:
            </p>

            <p className="mb-4">
              info@devsphere.com
            </p>

            <p className="text-gray-400">
              Phone:
            </p>

            <p>
              +91 98765 43210
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} DevSphere. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;