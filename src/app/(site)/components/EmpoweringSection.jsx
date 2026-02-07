import Image from "next/image";
import { EMPOWERING_STATS_BY_SLUG } from "../data/services";
export default function EmpoweringSection({ slug }) {
    const data = EMPOWERING_STATS_BY_SLUG[slug];
    if (!data) return null;

    return (
        <section className="ls-result empowering-sec bg-gray show">
            <div className="container mx-auto md:px-4 px-2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title-wrap pb30 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <h2>{data.heading}</h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap py-10 gap-4 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    {data.items.map((item, index) => (
                        <div
                            key={index}
                            className="
        w-full
        sm:w-full
        md:w-[48%]
        lg:w-[23%]
      "
                        >
                            <div className="empowering-card h-full">
                                <div className="icon">
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                        width={42}
                                        height={42}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="empowering-content">
                                    <p>{item.text}</p>
                                    <h3>{item.value}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}
