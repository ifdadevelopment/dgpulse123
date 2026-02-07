'use client';

import Link from "next/link";
import { letsTalkData } from "../data/services";

export default function LetsTalkSection() {
  const { title, description, steps, cta } = letsTalkData;

  return (
    <section className="lets-talk-wrapper show">
      <div className="container mx-auto px-2">
        <div className="title section-title-wrap ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="" style={{ color: "white" }}>
            {title}
          </h2>

          <p className="text-white max-w-4xl mx-auto ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            {description}
          </p>
        </div>
        <div className="row justify-center w-full flex flex-col md:flex-row gap-8 ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          {steps.map((step, index) => (
            <div
              key={index}
              className="col-12 col-md-4 mb-6 d-flex"
            >
              <div className="card-3 w-100 text-center">
                <p>
                  <i
                    className={`fa ${step.icon}`}
                    aria-hidden="true"
                  ></i>
                </p>
                <h3 className="md:mt-6 mt-4">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="row ani-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          <div className="col-12 text-center">
            <p className="card-55">
              <Link
                href={cta.url}
                className="join-us text-center inline-block"
              >
                {cta.label}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
