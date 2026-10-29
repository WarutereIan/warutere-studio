// The brand's core visual idea: a loose idea becoming a structured plan,
// components connecting into a system, and the work arriving at an outcome.
export function ProgressGraphic() {
  const loose = [
    [38, 70], [70, 40], [58, 120], [96, 96], [30, 160], [84, 168],
  ];
  const grid = [
    [180, 60], [180, 120], [180, 180], [240, 60], [240, 120], [240, 180],
  ];
  return (
    <svg className="progress-graphic" viewBox="0 0 420 240" role="img" aria-label="Scattered ideas becoming a connected system and arriving at an outcome">
      <g className="pg-loose">
        {loose.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 6 : 9} />
        ))}
      </g>
      <g className="pg-lines">
        {grid.slice(0, 3).map(([x, y], i) => (
          <line key={`h${i}`} x1={x} y1={y} x2={x + 60} y2={y} />
        ))}
        <line x1={180} y1={60} x2={180} y2={180} />
        <line x1={240} y1={60} x2={240} y2={180} />
        <path d="M240 120 C 290 120, 300 120, 352 120" className="pg-path" />
      </g>
      <g className="pg-grid">
        {grid.map(([x, y], i) => (
          <rect key={i} x={x - 11} y={y - 11} width={22} height={22} rx={5} />
        ))}
      </g>
      <circle className="pg-goal-ring" cx={370} cy={120} r={30} />
      <circle className="pg-goal" cx={370} cy={120} r={16} />
      <text className="pg-label" x={63} y={226}>idea</text>
      <text className="pg-label" x={210} y={226}>system</text>
      <text className="pg-label" x={370} y={226}>result</text>
    </svg>
  );
}
