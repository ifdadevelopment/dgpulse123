"use client";

import Image from "next/image";
import {  traits } from "../data/services";

export default function TraitsSection({ slug }) {
  const data = traits[slug];

  if (!data) return null;

  return (
    <section className="traits-section traits-section-new bg-[#f2f2f2] show py-14">
      <div className="container mx-auto px-4">
        <div className="section-title-wrap pb30 text-center  mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            {data.heading}
          </h2>
          <p className="text-gray-600 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            {data.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {data.services.slice(0, 4).map((service, index) => (
            <div key={index} className="col-md-3">

              <div className="box-design ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="flip-box-inner">
                  <div className="flip-box-front flex flex-col items-center justify-center text-center p-6">
                    <figure className="mb-4">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={71}
                        height={71}
                      />
                    </figure>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="flip-box-back flex flex-col items-center justify-center text-center p-6">
                    <p className="mb-4">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className="btn"
                    >
                      Learn More
                    </a>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
