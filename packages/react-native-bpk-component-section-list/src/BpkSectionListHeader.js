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
import PropTypes from 'prop-types';
import BpkText, { WEIGHT_STYLES } from 'react-native-bpk-component-text';
import {
  spacingSm,
  spacingBase,
  colorGray50,
  colorGray100,
  colorGray500,
  colorGray700,
} from 'bpk-tokens/tokens/base.react.native';
import { withTheme, type Theme } from 'react-native-bpk-theming';

const ANDROID_LIST_ITEM_HEIGHT = 48;

const styles = StyleSheet.create({
  outer: {
    paddingHorizontal: spacingBase,
    ...Platform.select({
      ios: {
        backgroundColor: colorGray50,
        paddingVertical: spacingSm,
      },
      android: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopColor: colorGray100,
        borderTopWidth: 1, // eslint-disable-line backpack/use-tokens
        flexDirection: 'row',
        height: ANDROID_LIST_ITEM_HEIGHT,
      },
    }),
  },
  text: {
    color: Platform.OS === 'android' ? colorGray500 : colorGray700,
  },
});

export type Props = {
  title: string,
  theme: ?Theme,
};

const BpkSectionHeader = (props: Props) => {
  const { title, theme } = props;
  const outerStyles = [styles.outer];
  const textStyles = [styles.text];
  if (theme) {
    if (Platform.OS === 'ios') {
      outerStyles.push({
        backgroundColor: theme.colorGray50 ? theme.colorGray50 : colorGray50,
      });
      textStyles.push({
        color: theme.colorGray700 ? theme.colorGray700 : colorGray700,
      });
    } else {
      outerStyles.push({
        backgroundColor: theme.colorGray100 ? theme.colorGray100 : colorGray100,
      });
      textStyles.push({
        color: theme.colorGray500 ? theme.colorGray500 : colorGray500,
      });
    }
  }
  return (
    <View style={styles.outer}>
      <BpkText
        weight={WEIGHT_STYLES.emphasized}
        textStyle={Platform.OS === 'android' ? 'sm' : 'base'}
        style={styles.text}
      >
        {title}
      </BpkText>
    </View>
  );
};

BpkSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

BpkSectionHeader.defaultProps = {
  theme: null,
};

export default withTheme(BpkSectionHeader);
