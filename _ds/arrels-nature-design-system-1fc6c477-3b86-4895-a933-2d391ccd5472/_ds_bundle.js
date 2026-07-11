/* @ds-bundle: {"format":4,"namespace":"ArrelsNatureDesignSystem_1fc6c4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"336e00099ddc","components/core/IconButton.jsx":"70e5d71063fb","components/display/Badge.jsx":"fbcbff4ba342","components/display/Card.jsx":"1fc2b8ccd493","components/display/ProgressBar.jsx":"26891516054c","components/display/Stat.jsx":"4366b045a482","components/display/Tag.jsx":"727f1b9c7e2b","components/forms/Checkbox.jsx":"247e82923a50","components/forms/Input.jsx":"2ca792d6f491","components/forms/Select.jsx":"d9f44fd9d80b","components/forms/Switch.jsx":"3cc18b053066","ui_kits/website/SectionsA.jsx":"038c4d69e054","ui_kits/website/SectionsB.jsx":"528366d9a01d","ui_kits/website/SectionsC.jsx":"a1579126f4fa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArrelsNatureDesignSystem_1fc6c4 = window.ArrelsNatureDesignSystem_1fc6c4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Arrels Button — the primary call to action.
 * Warm, pebble-rounded, springy on press. Variants map to the
 * nature palette; primary = leaf green.
 */
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 14,
      gap: 7
    },
    md: {
      padding: '0 20px',
      height: 46,
      fontSize: 15,
      gap: 9
    },
    lg: {
      padding: '0 28px',
      height: 56,
      fontSize: 17,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-green)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--green-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    inverse: {
      background: 'var(--cream-50)',
      color: 'var(--forest-900)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: full ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: '-0.01em',
      lineHeight: 1,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-spring), filter var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square/circular button holding a single icon.
 * Pass an icon element (e.g. Lucide SVG) as children.
 */
function IconButton({
  variant = 'secondary',
  size = 'md',
  round = true,
  disabled = false,
  label,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 44,
    lg: 54
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-green)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--green-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-spring), filter var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label pill. Tone maps to palette + soft fill.
 */
