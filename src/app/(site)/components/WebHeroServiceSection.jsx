"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WEB_HERO_SERVICES } from "../data/services";
import { useRef } from "react";
import Link from "next/link";

export default function WebHeroServiceSection({ slug }) {
    const data = WEB_HERO_SERVICES?.[slug];

    const autoplay = useRef(
        Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            dragFree: true,
        },
        [autoplay.current]
    );

    if (!data) return null;

    return (
        <section className="service-wrapper-container bg-light md:py-16 py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <h1 className="md:text-md text-sm uppercase tracking-wide text-gray-500 mb-2 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            {data.subheading}
                        </h1>

                        <h2 className="text-3xl main-heading lg:text-4xl font-bold mb-6 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            {data.heading}
                        </h2>

                        <p className="text-gray-600 description  leading-relaxed mb-8 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            {data.description}
                        </p>

                        <div className="cta-wrapper ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <Link
                                href={data.cta.link}
                                className="theme-btn"
                            >
                                <div className="arrow-circle">
                                    <div className="arrow">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>

                                <span className="btn-text">
                                    {data.cta.text}
                                </span>
                            </Link>
                        </div>

                    </div>
                    <div className="lg:col-span-7">
                        <div className="overflow-hidden ani-heading aos-init aos-animate" ref={emblaRef} data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex -ml-4 md:py-4 py-2">
                                {data.services.map((item, i) => (
                                    <div key={i} className="pl-4 min-w-[240px]">
                                        <div className="h-full shadow rounded-xl bg-white p-4 hover:shadow-lg transition">
                                            <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                            </div>

                                            <h4 className="text-lg font-semibold mb-2">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
