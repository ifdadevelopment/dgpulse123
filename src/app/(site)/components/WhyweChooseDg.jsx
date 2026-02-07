"use client";

import { WHY_CHOOSE } from "../data/services";

export default function WhyweChooseDg({ slug }) {
  const data = WHY_CHOOSE?.[slug];
  if (!data) return null;

  return (
    <section className="bg-gradient-bg">
      <div className="container-fluid mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="hidden lg:block lg:col-span-5 relative">
            <div
              className="absolute inset-0 bg-no-repeat bg-left bg-cover"
              style={{ backgroundImage: `url(${data.background})` }}
            />
          </div>
          <div className="lg:col-span-7 px-6 lg:px-14 py-16 text-white">
            <h2 className="text-sm uppercase tracking-wide mb-2 text-gray-300">
              {data.subheading}
            </h2>

            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              {data.heading}
            </h3>

            <p className="text-gray-200 max-w-3xl mb-12 leading-relaxed">
              {data.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
                >
                  <span className="text-blue-400 font-bold text-lg">
                    {item.no}
                  </span>

                  <h5 className="text-lg font-semibold mt-3 mb-2">
                    {item.title}
                  </h5>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
