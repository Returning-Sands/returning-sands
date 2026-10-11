/** Perforation seam: a torn dotted line sitting between two sections. */
export function PerfSeam({ dark = false }: { dark?: boolean }) {
  return <div className={`perf-seam ${dark ? "on-dark" : ""}`} aria-hidden />;
}
