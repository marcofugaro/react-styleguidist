import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.string.small";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import prismTheme from '../../../styles/prismTheme';

var styles = function styles(_ref) {
  var space = _ref.space,
      color = _ref.color,
      fontSize = _ref.fontSize,
      fontFamily = _ref.fontFamily,
      borderRadius = _ref.borderRadius;
  return {
    pre: _objectSpread({
      fontFamily: fontFamily.base,
      fontSize: fontSize.small,
      lineHeight: 1.5,
      color: color.base,
      whiteSpace: 'pre-wrap',
      wordWrap: 'normal',
      tabSize: 2,
      hyphens: 'none',
      backgroundColor: color.codeBackground,
      padding: [[space[1], space[2]]],
      border: [[1, color.codeBackground, 'solid']],
      borderRadius: borderRadius,
      marginTop: 0,
      marginBottom: space[2]
    }, prismTheme({
      color: color
    }))
  };
};

export function PreRenderer(_ref2) {
  var classes = _ref2.classes,
      children = _ref2.children;
  return React.createElement("pre", {
    className: classes.pre
  }, children);
}
PreRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
export default Styled(styles)(PreRenderer);