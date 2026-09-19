import { useMemo } from "react";
import { Link } from "react-router-dom";
import GardeniaEmblem from "./GardeniaEmblem";

function parseDate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return null;
  const parts = dateStr.trim().split("-");
  if (parts.length >= 3) {
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (!isNaN(month) && !isNaN(day)) {
      return { year, month, day };
    }
  }
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return {
      year: d.getFullYear().toString(),
      month: d.getMonth() + 1,
      day: d.getDate(),
    };
  }
  return null;
}

export default function OnThisDay({ poems = [] }) {
  const match = useMemo(() => {
    if (!poems || poems.length === 0) return null;
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentDay = now.getDate();

    const matches = poems.filter((p) => {
      const parsed = parseDate(p.publish_date);
      return parsed && parsed.month === currentMonth && parsed.day === currentDay;
    });

    if (matches.length === 0) return null;

    // Pick most recent year
    matches.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
    return matches[0];
  }, [poems]);

  if (!match) return null;

  const parsed = parseDate(match.publish_date);
  const year = parsed ? parsed.year : "";

  return (
    <section className="on-this-day-banner" aria-label="On this day memory">
      <div className="on-this-day-card">
        <div className="on-this-day-badge">
          <GardeniaEmblem size={18} />
          <span>Anniversary Leaf</span>
        </div>
        <div className="on-this-day-content">
          <p className="on-this-day-prompt">
            On this day {year ? `in ${year}` : "in seasons past"}, a note was inscribed:
          </p>
          <h3 className="on-this-day-title">
            <Link to={`/poem/${match.id}`}>{match.name}</Link>
          </h3>
          {match.intro && <p className="on-this-day-intro">“{match.intro}”</p>}
        </div>
        <div className="on-this-day-action">
          <Link to={`/poem/${match.id}`} className="on-this-day-link">
            <span>Revisit Note</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
