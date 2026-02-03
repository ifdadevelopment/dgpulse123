"use client";

import Image from "next/image";
import { useState } from "react";
import { TECHNOLOGY_STACK_BY_SLUG } from "../data/services";

export default function TechnologyStackSection({ slug }) {
    const data = TECHNOLOGY_STACK_BY_SLUG[slug];
    const [activeTab, setActiveTab] = useState(data?.tabs?.[0]?.id);

    if (!data) return null;

    const activeTabData = data.tabs.find(tab => tab.id === activeTab);

    return (
        <section className="technology-lisy-sec bg-gray show py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="section-title-wrap pb30">
                        <h2>{data.heading}</h2>
                    </div>
                    <p className="mx-auto">
                        {data.description}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/4">
                        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                            {data.tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-3 cursor-pointer transition-all duration-200
  text-sm md:text-base
  border-transparent
  ${activeTab === tab.id
                                            ? "text-black font-bold bg-gray-50 border-b-4 border-b-blue-600 md:border-b-0 md:border-l-4 md:border-l-blue-600"
                                            : "bg-white text-gray-700 border-b-4 border-b-transparent md:border-b-0 md:border-l-4 md:border-l-transparent hover:bg-gray-100"
                                        }
`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        {activeTabData && (
                            <div className="technologylist-view bg-white md:p-6 p-2 rounded shadow-sm">
                                <h3 className="text-xl font-semibold mb-6">
                                    {activeTabData.title}
                                </h3>

                                <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
                                    {activeTabData.icons.map((icon, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center justify-center"
                                        >
                                            <Image
                                                src={icon}
                                                alt={activeTabData.title}
                                                width={50}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
