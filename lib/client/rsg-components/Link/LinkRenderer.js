import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.string.link";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

var styles = function styles(_ref) {
  var color = _ref.color;
  return {
    link: {
      '&, &:link, &:visited': {
        fontSize: 'inherit',
        color: color.link,
        textDecoration: 'none'
      },
      '&:hover, &:active': {
        isolate: false,
        color: color.linkHover,
        cursor: 'pointer'
      }
    }
  };
};

export function LinkRenderer(_ref2) {
  var classes = _ref2.classes,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["classes", "children"]);

  return React.createElement("a", _extends({}, props, {
    className: cx(classes.link, props.className)
  }), children);
}
LinkRenderer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};
export default Styled(styles)(LinkRenderer);