"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAst;
exports.ACORN_OPTIONS = void 0;

var _forEach = _interopRequireDefault(require("lodash/forEach"));

var acorn = _interopRequireWildcard(require("acorn"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ACORN_OPTIONS = {
  ecmaVersion: 2019,
  sourceType: 'module'
};
/**
 * Parse source code with Acorn and return AST, returns undefined in case of errors
 */

exports.ACORN_OPTIONS = ACORN_OPTIONS;

function getAst(code, plugins) {
  const pluginOptions = {};
  let parser = acorn;

  if (plugins) {
    (0, _forEach.default)(plugins, (plugin, name) => {
      parser = plugin(parser);
      pluginOptions[name] = true;
    });
  }

  try {
    return parser.parse(code, _objectSpread({}, ACORN_OPTIONS, {
      plugins: pluginOptions
    }));
  } catch (err) {
    return undefined;
  }
}