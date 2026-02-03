"use client";

import { useState } from "react";
import { WEB_PROCESS_BY_SLUG } from "../data/services";
import "../../styles/navbar.css";
export default function FullStackProcessSection({ slug }) {
  const data = WEB_PROCESS_BY_SLUG[slug];
  const [activeStep, setActiveStep] = useState(data?.steps[0]?.id);

  if (!data) return null;

  return (
    <section className="reseller-programs-work res-pro-work-new show">
      <div className="container mx-auto">
        <div className="section-title-wrap text-center pb30">
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className="row flex flex-wrap">
          <div className="col-md-12">
            <div className="reseller-programs-tab">
              <ul className="nav nav-tabs" role="tablist">
                {data.steps.map((step) => (
                  <li className="nav-item" key={step.id}>
                    <button
                      type="button"
                      className={`nav-link ${
                        activeStep === step.id ? "active show" : ""
                      }`}
                      onClick={() => setActiveStep(step.id)}
                    >
                      <div className="step">
                        Step <span>{step.step}</span>
                      </div>
                      <div className={`back-circle ${step.step === 1 ? "ba1" : ""}`}>
                        <div className="frnt-cir">
                          {step.label.split(" ").map((w, i) => (
                            <span key={i}>
                              {w}
                              <br />
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {data.steps.map((step) => (
                  <div
                    key={step.id}
                    className={`tab-pane ${
                      activeStep === step.id ? "active show" : ""
                    }`}
                  >
                    <h3>{step.title}</h3>
                    {step.content.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
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
