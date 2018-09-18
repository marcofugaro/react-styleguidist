import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

var styles = function styles(_ref) {
  var color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize;
  return {
    heading: {
      margin: 0,
      color: color.base,
      fontFamily: fontFamily.base,
      fontWeight: 'normal'
    },
    heading1: {
      fontSize: fontSize.h1
    },
    heading2: {
      fontSize: fontSize.h2
    },
    heading3: {
      fontSize: fontSize.h3
    },
    heading4: {
      fontSize: fontSize.h4
    },
    heading5: {
      fontSize: fontSize.h5,
      fontWeight: 'bold'
    },
    heading6: {
      fontSize: fontSize.h6,
      fontStyle: 'italic'
    }
  };
};

function HeadingRenderer(_ref2) {
  var classes = _ref2.classes,
      level = _ref2.level,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["classes", "level", "children"]);

  var Tag = "h".concat(level);
  var headingClasses = cx(classes.heading, classes["heading".concat(level)]);
  return React.createElement(Tag, _extends({}, props, {
    className: headingClasses
  }), children);
}

HeadingRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node
};
export default Styled(styles)(HeadingRenderer);