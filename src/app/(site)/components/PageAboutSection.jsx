'use client';

import Image from "next/image";
import Link from "next/link";
import { pageAboutData } from "../data/services";
import "../../styles/navbar.css"
export default function PageAboutSection({ slug }) {
    const data = pageAboutData[slug];

    if (!data) return null;

    return (
        <section className="page-about-wrapper show md:py-20 py-8">
            <div className="container mx-auto px-6">
                <div className="section-title-wrap">
                    <h1 className="pb30">{data.title}</h1>
                </div>
                <div className="row ">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="w-full md:w-9/12">
                            <div className="content-wrap">
                                {data.leftContent.map((text, index) => (
                                    <p key={index}>
                                        {text}
                                        {index === 0 && (
                                            <>
                                                {" "}
                                                <Link href={data.links.portfolio}>
                                                    strong portfolio
                                                </Link>{" "}
                                                and a 92% client retention rate reflect our consistent
                                                commitment to high-quality work and client satisfaction.
                                            </>
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-3/12 flex md:justify-end justify-center">
                            <div className="about-img-wrap">
                                <div className="video-wrap">
                                    <Image
                                        src={data.image.src}
                                        alt={data.image.alt}
                                        width={data.image.width}
                                        height={data.image.height}
                                        className="img-fluid max-w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="w-full">
                        <div className="about-content-wrap">
                            {data.bottomContent.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}

                            {data.cta?.label && data.cta?.url && (
                                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    {data.cta.prefix && (
                                        <span className="text-gray-700">
                                            {data.cta.prefix}
                                        </span>
                                    )}
                                    <Link
                                        href={data.cta.url}
                                        className="
              inline-flex items-center justify-center
              bg-blue-600 hover:bg-blue-700
              text-white font-semibold
              px-6 py-3 rounded
              transition duration-200
              whitespace-nowrap
            "
                                    >
                                        {data.cta.label}
                                    </Link>
                                    {data.cta.suffix && (
                                        <span className="text-gray-700">
                                            {data.cta.suffix}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
