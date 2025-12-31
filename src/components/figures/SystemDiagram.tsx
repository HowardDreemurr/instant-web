/**
 * Lightweight SVG placeholder (no external libs).
 * Replace later with the official Figure 1 image (put it in /public and use <img/>).
 */
export function SystemDiagram() {
  return (
    <svg viewBox="0 0 960 360" width="100%" height="auto" role="img" aria-label="INSTANT system diagram (simplified)">
      <rect x="0" y="0" width="960" height="360" rx="22" fill="rgba(255,255,255,.72)" stroke="rgba(15,26,20,.12)" />
      <text x="42" y="58" fontSize="20" fontWeight="900" fill="rgba(15,26,20,.92)">Simplified system view</text>

      <rect x="42" y="92" width="250" height="210" rx="18" fill="rgba(47,111,142,.10)" stroke="rgba(15,26,20,.12)" />
      <text x="62" y="126" fontSize="16" fontWeight="900" fill="rgba(15,26,20,.9)">Sensors</text>
      <text x="62" y="154" fontSize="13" fill="rgba(15,26,20,.7)">• heterogeneous monitoring</text>
      <text x="62" y="176" fontSize="13" fill="rgba(15,26,20,.7)">• remote deployment</text>
      <text x="62" y="198" fontSize="13" fill="rgba(15,26,20,.7)">• mission-critical streams</text>

      <rect x="330" y="92" width="300" height="210" rx="18" fill="rgba(31,77,58,.10)" stroke="rgba(15,26,20,.12)" />
      <text x="350" y="126" fontSize="16" fontWeight="900" fill="rgba(15,26,20,.9)">IoT networking</text>
      <text x="350" y="154" fontSize="13" fill="rgba(15,26,20,.7)">• RIS-SWIPT for power + data</text>
      <text x="350" y="176" fontSize="13" fill="rgba(15,26,20,.7)">• ultra-low latency links</text>
      <text x="350" y="198" fontSize="13" fill="rgba(15,26,20,.7)">• reliability / outage control</text>

      <rect x="668" y="92" width="250" height="210" rx="18" fill="rgba(194,112,44,.10)" stroke="rgba(15,26,20,.12)" />
      <text x="688" y="126" fontSize="16" fontWeight="900" fill="rgba(15,26,20,.9)">AI/ML at the edge</text>
      <text x="688" y="154" fontSize="13" fill="rgba(15,26,20,.7)">• knowledge-guided models</text>
      <text x="688" y="176" fontSize="13" fill="rgba(15,26,20,.7)">• explainability + uncertainty</text>
      <text x="688" y="198" fontSize="13" fill="rgba(15,26,20,.7)">• prediction + monitoring</text>

      <line x1="292" y1="197" x2="330" y2="197" stroke="rgba(15,26,20,.35)" strokeWidth="3" />
      <polygon points="330,197 320,191 320,203" fill="rgba(15,26,20,.35)" />
      <line x1="630" y1="197" x2="668" y2="197" stroke="rgba(15,26,20,.35)" strokeWidth="3" />
      <polygon points="668,197 658,191 658,203" fill="rgba(15,26,20,.35)" />

      <text x="42" y="334" fontSize="12" fill="rgba(15,26,20,.58)">
        Replace this SVG with the official Figure 1 image when available.
      </text>
    </svg>
  );
}