function Badge({
  tone = 'green',
  solid = false,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    green: {
      soft: 'var(--green-100)',
      fg: 'var(--green-700)',
      solid: 'var(--green-500)'
    },
    sky: {
      soft: 'var(--sky-100)',
      fg: 'var(--sky-700)',
      solid: 'var(--sky-500)'
    },
    sun: {
      soft: 'var(--sun-100)',
      fg: 'var(--sun-700)',
      solid: 'var(--sun-500)'
    },
    clay: {
      soft: 'var(--clay-100)',
      fg: 'var(--clay-700)',
      solid: 'var(--clay-500)'
    },
    bloom: {
      soft: 'var(--bloom-100)',
      fg: 'var(--bloom-700)',
      solid: 'var(--bloom-500)'
    },
    neutral: {
      soft: 'var(--stone-200)',
      fg: 'var(--stone-700)',
      solid: 'var(--stone-600)'
    }
  };
  const t = tones[tone] || tones.green;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.solid : t.soft,
      color: solid ? '#fff' : t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft container. Optional accent top-bar, hover lift.
 */
function Card({
  accent = null,
  // 'green' | 'sky' | 'sun' | 'clay' | 'bloom' | null
  interactive = false,
  padding = 'var(--space-6)',
  style = {},
  children,
  ...rest
}) {
  const accentColors = {
    green: 'var(--green-500)',
    sky: 'var(--sky-500)',
    sun: 'var(--sun-500)',
    clay: 'var(--clay-500)',
    bloom: 'var(--bloom-500)',
    moss: 'var(--moss-500)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-normal) var(--ease-out), transform var(--dur-normal) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      background: accentColors[accent] || accent
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — a growing bar for goals (e.g. funds raised, trees to goal).
 * Rounded, leaf-green fill on a sunken track.
 */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'green',
  label,
  showValue = false,
  style = {}
}) {
  const tones = {
    green: 'var(--green-500)',
    sky: 'var(--sky-500)',
    sun: 'var(--sun-500)',
    clay: 'var(--clay-500)',
    bloom: 'var(--bloom-500)'
  };
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      boxShadow: 'var(--shadow-inset)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: tones[tone] || tones.green,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
/**
 * Stat — a big impact number with a mono label. For counters like
 * "trees planted", "volunteers".
 */
function Stat({
  value,
  label,
  tone = 'green',
  align = 'left',
  style = {}
}) {
  const tones = {
    green: 'var(--green-600)',
    sky: 'var(--sky-500)',
    sun: 'var(--sun-700)',
    clay: 'var(--clay-500)',
    bloom: 'var(--bloom-500)',
    ink: 'var(--text-strong)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: tones[tone] || tones.green
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — filter/category chip. Optional removable + selected states.
 * Rounder and lower-key than Badge; sentence case.
 */
function Tag({
  selected = false,
  onRemove,
  iconLeft = null,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--accent-soft)' : 'var(--surface-sunken)',
      color: selected ? 'var(--green-700)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--border-brand)' : 'var(--border)'}`,
      cursor: rest.onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), iconLeft, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      marginRight: -2,
      color: 'inherit',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — custom leaf-green check with a springy tick.
 * Controlled via `checked` + `onChange`, or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: on ? 'var(--accent)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, hint, icon, and error.
 * Sunken well, soft focus ring in leaf green.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  const fid = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring)' : 'var(--shadow-inset)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      width: '100%'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown with a leaf-green focus ring.
 */
function Select({
  label,
  hint,
  size = 'md',
  style = {},
  id,
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  const fid = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 40px 0 14px',
      background: 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring)' : 'var(--shadow-inset)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 13,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — sliding toggle. Green when on. Controlled or uncontrolled.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const dims = {
    sm: {
      w: 38,
      h: 22,
      k: 16
    },
    md: {
      w: 48,
      h: 28,
      k: 22
    }
  };
  const d = dims[size] || dims.md;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: d.w,
      height: d.h,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 0,
      background: on ? 'var(--accent)' : 'var(--stone-300)',
      cursor: 'inherit',
      transition: 'background var(--dur-normal) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (d.h - d.k) / 2,
      left: on ? d.w - d.k - (d.h - d.k) / 2 : (d.h - d.k) / 2,
      width: d.k,
      height: d.k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-normal) var(--ease-spring)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectionsA.jsx
try { (() => {
/* global React */
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Stat,
  ProgressBar
} = window.ArrelsNatureDesignSystem_1fc6c4;

/* ---- tiny inline icons (Lucide-style, 2px stroke) ---- */
const Ico = {
  owl: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.5",
    cy: "10",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13.5c-.8 0-1.4.5-1.4 1.2M12 13.5c.8 0 1.4.5 1.4 1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9a8 8 0 0 1 16 0v3a8 8 0 0 1-16 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 4l2 2M18 4l-2 2"
  })),
  cam: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 10l4.5-2.5v9L15 14"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "6",
    width: "12.5",
    height: "12",
    rx: "2.5"
  })),
  leaf: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6"
  })),
  route: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 19h5a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h1"
  })),
  school: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m4 6 8-4 8 4-8 4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10v6c0 1.5 3.5 3 8 3s8-1.5 8-3v-6"
  })),
  house: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V20h14V9.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20v-5h5v5"
  })),
  users: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 20v-2a4 4 0 0 0-3-3.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.5A4 4 0 0 1 16 11"
  })),
  arrow: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 18,
    height: p.s || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  pin: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 18,
    height: p.s || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.8"
  })),
  play: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 18,
    height: p.s || 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4.5v15l13-7.5Z"
  })),
  live: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 10,
    height: p.s || 10,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7"
  }))
};

/* ---- brand wordmark (type only — no real logo provided) ---- */
function Wordmark({
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: light ? 'var(--green-300)' : 'var(--green-500)'
    }
  }, /*#__PURE__*/React.createElement(Ico.owl, {
    s: 26
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: '-0.03em',
      color: light ? 'var(--cream-50)' : 'var(--text-strong)'
    }
  }, "UrbisAvis ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-500)'
    }
  }, "3C")));
}

/* ============ NAV ============ */
function Nav() {
  const links = ['El projecte', 'Càmeres', 'Participa', 'La ruta', 'Espècies'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(251,250,243,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Veure en directe"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Ico.arrow, {
      s: 15
    })
  }, "Fes-hi un cop de m\xE0"))));
}

/* ============ HERO ============ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'radial-gradient(120% 90% at 80% -10%, var(--forest-700) 0%, var(--forest-900) 55%, #0a1a12 100%)',
      color: 'var(--cream-50)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,.35) 50%, transparent), radial-gradient(1.5px 1.5px at 62% 18%, rgba(255,255,255,.28) 50%, transparent), radial-gradient(1px 1px at 85% 42%, rgba(255,255,255,.3) 50%, transparent), radial-gradient(1px 1px at 42% 62%, rgba(255,255,255,.22) 50%, transparent)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px 110px',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    solid: true
  }, "Ci\xE8ncia ciutadana oberta"), /*#__PURE__*/React.createElement(Badge, {
    tone: "sky"
  }, "La Guixa \xB7 Sentfores \xB7 Vic")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
      lineHeight: 0.98,
      letterSpacing: '-0.035em',
      margin: '0 0 22px'
    }
  }, "La nit dels", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-300)'
    }
  }, "rapinyaires"), " en directe."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.55,
      color: 'rgba(244,242,231,0.82)',
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, "Tres c\xE0meres amb visi\xF3 nocturna segueixen mussols, xots, gamarusos i \xF2libes sense molestar-los \u2014 i converteixen les seves nits en un projecte obert a l'escola i al ve\xEFnat."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Ico.play, {
      s: 16
    })
  }, "Mira les c\xE0meres"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Ico.arrow, null)
  }, "Com participar-hi")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 44,
      marginTop: 48
    }
  }, [['3', 'Càmeres HD nocturnes'], ['6', 'Plafons a la ruta'], ['4', 'Rapinyaires nocturns']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--green-300)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'rgba(244,242,231,0.6)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest-800)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-xl)',
      padding: 14,
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #16311f, #0a1a12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(60% 50% at 50% 45%, rgba(31,168,92,0.16), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(226,101,59,0.9)',
      padding: '4px 9px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.1em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      animation: 'pulse 1.6s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement(Ico.live, null)), " EN DIRECTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgba(255,255,255,.65)'
    }
  }, "IR \xB7 940nm"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--green-300)'
    }
  }, "C\xC0MERA 1 \xB7 Caixa niu \xB7 Mussol com\xFA"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement(Ico.owl, {
    s: 90
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, ['C1', 'C2', 'C3'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '8px 0',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      background: i === 0 ? 'var(--green-600)' : 'rgba(255,255,255,0.06)',
      color: i === 0 ? '#fff' : 'rgba(244,242,231,0.6)'
    }
  }, c))))));
}
Object.assign(window, {
  Ico,
  Wordmark,
  Nav,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectionsA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectionsB.jsx
try { (() => {
/* global React */
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Stat,
  ProgressBar
} = window.ArrelsNatureDesignSystem_1fc6c4;
const Ico = window.Ico;
function Eyebrow({
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: tone || 'var(--text-brand)',
      marginBottom: 14
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  sub,
  tone,
  center
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: center ? 720 : 640,
      margin: center ? '0 auto' : 0,
      textAlign: center ? 'center' : 'left',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: tone
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2rem, 3.6vw, 3rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, sub));
}

/* ============ CAMERAS (the 3C) ============ */
function Cameras() {
  const cams = [{
    n: 'Càmera 1',
    kind: 'Caixa niu · interior',
    species: 'Mussol comú · Xot',
    desc: 'Cicle de reproducció, èxit de la niuada i patró d\'activitat nocturna.',
    tone: 'green',
    tag: 'IR macro'
  }, {
    n: 'Càmera 2',
    kind: 'Caixa / teula niu',
    species: 'Gamarús · Òliba',
    desc: 'Hàbits de nidificació i fidelitat al niu d\'espècies sensibles a la pertorbació.',
    tone: 'sky',
    tag: 'IP66 exterior'
  }, {
    n: 'Càmera 3',
    kind: 'Camp obert · La Guixa',
    species: 'Caça nocturna + diürns',
    desc: 'Activitat de caça sobre el marge agrícola i ús diürn de mallerengues i falciots.',
    tone: 'sun',
    tag: '4K PoE · IR'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-canvas)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "El sistema \xB7 3 c\xE0meres",
    title: "Tres punts de vista sobre la mateixa nit",
    sub: "Un sistema tancat de tres c\xE0meres HD amb visi\xF3 nocturna, connectat a un mini-NVR de codi obert amb detecci\xF3 de moviment per IA."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, cams.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.n,
    accent: c.tone,
    interactive: true,
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'linear-gradient(160deg, var(--forest-700), var(--forest-900))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement(Ico.owl, {
    s: 72
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(226,101,59,0.92)',
      color: '#fff',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.1em'
    }
  }, /*#__PURE__*/React.createElement(Ico.live, {
    s: 8
  }), " LIVE"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'rgba(255,255,255,0.55)'
    }
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, c.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, c.kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-brand)',
      fontSize: 15,
      marginBottom: 8
    }
  }, c.species), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, c.desc)))))));
}

/* ============ PARTICIPATE (3 roles) ============ */
function Participate() {
  const roles = [{
    icon: 'house',
    tone: 'green',
    who: 'CCVIC La Guixa',
    role: 'Hub de control i difusió',
    pts: ['Pantalla al vestíbul amb l\'streaming en directe', 'Tallers de construcció de caixes niu', 'Exposició final del projecte']
  }, {
    icon: 'school',
    tone: 'sun',
    who: 'Escola Sentfores',
    role: 'Aprenentatge per projectes',
    pts: ['Cada curs apadrina una caixa niu', 'Sortides de recollida de dades', 'Ocells dels Jardins (ICO · Escoles Verdes)']
  }, {
    icon: 'users',
    tone: 'sky',
    who: 'Associació de Veïns',
    role: 'Connexió i logística',
    pts: ['Disseny de la ruta del poble', 'Manteniment lleuger i difusió local', 'Inauguració i actes comunitaris']
  }];
  const toneVar = {
    green: 'var(--green-500)',
    sun: 'var(--sun-500)',
    sky: 'var(--sky-500)'
  };
  const toneSoft = {
    green: 'var(--green-100)',
    sun: 'var(--sun-100)',
    sky: 'var(--sky-100)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: true,
    eyebrow: "Ci\xE8ncia ciutadana oberta",
    title: "Tres comunitats, un mateix protocol",
    sub: "El projecte es dissenya perqu\xE8 el centre c\xEDvic, l'escola i el ve\xEFnat hi participin amb rols diferenciats \u2014 mantenint sempre el protocol \xE8tic de no-intervenci\xF3."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, roles.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.who,
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-lg)',
      background: toneSoft[r.tone],
      color: toneVar[r.tone],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, Ico[r.icon]({
    s: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 3px'
    }
  }, r.who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, r.role), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, r.pts.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15,
      lineHeight: 1.45,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: toneVar[r.tone],
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Ico.leaf, {
    s: 16
  })), p))))))));
}
Object.assign(window, {
  Eyebrow,
  SectionHead,
  Cameras,
  Participate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectionsB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectionsC.jsx
try { (() => {
/* global React */
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Stat,
  ProgressBar
} = window.ArrelsNatureDesignSystem_1fc6c4;
const Ico = window.Ico;
const SectionHead = window.SectionHead;

/* ============ TRAIL + SPECIES ============ */
function Trail() {
  const panels = [{
    n: '0',
    t: 'Inici de ruta',
    d: 'Mapa general, durada, distància i normes de respecte a la fauna.'
  }, {
    n: '1',
    t: 'El projecte UrbisAvis 3C',
    d: 'Connexió amb la Reserva de Rapinyaires Nocturns de la Plana de Vic.'
  }, {
    n: '2',
    t: 'Mussol comú i xot',
    d: 'Vida a la caixa niu i per què són bioindicadors dels camps.'
  }, {
    n: '3',
    t: 'Gamarús i òliba',
    d: 'Els caçadors silenciosos de la nit.'
  }, {
    n: '4',
    t: 'Mallerenga i falciot',
    d: 'La vida diürna que comparteix el mateix territori.'
  }, {
    n: '5',
    t: 'Com participar-hi',
    d: 'Codi QR amb clips en directe i com aportar observacions.'
  }];
  const [active, setActive] = React.useState('active');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-canvas)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "La ruta interpretativa",
    title: "Sis plafons, un itinerari a peu",
    sub: "Una infraestructura f\xEDsica i permanent de divulgaci\xF3 que uneix els tres punts d'observaci\xF3. Resina fen\xF2lica i alumini compost, pensats per durar."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true,
    iconLeft: /*#__PURE__*/React.createElement(Ico.route, {
      s: 15
    })
  }, "Accessible a peu"), /*#__PURE__*/React.createElement(Tag, {
    iconLeft: /*#__PURE__*/React.createElement(Ico.pin, {
      s: 15
    })
  }, "3 punts d'observaci\xF3"), /*#__PURE__*/React.createElement(Tag, null, "Codi QR \xB7 xeno-canto")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Ico.arrow, null)
  }, "Descarrega el mapa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, panels.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      padding: '18px 20px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19
    }
  }, p.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-strong)',
      marginBottom: 3
    }
  }, "Plaf\xF3 ", p.n, " \u2014 ", p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, p.d))))))));
}

/* ============ SPECIES (owls, the core) ============ */
function Species() {
  const owls = [{
    ca: 'Xot',
    sci: 'Otus scops',
    hole: '60 mm'
  }, {
    ca: 'Mussol comú',
    sci: 'Athene noctua',
    hole: '70 mm'
  }, {
    ca: 'Gamarús',
    sci: 'Strix aluco',
    hole: '120 mm'
  }, {
    ca: 'Òliba',
    sci: 'Tyto alba',
    hole: '~150×200 mm'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--forest-900)',
      color: 'var(--cream-50)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--green-300)',
      marginBottom: 14
    }
  }, "L'eix del projecte \xB7 Rapinyaires nocturns"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2rem,3.6vw,3rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.03em',
      margin: '0 0 16px'
    }
  }, "Quatre ca\xE7adors de la nit"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'rgba(244,242,231,0.72)',
      margin: 0
    }
  }, "Les esp\xE8cies priorit\xE0ries del programa RAPNOCAT i de la Reserva de Rapinyaires Nocturns de la Plana de Vic \u2014 les m\xE9s amena\xE7ades dels ambients agr\xEDcoles.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, owls.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.sci,
    style: {
      background: 'var(--forest-800)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: 'radial-gradient(70% 60% at 50% 40%, rgba(31,168,92,0.16), transparent), linear-gradient(160deg,#16311f,#0a1a12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(111,208,150,0.35)'
    }
  }, /*#__PURE__*/React.createElement(Ico.owl, {
    s: 64
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.02em'
    }
  }, o.ca), /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--green-300)',
      marginBottom: 12
    }
  }, o.sci), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(244,242,231,0.6)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Forat niu"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sun-300)'
    }
  }, o.hole))))))));
}

/* ============ SUPPORT / FUNDING ============ */
function Support() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-brand)',
      marginBottom: 14
    }
  }, "Fes-ho possible"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2rem,3.6vw,2.9rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "5.038 \u20AC per encendre les c\xE0meres"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '0 0 26px'
    }
  }, "Material, instal\xB7laci\xF3, els sis plafons i els tallers de caixes niu. Cada aportaci\xF3 ens acosta a una nit sencera de dades obertes per a tothom."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Ico.arrow, null)
  }, "Aporta al crowdfunding"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "Descarrega el dossier"))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 3260,
    max: 5038,
    tone: "green",
    label: "Recaptat fins ara",
    showValue: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "3.260 \u20AC",
    label: "De 5.038 \u20AC",
    tone: "green"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "84",
    label: "Padrins i padrines",
    tone: "sky"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "18",
    label: "Dies restants",
    tone: "clay"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      paddingTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [['Apadrina una caixa niu', '25 €'], ['Un tram de la ruta', '80 €'], ['Un plafó informatiu', '185 €']].map(([t, p]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    solid: true
  }, p)))))))));
}

/* ============ FOOTER ============ */
function Footer() {
  const cols = [{
    h: 'El projecte',
    links: ['Resum executiu', 'Objectius', 'Protocol ètic', 'Pressupost']
  }, {
    h: 'Participa',
    links: ['Càmeres en directe', 'Apadrina un niu', 'Tallers CCVIC', 'La ruta']
  }, {
    h: 'Amb el suport de',
    links: ['GNO-ICHN · RAPNOCAT', 'Escola Sentfores', 'CCVIC La Guixa', 'Ajuntament de Vic']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--forest-900)',
      color: 'var(--cream-50)',
      padding: '64px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-300)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Ico.owl, {
    s: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-0.03em'
    }
  }, "UrbisAvis ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-300)'
    }
  }, "3C"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'rgba(244,242,231,0.6)',
      maxWidth: 260,
      margin: 0
    }
  }, "Monitoratge dels rapinyaires nocturns i l'avifauna de proximitat. La Guixa \xB7 Sentfores, Vic.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--green-300)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14.5,
      color: 'rgba(244,242,231,0.72)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(244,242,231,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Ci\xE8ncia ciutadana oberta \xB7 Dades sense \xFAs comercial"), /*#__PURE__*/React.createElement("span", null, "Cants dels ocells: xeno-canto.org"))));
}
Object.assign(window, {
  Trail,
  Species,
  Support,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectionsC.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
