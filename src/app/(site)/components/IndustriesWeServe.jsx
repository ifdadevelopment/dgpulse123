"use client";

import Image from "next/image";
import { INDUSTRIES_BY_SLUG } from "../data/services";

export default function IndustriesWeServe({ slug }) {
  const data = INDUSTRIES_BY_SLUG[slug];
  if (!data) return null;

  return (
    <section className="industries-we-serve py-12">
      <div className="container mx-auto px-4">
        <div className="section-title-wrap pb30 text-center">
          <h2>{data.heading}</h2>
        </div>

        <ul
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
        >
          {data.items.map((item, index) => (
            <li key={index}>
              <div className="flip-box-inner h-full">
                <div className="flip-box-front flex flex-col items-center justify-center text-center p-6">
                  <figure className="mb-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={50}
                      loading="lazy"
                    />
                  </figure>
                  <h3>{item.title}</h3>
                </div>
                <div className="flip-box-back flex items-center justify-center text-center p-6">
                  <p>{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
