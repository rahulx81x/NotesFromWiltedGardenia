import { Link } from "react-router-dom";
import GardeniaEmblem from "./GardeniaEmblem";
import { DEFAULT_AUTHOR } from "../data/config";
import { getStanzaCount } from "../utils/poemHelpers";

const MAX_CARD_TAGS = 5;

export default function NoteCard({ poem, index = 0 }) {
  const { id, name, intro, publish_date, contents } = poem;

  const stanzas = getStanzaCount(contents);
  const tags = poem.tags || [];
  const visibleTags = tags.slice(0, MAX_CARD_TAGS);
  const hiddenCount = tags.length - visibleTags.length;

  return (
    <article
      className="note-card staggered-reveal"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Background gardenia watermark */}
      <div className="card-gardenia-watermark" aria-hidden="true">
        <GardeniaEmblem size={90} />
      </div>

      <Link to={`/poem/${id}`} className="note-card-inner">
        <div className="note-card-meta">
          {publish_date && (
            <time dateTime={publish_date} className="note-card-date">
              {publish_date}
            </time>
          )}
          <span className="meta-separator">·</span>
          <span className="note-card-author">{poem.author || DEFAULT_AUTHOR}</span>
          <span className="meta-separator">·</span>
          <span className="note-card-stanzas">
            {stanzas} {stanzas === 1 ? "Stanza" : "Stanzas"}
          </span>
        </div>

        <h2 className="note-card-title">{name}</h2>
        {intro && <p className="note-card-intro">{intro}</p>}

        {tags.length > 0 && (
          <div className="note-card-tags">
            {visibleTags.map((tag) => (
              <span key={tag} className="note-tag-pill">
                #{tag}
              </span>
            ))}
            {hiddenCount > 0 && (
              <span
                className="note-tag-pill tag-more"
                title={`+${hiddenCount} more: ${tags.slice(MAX_CARD_TAGS).map((t) => `#${t}`).join(", ")}`}
              >
                +{hiddenCount}
              </span>
            )}
          </div>
        )}

        <div className="note-card-read-cue">
          <span>Read piece</span>
          <span className="cue-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </article>
  );
}
