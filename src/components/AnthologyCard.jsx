import GardeniaEmblem from "./GardeniaEmblem";
import { DEFAULT_AUTHOR } from "../data/config";

export default function AnthologyCard({ anthology, featured = false }) {
  const { title, subtitle, description, link_url, status_or_tag } = anthology;

  const cardClass = featured ? "anthology-shelf-card" : "anthology-full-card";

  return (
    <article className={`${cardClass} staggered-reveal`}>
      {/* Background gardenia silhouette */}
      <div className="card-gardenia-watermark" aria-hidden="true">
        <GardeniaEmblem size={120} />
      </div>

      <div className="anthology-card-content">
        <div className="anthology-header-meta">
          {status_or_tag && <div className="anthology-badge">{status_or_tag}</div>}
          <span className="anthology-author-tag">Curated by {anthology.author || DEFAULT_AUTHOR}</span>
        </div>

        <h3 className="anthology-title">{title}</h3>
        {subtitle && <p className="anthology-subtitle">{subtitle}</p>}
        {description && <p className="anthology-desc">{description}</p>}

        {link_url ? (
          <a
            href={link_url}
            target="_blank"
            rel="noopener noreferrer"
            className="anthology-link-btn"
            aria-label={`Open anthology ${title} (opens in new tab)`}
          >
            <span>Explore Anthology</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-arrow-icon">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ) : (
          <span className="anthology-link-btn" style={{ opacity: 0.6, cursor: "default" }}>
            In Preparation
          </span>
        )}
      </div>
    </article>
  );
}
