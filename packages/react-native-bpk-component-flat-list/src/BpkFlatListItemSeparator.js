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

import { Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import {
  spacingMd,
  spacingBase,
  colorGray100,
} from 'bpk-tokens/tokens/base.react.native';
import { withTheme, grayForTheme, type Theme } from 'react-native-bpk-theming';

import {} from './common-types';
import { themePropType } from './theming';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1, // eslint-disable-line backpack/use-tokens
    backgroundColor: colorGray100,
    ...Platform.select({
      ios: {
        marginLeft: spacingBase,
      },
      android: {
        marginHorizontal: spacingMd,
      },
    }),
  },
});

export type Props = {
  theme: ?Theme,
};

const BpkFlatListItemSeparator = (props: Props) => {
  const { theme } = props;

  const separatorStyle = [styles.separator];

  if (theme) {
    separatorStyle.push({
      backgroundColor: grayForTheme(theme, 'colorGray100'),
    });
  }
  return <View style={separatorStyle} />;
};

BpkFlatListItemSeparator.propTypes = {
  theme: themePropType,
};

BpkFlatListItemSeparator.defaultProps = {
  theme: null,
};

export default withTheme(BpkFlatListItemSeparator);
