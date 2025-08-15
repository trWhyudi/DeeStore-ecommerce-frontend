import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="max-padd-container py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="h1 capitalize mb-10">
          Hubungi <span className="bg-secondary text-white px-2 rounded-full">Kami</span>
        </h2>
        <p className="mb-12 text-gray-700">
          Ada pertanyaan, saran, atau ingin bekerjasama? Jangan ragu untuk menghubungi kami melalui form berikut.
        </p>

        <form className="space-y-6 text-left">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              className="flex-1 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              className="flex-1 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Pesan Anda"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-tertiary text-white px-6 py-3 rounded-full hover:bg-secondary transition duration-300"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
