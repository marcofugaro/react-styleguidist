import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as acorn from 'acorn';
export var ACORN_OPTIONS = {
  ecmaVersion: 2019,
  sourceType: 'module'
};
/**
 * Parse source code with Acorn and return AST, returns undefined in case of errors
 */

export default function getAst(code) {
  try {
    return acorn.parse(code, _objectSpread({}, ACORN_OPTIONS));
  } catch (err) {
    return undefined;
  }
}