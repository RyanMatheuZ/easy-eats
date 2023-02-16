import type { Breakpoint as Devices } from '@mui/material';

type Breakpoint = number | Devices;

export const sizes = {
  // Values in pixels
  mobile: 768,
  tablet: 992,
  laptop: 1200,
  desktop: 1440
};

const resolveBreakpoint = (breakpoint: Breakpoint): number => {
  return (typeof breakpoint === 'number') ? breakpoint : sizes[breakpoint];
};

export const down = (breakpoint: Breakpoint): string => {
  const size = resolveBreakpoint(breakpoint);
  return `(max-width: ${size}px)`;
};

export const up = (breakpoint: Breakpoint): string => {
  const size = resolveBreakpoint(breakpoint);
  return `(min-width: ${size}px)`;
};

export const between = (startBreakpoint: Breakpoint, endBreakpoint: Breakpoint): string => {
  const startSize = resolveBreakpoint(startBreakpoint);
  const endSize = resolveBreakpoint(endBreakpoint);
  return `(min-width: ${startSize}px) and (max-width: ${endSize}px)`;
};
