import Link from "next/link";
import { servicePages } from "../data/services";
import "../../styles/navbar.css"
export default function InnerPageHeader({ slug, base = "services" }) {
  const page = servicePages[slug];
  if (!page) return null;

  const { title, description, breadcrumbLabel } = page;

  return (
    <main className="inner-page-title py-10">
      <div className="breadcrumb-top">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="col-md-12">
              <div className="left">
                <ul
                  itemScope
                  itemType="https://schema.org/BreadcrumbList"
                >
                  <li
                    style={{ display: "inline" }}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <Link href="/" itemProp="item">
                      <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li
                    style={{ display: "inline" }}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <i
                      className="fa fa-angle-right"
                      aria-hidden="true"
                    ></i>
                    <Link
                      href={`/${base}/${slug}`}
                      itemProp="item"
                    >
                      <span itemProp="name">
                        {breadcrumbLabel}
                      </span>
                    </Link>
                    <meta itemProp="position" content="2" />
                  </li>
                </ul>
              </div>
              <h2 style={{ margin: "15px 0px "}}>
                {title}
              </h2>
              <p >{description}</p>
              <div className="inner-banner-btn">
                <Link
                  href="/portfolio"
                  className="btn btn-warning"
                >
                  Portfolio
                </Link>

                <a
                  href="javascript:void(0)"
                  className="btn btn-info form-togle"
                >
                  Let’s Talk
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
