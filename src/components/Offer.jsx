import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-12-31T12:15:10') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    } else {
      timeLeft = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-padd-container bg-banner bg-center bg-cover bg-no-repeat min-h-[555px] rounded-xl flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl w-full" data-aos="fade-up">
        <h3 className="uppercase medium-20 mb-2" data-aos="fade-down">Sales</h3>
        <h2 className="bold-40 uppercase mb-2" data-aos="fade-right">30% Off on all products</h2>
        <span className="italic font-ace text-base" data-aos="fade-left">Offer ends in</span>

        <div
          className="grid grid-cols-4 gap-4 mt-6 max-sm:grid-cols-2 max-sm:gap-6"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          {['days', 'hours', 'minutes', 'seconds'].map((key, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl flex flex-col items-center shadow-md min-w-[70px]"
              data-aos="zoom-in"
              data-aos-delay={300 + idx * 100}
            >
              <span className="font-bold text-3xl sm:text-4xl text-tertiary">{timeLeft[key]}</span>
              <span className="mt-1 text-sm capitalize text-gray-600">{key}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;