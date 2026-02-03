'use client';

import Image from "next/image";
import { whyEzData } from "../data/services";
import "../../styles/navbar.css"
export default function WhyEzSection({ slug }) {
  const data = whyEzData[slug];
  if (!data) return null;

  return (
    <section className="whyez_sec bg-gray show">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="page-heading text-left">
              <h2>{data.title}</h2>
            </div>

            <article className="commonsection_text">
              <p>{data.intro}</p>
            </article>

            <br />

            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={400}
              height={350}
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-8 servicescardview-list pb-0">
            <div className="row">
              {data.cards.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-6">
                  <div className="servicescardview_group">
                    <div className="media">
                      <div className="servicescardview_icon">
                        <span>
                          <Image
                            src={`/images/${item.icon}`}
                            alt={item.title}
                            width={48}
                            height={48}
                          />
                        </span>
                      </div>

                      <div className="media-body">
                        <div className="servicescardview_conts">
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
