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
  if (!currentStep) return null;

  const panelId = (stepId) => `tab-${slug}-${stepId}`;
  const isActive = (stepId) => stepId === activeStep;

  return (
    <section className="reseller-programs-work res-pro-work-new show">
      <div className="container mx-auto px-4">
        {/* Heading (same wrapper classes) */}
        <div className="section-title-wrap text-center pb30">
          <h2 className="text-2xl lg:text-4xl font-semibold">{data.heading}</h2>
          <p className="mt-3 text-gray-600 max-w-5xl mx-auto">{data.description}</p>
        </div>

        {/* Responsive Layout:
            - mobile: stack
            - md: tabs left + content right
            - lg: tabs top row + content below full width
        */}
        <div className="row">
          <div className="col-md-12">
            <div className="reseller-programs-tab">
              {/* Tabs */}
              <ul
                className="
                  nav nav-tabs
                  flex flex-col gap-5
                  md:w-[240px]
                  lg:w-full
                  md:flex-col
                  lg:flex-row lg:flex-nowrap lg:justify-between
                "
                role="tablist"
              >
                {data.steps.map((step) => {
                  const target = panelId(step.id);
                  const active = isActive(step.id);

                  return (
                    <li className="nav-item" role="presentation" key={step.id}>
                      <button
                        type="button"
                        className={`nav-link ${active ? "show active" : ""}`}
                        role="tab"
                        aria-selected={active}
                        aria-controls={target}
                        onClick={() => setActiveStep(step.id)}
                      >
                        <div className="step">
                          Step <span>{step.step}</span>
                        </div>

                        <div className={`back-circle ${step.step === 1 ? "ba1" : ""}`}>
                          <div className="frnt-cir">
                            {/* Match original label with <br/> breaks */}
                            {String(step.label)
                              .split(" ")
                              .reduce((acc, word, idx, arr) => {
                                // keep same idea as HTML: manual line breaks for 2-word labels
                                // (You can store <br> already in data if you want perfect control)
                                const shouldBreak =
                                  arr.length >= 2 && idx === Math.floor(arr.length / 2) - 1;
                                acc.push(word);
                                if (shouldBreak) acc.push(<br key={`${step.id}-br`} />);
                                else acc.push(" ");
                                return acc;
                              }, [])}
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Content wrapper:
                  - mobile: below tabs
                  - md: right side (grid)
                  - lg: full width below (like HTML)
               */}
              <div
                className="
                  mt-8
                  md:mt-0
                  md:grid md:grid-cols-[240px_1fr] md:gap-8
                  lg:grid-cols-1
                "
              >
                {/* Spacer column for md only (to keep content on right of vertical tabs) */}
                <div className="hidden md:block lg:hidden" />

                {/* Content */}
                <div className="tab-content">
                  {/* Render only active pane (matches “only one tab show”) */}
                  <div
                    key={activeStep}
                    id={panelId(activeStep)}
                    className="tab-pane active show tab-fade"
                    role="tabpanel"
                  >
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                      {currentStep.title}
                    </h3>

                    {currentStep.content?.map((text, i) => (
                      <p key={i} className="text-gray-600 mb-4 last:mb-0">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
