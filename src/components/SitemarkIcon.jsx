import * as React from 'react';
import { useTheme } from '@mui/material/styles';

// ─────────────────────────────────────────────────────────────────────────────
//  Chosen Technologies — Logo Component
//
//  Icon mark: the original three-part geometric symbol is preserved but
//  recoloured to a refined midnight-blue / electric-cyan / slate palette.
//  The grey shard is reinterpreted as a "chosen" checkmark accent.
//
//  Wordmark: "chosen" in a tight, confident weight + "technologies" as a
//  lightweight caption underneath — a stacked lockup with a modern editorial feel.
// ─────────────────────────────────────────────────────────────────────────────

export default function ChosenTechLogo({ width = 260, variant = 'full' }) {
  const theme = useTheme();
  const isDark = (theme.vars || theme).palette.mode === 'dark';

  // Colour tokens
  const C = {
    primary:   '#0B1F3A',   // deep midnight navy  — main brand
    cyan:      '#00D3AB',   // electric teal        — kept from original (great brand energy)
    accent:    '#2563EB',   // refined electric blue — replaces original #4876EF, more saturated
    slate:     '#8EA5C8',   // cool slate           — icon's neutral shard
    wordmark:  isDark ? '#E6EEF8' : '#0B1F3A',
    sub:       isDark ? '#9CC6FF' : '#2563EB',
  };

  // The icon's intrinsic viewBox is 0 0 22 19 (approx bounding of the three paths)
  // We embed it at a fixed 42×36 block, then place the wordmark to its right.

  if (variant === 'icon') {
    return (
      <svg width={42} height={36} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Chosen Technologies icon">
        <IconPaths C={C} />
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <svg width={140} height={70} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Chosen Technologies">
        {/* Icon centred at top */}
        <g transform="translate(49, 2) scale(1.85)">
          <IconPaths C={C} />
        </g>
        {/* CHOSEN */}
        <text
          x="70" y="52"
          textAnchor="middle"
          fontFamily="'Georgia', 'Cambria', serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="3"
          fill={C.wordmark}
        >
          CHOSEN
        </text>
      </svg>
    );
  }

  // Default: horizontal full lockup
  return (
    <svg
      width={width}
      height={40}
      viewBox="0 0 260 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chosen Technologies"
    >
      {/* ── Icon mark ── vertically centred in the 40px row */}
      <g transform="translate(0, 1) scale(2.1)">
        <IconPaths C={C} />
      </g>
    </svg>
  );
}

// ─── Shared icon path group ───────────────────────────────────────────────────
// Original paths normalised; colours swapped to new palette.
// Grey shard → slate (more refined neutral)
// Teal shard → kept (it's a great energy for "chosen/selected")
// Blue shard → deeper accent blue

function IconPaths({ C }) {
  return (
    <>
      {/* Shard 1 — slate (was grey #B4C0D3) — "unchosen" context / ground */}
      <path
        fill={C.slate}
        d="m.787 12.567 6.055-2.675 3.485 2.006.704 6.583-4.295-.035.634-4.577-.74-.422-3.625 2.817-2.218-3.697Z"
      />
      {/* Shard 2 — electric teal (kept) — the "chosen" moment, forward energy */}
      <path
        fill={C.cyan}
        d="m10.714 11.616 5.352 3.908 2.112-3.767-4.295-1.725v-.845l4.295-1.76-2.112-3.732-5.352 3.908v4.013Z"
      />
      {/* Shard 3 — deep accent blue (was #4876EF) — precision, technology */}
      <path
        fill={C.accent}
        d="m10.327 7.286.704-6.583-4.295.07.634 4.577-.74.422-3.66-2.816L.786 6.617l6.055 2.676 3.485-2.007Z"
      />
    </>
  );
}