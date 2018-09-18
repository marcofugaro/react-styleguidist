import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.function.name";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Inspired by https://github.com/camwest/react-slot-fill
import React from 'react';
import PropTypes from 'prop-types';
export default function Slot(_ref, _ref2) {
  var name = _ref.name,
      active = _ref.active,
      onlyActive = _ref.onlyActive,
      className = _ref.className,
      _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props;
  var slots = _ref2.slots;
  var fills = slots[name];

  if (!fills) {
    throw new Error("Slot \"".concat(name, "\" not found, available slots: ").concat(Object.keys(slots).join(', ')));
  }

  var rendered = fills.map(function (Fill, index) {
    // { id: 'pizza', render: ({ foo }) => <div>{foo}</div> }
    var _Fill = Fill,
        id = _Fill.id,
        render = _Fill.render;
    var fillProps = props;

    if (id && render) {
      // Render only specified fill
      if (onlyActive && id !== active) {
        return null;
      }

      var onClick = props.onClick;
      fillProps = _objectSpread({}, props, {
        name: id,
        // Set active prop to active fill
        active: active && id === active,
        // Pass fill ID to onClick event handler
        // eslint-disable-next-line react/prop-types
        onClick: onClick && function () {
          for (var _len = arguments.length, attrs = new Array(_len), _key = 0; _key < _len; _key++) {
            attrs[_key] = arguments[_key];
          }

          return onClick.apply(void 0, [id].concat(attrs));
        }
      });
      Fill = render;
    }

    return React.createElement(Fill, _extends({
      key: index
    }, fillProps));
  });
  var filtered = rendered.filter(Boolean);

  if (filtered.length === 0) {
    return null;
  }

  return React.createElement("div", {
    className: className
  }, filtered);
}
Slot.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.string,
  onlyActive: PropTypes.bool,
  props: PropTypes.object,
  className: PropTypes.string
};
Slot.contextTypes = {
  slots: PropTypes.object.isRequired
};