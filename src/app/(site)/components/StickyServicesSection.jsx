'use client';

import Image from 'next/image';
import Link from 'next/link';
import MarketingSolutionsSection from './MarketingSolutionsSection';
import BrandingSolutionsSection from './BrandingSolutionsSection';
import WebsiteAppDevelopmentSection from './WebsiteAppDevelopmentSection';

export default function StickyServicesSection() {
  return (
    <div className="sticky-sections-wrapper ">
      <MarketingSolutionsSection />
      <BrandingSolutionsSection />
      <WebsiteAppDevelopmentSection />

    </div>
  );
}
