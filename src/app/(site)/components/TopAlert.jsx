'use client';

import Image from 'next/image';

export default function TopAlert() {
  return (
    <div className="top-alert">
      <div
        className="top-alert-content"
      >
        <Image
          src="/images/d3.svg"
          alt="icon"
          width={25}
          height={25}
          priority
        />

        <a href="https://www.ezrankings.com/digital-marketing-franchise.html">
          Proven Model. Trusted Brand. Start Your Franchise.
        </a>
      </div>
    </div>
  );
}
