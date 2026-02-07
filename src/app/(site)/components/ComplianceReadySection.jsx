"use client";

import { COMPLIANCE_SECTION_BY_SLUG } from "../data/services";

export default function ComplianceReadySection({ slug }) {
    const data = COMPLIANCE_SECTION_BY_SLUG[slug];
    if (!data) return null;

    return (
        <section className="pt-16 pb-0 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-7xl mx-auto mb-12">
                    <h2 className="md:text-md text-sm uppercase tracking-wide text-gray-500 mb-2 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        {data.subheading}
                    </h2>

                    <h3 className="text-2xl md:text-4xl font-semibold mb-4 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        {data.heading}
                    </h3>

                    <p className="text-gray-600 leading-relaxed ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        <strong>Compliance is no longer optional — especially in the US.</strong>
                        <br />
                        {data.description}
                    </p>
                </div>
                <div className="relative md:py-18 py-6">
                    <div
                        className="hidden lg:block absolute inset-0 bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url(${data.backgroundImage})`,
                            height: "440px",
                            zIndex: 0
                        }}
                    />

                    <div className="
  relative z-10
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-8 lg:gap-x-20 lg:gap-y-10
  items-center
">
                        <div className="space-y-6 lg:pr-6">
                            {data.items.slice(0, 2).map((item, i) => (
                                <ComplianceBox key={i} {...item} />
                            ))}
                        </div>

                        <div className="hidden lg:block" />

                        <div className="space-y-6 lg:pl-6">
                            {data.items.slice(2).map((item, i) => (
                                <ComplianceBox key={i} {...item} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
function ComplianceBox({ title, text }) {
    return (
        <div className="border border-gray-200 rounded-xl p-4 text-center bg-white shadow-sm hover:shadow-md transition ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <h5 className="text-lg font-semibold mb-2">{title}</h5>
            <p className="text-gray-600 text-sm description leading-relaxed">{text}</p>
        </div>
    );
}
