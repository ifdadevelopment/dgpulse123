'use client';

import Image from 'next/image';
import Link from 'next/link';
import { traits } from '../data/services';

export default function TraitsSection({ slug }) {
  const servicesToShow = slug
    ? traits.filter((item) => item.slug === slug)
    : traits;

  if (!servicesToShow.length) return null;

  const sectionHeading = slug
    ? servicesToShow[0].heading
    : 'More Than a Web Development Agency';

  const sectionIntro = slug
    ? servicesToShow[0].intro
    : 'We are a trusted custom Indian web development company and your holistic digital partner. EZ Rankings provides complete digital solutions to help businesses grow online.';

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {sectionHeading}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {sectionIntro}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesToShow.map((item) => (
            <div key={item.slug} className="flip-card w-full h-[260px]">
              <div className="flip-card-inner rounded-xl shadow-lg bg-white">
                <div className="flip-card-front flex flex-col items-center justify-center p-6 rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <div className="flip-card-back flex flex-col justify-between p-6 rounded-xl bg-blue-900 text-white">
                  <p className="text-sm">
                    {item.description}
                  </p>

                  {!slug && (
                    <Link
                      href={`/services/${item.slug}`}
                      className="mt-4 inline-block text-sm font-semibold underline hover:opacity-80"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
