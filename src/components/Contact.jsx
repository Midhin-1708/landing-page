import { useState } from "react";
import { validateContact } from "../utils/validation";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showAlert = (type, message) => {
    setAlert({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        type: "",
        message: "",
      });
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const error = validateContact(formData);

    if (error) {
      showAlert("error", error);
      return;
    }

    showAlert("success", "Your message has been submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Have a question? We'd love to hear from you.
          </p>
        </div>


        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          
        {alert.show && (
          <div
            className={`mt-8 rounded-lg px-4 py-3 text-white text-center font-medium transition-all duration-300 ${
              alert.type === "success"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {alert.message}
          </div>
        )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>

            <button
              type="button"
              onClick={() =>
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                })
              }
              className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;