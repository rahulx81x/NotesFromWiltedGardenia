import { Link } from "react-router-dom";
import { useReadingHistory } from "../hooks/useReadingHistory";
import { START_HERE_IDS } from "../data/config";

export default function StartHere({ poems = [] }) {
  const { history } = useReadingHistory();

  // Only show for first-time readers with empty history
  if (history && history.length > 0) return null;
  if (!START_HERE_IDS || START_HERE_IDS.length === 0 || !poems || poems.length === 0) return null;

  const resolved = START_HERE_IDS.map((entry, index) => {
    const poem = poems.find((p) => p.id === entry.id) || (index < poems.length ? poems[index] : null);
    if (!poem) return null;
    return {
      poem,
      note: entry.note,
    };
  }).filter(Boolean);

  if (resolved.length === 0) return null;

  return (
    <section className="start-here-section" aria-labelledby="start-here-heading">
      <div className="start-here-card">
        <div className="section-heading-group start-here-header">
          <div>
            <span className="section-eyebrow">First Impressions</span>
            <h2 id="start-here-heading" className="section-title" style={{ fontSize: "1.45rem" }}>
              Start Here: A Recommended Path
            </h2>
          </div>
          <span className="section-meta-hint">Curated initiation for new arrivals</span>
        </div>

        <div className="start-here-list">
          {resolved.map(({ poem, note }, idx) => (
            <Link key={poem.id} to={`/poem/${poem.id}`} className="start-here-item">
              <span className="start-here-num">0{idx + 1}</span>
              <div className="start-here-info">
                <h3 className="start-here-title">{poem.name}</h3>
                {note && <p className="start-here-note">{note}</p>}
              </div>
              <span className="start-here-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
