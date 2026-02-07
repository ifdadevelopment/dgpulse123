"use client";

import { useState } from "react";
import Image from "next/image";
import { WEB_SERVICES } from "../data/services";

export default function WebServicesSection({ slug }) {
  const data = WEB_SERVICES?.[slug];

  if (!data) return null;

  return (
    <section className="service-section bg-gray py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {data.title}
          </h2>

          <p className="max-w-4xl mx-auto text-gray-600">
            {data.description}
          </p>

        </div>

        {/* Services */}
        <div className="space-y-16">

          {data.services.map((service, i) => (
            <ServiceRow key={i} {...service} />
          ))}

        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

function ServiceRow({
  heading,
  short,
  more,
  logos,
  points,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      {/* Left */}
      <div className="lg:col-span-8">

        <h3 className="text-2xl font-semibold mb-3">
          {heading}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-5">
          {short}

          {open && (
            <span className="ml-1">
              {" "}{more}
            </span>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="ml-2 text-blue-600 font-medium"
          >
            {open ? "Read less" : "Read more"}
          </button>
        </p>

        {/* Logos */}
        <ul className="flex flex-wrap gap-6">

          {logos.map((logo, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-sm text-gray-700"
            >
              <Image
                src={logo.img}
                alt={logo.name}
                width={44}
                height={44}
              />
              <span>{logo.name}</span>
            </li>
          ))}

        </ul>

      </div>

      {/* Right */}
      <div className="lg:col-span-4">

        <ul className="space-y-3 bg-white shadow rounded-xl p-6">

          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-gray-700"
            >
              <span className="text-green-500">✔</span>
              {point}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}
