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
import { StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';
import BpkThemeProvider from 'react-native-bpk-theming';

import BpkChip from './BpkChip';

const commonTests = () => {
  const onPress = jest.fn();

  describe('BpkChip', () => {
    it('should render correctly', () => {
      const tree = renderer
        .create(
          <BpkChip
            label="Label"
            accessibilityLabel="Accessibility label"
            onPress={onPress}
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with "selected"', () => {
      const tree = renderer
        .create(
          <BpkChip
            selected
            label="Label"
            accessibilityLabel="Accessibility label"
            onPress={onPress}
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with "disabled"', () => {
      const tree = renderer
        .create(
          <BpkChip
            disabled
            label="Label"
            accessibilityLabel="Accessibility label"
            onPress={onPress}
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with custom style', () => {
      const styles = StyleSheet.create({
        custom: {
          flex: 1,
        },
      });

      const tree = renderer
        .create(
          <BpkChip
            onPress={onPress}
            label="Label"
            accessibilityLabel="Accessibility label"
            style={styles.custom}
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with arbitrary props', () => {
      const tree = renderer
        .create(
          <BpkChip
            onPress={onPress}
            label="Label"
            accessibilityLabel="Accessibility label"
            testID="123" // <- Arbitrary prop.
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should support theming when selected', () => {
      const theme = {
        chipSelectedBackgroundColor: 'red',
        chipSelectedTextColor: 'yellow',
        textFontFamily: 'System',
        colorGray300: '#B3BABD',
        colorGray500: '#657176',
        colorGray700: '#4B5458',
      };
      const tree = renderer
        .create(
          <BpkThemeProvider theme={theme}>
            <BpkChip
              selected
              label="Label"
              accessibilityLabel="Accessibility label"
              onPress={onPress}
            />
          </BpkThemeProvider>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
};
export default commonTests;
