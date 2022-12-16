export const sizes = {
  xs: '600px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xg: '1440px'
};

export const up = (breakpoint: string): string => {
  return `(min-width: calc(${breakpoint} + 1px))`;
};

export const down = (breakpoint: string): string => {
  return `(max-width: ${breakpoint})`;
};

export const between = (minBreakpoint: string, maxBreakpoint: string): string => {
  return `(min-width: calc(${minBreakpoint} + 1px)) and (max-width: ${maxBreakpoint})`;
};
