import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import GardeniaEmblem from "../components/GardeniaEmblem";
import PetalDivider from "../components/PetalDivider";

export default function Colophon() {
  useDocumentTitle("Colophon & Curator's Note");
  return (
    <article className="page-enter colophon-page">
      <header className="colophon-header">
        <div className="archive-header-badge">
          <GardeniaEmblem size={28} />
          <span>Colophon & Curator's Note</span>
        </div>
        <h1 className="colophon-title">On Preserving What Withers</h1>
        <p className="colophon-subtitle">
          Archival curation, assembly, and digital craftsmanship by <strong>Rahul Gouri</strong>.
        </p>
      </header>

      {/* Curator's Note Section */}
      <section className="colophon-section" aria-labelledby="curators-note-heading">
        <h2 id="curators-note-heading" className="colophon-section-title">
          Curator’s Note: The Silence of Things Left Unsaid
        </h2>
        <div className="colophon-body">
          <p>
            This archive was conceived not as a closed collection or a personal portfolio, but as a living
            digital herbarium—a quiet resting place for solitary fragments, late-hour drafts, and verses
            too delicate or bruised to survive ordinary conversation.
          </p>
          <p>
            A fresh gardenia possesses an intoxicating, imperious perfume, yet its petals are
            notoriously fragile; touch them with even the gentlest pressure, and within hours they
            turn amber and brown. In many ways, certain human affections and regrets share this
            exact anatomy. They are marked by where silence touched them.
          </p>
          <p>
            Rather than forcing these pieces into rigid chapters, each entry is preserved as an
            isolated leaf—dated, given its own room to breathe, open to solitary voices and other
            contributed leaves, and left open to the weather of the reader’s attention.
          </p>
        </div>
      </section>

      <PetalDivider className="colophon-divider" />

      {/* Developer's & Technical Note Section */}
      <section className="colophon-section" aria-labelledby="dev-note-heading">
        <h2 id="dev-note-heading" className="colophon-section-title">
          Developer’s Note: The Digital Craft
        </h2>
        <div className="colophon-body">
          <p>
            Assembled and engineered by <strong>Rahul Gouri</strong>, the technical architecture of{" "}
            <em>Notes from a Wilted Gardenia</em> was designed around a single guiding premise:{" "}
            <strong>the web interface must defer entirely to the verse</strong>.
          </p>

          <div className="colophon-specs-grid">
            <div className="spec-card">
              <h3 className="spec-label">Curator & Assembler</h3>
              <p className="spec-value">Rahul Gouri</p>
              <span className="spec-desc">
                Archival assembler, curator, and software architect responsible for collecting the leaves, assembling thematic cycles, and engineering the digital experience.
              </span>
            </div>

            <div className="spec-card">
              <h3 className="spec-label">Source of Truth</h3>
              <p className="spec-value">Living Google Sheets workbook</p>
              <span className="spec-desc">
                Decoupled headless data pipeline published via web CSV endpoints with <code>author</code> and poem properties, supporting multiple contributors ingested dynamically at runtime.
              </span>
            </div>

            <div className="spec-card">
              <h3 className="spec-label">Typographic Fidelity</h3>
              <p className="spec-value">CSS <code>white-space: pre-wrap</code></p>
              <span className="spec-desc">
                Stanza breaks, intentional indentations, and line intervals are honored with absolute typographic fidelity at a 1.9 line-height ratio.
              </span>
            </div>

            <div className="spec-card">
              <h3 className="spec-label">Atmosphere & Physics</h3>
              <p className="spec-value">HTML5 Canvas & Vector Motifs</p>
              <span className="spec-desc">
                A sparse 60fps canvas engine simulates 3D tumbling gardenia petals, framed by antique botanical engraving watermarks and bruised paper drop shadows.
              </span>
            </div>
          </div>
        </div>
      </section>

      <PetalDivider className="colophon-divider" />

      {/* Epilogue / Sign-off */}
      <section className="colophon-epilogue">
        <blockquote className="colophon-quote">
          “May these leaves keep company with whoever wanders here after midnight.”
        </blockquote>
        <div className="colophon-sig">
          <span className="sig-author-name">Rahul Gouri</span>
          <span className="sig-role">Curator, Archival Assembler & Software Architect</span>
          <span className="sig-date">Autumn 2026</span>
        </div>

        <div className="colophon-return">
          <Link to="/" className="colophon-back-link">
            <span>← Return to Archive</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
