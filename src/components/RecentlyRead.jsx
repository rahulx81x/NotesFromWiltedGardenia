import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useReadingHistory } from "../hooks/useReadingHistory";
import GardeniaEmblem from "./GardeniaEmblem";

export default function RecentlyRead({ poems = [] }) {
  const { history } = useReadingHistory();

  const recentPoems = useMemo(() => {
    if (!history || history.length === 0 || !poems || poems.length === 0) {
      return [];
    }
    const resolved = [];
    for (const item of history) {
      const p = poems.find((poem) => poem.id === item.id);
      if (p) {
        resolved.push({ ...p, readAt: item.readAt });
      }
      if (resolved.length >= 4) break;
    }
    return resolved;
  }, [history, poems]);

  if (recentPoems.length === 0) return null;

  return (
    <section className="recently-read-section" aria-labelledby="recently-read-heading">
      <div className="section-heading-group">
        <div>
          <span className="section-eyebrow">Reading Journey</span>
          <h2 id="recently-read-heading" className="section-title">
            Recently Read
          </h2>
        </div>
        <span className="section-meta-hint">Saved on this device</span>
      </div>

      <div className="recently-read-grid">
        {recentPoems.map((poem) => (
          <Link
            key={poem.id}
            to={`/poem/${poem.id}`}
            className="recently-read-card"
          >
            <div className="recently-read-header">
              <GardeniaEmblem size={16} className="recent-leaf-icon" />
              {poem.publish_date && (
                <time className="recent-date" dateTime={poem.publish_date}>
                  {poem.publish_date}
                </time>
              )}
            </div>
            <h3 className="recent-title">{poem.name}</h3>
            {poem.intro && <p className="recent-intro">“{poem.intro}”</p>}
            <div className="recent-cue">
              <span>Continue reading</span>
              <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
