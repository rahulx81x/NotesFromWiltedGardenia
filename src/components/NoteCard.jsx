import { Link } from "react-router-dom";
import GardeniaEmblem from "./GardeniaEmblem";

export default function NoteCard({ poem, index = 0 }) {
  const { id, name, intro, publish_date, contents } = poem;

  // Calculate approximate stanza count
  const stanzas = contents ? contents.trim().split(/\n\s*\n/).filter(Boolean).length : 1;

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
          <span className="note-card-author">{poem.author || "Rahul Gouri"}</span>
          <span className="meta-separator">·</span>
          <span className="note-card-stanzas">
            {stanzas} {stanzas === 1 ? "Stanza" : "Stanzas"}
          </span>
        </div>

        <h2 className="note-card-title">{name}</h2>
        {intro && <p className="note-card-intro">{intro}</p>}

        {poem.tags && poem.tags.length > 0 && (
          <div className="note-card-tags">
            {poem.tags.map((tag) => (
              <span key={tag} className="note-tag-pill">
                #{tag}
              </span>
            ))}
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
