import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.string.anchor";
import "core-js/modules/es6.function.name";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Get component / section URL.
 *
 * @param {string} $.name Name
 * @param {string} $.slug Slug
 * @param {number} $.example Example index
 * @param {boolean} $.anchor Anchor?
 * @param {boolean} $.isolated Isolated mode?
 * @param {boolean} $.nochrome No chrome? (Can be combined with anchor or isolated)
 * @param {boolean} $.absolute Absolute URL? (Can be combined with other flags)
 * @param {object} [location] Location object (will use current page location by default)
 * @return {string}
 */
export default function getUrl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      name = _ref.name,
      slug = _ref.slug,
      example = _ref.example,
      anchor = _ref.anchor,
      isolated = _ref.isolated,
      nochrome = _ref.nochrome,
      absolute = _ref.absolute,
      hashPath = _ref.hashPath,
      id = _ref.id,
      takeHash = _ref.takeHash;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location,
      origin = _ref2.origin,
      pathname = _ref2.pathname,
      hash = _ref2.hash;

  var url = pathname;

  if (takeHash) {
    if (hash.indexOf('?') > -1) {
      url += hash.substring(0, hash.indexOf('?'));
    } else {
      url += hash;
    }
  }

  if (nochrome) {
    url += '?nochrome';
  }

  if (anchor) {
    url += "#".concat(slug);
  } else if (isolated || nochrome) {
    url += "#!/".concat(name);
  }

  if (hashPath) {
    if (!id) {
      hashPath = _toConsumableArray(hashPath).concat([name]);
    }

    url += "#/".concat(hashPath.join('/'));
  }

  if (id) {
    url += "?id=".concat(slug);
  }

  if (example !== undefined) {
    url += "/".concat(example);
  }

  if (absolute) {
    return origin + url;
  }

  return url;
}