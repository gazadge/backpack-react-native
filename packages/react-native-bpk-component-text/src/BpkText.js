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
import {
  colorGray700,
  fontFamily,
  fontFamilyEmphasize,
  fontFamilyHeavy,
  textEmphasizedFontWeight,
  textHeavyFontWeight,
  textCapsLetterSpacing,
  textCapsFontSize,
  textCapsFontWeight,
  textXsLetterSpacing,
  textXsFontSize,
  textXsFontWeight,
  textSmLetterSpacing,
  textSmFontSize,
  textSmFontWeight,
  textBaseLetterSpacing,
  textBaseFontSize,
  textBaseFontWeight,
  textLgLetterSpacing,
  textLgFontSize,
  textLgFontWeight,
  textXlLetterSpacing,
  textXlFontSize,
  textXlFontWeight,
  textXxlLetterSpacing,
  textXxlFontSize,
  textXxlFontWeight,
  textXxxlLetterSpacing,
  textXxxlFontSize,
  textXxxlFontWeight,
} from 'bpk-tokens/tokens/base.react.native';
import { Text, Platform, StyleSheet } from 'react-native';
import { getThemeAttributes, withTheme } from 'react-native-bpk-theming';

import {
  REQUIRED_THEME_ATTRIBUTES,
  OPTIONAL_THEME_ATTRIBUTES,
} from './theming';
import { shouldApplyFontWeightFix } from './font-weight-fix';
import {
  propTypes,
  defaultProps,
  type Props,
  WEIGHT_STYLES,
  isWeightValid,
} from './common-types';

const TEXT_TOKENS = {
  textCapsLetterSpacing,
  textCapsFontSize,
  textCapsFontWeight,
  textXsLetterSpacing,
  textXsFontSize,
  textXsFontWeight,
  textSmLetterSpacing,
  textSmFontSize,
  textSmFontWeight,
  textBaseLetterSpacing,
  textBaseFontSize,
  textBaseFontWeight,
  textLgLetterSpacing,
  textLgFontSize,
  textLgFontWeight,
  textXlLetterSpacing,
  textXlFontSize,
  textXlFontWeight,
  textXxlLetterSpacing,
  textXxlFontSize,
  textXxlFontWeight,
  textXxxlLetterSpacing,
  textXxxlFontSize,
  textXxxlFontWeight,
};

const getStyleByTextStyle = textStyle => {
  const camelCasedStyle = textStyle[0].toUpperCase() + textStyle.slice(1);

  const {
    [`text${camelCasedStyle}LetterSpacing`]: letterSpacing,
    [`text${camelCasedStyle}FontSize`]: fontSize,
    [`text${camelCasedStyle}FontWeight`]: fontWeight,
  } = TEXT_TOKENS;

  return {
    color: colorGray700,
    letterSpacing,
    fontFamily,
    fontSize,
    fontWeight,
  };
};

const getWeight = (emphasize, weight, textStyle) => {
  if (emphasize) {
    return WEIGHT_STYLES.emphasized;
  }

  if (isWeightValid(weight, textStyle)) {
    return weight;
  }

  return WEIGHT_STYLES.regular;
};

const getEmphasizeProperties = weight => {
  const emphasizeProperties = {};

  if (Platform.OS === 'android') {
    switch (weight) {
      case WEIGHT_STYLES.emphasized:
        emphasizeProperties.fontFamily = fontFamilyEmphasize;
        break;
      case WEIGHT_STYLES.heavy:
        emphasizeProperties.fontFamily = fontFamilyHeavy;
        break;
      default:
        break;
    }
  } else {
    switch (weight) {
      case WEIGHT_STYLES.emphasized:
        emphasizeProperties.fontWeight = textEmphasizedFontWeight;
        break;
      case WEIGHT_STYLES.heavy:
        emphasizeProperties.fontWeight = textHeavyFontWeight;
        break;
      default:
        break;
    }
  }

  if (shouldApplyFontWeightFix) {
    if (weight === WEIGHT_STYLES.emphasized) {
      emphasizeProperties.fontWeight = '700';
    } else if (weight === WEIGHT_STYLES.heavy) {
      emphasizeProperties.fontWeight = '900';
    }
  }

  return emphasizeProperties;
};

const styles = StyleSheet.create({
  caps: { ...getStyleByTextStyle('caps') },
  xs: { ...getStyleByTextStyle('xs') },
  sm: { ...getStyleByTextStyle('sm') },
  base: { ...getStyleByTextStyle('base') },
  lg: { ...getStyleByTextStyle('lg') },
  xl: { ...getStyleByTextStyle('xl') },
  xxl: { ...getStyleByTextStyle('xxl') },
  xxxl: { ...getStyleByTextStyle('xxxl') },
});

const BpkText = (props: Props) => {
  const {
    children,
    textStyle,
    style: userStyle,
    weight,
    emphasize,
    theme,
    ...rest
  } = props;

  const style = [
    styles[textStyle],
    getEmphasizeProperties(getWeight(emphasize, weight, textStyle)),
  ];

  const themeAttributes = getThemeAttributes(
    REQUIRED_THEME_ATTRIBUTES,
    theme,
    OPTIONAL_THEME_ATTRIBUTES,
  );

  if (themeAttributes) {
    style.push({
      fontFamily: themeAttributes.textFontFamily,
    });
    if (themeAttributes.colorGray700) {
      style.push({
        color: themeAttributes.colorGray700,
      });
    }
  }

  if (userStyle) {
    style.push(userStyle);
  }

  return (
    // eslint-disable-next-line backpack/use-components
    <Text style={style} {...rest}>
      {children}
    </Text>
  );
};

BpkText.propTypes = { ...propTypes };

BpkText.defaultProps = { ...defaultProps };

export default withTheme(BpkText);
