"use client";

import { SERVICE_HERO } from "../data/services";

export default function InnerHeroSection({ slug }) {
    const data = SERVICE_HERO?.[slug];
    if (!data) return null;

    return (
        <section className="relative h-[320px] lg:h-[500px] overflow-hidden py-10">
            <div
                className="absolute inset-0 bg-center bg-cover "
                // style={{ backgroundImage: `url(${data.background})` }}
                style={
                    data.backgroundType === "gradient"
                        ? { background: data.background }
                        : { backgroundImage: `url(${data.background})` }
                }
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">

                        <h2 className="text-sm uppercase tracking-wide text-white/80 mb-2">
                            {data.subheading}
                        </h2>

                        <h3 className="text-lg  lg:text-5xl font-bold text-white mb-4">
                            {data.heading}
                        </h3>
                        <p className="text-white/90 max-w-2xl text-sm md:text-lg lg:text-md mb-6 leading-relaxed">
                            {data.description}
                        </p>

                        {data.cta && (
                            <div className="cta-wrapper mt-2">
                                <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#${data.cta.modalId}`}
                                    aria-label={data.cta.text}
                                    className="theme-btn"
                                >
                                    <div className="arrow-circle">
                                        <div className="arrow">
                                            <i className="fas fa-arrow-right" />
                                        </div>
                                    </div>
                                    <span className="btn-text text-white">{data.cta.text}</span>
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </section>
    );
}
