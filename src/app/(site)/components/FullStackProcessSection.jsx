"use client";

import { useEffect, useMemo, useState } from "react";
import { WEB_PROCESS_BY_SLUG } from "../data/services";
import "../../styles/navbar.css";

export default function FullStackProcessSection({ slug }) {
  const data = WEB_PROCESS_BY_SLUG?.[slug];

  const firstId = useMemo(() => data?.steps?.[0]?.id ?? null, [data]);

  const [activeStep, setActiveStep] = useState(firstId);

  useEffect(() => {
    setActiveStep(firstId);
  }, [firstId]);

  if (!data || !activeStep) return null;

  const currentStep = data.steps.find((s) => s.id === activeStep);

  return (
    <section className="reseller-programs-work res-pro-work-new show md:py-20 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="section-title-wrap text-center pb30">
          <h2 className="text-2xl lg:text-4xl font-semibold">{data.heading}</h2>

          <p className="mt-3 text-gray-600 max-w-5xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="reseller-programs-tab py-8">
          <ul className="nav nav-tabs flex flex-wrap" role="tablist">
            {data.steps.map((step) => {
              const active = step.id === activeStep;

              return (
                <li key={step.id} className="nav-item">
                  <button
                    type="button"
                    onClick={() => setActiveStep(step.id)}
                    className={`nav-link ${active ? "active show" : ""}`}
                    style={{
                      background: step.color,
                      "--step-color": step.color,
                    }}
                  >
                    <div className="step ">
                      <span className="block text-md uppercase">Step</span>

                      <span className="block text-2xl font-bold">
                        {step.step}
                      </span>
                    </div>
                    <div
                      className="back-circle"
                      style={{
                        background: step.color,
                        border: "1px solid #ffc43d",
                      }}
                    >
                      <div className="frnt-cir">{step.label}</div>
                    </div>

                    {active && (
                      <span
                        className=""
                        style={{
                          borderLeft: `16px solid ${step.color}`,
                          borderTop: "16px solid transparent",
                          borderBottom: "16px solid transparent",
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="tab-content">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              {currentStep.title}
            </h3>

            {currentStep.content.map((text, i) => (
              <p key={i} className="text-gray-600 mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
