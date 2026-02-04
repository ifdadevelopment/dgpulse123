'use client';

import Image from 'next/image';

export default function OurKeyExcellence() {
    return (
        <section className="our-key-exlenece bg-[#f2f2f2] show py-16">
            <div className="container mx-auto px-4">
                <div className="row">
                    <div className="col-md-12 section-title-wrap pb30 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Key to Excellence
                        </h2>

                        <p className=" mx-auto text-gray-600 leading-relaxed">
                            Our prime objective is to place our clients’ website high on the growth curve. And we channelize every possible effort in providing them a competitive edge over their contemporaries in the market. We are strengthening our knowledge-base and continually researching for brand new link-building and backlink strategies for our esteemed clientele. At Digital Pulse, we have a crystal clear comprehension of the significance of transparent SEO approaches. Therefore, our chosen backlinks are always:


                        </p>
                    </div>
                </div>
            </div>
            <div className="container exlence-wrapper mx-auto px-4 mt-14">
                <div className="row grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-2 max-w-3xl mx-auto justify-center">

                    {[
                        { img: 'reliable-icon.png', title: 'Reliable', alt: 'reliable' },
                        { img: 'mission.png', title: 'Relevant', alt: 'relevant' },
                        { img: 'keyword-specefic.png', title: 'Keyword - specific', alt: 'keyword specific' },
                        { img: 'hight-quality.png', title: 'High-quality', alt: 'high quality' },
                        { img: 'creativity.png', title: 'Creatively & Innovatively', alt: 'creativity' },
                        { img: 'index-icon.png', title: 'Indexable', alt: 'indexable' },
                    ].map((item, index) => (
                        <div key={index} className="col">
                            <div className=" rounded-xl border border-gray-100 md:p-4 p-2 text-center h-full">
                                <figure className="mb-6 w-full h-28 md:h-38 relative flex items-center justify-center">
                                    <Image
                                        src={`/images/${item.img}`}
                                        alt={item.alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </figure>

                                <h3 className="font-semibold text-lg text-gray-800 leading-snug">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <p className="text-center mt-14 text-gray-700">
                As the most desired result, you will secure the highest position within
                the shortest time span.
            </p>
        </section>
    );
}
