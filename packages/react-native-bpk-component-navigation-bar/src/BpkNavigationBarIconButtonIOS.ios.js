/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
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

/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import BpkIcon, { icons } from 'react-native-bpk-component-icon';
import { withTheme, grayForTheme, type Theme } from 'react-native-bpk-theming';

export type Props = {
  title: string,
  icon: $Keys<typeof icons>,
  disabled: boolean,
  onPress: ?() => mixed,
  theme: ?Theme,

  // Internal only
  leading: boolean,
  tintColor: ?string,
  disabledTintColor: ?string,
};

const styles = StyleSheet.create({
  button: {
    zIndex: 2,
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    lineHeight: 28,
    fontSize: 28,
  },
  leading: {
    marginStart: 3, // eslint-disable-line backpack/use-tokens
  },
  trailing: {
    marginEnd: 3, // eslint-disable-line backpack/use-tokens
  },
});

const BpkNavigationBarIconButtonIOS = (props: Props) => {
  const {
    title,
    disabled,
    icon,
    leading,
    onPress,
    disabledTintColor,
    tintColor,
    theme,
  } = props;
  const gray300 = grayForTheme(theme, 'colorGray300');
  const gray700 = grayForTheme(theme, 'colorGray700');
  const tintColorFinal = disabled
    ? disabledTintColor || gray300
    : tintColor || gray700;
  const iconStyle = [styles.icon, { color: tintColorFinal }];
  const buttonStyle = [styles.button];
  const accessibilityTraits = ['button'];

  if (disabled) {
    accessibilityTraits.push('disabled');
  }

  if (leading) {
    buttonStyle.push(styles.leading);
  } else {
    buttonStyle.push(styles.trailing);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityComponentType="button"
      accessibilityTraits={accessibilityTraits}
      accessibilityLabel={title}
      accessible
      style={buttonStyle}
      disabled={disabled}
    >
      <BpkIcon icon={icons[icon]} style={iconStyle} />
    </TouchableOpacity>
  );
};

BpkNavigationBarIconButtonIOS.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,

  // Internal only
  leading: PropTypes.bool,
  tintColor: PropTypes.string,
  disabledTintColor: PropTypes.string,
};

BpkNavigationBarIconButtonIOS.defaultProps = {
  disabled: false,
  onPress: null,
  theme: null,

  // Internal only
  leading: false,
  tintColor: null,
  disabledTintColor: null,
};

export default withTheme(BpkNavigationBarIconButtonIOS);
