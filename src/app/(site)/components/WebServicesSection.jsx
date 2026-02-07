"use client";

import { useState } from "react";
import Image from "next/image";
import { WEB_SERVICES } from "../data/services";

export default function WebServicesSection({ slug }) {
  const data = WEB_SERVICES?.[slug];
  if (!data) return null;

  return (
    <section className="service-section bg-gray md:py-16 py-6">
      <div className="container mx-auto md:px-4 px-2">
        <div className="text-center mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            {data.title}
          </h2>
          <p className="max-w-7xl mx-auto text-gray-600 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            {data.description}
          </p>
        </div>
        <div className="space-y-10">
          {data.services.map((service, i) => (
            <ServiceRow key={i} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}


function ServiceRow({ heading, short, more, logos, points }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white shadow rounded-xl p-6 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <div className="lg:col-span-8">
        <h3 className="md:text-2xl text-lg font-semibold mb-3">
          {heading}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-5">
          {short}
          {open && <span className="ml-1"> {more}</span>}

          <button
            onClick={() => setOpen(!open)}
            className="md:ml-2 ml-0 text-blue-600 font-medium hover:underline"
          >
            {open ? "Read less" : "Read more"}
          </button>
        </p>
        <ul className="flex flex-wrap md:gap-x-6 gap-x-2 gap-y-5 mt-6">
          {logos.map((logo, i) => (
            <li
              key={i}
              className="w-[90px] flex flex-col items-center text-center text-sm text-gray-700"
            >
              <div className="h-[44px] w-[44px] flex items-center justify-center mb-2">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="leading-tight">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>

      </div>
      <div className="lg:col-span-4">
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <Image
                src="/images/icons8.png"
                alt="feature"
                width={18}
                height={18}
                className="mt-1"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
