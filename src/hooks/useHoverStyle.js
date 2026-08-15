import { useState } from "react";

/** Mirrors the old data-hover shim: merges hoverStyle over baseStyle while active. */
export function useHoverStyle(baseStyle, hoverStyle) {
  const [active, setActive] = useState(false);
  const style = active ? { ...baseStyle, ...hoverStyle } : baseStyle;
  const handlers = {
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    onFocus: () => setActive(true),
    onBlur: () => setActive(false),
  };
  return [style, handlers];
}
