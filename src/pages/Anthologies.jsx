import { useAnthologies } from "../data/useAnthologies";
import AnthologyCard from "../components/AnthologyCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import GardeniaEmblem from "../components/GardeniaEmblem";
import PetalDivider from "../components/PetalDivider";

export default function Anthologies() {
  const { anthologies, loading, error, isUsingFallback } = useAnthologies();

  return (
    <div className="page-enter">
      <header className="anthologies-page-header">
        <div className="archive-header-badge">
          <GardeniaEmblem size={24} />
          <span>Long-Form Cycles</span>
        </div>
        <h2 className="anthologies-page-title">Curated Anthologies</h2>
        <p className="anthologies-page-desc">
          Thematic volumes, longer cycles, and bound collections assembled across solitary seasons.
        </p>
      </header>

      {isUsingFallback && (
        <div className="fallback-notice">
          <span>Displaying sample anthologies. Connect your live Google Sheet CSV in <code>src/data/config.js</code>.</span>
        </div>
      )}

      {loading ? (
        <LoadingState count={2} />
      ) : error && anthologies.length === 0 ? (
        <ErrorState message={error} />
      ) : anthologies.length === 0 ? (
        <p className="empty-results">No anthologies published yet.</p>
      ) : (
        <div className="anthologies-grid">
          {anthologies.map((anthology) => (
            <AnthologyCard key={anthology.id} anthology={anthology} />
          ))}
        </div>
      )}

      <PetalDivider className="anthologies-terminal-divider" />
    </div>
  );
}
