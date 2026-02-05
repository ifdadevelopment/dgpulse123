import { notFound } from "next/navigation";
import InnerPageHeader from "../../components/InnerPageHeader";
import { servicePages } from "../../data/services";
import PageAboutSection from "../../components/PageAboutSection";
import EmpoweringSection from "../../components/EmpoweringSection";
import TechnologyStackSection from "../../components/TechnologyStackSection";
import FullStackProcessSection from "../../components/FullStackProcessSection";
import BlogFaqSection from "../../components/BlogFaqSection";
import WhyEzSection from "../../components/WhyEzSection";
import IndustriesWeServe from "../../components/IndustriesWeServe";
import LetsTalkSection from "../../components/LetsTalkSection";
import TraitsSection from "../../components/TraitsSection";
export async function generateMetadata({ params }) {
  const { slug } = await params; 

  const pageData = servicePages[slug];
  if (!pageData) return {};

  const canonicalUrl =
    pageData.canonical ||
    `https://www.ezrankings.com/services/${slug}`;

  return {
    title: pageData.title,
    description: pageData.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: canonicalUrl,
      siteName: "EZ Rankings",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params; 

  const pageData = servicePages[slug];
  if (!pageData) return notFound();

  return (
    <main className="inner-page">
      <InnerPageHeader slug={slug} base="services" />
       <PageAboutSection slug={slug} />
       <EmpoweringSection slug={slug} />
       <TechnologyStackSection slug={slug} />
       <WhyEzSection slug={slug} />
       <IndustriesWeServe slug={slug} />
       <LetsTalkSection slug={slug} />
       <TraitsSection slug={slug}/>
       <FullStackProcessSection slug={slug} />
       {/* <BlogFaqSection slug={slug} /> */}
    </main>
  );
}
