"use client";

import { useEffect, useState } from "react";
import { WEB_PROCESS_BY_SLUG } from "../data/services";

export default function FullStackProcessSection({ slug }) {
  const data = WEB_PROCESS_BY_SLUG[slug];
  const [activeStep, setActiveStep] = useState(null);
  useEffect(() => {
    if (data?.steps?.length) {
      setActiveStep(data.steps[0].id);
    }
  }, [data]);

  if (!data || !activeStep) return null;

  const currentStep = data.steps.find(
    (step) => step.id === activeStep
  );

  if (!currentStep) return null;

  return (
    <section className="reseller-programs-work res-pro-work-new show py-14">
      <div className="container mx-auto px-4">
        <div className="section-title-wrap text-center pb30 ">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            {data.heading}
          </h2>
          <p className="text-gray-600">
            {data.description}
          </p>
        </div>
        <div className="reseller-programs-tab mb-12">
          <ul className="nav nav-tabs flex flex-wrap justify-center gap-4">
            {data.steps.map((step) => (
              <li className="nav-item" key={step.id}>
                <button
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`nav-link flex flex-col items-center justify-center w-[120px] h-[140px] rounded-full transition
                    ${
                      activeStep === step.id
                        ? "active show bg-blue-600 text-white"
                        : "bg-white hover:bg-gray-50"
                    }`}
                >
                  <div className="step text-xs font-semibold mb-2">
                    STEP <span>{step.step}</span>
                  </div>

                  <div className={`back-circle ${step.step === 1 ? "ba1" : ""}`}>
                    <div className="frnt-cir text-sm leading-tight text-center">
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
        </div>
        <div
          key={activeStep}
          className="tab-content "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tab-pane active show bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                {currentStep.title}
              </h3>
              <p className="text-gray-600">
                {currentStep.content[0]}
              </p>
            </div>
            <div className="tab-pane active show bg-white p-8 rounded-lg shadow-sm">
              {currentStep.content.slice(1).map((text, i) => (
                <p key={i} className="text-gray-600 mb-4 last:mb-0">
                  {text}
                </p>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
