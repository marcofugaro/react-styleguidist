import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.function.name";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ComponentsListRenderer from 'rsg-components/ComponentsList/ComponentsListRenderer';
import PropTypes from 'prop-types';
import getUrl from '../../utils/getUrl';

function ComponentsList(_ref) {
  var classes = _ref.classes,
      items = _ref.items,
      _ref$useRouterLinks = _ref.useRouterLinks,
      useRouterLinks = _ref$useRouterLinks === void 0 ? false : _ref$useRouterLinks,
      useHashId = _ref.useHashId,
      hashPath = _ref.hashPath;
  var mappedItems = items.map(function (item) {
    return _objectSpread({}, item, {
      href: getUrl({
        name: item.name,
        slug: item.slug,
        anchor: !useRouterLinks,
        hashPath: useRouterLinks ? hashPath : false,
        id: useRouterLinks ? useHashId : false
      })
    });
  });
  return React.createElement(ComponentsListRenderer, {
    classes: classes,
    items: mappedItems
  });
}

ComponentsList.propTypes = {
  items: PropTypes.array.isRequired,
  classes: PropTypes.object,
  hashPath: PropTypes.array,
  useRouterLinks: PropTypes.bool,
  useHashId: PropTypes.bool
};
export default ComponentsList;