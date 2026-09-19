import { Link } from "react-router-dom";
import { usePoems } from "../data/usePoems";
import { useAnthologies } from "../data/useAnthologies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import NoteCard from "../components/NoteCard";
import AnthologyCard from "../components/AnthologyCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import PetalDivider from "../components/PetalDivider";
import GardeniaEmblem from "../components/GardeniaEmblem";

export default function Home() {
  useDocumentTitle();
  const { poems, loading: poemsLoading, error: poemsError, isUsingFallback: poemsFallback } = usePoems();
  const { anthologies, loading: anthologiesLoading } = useAnthologies();

  const recentPoems = poems.slice(0, 4);
  const featuredAnthology = anthologies && anthologies.length > 0 ? anthologies[0] : null;

  return (
    <div className="page-enter">
      {/* Fallback Notice if using placeholders */}
      {poemsFallback && (
        <div className="fallback-notice">
          <span>
            Displaying sample archive pieces. To link your Google Sheet, paste your CSV link into <code>src/data/config.js</code>.
          </span>
        </div>
      )}

      {/* Atmospheric Prologue / Epigraph */}
      <section className="epigraph-banner" aria-label="Epigraph">
        <div className="epigraph-ornament">
          <GardeniaEmblem size={22} />
        </div>
        <blockquote className="epigraph-text">
          “A petal pressed into parchment does not preserve the flower; it only marks where silence once bloomed.”
        </blockquote>
        <div className="epigraph-meta">
          <span>From the Editor’s Desk · Notes between Midnight & Dawn</span>
        </div>
      </section>

      {/* Latest Notes Section */}
      <section aria-labelledby="latest-notes-heading">
        <div className="section-heading-group">
          <div>
            <span className="section-eyebrow">Digital Archive</span>
            <h2 id="latest-notes-heading" className="section-title">
              Recent Standalone Notes
            </h2>
          </div>
          <Link to="/archive" className="section-link">
            <span>Explore all {poems.length ? `(${poems.length})` : ""}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {poemsLoading ? (
          <LoadingState count={3} />
        ) : poemsError && poems.length === 0 ? (
          <ErrorState message={poemsError} />
        ) : recentPoems.length === 0 ? (
          <p className="empty-results">No entries recorded yet.</p>
        ) : (
          <div className="recent-notes-list">
            {recentPoems.map((poem, index) => (
              <NoteCard key={poem.id} poem={poem} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* Ornamental Section Divider */}
      <PetalDivider className="home-section-divider" />

      {/* Featured Anthology Anchor */}
      {anthologiesLoading ? (
        <LoadingState count={1} />
      ) : featuredAnthology ? (
        <section className="anthology-shelf-section" aria-labelledby="anthology-anchor-heading">
          <div className="section-heading-group">
            <div>
              <span className="section-eyebrow">Curated Collections</span>
              <h2 id="anthology-anchor-heading" className="section-title">
                Featured Bound Volume
              </h2>
            </div>
            <Link to="/anthologies" className="section-link">
              <span>View All Volumes</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <AnthologyCard anthology={featuredAnthology} featured={true} />
        </section>
      ) : null}

      {/* Direct link to Archive bottom banner */}
      <section className="archive-callout-banner">
        <div className="callout-content">
          <h3 className="callout-title">The Complete Archive</h3>
          <p className="callout-text">
            Search chronologically through past seasons, dated fragments, and late-night leaves.
          </p>
          <Link to="/archive" className="callout-button">
            <span>Browse Full Index</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
