'use client';

export default function StatsSection() {
  return (
    <section
      className="stats-section show"
      role="region"
      aria-label="Business Performance Statistics – AI Marketing"
    >
      <div className="stats-container">
        <div className="stats-grid">

          {/* Stat Card 1 */}
          <div
            className="stat-card ani-heading"
            aria-label="Boosting Revenue: 2X to 6X – Proven growth results"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 576 512">
                <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
              </svg>
            </div>
            <div className="stat-label">Boosting Revenue</div>
            <div className="stat-value">2X to 6X</div>
            <div className="stat-subtitle">Proven growth results</div>
            <div className="decorative-circle" aria-hidden="true" />
          </div>

          {/* Stat Card 2 */}
          <div
            className="stat-card ani-heading"
            aria-label="Improved Leads: 3X to 8X – Quality lead generation"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 512 512">
                <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
              </svg>
            </div>
            <div className="stat-label">Improved Leads</div>
            <div className="stat-value">3X to 8X</div>
            <div className="stat-subtitle">Quality lead generation</div>
            <div className="decorative-circle" aria-hidden="true" />
          </div>

          {/* Stat Card 3 */}
          <div
            className="stat-card ani-heading"
            aria-label="Social Media Engagement: 4X to 8X – Enhanced audience reach"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 576 512">
                <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0L548.1 133.3c15.8 14.2 15.8 39.2 0 53.4L409.1 311.8c-13.2 11.9-34.1 2.5-34.1-15.6V224z" />
              </svg>
            </div>
            <div className="stat-label">Social Media Engagement</div>
            <div className="stat-value">4X to 8X</div>
            <div className="stat-subtitle">Enhanced audience reach</div>
            <div className="decorative-circle" aria-hidden="true" />
          </div>

          {/* Stat Card 4 */}
          <div
            className="stat-card ani-heading"
            aria-label="Brand Exposure: 100 to 1000% – Massive visibility boost"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 576 512">
                <path d="M288 32C129.9 32 2.5 256 2.5 256S129.9 480 288 480s285.5-224 285.5-224S446.1 32 288 32zm0 352a128 128 0 1 1 0-256 128 128 0 1 1 0 256z" />
              </svg>
            </div>
            <div className="stat-label">Brand Exposure</div>
            <div className="stat-value">100 to 1000%</div>
            <div className="stat-subtitle">Massive visibility boost</div>
            <div className="decorative-circle" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
}
