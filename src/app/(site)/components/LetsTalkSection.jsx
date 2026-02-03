'use client';

import Link from "next/link";
import { letsTalkData } from "../data/services";

export default function LetsTalkSection() {
  const { title, description, steps, cta } = letsTalkData;

  return (
    <section className="lets-talk-wrapper show">
      <div className="container mx-auto">
        {/* TITLE */}
        <div className="title section-title-wrap text-center mb-10">
          <h2 className="text-white">{title}</h2>
          <p className="text-white max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="row justify-center flex flex-col md:flex-row gap-8">
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
                <h3>{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
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
