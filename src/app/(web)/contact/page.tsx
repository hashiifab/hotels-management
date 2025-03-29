'use client';

import { useState } from 'react';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-text-default dark:text-text-dark max-w-2xl mx-auto">
          We'd love to hear from you. Please fill out the form below or reach out through our contact information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-primary dark:text-secondary mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-secondary outline-none transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-primary dark:text-secondary mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-secondary outline-none transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-primary dark:text-secondary mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-secondary outline-none transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-primary dark:text-secondary mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-secondary outline-none transition-all duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Map */}
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl text-primary dark:text-secondary" />
              <h3 className="text-xl font-semibold ml-2 text-primary dark:text-secondary">Our Location</h3>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644262070010!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6">
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <BsFillSendFill className="text-2xl text-primary dark:text-secondary" />
                <div>
                  <h3 className="font-semibold text-primary dark:text-secondary">Email Us</h3>
                  <p className="text-text-default dark:text-text-dark">contact@luxstay.com</p>
                </div>
              </div>
            </div>

            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <BsTelephoneOutbound className="text-2xl text-primary dark:text-secondary" />
                <div>
                  <h3 className="font-semibold text-primary dark:text-secondary">Call Us</h3>
                  <p className="text-text-default dark:text-text-dark">+1 (800) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <BiMessageDetail className="text-2xl text-primary dark:text-secondary" />
                <div>
                  <h3 className="font-semibold text-primary dark:text-secondary">Support</h3>
                  <p className="text-text-default dark:text-text-dark">support@luxstay.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;