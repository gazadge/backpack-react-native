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

import PropTypes from 'prop-types';
import Dash from '@skyscanner/react-native-dash';
import {
  spacingSm,
  spacingMd,
  spacingBase,
} from 'bpk-tokens/tokens/base.react.native';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import React, { type Node, type ElementProps, type ComponentType } from 'react';
import { withTheme, grayForTheme, type Theme } from 'react-native-bpk-theming';

const styles = StyleSheet.create({
  cardInner: {
    flexDirection: 'row',
  },
  cardInnerVertical: {
    flexDirection: 'column',
  },
  cardMain: {
    flex: 1,
  },
  cardMainVertical: {
    // $FlowFixMe, becuase how else are you supposed to reset a flex value?
    flex: null,
  },
  cardMainPadded: {
    padding: spacingBase,
  },
  cardPunchline: {
    width: 1, // eslint-disable-line backpack/use-tokens
    marginTop: spacingMd,
    marginBottom: spacingMd,
    flexDirection: 'column',
  },
  cardPunchlineVertical: {
    width: null,
    marginTop: null,
    marginRight: spacingMd,
    marginBottom: null,
    marginLeft: spacingMd,
    flexDirection: 'row',
  },
  cardStub: {
    flex: 1,
  },
  cardStubVertical: {
    // $FlowFixMe, becuase how else are you supposed to reset a flex value?
    flex: null,
  },
  cardStubPadded: {
    padding: spacingBase,
  },
});

type ViewProps = ElementProps<typeof View>;
type ViewStyleProp = $PropertyType<ViewProps, 'style'>;

export type Props = {
  children: Node,
  stub: Node,
  padded: boolean,
  vertical: boolean,
  mainStyle: ViewStyleProp,
  stubStyle: ViewStyleProp,
  theme: ?Theme,
};

const withDivider = (CardComponent: ComponentType<any>): ComponentType<any> => {
  const WithDivider = (props: Props) => {
    const {
      children,
      stub,
      padded,
      vertical,
      mainStyle: userMainStyle,
      stubStyle: userStubStyle,
      theme,
      ...rest
    } = props;

    const innerStyle = [styles.cardInner];
    const mainStyle = [styles.cardMain];
    const punchlineStyle = [styles.cardPunchline];
    const stubStyle = [styles.cardStub];

    if (padded) {
      mainStyle.push(styles.cardMainPadded);
      stubStyle.push(styles.cardStubPadded);
    }
    if (vertical) {
      innerStyle.push(styles.cardInnerVertical);
      mainStyle.push(styles.cardMainVertical);
      punchlineStyle.push(styles.cardPunchlineVertical);
      stubStyle.push(styles.cardStubVertical);
    }
    if (userMainStyle) {
      mainStyle.push(userMainStyle);
    }
    if (userStubStyle) {
      stubStyle.push(userStubStyle);
    }

    return (
      <CardComponent padded={false} innerStyle={innerStyle} {...rest}>
        <View style={mainStyle}>{children}</View>
        <Dash
          style={punchlineStyle}
          dashGap={spacingSm}
          dashLength={spacingSm}
          dashThickness={1}
          dashColor={grayForTheme(theme, 'colorGray100')}
        />
        <View style={stubStyle}>{stub}</View>
      </CardComponent>
    );
  };

  WithDivider.propTypes = {
    children: PropTypes.node.isRequired,
    stub: PropTypes.node.isRequired,
    padded: PropTypes.bool,
    vertical: PropTypes.bool,
    mainStyle: ViewPropTypes.style,
    stubStyle: ViewPropTypes.style,
  };

  WithDivider.defaultProps = {
    padded: true,
    vertical: false,
    mainStyle: null,
    stubStyle: null,
    theme: null,
  };

  return withTheme(WithDivider);
};

export default withDivider;
