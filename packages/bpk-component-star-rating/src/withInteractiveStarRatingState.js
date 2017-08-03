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

import PropTypes from 'prop-types';
import React, { Component } from 'react';

const withInteractiveStarRatingState = (InteractiveStarRating) => {
  class EnhancedComponent extends Component {
    constructor() {
      super();

      this.state = {
        rating: 0,
        hoverRating: 0,
      };

      this.onRatingHover = this.onRatingHover.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.onRatingSelect = this.onRatingSelect.bind(this);
    }

    onRatingSelect(rating, event) {
      if (event) {
        event.persist();
      }

      const callback = () => {
        if (this.props.onRatingSelect) {
          this.props.onRatingSelect(rating, event);
        }
      };

      this.setState(() => ({ rating }), callback);
    }

    onMouseLeave() {
      this.setState(() => ({ hoverRating: 0 }));
    }

    onRatingHover(hoverRating) {
      this.setState(() => ({ hoverRating }));
    }

    render() {
      return (
        <InteractiveStarRating
          {...this.props}
          rating={this.state.rating}
          hoverRating={this.state.hoverRating}
          onRatingHover={this.onRatingHover}
          onMouseLeave={this.onMouseLeave}
          onRatingSelect={this.onRatingSelect}
        />
      );
    }
  }

  EnhancedComponent.propTypes = {
    onRatingSelect: PropTypes.func,
  };

  EnhancedComponent.defaultProps = {
    onRatingSelect: () => null,
  };

  const enhancedComponentName = EnhancedComponent.displayName || EnhancedComponent.name || 'Component';

  EnhancedComponent.displayName = `withInteractiveStarRatingState(${enhancedComponentName})`;

  return EnhancedComponent;
};

export default withInteractiveStarRatingState;