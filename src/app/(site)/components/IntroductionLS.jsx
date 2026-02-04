'use client';

import { useState } from 'react';
import "../../styles/navbar.css"
export default function IntroductionLS() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <section className="introduction-ls bg-white show py-16">
      <div className="container mx-auto px-4">
        <div className="row1">
          <div className="col-md-12">
            <ul
              className="nav nav-tabs flex gap-6 border-b border-gray-200 mb-6"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  className={`nav-link cursor-pointer ${
                    activeTab === 'home' ? 'active font-semibold border-b-2 border-black' : ''
                  }`}
                  id="home-tab"
                  role="tab"
                  aria-selected={activeTab === 'home'}
                  onClick={() => setActiveTab('home')}
                >
                  Our Vision
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  className={`nav-link cursor-pointer ${
                    activeTab === 'profile' ? 'active font-semibold border-b-2 border-black' : ''
                  }`}
                  id="profile-tab"
                  role="tab"
                  aria-selected={activeTab === 'profile'}
                  onClick={() => setActiveTab('profile')}
                >
                  Our Mission
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === 'home' ? 'active show' : ''
                }`}
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p className="mb-4 text-gray-700 leading-relaxed">
                  With the increasing reliance on virtual platforms, almost
                  every business establishment wishes to create a robust
                  foothold in the market. Acquiring new customers and captivating
                  their attention happens to be the key to doing that. On this
                  note, it becomes essential for you to achieve top rankings in
                  popular search engines such as Google and Bing.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The highly professional team of{' '}
                  <a
                    href="https://www.ezrankings.com/hire-seo-marketing-experts.php"
                    className="text-blue-600 underline"
                  >
                    SEO marketing experts
                  </a>{' '}
                  at EZ Rankings has this unique vision of placing their clients
                  in the league of digitally developed establishments. We aim at
                  fostering growth in the best possible way.
                </p>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'profile' ? 'active show' : ''
                }`}
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Its a well known fact that Good SEO is not cheap &amp; cheap SEO
                  is not Good. EZ Rankings strives hard towards striking the
                  perfect balance between quality and affordability. In fact,
                  We take immense pride in offering an extensive plan wherein we
                  encourage our clients to compare deliverable &amp; then take a
                  decision.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Talking about quality, we believe in taking the best both
                  worlds i.e, manual &amp; automation. Manual approach helps us
                  to bring a personal touch &amp; logic behind strategies while
                  automation helps us to measure &amp; value the results
                  achieved.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
