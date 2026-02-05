'use client';

import Link from "next/link";
import { blogFaqData } from "../data/services";
import "../../styles/navbar.css";

export default function BlogFaqSection({ slug }) {
  const data = blogFaqData[slug];
  if (!data) return null;

  return (
    <section className="blog-faq faq-wrapper show">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="faq-wrap">
              <div className="blog-post blog-postnew1">
                <h3>
                  {data.blogs.title}{" "}
                  <Link href={data.blogs.moreUrl}> + more</Link>
                </h3>

                <ul className="blog-listing">
                  {data.blogs.items.map((blog, i) => (
                    <li key={i}>
                      <h3>{blog.title}</h3>

                      <div className="blog-admin-date">
                        <span className="admin">
                          <i className="fa fa-user"></i>{" "}
                          <Link href={blog.authorUrl} rel="author">
                            {blog.author}
                          </Link>
                        </span>
                        {" | "}
                        <span className="watch">
                          <i className="fa fa-clock-o"></i>
                          {blog.date}
                        </span>
                      </div>

                      <p>{blog.excerpt}</p>

                      <Link href={blog.url} className="blog-read-more">
                        Read More
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ COLUMN */}
          <div className="col-md-6">
            <div className="blog-post">
              <h3>
                {data.faqs.title}{" "}
                <Link href={data.faqs.moreUrl}> + more</Link>
              </h3>

              <div className="accordion" id="FaqList">
                {data.faqs.items.map((faq, i) => (
                  <div
                    key={i}
                    className="faq-card accordion-item"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <div className="card-header" id={`heading${i}`}>
                      <h2 itemProp="name">
                        <button
                          className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${i}`}
                          aria-expanded="false"
                          aria-controls={`collapse${i}`}
                        >
                          {faq.question}
                          <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </button>
                      </h2>
                    </div>

                    <div
                      id={`collapse${i}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${i}`}
                      data-bs-parent="#FaqList"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div className="card-body" itemProp="text">
                        {faq.answer.map((ans, idx) => (
                          <p key={idx}>{ans}</p>
                        ))}
                      </div>
                    </div>
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
