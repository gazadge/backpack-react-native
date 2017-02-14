import TOKENS from 'bpk-tokens/tokens/base.common';

const remToPx = (value) => {
  let parsed = null;

  if (/rem$/.test(value)) {
    parsed = parseFloat(value.replace(/rem/, '')) * 16;
  }

  return parsed || null;
};

export const getCalendarGridWidth = () => 7 * (
  remToPx(TOKENS.calendarDaySize) + remToPx(TOKENS.calendarDaySpacing)
);

export const getTransformStyles = (transformValue) => {
  const transform = `translateX(${transformValue}px)`;
  return {
    transform,
    msTransform: transform,
    MozTransform: transform,
    WebkitTransform: transform,
  };
};
