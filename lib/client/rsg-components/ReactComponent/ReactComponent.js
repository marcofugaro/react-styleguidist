import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.function.name";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Examples from 'rsg-components/Examples';
import SectionHeading from 'rsg-components/SectionHeading';
import JsDoc from 'rsg-components/JsDoc';
import Markdown from 'rsg-components/Markdown';
import Slot from 'rsg-components/Slot';
import ReactComponentRenderer from 'rsg-components/ReactComponent/ReactComponentRenderer';
import { DOCS_TAB_USAGE } from '../slots';
import { DisplayModes, UsageModes } from '../../consts';
var ExamplePlaceholder = process.env.STYLEGUIDIST_ENV !== 'production' ? require('rsg-components/ExamplePlaceholder').default : function () {
  return React.createElement("div", null);
};

var ReactComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactComponent, _Component);

  function ReactComponent(props, context) {
    var _this;

    _classCallCheck(this, ReactComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactComponent).call(this, props, context));
    var usageMode = props.usageMode;
    _this.handleTabChange = _this.handleTabChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      activeTab: usageMode === UsageModes.expand ? DOCS_TAB_USAGE : undefined
    };
    return _this;
  }

  _createClass(ReactComponent, [{
    key: "handleTabChange",
    value: function handleTabChange(name) {
      this.setState(function (state) {
        return {
          activeTab: state.activeTab !== name ? name : undefined
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var activeTab = this.state.activeTab;
      var _this$context = this.context,
          displayMode = _this$context.displayMode,
          pagePerSection = _this$context.config.pagePerSection;
      var _this$props = this.props,
          component = _this$props.component,
          depth = _this$props.depth,
          usageMode = _this$props.usageMode,
          exampleMode = _this$props.exampleMode;
      var name = component.name,
          visibleName = component.visibleName,
          slug = component.slug,
          filepath = component.filepath,
          pathLine = component.pathLine;
      var _component$props = component.props,
          description = _component$props.description,
          _component$props$exam = _component$props.examples,
          examples = _component$props$exam === void 0 ? [] : _component$props$exam,
          _component$props$tags = _component$props.tags,
          tags = _component$props$tags === void 0 ? {} : _component$props$tags;

      if (!name) {
        return null;
      }

      var showUsage = usageMode !== UsageModes.hide;
      return React.createElement(ReactComponentRenderer, {
        name: name,
        slug: slug,
        filepath: filepath,
        pathLine: pathLine,
        docs: React.createElement(JsDoc, tags),
        description: description && React.createElement(Markdown, {
          text: description
        }),
        heading: React.createElement(SectionHeading, {
          id: slug,
          pagePerSection: pagePerSection,
          deprecated: !!tags.deprecated,
          slotName: "componentToolbar",
          slotProps: _objectSpread({}, component, {
            isolated: displayMode !== DisplayModes.all
          }),
          depth: depth
        }, visibleName),
        examples: examples.length > 0 ? React.createElement(Examples, {
          examples: examples,
          name: name,
          exampleMode: exampleMode
        }) : React.createElement(ExamplePlaceholder, {
          name: name
        }),
        tabButtons: showUsage && React.createElement(Slot, {
          name: "docsTabButtons",
          active: activeTab,
          props: _objectSpread({}, component, {
            onClick: this.handleTabChange
          })
        }),
        tabBody: React.createElement(Slot, {
          name: "docsTabs",
          active: activeTab,
          onlyActive: true,
          props: component
        })
      });
    }
  }]);

  return ReactComponent;
}(Component);

_defineProperty(ReactComponent, "propTypes", {
  component: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  exampleMode: PropTypes.string.isRequired,
  usageMode: PropTypes.string.isRequired
});

_defineProperty(ReactComponent, "contextTypes", {
  config: PropTypes.object.isRequired,
  displayMode: PropTypes.string
});

export { ReactComponent as default };