'use client';

import Image from "next/image";
import { whyEzData } from "../data/services";

export default function WhyEzSection({ slug }) {
  const data = whyEzData[slug];
  if (!data) return null;

  return (
    <section className="whyez_sec bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <div className="page-heading text-left mb-4">
              <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">
                {data.title}
              </h2>
            </div>

            <article className="commonsection_text text-gray-700">
              <p>{data.intro}</p>
            </article>

            <div className="mt-6">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={400}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.cards.map((item, index) => (
                <div key={index} className="servicescardview_group bg-white p-5 rounded-md shadow-sm h-full">
                  <div className="flex items-start gap-4 h-full">

                    <div className="servicescardview_icon flex-shrink-0">
                      <Image
                        src={`/images/${item.icon}`}
                        alt={item.title}
                        width={48}
                        height={48}
                      />
                    </div>

                    <div className="servicescardview_conts">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
