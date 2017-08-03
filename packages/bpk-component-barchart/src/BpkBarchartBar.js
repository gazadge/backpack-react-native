/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import { borderRadiusXs } from 'bpk-tokens/tokens/base.es6';
import { remToPx } from './utils';

import STYLES from './bpk-barchart-bar.scss';

const getClassName = cssModules(STYLES);

const KEYCODES = {
  ENTER: 13,
  SPACEBAR: 32,
};

const handleKeyboardEvent = callback => (event) => {
  if (event.keyCode === KEYCODES.ENTER || event.keyCode === KEYCODES.SPACEBAR) {
    event.preventDefault();
    callback(event);
  }
};

const borderRadius = remToPx(borderRadiusXs);

const BpkBarchartBar = (props) => {
  const {
    x,
    y,
    width,
    height,
    className,
    label,
    onClick,
    outlier,
    selected,
    ...rest
  } = props;

  const classNames = [getClassName('bpk-barchart__bar')];
  if (className) { classNames.push(className); }
  if (outlier) { classNames.push(getClassName('bpk-barchart__bar--outlier')); }
  if (selected) { classNames.push(getClassName('bpk-barchart__bar--selected')); }
  if (onClick) { classNames.push(getClassName('bpk-barchart__bar--interactive')); }

  const isAriaPressed = !!(onClick && selected);

  return (
    <g className={getClassName('bpk-barchart__bar-group')}>
      <title>{label}</title>
      <rect
        className={classNames.join(' ')}
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
        onClick={onClick || undefined}
        onKeyDown={onClick ? handleKeyboardEvent(onClick) : undefined}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? 'button' : undefined}
        aria-pressed={isAriaPressed}
        aria-label={label}
        {...rest}
      />
    </g>
  );
};

BpkBarchartBar.propTypes = {
  height: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  outlier: PropTypes.bool,
  selected: PropTypes.bool,
};

BpkBarchartBar.defaultProps = {
  className: null,
  onClick: null,
  outlier: false,
  selected: false,
};

export default BpkBarchartBar;