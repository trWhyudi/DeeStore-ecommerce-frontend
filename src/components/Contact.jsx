import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="contact" className="max-padd-container py-20 bg-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
        <h2 className="h1 capitalize mb-10">
          Hubungi <span className="bg-secondary text-white px-2 rounded-full">Kami</span>
        </h2>
        <p className="mb-12 text-gray-700">
          Ada pertanyaan, saran, atau ingin bekerjasama? Jangan ragu untuk menghubungi kami melalui form berikut.
        </p>

        <form className="space-y-6 text-left" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              className="flex-1 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              className="flex-1 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
              data-aos="fade-left"
              data-aos-delay="300"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Pesan Anda"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
            data-aos="fade-up"
            data-aos-delay="400"
          ></textarea>

          <button
            type="submit"
            className="bg-tertiary text-white px-6 py-3 rounded-full hover:bg-secondary transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;