/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs ***!
  \******************************************************************/
/*! exports provided: noAuto, config, library, dom, parse, findIconDefinition, toHtml, icon, layer, text, counter, api */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = 'classic';
var FAMILY_SHARP = 'sharp';
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
  'fa': 'solid',
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fa-kit': 'kit'
}), _defineProperty(_familyProxy, FAMILY_SHARP, {
  'fa': 'solid',
  'fass': 'solid',
  'fa-solid': 'solid',
  'fasr': 'regular',
  'fa-regular': 'regular',
  'fasl': 'light',
  'fa-light': 'light'
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'thin': 'fat',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
}), _defineProperty(_familyProxy2, FAMILY_SHARP, {
  'solid': 'fass',
  'regular': 'fasr',
  'light': 'fasl'
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
  'fab': 'fa-brands',
  'fad': 'fa-duotone',
  'fak': 'fa-kit',
  'fal': 'fa-light',
  'far': 'fa-regular',
  'fas': 'fa-solid',
  'fat': 'fa-thin'
}), _defineProperty(_familyProxy3, FAMILY_SHARP, {
  'fass': 'fa-solid',
  'fasr': 'fa-regular',
  'fasl': 'fa-light'
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
}), _defineProperty(_familyProxy4, FAMILY_SHARP, {
  'fa-solid': 'fass',
  'fa-regular': 'fasr',
  'fa-light': 'fasl'
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal',
  '100': 'fat'
}), _defineProperty(_familyProxy5, FAMILY_SHARP, {
  '900': 'fass',
  '400': 'fasr',
  '300': 'fasl'
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var prefixes = new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}; // familyPrefix is deprecated but we must still support it if present

if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}

var _config = _objectSpread2(_objectSpread2({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
}); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;

    _onChangeCb.forEach(function (cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
  d1: 1,
  d2: 2
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2,
  cls2: 3,
  d2: 4
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2
})];

var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(cssPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$family = params.family,
      family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;

  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;

  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }

  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }

  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family: family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }

  if (values.includes('fa-duotone') || values.includes('fad')) {
    canonical.prefix = 'fad';
  }

  if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
    canonical.prefix = 'fass';
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    };

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.4.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;

    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });

      _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = _abstract2.map(function (a) {
      return toHtml(a);
    }).join('\n');

    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }

  return val;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

var knownPrefixes = new Set();
FAMILIES.map(function (family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray(knownPrefixes);

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));

  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }

  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};

var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));

          var element = DOCUMENT.createElement('svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = _abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = 'black';
  }

  return _abstract;
}

function deGroup(_abstract2) {
  if (_abstract2.tag === 'g') {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;




/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_6__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isHTMLElement"])(element)) {
    scaleX = element.offsetWidth > 0 ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_1__["round"])(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_1__["round"])(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !Object(_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element, strategy) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, strategy)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.top, accRect.top);
    accRect.right = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.right, accRect.right);
    accRect.bottom = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.bottom, accRect.bottom);
    accRect.left = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(rect.width) / element.offsetWidth || 1;
  var scaleY = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var offsetParentIsScaled = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent) && isElementScaled(offsetParent);
  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");








function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(Object(_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
  var isIE = /Trident/i.test(Object(_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__["default"])());

  if (isIE && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isShadowRoot"])(currentNode)) {
    currentNode = currentNode.host;
  }

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getViewportRect(element, strategy) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = Object(_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isLayoutViewport; });
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(Object(_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow, popperGenerator, detectOverflow, createPopperBase, createPopper, createPopperLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");








 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["within"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(x * dpr) / dpr || 0,
    y: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);

      if (Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"] || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"];
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"] || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    variation: Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/*! exports provided: applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["within"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["within"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(min, tetherMin) : min, offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["withinMaxClamp"])(_tetherMin, _offset, _tetherMax) : Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["within"])(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow, createPopperLite, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.reference);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/*! exports provided: max, min, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/userAgent.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/userAgent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUAString; });
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/*! exports provided: within, withinMaxClamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "within", function() { return within; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withinMaxClamp", function() { return withinMaxClamp; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["max"])(min, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["min"])(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/*! exports provided: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offcanvas", function() { return Offcanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return ScrollSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
/*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */


/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const elementMap = new Map();
const Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }
    const instanceMap = elementMap.get(element);

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend';

/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */
const parseSelector = selector => {
  if (selector && window.CSS && window.CSS.escape) {
    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
  }
  return selector;
};

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};

/**
 * Public Util API
 */

const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false;
  }
  if (typeof object.jquery !== 'undefined') {
    object = object[0];
  }
  return typeof object.nodeType !== 'undefined';
};
const getElement = object => {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
const isVisible = element => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  // Handle `details` element as its content may falsie appear visible when it is closed
  const closedDetails = element.closest('details:not([open])');
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest('summary');
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains('disabled')) {
    return true;
  }
  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }
  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  }

  // Can find the shadow root otherwise it'll return the document
  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }

  // when we don't find a shadow root
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
const noop = () => {};

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = element => {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};

const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery;
  }
  return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        for (const callback of DOMContentLoadedCallbacks) {
          callback();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
const isRTL = () => document.documentElement.dir === 'rtl';
const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    /* istanbul ignore if */
    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;
      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};

/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }
    return fn.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn);
        }
        return fn.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string';
  // TODO: tooltip passes `false` instead of selector, so we need to check
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn) {
    return;
  }
  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}
const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith('.');
    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '');
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }
    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    const evt = hydrateObj(new Event(event, {
      bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === '' || value === 'null') {
    return null;
  }
  if (typeof value !== 'string') {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}
const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Class definition
 */

class Config {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

    return {
      ...this.constructor.Default,
      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
      ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    };
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property];
      const valueType = isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const VERSION = '5.3.0';

/**
 * Class definition
 */

class BaseComponent extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }

  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');
  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href');

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
      return null;
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }
  return parseSelector(selector);
};
const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
  },
  getSelectorFromElement(element) {
    const selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);

    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
    instance[method]();
  });
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$f = 'alert';
const DATA_KEY$a = 'bs.alert';
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';

/**
 * Class definition
 */

class Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  }

  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
    if (closeEvent.defaultPrevented) {
      return;
    }
    this._element.classList.remove(CLASS_NAME_SHOW$8);
    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  }

  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Alert.getOrCreateInstance(this);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
}

/**
 * Data API implementation
 */

enableDismissTrigger(Alert, 'close');

/**
 * jQuery
 */

defineJQueryPlugin(Alert);

/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$e = 'button';
const DATA_KEY$9 = 'bs.button';
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;

/**
 * Class definition
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  }

  // Public
  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Button.getOrCreateInstance(this);
      if (config === 'toggle') {
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});

/**
 * jQuery
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$d = 'swipe';
const EVENT_KEY$9 = '.bs.swipe';
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SWIPE_THRESHOLD = 40;
const Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
const DefaultType$c = {
  endCallback: '(function|null)',
  leftCallback: '(function|null)',
  rightCallback: '(function|null)'
};

/**
 * Class definition
 */

class Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;
    if (!element || !Swipe.isSupported()) {
      return;
    }
    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }

  // Getters
  static get Default() {
    return Default$c;
  }
  static get DefaultType() {
    return DefaultType$c;
  }
  static get NAME() {
    return NAME$d;
  }

  // Public
  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  }

  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }
  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }
    this._handleSwipe();
    execute(this._config.endCallback);
  }
  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);
    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }
    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;
    if (!direction) {
      return;
    }
    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
    }
  }
  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  }

  // Static
  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$c = 'carousel';
const DATA_KEY$8 = 'bs.carousel';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = '.data-api';
const ARROW_LEFT_KEY$1 = 'ArrowLeft';
const ARROW_RIGHT_KEY$1 = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
};
const DefaultType$b = {
  interval: '(number|boolean)',
  // TODO:v6 remove boolean support
  keyboard: 'boolean',
  pause: '(string|boolean)',
  ride: '(boolean|string)',
  touch: 'boolean',
  wrap: 'boolean'
};

/**
 * Class definition
 */

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._addEventListeners();
    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  }

  // Getters
  static get Default() {
    return Default$b;
  }
  static get DefaultType() {
    return DefaultType$b;
  }
  static get NAME() {
    return NAME$c;
  }

  // Public
  next() {
    this._slide(ORDER_NEXT);
  }
  nextWhenVisible() {
    // FIXME TODO use `document.visibilityState`
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }
  prev() {
    this._slide(ORDER_PREV);
  }
  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }
    this._clearInterval();
  }
  cycle() {
    this._clearInterval();
    this._updateInterval();
    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }
    this.cycle();
  }
  to(index) {
    const items = this._getItems();
    if (index > items.length - 1 || index < 0) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }
    const activeIndex = this._getItemIndex(this._getActive());
    if (activeIndex === index) {
      return;
    }
    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
    this._slide(order, items[index]);
  }
  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }
    super.dispose();
  }

  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }
  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
    }
    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }
    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }
  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
    }
    const endCallBack = () => {
      if (this._config.pause !== 'hover') {
        return;
      }

      // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause();
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }
      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };
    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }
  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }
    const direction = KEY_TO_DIRECTION[event.key];
    if (direction) {
      event.preventDefault();
      this._slide(this._directionToOrder(direction));
    }
  }
  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }
  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }
    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute('aria-current');
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute('aria-current', 'true');
    }
  }
  _updateInterval() {
    const element = this._activeElement || this._getActive();
    if (!element) {
      return;
    }
    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }
  _slide(order, element = null) {
    if (this._isSliding) {
      return;
    }
    const activeElement = this._getActive();
    const isNext = order === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
    if (nextElement === activeElement) {
      return;
    }
    const nextElementIndex = this._getItemIndex(nextElement);
    const triggerEvent = eventName => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };
    const slideEvent = triggerEvent(EVENT_SLIDE);
    if (slideEvent.defaultPrevented) {
      return;
    }
    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      // TODO: change tests that use empty divs to avoid this check
      return;
    }
    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;
    this._setActiveIndicatorElement(nextElementIndex);
    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);
    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };
    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
    if (isCycling) {
      this.cycle();
    }
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }
  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }
  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }
    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }
  _orderToDirection(order) {
    if (isRTL()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Carousel.getOrCreateInstance(this, config);
      if (typeof config === 'number') {
        data.to(config);
        return;
      }
      if (typeof config === 'string') {
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute('data-bs-slide-to');
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(Carousel);

/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$b = 'collapse';
const DATA_KEY$7 = 'bs.collapse';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = '.data-api';
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
  parent: null,
  toggle: true
};
const DefaultType$a = {
  parent: '(null|element)',
  toggle: 'boolean'
};

/**
 * Class definition
 */

class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (const elem of toggleList) {
      const selector = SelectorEngine.getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }

  // Getters
  static get Default() {
    return Default$a;
  }
  static get DefaultType() {
    return DefaultType$a;
  }
  static get NAME() {
    return NAME$b;
  }

  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];

    // find active children
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      this._element.style[dimension] = '';
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
    for (const trigger of this._triggerArray) {
      const element = SelectorEngine.getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };
    this._element.style[dimension] = '';
    this._queueCallback(complete, this._element, true);
  }
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  }

  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle); // Coerce string values
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
    for (const element of children) {
      const selected = SelectorEngine.getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    // remove children if greater depth
    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute('aria-expanded', isOpen);
    }
  }

  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function () {
      const data = Collapse.getOrCreateInstance(this, _config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }
  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(Collapse);

/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$a = 'dropdown';
const DATA_KEY$6 = 'bs.dropdown';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY$1 = 'ArrowUp';
const ARROW_DOWN_KEY$1 = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR = '.navbar';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const PLACEMENT_TOPCENTER = 'top';
const PLACEMENT_BOTTOMCENTER = 'bottom';
const Default$9 = {
  autoClose: true,
  boundary: 'clippingParents',
  display: 'dynamic',
  offset: [0, 2],
  popperConfig: null,
  reference: 'toggle'
};
const DefaultType$9 = {
  autoClose: '(boolean|string)',
  boundary: '(string|element)',
  display: 'string',
  offset: '(array|string|function)',
  popperConfig: '(null|object|function)',
  reference: '(string|element|object)'
};

/**
 * Class definition
 */

class Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode; // dropdown wrapper
    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  }

  // Getters
  static get Default() {
    return Default$9;
  }
  static get DefaultType() {
    return DefaultType$9;
  }
  static get NAME() {
    return NAME$a;
  }

  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._createPopper();

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', noop);
      }
    }
    this._element.focus();
    this._element.setAttribute('aria-expanded', true);
    this._menu.classList.add(CLASS_NAME_SHOW$6);
    this._element.classList.add(CLASS_NAME_SHOW$6);
    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }
  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    this._completeHide(relatedTarget);
  }
  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }
    super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar();
    if (this._popper) {
      this._popper.update();
    }
  }

  // Private
  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
    if (hideEvent.defaultPrevented) {
      return;
    }

    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', noop);
      }
    }
    if (this._popper) {
      this._popper.destroy();
    }
    this._menu.classList.remove(CLASS_NAME_SHOW$6);
    this._element.classList.remove(CLASS_NAME_SHOW$6);
    this._element.setAttribute('aria-expanded', 'false');
    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }
  _getConfig(config) {
    config = super._getConfig(config);
    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }
    return config;
  }
  _createPopper() {
    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }
    let referenceElement = this._element;
    if (this._config.reference === 'parent') {
      referenceElement = this._parent;
    } else if (isElement(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }
    const popperConfig = this._getPopperConfig();
    this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](referenceElement, this._menu, popperConfig);
  }
  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }
  _getPlacement() {
    const parentDropdown = this._parent;
    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    }

    // We need to trim the value because custom properties can also include spaces
    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }
    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }
  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }
  _getOffset() {
    const {
      offset
    } = this._config;
    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }
    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }
    return offset;
  }
  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    };

    // Disable Popper if we have a static display or Dropdown is in Navbar
    if (this._inNavbar || this._config.display === 'static') {
      Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
    if (!items.length) {
      return;
    }

    // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY
    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Dropdown.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
    for (const toggle of openToggles) {
      const context = Dropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }
      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
        continue;
      }

      // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
      if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }
      const relatedTarget = {
        relatedTarget: context._element
      };
      if (event.type === 'click') {
        relatedTarget.clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
  static dataApiKeydownHandler(event) {
    // If not an UP | DOWN | ESCAPE key => not a dropdown command
    // If input/textarea && if key is other than ESCAPE => not a dropdown command

    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }
    if (isInput && !isEscapeEvent) {
      return;
    }
    event.preventDefault();

    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = Dropdown.getOrCreateInstance(getToggleButton);
    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();
      instance._selectMenuItem(event);
      return;
    }
    if (instance._isShown()) {
      // else is escape and we check if it is shown
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});

/**
 * jQuery
 */

defineJQueryPlugin(Dropdown);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$9 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
  className: 'modal-backdrop',
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: 'body' // give the choice to place backdrop under different elements
};

const DefaultType$8 = {
  className: 'string',
  clickCallback: '(function|null)',
  isAnimated: 'boolean',
  isVisible: 'boolean',
  rootElement: '(element|string)'
};

/**
 * Class definition
 */

class Backdrop extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  // Getters
  static get Default() {
    return Default$8;
  }
  static get DefaultType() {
    return DefaultType$8;
  }
  static get NAME() {
    return NAME$9;
  }

  // Public
  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._append();
    const element = this._getElement();
    if (this._config.isAnimated) {
      reflow(element);
    }
    element.classList.add(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      execute(callback);
    });
  }
  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }
  dispose() {
    if (!this._isAppended) {
      return;
    }
    EventHandler.off(this._element, EVENT_MOUSEDOWN);
    this._element.remove();
    this._isAppended = false;
  }

  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }
      this._element = backdrop;
    }
    return this._element;
  }
  _configAfterMerge(config) {
    // use getElement() with the default "body" to get a fresh Element on each instantiation
    config.rootElement = getElement(config.rootElement);
    return config;
  }
  _append() {
    if (this._isAppended) {
      return;
    }
    const element = this._getElement();
    this._config.rootElement.append(element);
    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }
  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$8 = 'focustrap';
const DATA_KEY$5 = 'bs.focustrap';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';
const Default$7 = {
  autofocus: true,
  trapElement: null // The element to trap focus inside of
};

const DefaultType$7 = {
  autofocus: 'boolean',
  trapElement: 'element'
};

/**
 * Class definition
 */

class FocusTrap extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  // Getters
  static get Default() {
    return Default$7;
  }
  static get DefaultType() {
    return DefaultType$7;
  }
  static get NAME() {
    return NAME$8;
  }

  // Public
  activate() {
    if (this._isActive) {
      return;
    }
    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }
    EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
    EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  }
  deactivate() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  }

  // Private
  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;
    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }
    const elements = SelectorEngine.focusableChildren(trapElement);
    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }
  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }
    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
const PROPERTY_PADDING = 'padding-right';
const PROPERTY_MARGIN = 'margin-right';

/**
 * Class definition
 */

class ScrollBarHelper {
  constructor() {
    this._element = document.body;
  }

  // Public
  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  hide() {
    const width = this.getWidth();
    this._disableOverFlow();
    // give padding to element to balance the hidden scrollbar width
    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
  }
  reset() {
    this._resetElementAttributes(this._element, 'overflow');
    this._resetElementAttributes(this._element, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }

  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');
    this._element.style.overflow = 'hidden';
  }
  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();
    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      this._saveInitialAttribute(element, styleProperty);
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);
    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }
  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = element => {
      const value = Manipulator.getDataAttribute(element, styleProperty);
      // We only want to remove the property if the value is `null`; the value can also be zero
      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }
      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _applyManipulationCallback(selector, callBack) {
    if (isElement(selector)) {
      callBack(selector);
      return;
    }
    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$7 = 'modal';
const DATA_KEY$4 = 'bs.modal';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
const DefaultType$6 = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
  keyboard: 'boolean'
};

/**
 * Class definition
 */

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._addEventListeners();
  }

  // Getters
  static get Default() {
    return Default$6;
  }
  static get DefaultType() {
    return DefaultType$6;
  }
  static get NAME() {
    return NAME$7;
  }

  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();
    document.body.classList.add(CLASS_NAME_OPEN);
    this._adjustDialog();
    this._backdrop.show(() => this._showElement(relatedTarget));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._isShown = false;
    this._isTransitioning = true;
    this._focustrap.deactivate();
    this._element.classList.remove(CLASS_NAME_SHOW$4);
    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }
  dispose() {
    EventHandler.off(window, EVENT_KEY$4);
    EventHandler.off(this._dialog, EVENT_KEY$4);
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }

  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _showElement(relatedTarget) {
    // try to append dynamic modal
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }
    this._element.style.display = 'block';
    this._element.removeAttribute('aria-hidden');
    this._element.setAttribute('aria-modal', true);
    this._element.setAttribute('role', 'dialog');
    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW$4);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };
    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }
        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
          return;
        }
        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = 'none';
    this._element.setAttribute('aria-hidden', true);
    this._element.removeAttribute('aria-modal');
    this._element.removeAttribute('role');
    this._isTransitioning = false;
    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }
  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    // return if the following background transition hasn't yet completed
    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }
    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }
    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);
    this._element.focus();
  }

  /**
   * The following methods are used to handle overflowing modals
   */

  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? 'paddingLeft' : 'paddingRight';
      this._element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? 'paddingRight' : 'paddingLeft';
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  }

  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = Modal.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](relatedTarget);
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });

  // avoid conflict when clicking modal toggler while another one is open
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);

/**
 * jQuery
 */

defineJQueryPlugin(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$6 = 'offcanvas';
const DATA_KEY$3 = 'bs.offcanvas';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = '.data-api';
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = 'Escape';
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_SHOWING$1 = 'showing';
const CLASS_NAME_HIDING = 'hiding';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  scroll: 'boolean'
};

/**
 * Class definition
 */

class Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }

  // Getters
  static get Default() {
    return Default$5;
  }
  static get DefaultType() {
    return DefaultType$5;
  }
  static get NAME() {
    return NAME$6;
  }

  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._backdrop.show();
    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }
    this._element.setAttribute('aria-modal', true);
    this._element.setAttribute('role', 'dialog');
    this._element.classList.add(CLASS_NAME_SHOWING$1);
    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }
      this._element.classList.add(CLASS_NAME_SHOW$3);
      this._element.classList.remove(CLASS_NAME_SHOWING$1);
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };
    this._queueCallback(completeCallBack, this._element, true);
  }
  hide() {
    if (!this._isShown) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();
    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };
    this._queueCallback(completeCallback, this._element, true);
  }
  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }

  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === 'static') {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    };

    // 'static' option will be translated to true, and booleans will keep their value
    const isVisible = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible ? clickCallback : null
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
    });
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Offcanvas.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
      this.focus();
    }
  });

  // avoid conflict when clicking a toggler of an offcanvas, while another is open
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
    if (getComputedStyle(element).position !== 'fixed') {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);

/**
 * jQuery
 */

defineJQueryPlugin(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// js-docs-start allow-list
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
// js-docs-end allow-list

const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
 * contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */
// eslint-disable-next-line unicorn/better-regex
const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }

  // Check if a regular expression validates the attribute.
  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$5 = 'TemplateFactory';
const Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: '',
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: '<div></div>'
};
const DefaultType$4 = {
  allowList: 'object',
  content: 'object',
  extraClass: '(string|function)',
  html: 'boolean',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  template: 'string'
};
const DefaultContentType = {
  entry: '(string|element|function|null)',
  selector: '(string|element)'
};

/**
 * Class definition
 */

class TemplateFactory extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  }

  // Getters
  static get Default() {
    return Default$4;
  }
  static get DefaultType() {
    return DefaultType$4;
  }
  static get NAME() {
    return NAME$5;
  }

  // Public
  getContent() {
    return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(content) {
    this._checkContent(content);
    this._config.content = {
      ...this._config.content,
      ...content
    };
    return this;
  }
  toHtml() {
    const templateWrapper = document.createElement('div');
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }
    const template = templateWrapper.children[0];
    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
    if (extraClass) {
      template.classList.add(...extraClass.split(' '));
    }
    return template;
  }

  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config);
    this._checkContent(config.content);
  }
  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }
  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);
    if (!templateElement) {
      return;
    }
    content = this._resolvePossibleFunction(content);
    if (!content) {
      templateElement.remove();
      return;
    }
    if (isElement(content)) {
      this._putElementInTemplate(getElement(content), templateElement);
      return;
    }
    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }
    templateElement.textContent = content;
  }
  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this]);
  }
  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = '';
      templateElement.append(element);
      return;
    }
    templateElement.textContent = element.textContent;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$4 = 'tooltip';
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
const EVENT_HIDE$2 = 'hide';
const EVENT_HIDDEN$2 = 'hidden';
const EVENT_SHOW$2 = 'show';
const EVENT_SHOWN$2 = 'shown';
const EVENT_INSERTED = 'inserted';
const EVENT_CLICK$1 = 'click';
const EVENT_FOCUSIN$1 = 'focusin';
const EVENT_FOCUSOUT$1 = 'focusout';
const EVENT_MOUSEENTER = 'mouseenter';
const EVENT_MOUSELEAVE = 'mouseleave';
const AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: 'clippingParents',
  container: false,
  customClass: '',
  delay: 0,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  html: false,
  offset: [0, 6],
  placement: 'top',
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  title: '',
  trigger: 'hover focus'
};
const DefaultType$3 = {
  allowList: 'object',
  animation: 'boolean',
  boundary: '(string|element)',
  container: '(string|element|boolean)',
  customClass: '(string|function)',
  delay: '(number|object)',
  fallbackPlacements: 'array',
  html: 'boolean',
  offset: '(array|string|function)',
  placement: '(string|function)',
  popperConfig: '(null|object|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  selector: '(string|boolean)',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string'
};

/**
 * Class definition
 */

class Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }
    super(element, config);

    // Private
    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null;

    // Protected
    this.tip = null;
    this._setListeners();
    if (!this._config.selector) {
      this._fixTitle();
    }
  }

  // Getters
  static get Default() {
    return Default$3;
  }
  static get DefaultType() {
    return DefaultType$3;
  }
  static get NAME() {
    return NAME$4;
  }

  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!this._isEnabled) {
      return;
    }
    this._activeTrigger.click = !this._activeTrigger.click;
    if (this._isShown()) {
      this._leave();
      return;
    }
    this._enter();
  }
  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    if (this._element.getAttribute('data-bs-original-title')) {
      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
    }
    this._disposePopper();
    super.dispose();
  }
  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }
    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }

    // TODO: v6 remove this or make it optional
    this._disposePopper();
    const tip = this._getTipElement();
    this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
    const {
      container
    } = this._config;
    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }
    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2);

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', noop);
      }
    }
    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
      if (this._isHovered === false) {
        this._leave();
      }
      this._isHovered = false;
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
    if (hideEvent.defaultPrevented) {
      return;
    }
    const tip = this._getTipElement();
    tip.classList.remove(CLASS_NAME_SHOW$2);

    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', noop);
      }
    }
    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null; // it is a trick to support manual triggering

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }
      if (!this._isHovered) {
        this._disposePopper();
      }
      this._element.removeAttribute('aria-describedby');
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  update() {
    if (this._popper) {
      this._popper.update();
    }
  }

  // Protected
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }
    return this.tip;
  }
  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml();

    // TODO: remove this check in v6
    if (!tip) {
      return null;
    }
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    // TODO: v6 the following can be achieved with CSS only
    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute('id', tipId);
    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }
    return tip;
  }
  setContent(content) {
    this._newContent = content;
    if (this._isShown()) {
      this._disposePopper();
      this.show();
    }
  }
  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({
        ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }
    return this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
  }

  // Private
  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }
  _createPopper(tip) {
    const placement = execute(this._config.placement, [this, tip, this._element]);
    const attachment = AttachmentMap[placement.toUpperCase()];
    return _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](this._element, tip, this._getPopperConfig(attachment));
  }
  _getOffset() {
    const {
      offset
    } = this._config;
    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }
    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }
    return offset;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this._element]);
  }
  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'preSetPlacement',
        enabled: true,
        phase: 'beforeMain',
        fn: data => {
          // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
          // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
          this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
        }
      }]
    };
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _setListeners() {
    const triggers = this._config.trigger.split(' ');
    for (const trigger of triggers) {
      if (trigger === 'click') {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);
          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
          context._leave();
        });
      }
    }
    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };
    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }
  _fixTitle() {
    const title = this._element.getAttribute('title');
    if (!title) {
      return;
    }
    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
      this._element.setAttribute('aria-label', title);
    }
    this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
    this._element.removeAttribute('title');
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }
    this._isHovered = true;
    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }
  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }
    this._isHovered = false;
    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }
  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }
  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }
    config = {
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);
    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }
    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }
    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }
    return config;
  }
  _getDelegateConfig() {
    const config = {};
    for (const [key, value] of Object.entries(this._config)) {
      if (this.constructor.Default[key] !== value) {
        config[key] = value;
      }
    }
    config.selector = false;
    config.trigger = 'manual';

    // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`
    return config;
  }
  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tooltip.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * jQuery
 */

defineJQueryPlugin(Tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$3 = 'popover';
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
const Default$2 = {
  ...Tooltip.Default,
  content: '',
  offset: [0, 8],
  placement: 'right',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
  trigger: 'click'
};
const DefaultType$2 = {
  ...Tooltip.DefaultType,
  content: '(null|string|element|function)'
};

/**
 * Class definition
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }
  static get DefaultType() {
    return DefaultType$2;
  }
  static get NAME() {
    return NAME$3;
  }

  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }

  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Popover.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * jQuery
 */

defineJQueryPlugin(Popover);

/**
 * --------------------------------------------------------------------------
 * Bootstrap scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = '.data-api';
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = '[href]';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: '0px 0px -25%',
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
const DefaultType$1 = {
  offset: '(number|null)',
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: 'string',
  smoothScroll: 'boolean',
  target: 'element',
  threshold: 'array'
};

/**
 * Class definition
 */

class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config);

    // this._element is the observablesContainer and config.target the menu links wrapper
    this._targetLinks = new Map();
    this._observableSections = new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh(); // initialize
  }

  // Getters
  static get Default() {
    return Default$1;
  }
  static get DefaultType() {
    return DefaultType$1;
  }
  static get NAME() {
    return NAME$2;
  }

  // Public
  refresh() {
    this._initializeTargetsAndObservables();
    this._maybeEnableSmoothScroll();
    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }
    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }
  dispose() {
    this._observer.disconnect();
    super.dispose();
  }

  // Private
  _configAfterMerge(config) {
    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
    config.target = getElement(config.target) || document.body;

    // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
    if (typeof config.threshold === 'string') {
      config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
    }
    return config;
  }
  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    }

    // unregister any previous listeners
    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
      const observableSection = this._observableSections.get(event.target.hash);
      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;
        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: 'smooth'
          });
          return;
        }

        // Chrome 60 doesn't support `scrollTo`
        root.scrollTop = height;
      }
    });
  }
  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver(entries => this._observerCallback(entries), options);
  }

  // The logic of selection
  _observerCallback(entries) {
    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
    const activate = entry => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
      this._process(targetElement(entry));
    };
    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;
        this._clearActiveClass(targetElement(entry));
        continue;
      }
      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      // if we are scrolling down, pick the bigger offsetTop
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry);
        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
        if (!parentScrollTop) {
          return;
        }
        continue;
      }

      // if we are scrolling up, pick the smallest offsetTop
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = new Map();
    this._observableSections = new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
    for (const anchor of targetLinks) {
      // ensure that the anchor has an id and is not disabled
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }
      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

      // ensure that the observableSection exists & is visible
      if (isVisible(observableSection)) {
        this._targetLinks.set(decodeURI(anchor.hash), anchor);
        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }
  _process(target) {
    if (this._activeTarget === target) {
      return;
    }
    this._clearActiveClass(this._config.target);
    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);
    this._activateParents(target);
    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }
  _activateParents(target) {
    // Activate dropdown parents
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }
  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = ScrollSpy.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(ScrollSpy);

/**
 * --------------------------------------------------------------------------
 * Bootstrap tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const CLASS_DROPDOWN = 'dropdown';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = '.nav-item, .list-group-item';
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

/**
 * Class definition
 */

class Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
    if (!this._parent) {
      return;
      // TODO: should throw exception in v6
      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
    }

    // Set up initial aria attributes
    this._setInitialAttributes(this._parent, this._getChildren());
    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
  }

  // Getters
  static get NAME() {
    return NAME$1;
  }

  // Public
  show() {
    // Shows this elem and deactivate the active sibling if exists
    const innerElem = this._element;
    if (this._elemIsActive(innerElem)) {
      return;
    }

    // Search for active tab on same parent to deactivate it
    const active = this._getActiveElem();
    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });
    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }
    this._deactivate(active, innerElem);
    this._activate(innerElem, active);
  }

  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.add(CLASS_NAME_ACTIVE);
    this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }
      element.removeAttribute('tabindex');
      element.setAttribute('aria-selected', true);
      this._toggleDropDown(element, true);
      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();
    this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }
      element.setAttribute('aria-selected', false);
      element.setAttribute('tabindex', '-1');
      this._toggleDropDown(element, false);
      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
      return;
    }
    event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
    event.preventDefault();
    const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
    const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);
    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }
  _getChildren() {
    // collection of inner elements
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find(child => this._elemIsActive(child)) || null;
  }
  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, 'role', 'tablist');
    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }
  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);
    const isActive = this._elemIsActive(child);
    const outerElem = this._getOuterElement(child);
    child.setAttribute('aria-selected', isActive);
    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
    }
    if (!isActive) {
      child.setAttribute('tabindex', '-1');
    }
    this._setAttributeIfNotExists(child, 'role', 'tab');

    // set attributes to the related panel too
    this._setInitialAttributesOnTargetPanel(child);
  }
  _setInitialAttributesOnTargetPanel(child) {
    const target = SelectorEngine.getElementFromSelector(child);
    if (!target) {
      return;
    }
    this._setAttributeIfNotExists(target, 'role', 'tabpanel');
    if (child.id) {
      this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
    }
  }
  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }
    const toggle = (selector, className) => {
      const element = SelectorEngine.findOne(selector, outerElem);
      if (element) {
        element.classList.toggle(className, open);
      }
    };
    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute('aria-expanded', open);
  }
  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }
  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  }

  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  }

  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tab.getOrCreateInstance(this);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});

/**
 * Initialize on focus
 */
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Tab);

/**
 * --------------------------------------------------------------------------
 * Bootstrap toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5000
};

/**
 * Class definition
 */

class Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;
    this._setListeners();
  }

  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }

  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._clearTimeout();
    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }
    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);
      EventHandler.trigger(this._element, EVENT_SHOWN);
      this._maybeScheduleHide();
    };
    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.classList.add(CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout();
    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
    super.dispose();
  }
  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  }

  // Private

  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }
    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        {
          this._hasMouseInteraction = isInteracting;
          break;
        }
      case 'focusin':
      case 'focusout':
        {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
    }
    if (isInteracting) {
      this._clearTimeout();
      return;
    }
    const nextElement = event.relatedTarget;
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }
    this._maybeScheduleHide();
  }
  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }
  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Toast.getOrCreateInstance(this, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      }
    });
  }
}

/**
 * Data API implementation
 */

enableDismissTrigger(Toast);

/**
 * jQuery
 */

defineJQueryPlugin(Toast);


//# sourceMappingURL=bootstrap.esm.js.map


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/renovation.script.js":
/*!*************************************!*\
  !*** ./src/js/renovation.script.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");



var icons = {
  "1_cube": [489.4, 512, [], "e001", "M244.7,0L0,106v300l244.7,106l244.7-106V106L244.7,0z M460,113.5l-215.3,93l-214.6-93l214.6-93.7L460,113.5z M18.5,128.5  l217.4,93.7v265.9L18.5,394.4V128.5z M254.3,488.1V222.2l217.4-93.7v265.9L254.3,488.1z"],
  "2_pyramid": [552.6, 512, [], "e002", "M276.7,0L0,512h552.6L276.7,0z M266.1,348.9L42.9,475.2L266.1,62.4V348.9z M276.7,366.1L497,490.9H55.6  C55.6,491.7,276.7,366.1,276.7,366.1z M286.4,348.9V61.7l223.3,413.5L286.4,348.9L286.4,348.9z"],
  "3_dodecahedron": [552, 512, [], "e003", "M445.9,38.4L375.2,0H176l-70.7,38.4L0,218.3v74.6l100.7,171.4l74.6,47.7h201.4l74.6-47.7L552,292.9v-74.6  C551.2,218.3,445.9,38.4,445.9,38.4z M528.1,219.9L432.8,326L286,240.6v-153l147.6-30L528.1,219.9L528.1,219.9z M365.9,491.2H185.3  l-56.1-146.8L276,259.8l146.8,84.6L365.9,491.2z M181.4,20.8h189.1L409,41.5L275.2,68.4L143,41.5L181.4,20.8z M117.6,57.7l147.6,30  v153L118.4,326L23.1,219.9L117.6,57.7L117.6,57.7z M20.8,287.5v-39.2l86.1,96.1l50,130.7L116.1,449L20.8,287.5L20.8,287.5z   M435.1,449l-40.7,26.1l50-130.7l86.1-96.1v39.2L435.1,449L435.1,449z"],
  "4_polyhedron": [490.2, 512, [], "e004", "M251.2,2.7L244.4,0l-6.1,2.7L0,105.8v300.4l7.5,3.4L245.1,512l237.6-102.4l7.5-3.4V105.8L251.2,2.7L251.2,2.7z M463.5,390.5  H25.9L244.4,28L463.5,390.5z M18.4,118.1L221.9,30L18.4,366.6V118.1z M244.4,491.5L53.9,408.9h380.9L244.4,491.5z M267.6,30  L471,118.1v248.5L267.6,30L267.6,30z"],
  "5_icosahedron": [490.2, 512, [], "e005", "M251.2,2.7L245.1,0l-6.1,2.7L0,105.8v300.4l7.5,3.4L245.1,512l237.6-102.4l7.5-3.4V105.8L251.2,2.7L251.2,2.7z M459.4,113.3  l-112,48.5L267.6,30L459.4,113.3L459.4,113.3z M329,183l-84,193.9L160.4,183H329z M162.5,163.8L244.4,28l81.9,135.9H162.5  L162.5,163.8z M144.7,193.9l86,197.3H25.9L144.7,193.9L144.7,193.9z M344.7,193.9l118.8,197.3H258.7L344.7,193.9L344.7,193.9z   M221.9,30l-79.2,131.8L30,113.3l0,0L221.9,30z M18.4,128.3l114.7,49.2l0,0L18.4,366.6V128.3z M235.5,408.9v78.5L53.9,408.9H235.5z   M254,487.4L254,487.4v-78.5h180.9C435.5,408.9,254,487.4,254,487.4z M357,177.5L357,177.5l114-49.2v238.3L357,177.5z"],
  "6_hexagon_beehive": [498.1, 512, [], "e006", "M498.1,174L445,81.6h-95.5L302.6,0h-107l-47,81.6H53.1L0,174l47,81.6L0,338l53.1,92.4h95.5l47,81.6h107l47-81.6h94.7  l53.1-92.4l-47-81.6C450.4,256.4,498.1,174,498.1,174z M473.5,174l-41.6,71.6h-81.6L308.7,174l41.6-71.6h82.4  C432.7,102.4,473.5,174,473.5,174z M291,328h-83.9l-41.6-71.6l41.6-71.6h83.2l41.6,71.6L291,328z M207.9,20.8h82.4l41.6,71.6  L290.3,164h-82.4l-40.8-71.6L207.9,20.8z M65.4,102.4h82.4l41.6,71.6l-41.6,71.6H65.4L23.9,174L65.4,102.4z M23.9,338l41.6-71.6  h82.4l41.6,71.6l-41.6,71.6H65.4L23.9,338z M290.3,492h-82.4l-41.6-71.6l41.6-71.6h82.4l41.6,71.6L290.3,492z M432.7,409.6h-82.4  L308.7,338l41.6-71.6h82.4l41.6,71.6L432.7,409.6z"],
  "7_bee_with_hexagon_beehive": [393.2, 512, [], "e007", "M392.4,58.4L358.5,0h-67.1L263,48.9h-56l-33.1,57.6l33.9,58.4h56l28.4,48.9h67.1l33.9-58.4l-28.4-48.9L392.4,58.4  L392.4,58.4z M302.4,18.9h45.8l22.9,39.4l-22.9,39.4h-45.8l-22.9-39.4L302.4,18.9L302.4,18.9z M195.2,106.5L218,67.1h45l22.9,39.4  L263,145.9h-45.8L195.2,106.5L195.2,106.5z M348.2,194.9h-45.8l-22.9-39.4l22.9-39.4h45.8l22.9,39.4L348.2,194.9L348.2,194.9z   M219.6,250.1c-2.4-15-9.5-27.6-19.7-37.9l17.4-25.2l-15.8-10.3L184.1,202c-7.9-3.9-17.4-6.3-26.8-6.3c-9.5,0-18.9,2.4-26.8,6.3  l-17.4-25.2L97.3,187l17.4,25.2c-10.3,9.5-17.4,22.9-19.7,37.9H219.6L219.6,250.1z M310.3,397.6c-9.5-29.2-64.7-122.3-95.5-116H94.2  c-31.6,3.2-82,88.4-91.5,116c-9.5,30,7.1,62.3,37.1,71.8c19.7,6.3,40.2,1.6,54.4-11c4.7,30.8,30.8,53.6,62.3,53.6  s57.6-23.7,62.3-53.6c14.2,12.6,34.7,17.4,54.4,11C303.2,459.9,319.8,427.6,310.3,397.6L310.3,397.6z M120.2,337.7h73.4  c-0.8,10.3-0.8,21.3,0,31.6h-73.4C120.2,359,120.2,347.9,120.2,337.7L120.2,337.7z M95,457.6c7.1-6.3,13.4-15,16.6-25.2  c0.8-1.6,1.6-3.9,1.6-6.3h86.8c0.8,2.4,0.8,4.7,1.6,6.3c3.2,10.3,9.5,18.9,16.6,25.2C218.8,457.6,95,457.6,95,457.6z"],
  "8_bee": [479.7, 512, [], "e008", "M144.9,110.7h190.8c-3.1-24.3-15.7-45.5-33-60.5l25.9-38.5L310.6,0l-25.9,38.5c-13.3-7.1-28.3-11-44.8-11s-31.4,3.9-44.8,11  L169.2,0l-17.3,11.8l25.9,38.5C159.8,65.2,148,86.4,144.9,110.7L144.9,110.7z M475.5,336.9c-14.9-45.5-99.7-187.7-146.1-178.3H143.3  c-47.9,4.7-125.6,135.1-139,178.3c-14.9,45.5,10.2,95,56.5,109.9c29.8,9.4,61.3,1.6,84-17.3c7.1,46.3,47.1,82.5,95.8,82.5  s88.7-36.1,95.8-82.5c22,18.8,53.4,26.7,83.2,17.3C464.5,431.1,490.4,382.4,475.5,336.9z M296.4,245c-0.8,15.7-0.8,32.2,0,48.7  H184.1c0.8-16.5,0.8-33,0-48.7H296.4z M145.6,428.8c11-10.2,20.4-22.8,25.1-38.5c0.8-3.1,1.6-6.3,2.4-10.2h133.5  c0.8,3.1,1.6,7.1,2.4,9.4c4.7,15.7,14.1,29.1,25.9,39.3H145.6z"],
  "A_a_mountain": [1623.4, 512, [], "e009", "M820.6,219.8c19.1,16.4,42.3,32.8,61.4,46.4c-49.2,6.8-99.7,6.8-121.5,5.5C797.4,244.4,820.6,219.8,820.6,219.8z   M1226.1,58.7c17.7,10.9-8.2,28.7,42.3,43.7c30,8.2,38.2,38.2,56,58.7c13.7,15,41,17.7,45.1,41c2.7,19.1-5.5,13.7,27.3,30  c45.1,23.2,17.7,49.2,62.8,86c24.6,20.5-28.7,41,46.4,56c23.2,5.5-1.4,21.8,39.6,25.9c19.1,2.7,38.2,36.9,39.6,49.2  c1.4,16.4,16.4,15,23.2,24.6c10.9,15,15,38.2,15,38.2H0c0,0,5.5-24.6,30-30c35.5-8.2,32.8-23.2,56-31.4c20.5-6.8,9.6-38.2,41-45.1  c57.3-13.7,73.7-75.1,133.8-83.3c43.7-6.8,49.2-25.9,103.8-25.9c36.9,0,65.5-36.9,76.5-50.5c6.8-9.6,19.1-15,30-15  c38.2-2.7,51.9-9.6,71-9.6c23.2,0,27.3,6.8,41-4.1c13.7-10.9,4.1-23.2,31.4-28.7c25.9-5.5,31.4,0,45.1-13.7  c15-13.7,10.9-34.1,28.7-51.9s28.7-47.8,62.8-50.5c34.1-4.1,17.7,4.1,50.5-2.7c-5.5-8.2-27.3-23.2-9.6-27.3  c27.3-10.9,25.9-25.9,46.4-31.4c13.7-4.1,27.3-4.1,35.5-4.1c6.8,0,13.7,0,20.5-1.4C916.1,2.7,957.1,0,989.9,0  c45.1,1.4,56,34.1,56,34.1c50.5-9.6,72.4,17.7,107.9,24.6C1155.1,21.8,1208.3,47.8,1226.1,58.7L1226.1,58.7z M1009,299h-30  c-65.5-38.2-122.9-79.2-122.9-79.2h13.7v-24.6H763.2v25.9h16.4c-45.1,46.4-148.8,103.8-148.8,103.8h-30v27.3h96.9v-27.3h-15  c17.7-9.6,35.5-20.5,50.5-31.4c90.1,5.5,151.6-4.1,169.3-8.2c15,9.6,24.6,16.4,24.6,16.4h-21.8V329h102.4L1009,299L1009,299z"],
  "B_old_main": [1005.1, 512, [], "e010", "M605.6,328.4H501.2c0,0-0.9,0-3.6,0v61.2h0.9h1.8v48.6c0,0,0,0.9,0,1.8h109.8c0-0.9,0-1.8,0-1.8v-47.7h1.8h0.9v-61.2  L605.6,328.4L605.6,328.4z M567.8,405.8h-27.9v-42.3c0-5.4,6.3-10.8,13.5-10.8s13.5,4.5,13.5,10.8L567.8,405.8L567.8,405.8z   M494.9,458c-0.9,2.7-1.8,5.4-3.6,8.1h125.1c-0.9-2.7-1.8-5.4-2.7-8.1H494.9L494.9,458z M498.5,448.1c-0.9,2.7-1.8,5.4-2.7,8.1h117  c-0.9-2.7-1.8-5.4-1.8-8.1H498.5L498.5,448.1z M490.4,467.9c-1.8,2.7-2.7,5.4-5.4,8.1h136.8c-1.8-2.7-2.7-5.4-4.5-8.1H490.4z   M500.3,438.2c0,1.8-0.9,4.5-1.8,8.1h111.6c-0.9-3.6-0.9-6.3-0.9-8.1C610.1,438.2,500.3,438.2,500.3,438.2z M467,436.4h11.7v0.9  c9-18.9,10.8-35.1,10.8-43.2H467V436.4z M491.3,299.6l-81.9,7.2V305v21.6l81.9-6.3V299.6z M620,299.6v20.7l76.5,4.5V305v1.8  L620,299.6z M565.1,402.2h-22.5v-35.1c0-4.5,5.4-9,10.8-9s10.8,3.6,10.8,9v35.1H565.1z M639.8,495.8c-3.6-2.7-6.3-5.4-9-8.1l0,0  H475.1c-2.7,2.7-6.3,5.4-9.9,8.1H639.8z M484.1,477.8c-1.8,2.7-4.5,5.4-7.2,8.1H629c-1.8-2.7-4.5-5.4-6.3-8.1H484.1z M409.4,394.1  h24.3v42.3h-24.3V394.1z M621.8,394.1c0.9,8.1,2.7,24.3,9.9,42.3h14.4v-42.3H621.8z M620,329.3v60.3h1.8c0,0,0,0,0,0.9H647v-10.8  c0-7.2,7.2-13.5,17.1-13.5s17.1,6.3,17.1,13.5v10.8h16.2v-56.7L620,329.3L620,329.3z M424.7,462.5h2.7c-0.9-0.9-1.8-2.7-1.8-4.5  c0-2.7,2.7-5.4,6.3-4.5c2.7,0,5.4,2.7,4.5,6.3c0,0.9-0.9,2.7-1.8,2.7h1.8l6.3,9v2.7c18-11.7,28.8-25.2,36-38.7h-68.4v72h8.1v-35.1  L424.7,462.5L424.7,462.5z M680.3,394.1v42.3h16.2v1.8h-63c6.3,13.5,16.2,27.9,31.5,38.7v-2.7l6.3-9h1.8c-0.9-0.9-1.8-1.8-1.8-3.6  c0-2.7,1.8-5.4,4.5-6.3c2.7,0,5.4,1.8,6.3,4.5c0,1.8-0.9,3.6-1.8,4.5h2.7l6.3,9.9v35.1h8.1v-117L680.3,394.1L680.3,394.1z   M442.7,507.5L442.7,507.5L442.7,507.5z M441.8,485.9v25.2c13.5-5.4,24.3-12.6,32.4-20.7l0,0l0,0c24.3-23.4,24.3-52.2,24.3-52.2  v-32.4C491.3,467,441.8,485.9,441.8,485.9z M612.8,406.7v31.5c0,0.9,0,39.6,31.5,62.1l0,0c5.4,4.5,12.6,8.1,20.7,10.8v-25.2  C665,485.9,620,467,612.8,406.7z M578.6,319.4h26.1l9,0.9v-21.6h-35.1V319.4z M497.6,319.4h2.7h27v-20.7h-29.7V319.4z M433.7,390.5  v-10.8c0-7.2,7.2-13.5,17.1-13.5c9.9,0,17.1,6.3,17.1,13.5v10.8h22.5v-0.9h1.8v-61.2c-20.7,0.9-68.4,3.6-81.9,4.5v56.7  C409.4,390.5,433.7,390.5,433.7,390.5z M660.5,507.5c-7.2-2.7-12.6-6.3-18-9.9h-180c-5.4,3.6-10.8,6.3-18,9.9H660.5z M1003.3,184.5  l-57.6-63h-62.1l51.3,63H1003.3z M743.3,327.5h27v14.4h-27V327.5z M825.1,327.5h27v14.4h-27V327.5z M798.1,200.7  c-7.2,0-12.6,5.4-13.5,12.6h26.1C810.7,206.1,805.3,200.7,798.1,200.7L798.1,200.7z M785.5,327.5h27v14.4h-27V327.5z M787.3,293.3  h24.3v14.4h-24.3V293.3z M867.4,293.3h24.3v14.4h-24.3V293.3z M756.8,200.7c-7.2,0-12.6,5.4-13.5,12.6h26.1  C769.3,206.1,764,200.7,756.8,200.7L756.8,200.7z M746,293.3h24.3v14.4H746V293.3z M880,200.7c-7.2,0-12.6,5.4-13.5,12.6h26.1  C892.6,206.1,886.3,200.7,880,200.7L880,200.7z M865.6,327.5h27v14.4h-27V327.5z M839.5,200.7c-7.2,0-12.6,5.4-13.5,12.6h26.1  C852.1,206.1,846.7,200.7,839.5,200.7L839.5,200.7z M826,293.3h24.3v14.4H826V293.3z M821.5,49.5L817,1.8l-3.6,48.6L701,180.9V512  h231.3V188.1C931.3,188.1,821.5,49.5,821.5,49.5z M864.7,214.2c0-8.1,7.2-15.3,15.3-15.3c8.1,0,15.3,7.2,15.3,15.3l0,0l0,0v68.4  h-28.8v-67.5h-1.8V214.2z M893.5,291.5v18h-28.8v-18H893.5z M817,53.1l27.9,34.2h-57.6L817,53.1z M832.3,126.9v45h-27.9v-45  c0-5.4,6.3-9.9,13.5-9.9S832.3,121.5,832.3,126.9L832.3,126.9z M741.5,214.2c0-8.1,7.2-15.3,15.3-15.3c8.1,0,15.3,7.2,15.3,15.3v0.9  h-0.9v67.5h-28.8v-67.5h-0.9V214.2z M772,291.5v18h-28.8v-18H772z M741.5,343.7v-18h31.5v18H772v67.5h-28.8v-67.5H741.5z M772,504.8  h-28.8v-68.4H772V504.8z M775.6,130.5c0-5.4,4.5-9,9-9c4.5,0,9,4.5,9,9v41.4h-18.9v-41.4H775.6z M782.8,214.2  c0-8.1,7.2-15.3,15.3-15.3c8.1,0,15.3,7.2,15.3,15.3v0.9h-0.9v67.5h-28.8v-67.5h-0.9V214.2z M813.4,291.5v18h-28.8v-18H813.4z   M813.4,504.8h-28.8v-68.4h28.8V504.8z M814.3,343.7h-0.9v67.5h-28.8v-67.5h-0.9v-18h31.5v18H814.3z M853,504.8h-28.8v-68.4H853  V504.8z M853.9,343.7H853v67.5h-28.8v-67.5h-0.9v-18h31.5v18H853.9z M824.2,309.5v-18H853v18H824.2z M854.8,215.1h-0.9v67.5h-28.8  v-67.5h-0.9v-0.9c0-8.1,7.2-15.3,15.3-15.3c8.1,0,15.3,7.2,15.3,15.3C854.8,213.3,854.8,215.1,854.8,215.1z M861.1,171h-18.9v-41.4  c0-5.4,4.5-9,9-9s9,4.5,9,9V171H861.1z M895.3,504.8h-28.8v-68.4h28.8V504.8z M895.3,343.7h-0.9v67.5h-28.8v-67.5h-1.8v-18h31.5  V343.7z M198,200.7c-7.2,0-12.6,5.4-13.5,12.6h27C210.6,206.1,204.3,200.7,198,200.7L198,200.7z M239.4,200.7  c-7.2,0-12.6,5.4-13.5,12.6h27C252.9,206.1,246.6,200.7,239.4,200.7L239.4,200.7z M223.2,327.5h29.7v14.4h-29.7V327.5z M263.6,327.5  h29.7v14.4h-29.7V327.5z M122.4,293.3h24.3v14.4h-24.3V293.3z M283.4,200.7c-7.2,0-12.6,5.4-13.5,12.6H296  C296,206.1,289.7,200.7,283.4,200.7L283.4,200.7z M118.8,327.5h29.7v14.4h-29.7V327.5z M180.9,327.5h29.7v14.4h-29.7V327.5z   M331.1,293.3h24.3v14.4h-24.3V293.3z M325.7,327.5h29.7v14.4h-29.7V327.5z M244.8,47.7L240.3,0l-3.6,49.5L73.8,180.9V512h332V188.1  C405.8,188.1,244.8,47.7,244.8,47.7z M283.4,130.5v41.4h-18.9v-41.4c0-5.4,4.5-9,9-9S283.4,125.1,283.4,130.5z M240.3,53.1L278,87.3  h-77.4C201.6,87.3,240.3,53.1,240.3,53.1z M254.7,126.9v45h-27.9v-45c0-5.4,6.3-9.9,13.5-9.9C247.5,117,254.7,121.5,254.7,126.9  L254.7,126.9z M121.5,214.2h28.8v68.4h-28.8C121.5,282.5,121.5,214.2,121.5,214.2z M120.6,291.5h28.8v18h-27.9  C120.6,309.5,120.6,291.5,120.6,291.5z M142.2,504.8h-27.9v-68.4h27.9C142.2,436.4,142.2,504.8,142.2,504.8z M151.2,343.7h-0.9v67.5  h-32.4v-67.5H117v-18h34.2V343.7z M210.6,504.8h-28.8v-68.4h28.8V504.8z M213.3,343.7h-0.9v67.5H180v-67.5h-0.9v-18h34.2  C213.3,325.7,213.3,343.7,213.3,343.7z M213.3,215.1h-0.9v67.5h-28.8v-67.5h-0.9v-0.9c0-8.1,7.2-15.3,15.3-15.3s15.3,7.2,15.3,15.3  V215.1z M216,171.9h-18v-41.4c0-5.4,4.5-9,9-9c4.5,0,9,4.5,9,9V171.9z M252,504.8h-28.8v-68.4H252V504.8z M254.7,343.7h-0.9v67.5  h-32.4v-67.5h-0.9v-18h34.2C254.7,325.7,254.7,343.7,254.7,343.7z M254.7,215.1h-0.9v67.5H225v-67.5h-0.9v-0.9  c0-8.1,7.2-15.3,15.3-15.3c8.1,0,15.3,7.2,15.3,15.3V215.1z M292.4,504.8h-27.9v-68.4h27.9V504.8z M295.1,343.7h-0.9v67.5h-32.4  v-67.5h-0.9v-18h34.2V343.7z M298.7,215.1h-0.9v67.5H269v-67.5h-0.9v-0.9c0-8.1,7.2-15.3,15.3-15.3s15.3,7.2,15.3,15.3V215.1z   M354.5,504.8h-28.8v-68.4h28.8V504.8z M357.2,343.7h-0.9v67.5h-32.4v-67.5H323v-18h34.2V343.7z M357.2,309.5h-28.8v-18h28.8V309.5z   M358.1,282.5h-28.8v-68.4h28.8V282.5z M558.8,73.8l-5.4-51.3l-3.6,51.3L491.3,108l4.5,19.8v67.5h117v-72.9l4.5-12.6L558.8,73.8  L558.8,73.8z M539,183.6h-18.9v-41.4c0-5.4,4.5-9,9-9s9,4.5,9,9v41.4H539z M563.3,183.6h-18.9v-41.4c0-5.4,4.5-9,9-9s9,4.5,9,9v41.4  H563.3z M587.6,183.6h-18.9v-41.4c0-5.4,4.5-9,9-9s9,4.5,9,9v41.4H587.6z M596.6,108l-42.3-27.9L511.1,108h-9l53.1-31.5l51.3,31.5  C605.6,108,596.6,108,596.6,108z M409.4,208.8l81.9-12.6v-68.4l-0.9-6.3H335.6l73.8,64.8V208.8z M696.5,208.8v-27.9l50.4-59.4H617.3  v74.7L696.5,208.8z M409.4,225.9v77.4l81.9-8.1v-81C465.2,216.9,437.3,220.5,409.4,225.9z M453.5,296.9h-23.4v-60.3h23.4V296.9z   M620,216V296l76.5,7.2v-77.4C685.7,224.1,658.7,218.7,620,216L620,216z M679.4,296.9H656v-60.3h23.4V296.9z M497.6,214.2v81h29.7  v-58.5h51.3v58.5h35.1v-80.1C580.4,212.4,540.8,211.5,497.6,214.2z M957.4,293.3h24.3v14.4h-24.3V293.3z M936.7,188.1v323h68.4v-323  H936.7z M956.5,214.2h28.8v68.4h-28.8V214.2z M955.6,291.5h28.8v18h-28.8V291.5z M986.2,411.2h-32.4v-68.4h32.4  C986.2,342.8,986.2,411.2,986.2,411.2z M70.2,179.1l70.2-57.6H71.1L1.8,179.1H70.2z M0,182.7V512h68.4V182.7H0z M19.8,214.2h28.8  v68.4H19.8V214.2z M18.9,291.5h27.9v18H18.9V291.5z M49.5,411.2H17.1v-68.4h32.4V411.2z M696.5,216.9l-82.8-13.5H494l-81.9,13.5  v-4.5l81.9-12.6h120.6l81.9,12.6V216.9z"],
  "C_arizona_heart": [431, 512, [], "e011", "M56.5,0c0,0.8,0,1.6,0,2.4c-0.8,20.9-0.8,41-0.8,61.9c0,1.6,0,4,0,5.6c0.8,3.2,0,5.6-1.6,8.8c-1.6,1.6-3.2,4-3.2,5.6  c-0.8,4-1.6,5.6-5.6,6.4c-1.6,0.8-2.4,1.6-4,0c-0.8-1.6-2.4-1.6-3.2-3.2c-1.6-1.6-2.4-4-4-5.6c-0.8-3.2-3.2-3.2-5.6-1.6  c-1.6,0-3.2,0-4.8,0c-2.4-0.8-9.6-0.8-12.1,0.8c-1.6,0.8-3.2,1.6-4.8,2.4c-2.4,0.8-3.2,1.6-2.4,4.8c0,1.6,0.8,3.2,0.8,4  c-1.6,2.4-0.8,4.8,0.8,7.2c1.6,2.4,2.4,4,4,6.4c-2.4,0.8-3.2,4.8-3.2,6.4c0.8,3.2,1.6,7.2,1.6,10.4c0,0,0,0,0,0.8  c0,1.6,0.8,2.4,0.8,4c0,0.8,1.6,1.6,0.8,2.4c-1.6,1.6-0.8,4,0,5.6c0,0.8,0,1.6,0,1.6c-2.4,3.2-0.8,5.6,0.8,7.2  c5.6,8,5.6,16.9,6.4,25.7c0,1.6,0,2.4-2.4,3.2s-3.2,2.4-1.6,4s1.6,2.4,0,4c-0.8,0.8-1.6,1.6-1.6,2.4c0,4,0,7.2,0,10.4  c0,0.8,0,2.4,0.8,3.2c2.4,2.4,4,5.6,4.8,8c0.8,1.6,1.6,2.4,3.2,3.2c3.2,1.6,4.8,4.8,5.6,8c0.8,3.2,1.6,6.4,3.2,9.6  c0.8,1.6,0.8,3.2,0.8,5.6c0,1.6,0,4,2.4,4c1.6,0,3.2,0.8,4,2.4c2.4,1.6,4.8,4,8,6.4c2.4,1.6,4,4.8,4,7.2c-1.6,0.8-2.4,1.6-3.2,2.4  c-1.6,1.6-2.4,3.2-4.8,4.8c-4,2.4-8,4-11.3,6.4c-1.6,0.8-3.2,3.2-3.2,4c0.8,4.8-1.6,7.2-4.8,9.6c-0.8,0.8-2.4,3.2-2.4,4  c1.6,3.2,0,7.2,0.8,10.4c0.8,2.4,0.8,4.8,1.6,7.2c0.8,1.6,0.8,2.4-0.8,3.2l-0.8,0.8c0,3.2,0,7.2,0,10.4c-2.4,4-4.8,7.2-7.2,11.3  c0,0.8-1.6,1.6-2.4,1.6c-4,0-4,0.8-3.2,4.8c0,1.6-0.8,3.2-0.8,4.8c0,0.8,0,2.4,0,3.2c1.6,0.8,2.4,2.4,2.4,4.8c0,2.4,0,5.6-0.8,8  c-1.6,4,0,6.4,1.6,8.8c1.6,1.6,4.8,1.6,7.2,1.6c1.6,0,4,0,4,0.8c2.4,0,3.2,2.4,4,4c0,0.8,0,2.4,0.8,3.2c0.8,1.6-0.8,6.4-1.6,7.2  c-1.6,0.8-1.6,2.4-3.2,4c-0.8,0.8-0.8,1.6-1.6,2.4c-2.4,2.4-5.6,1.6-8,0.8s-3.2,0-4,1.6c-1.6,3.2-2.4,7.2-6.4,8.8v1.6  c0,2.4,0.8,4.8,0,7.2c-0.8,2.4,0.8,3.2,2.4,4c91.6,33.8,182.5,66.7,273.3,100.5c1.6,0.8,4,0.8,5.6,0.8c49,0,97.3,0,146.3,0  c0.8,0,2.4,0,3.2,0V0H56.5z M259,305.4c-2.4,5.6-5.6,10.4-9.6,14.5c-9.6,10.4-20.1,20.1-30.5,29.7c-0.8,0.8-1.6,1.6-2.4,1.6h-0.8  c-4-3.2-8.8-7.2-12.9-10.4c-5.6-5.6-12.1-10.4-16.9-16.9c-4-4.8-8-8.8-11.3-14.5c-2.4-4-4-8-4.8-12.9c-0.8-7.2,0.8-13.7,5.6-19.3  c10.4-12.9,29.7-12.9,40.2,0c0,0,0,0,0.8,0.8c1.6-1.6,2.4-2.4,4-4c7.2-6.4,16.1-8,25.7-4.8s14.5,10.4,16.9,20.1  C262.2,295.8,260.6,300.6,259,305.4L259,305.4z"],
  "D_arizona": [431, 512, [], "e012", "M56.5,0c0,0.8,0,1.6,0,2.4c0,20.9,0,41,0,61.9c0,1.6,0,4,0,5.6c0.8,3.2,0,5.6-1.6,8.8c-1.6,1.6-3.2,4-3.2,5.6  c-0.8,4-1.6,5.6-5.6,6.4c-1.6,0.8-2.4,1.6-4,0c-0.8-1.6-2.4-1.6-3.2-3.2c-1.6-1.6-2.4-4-4-5.6c-1.6-3.2-4-3.2-6.4-1.6  c-1.6,0-3.2,0-4.8,0c-2.4-0.8-9.6-0.8-12.1,0.8c-1.6,0.8-3.2,1.6-4.8,2.4c-2.4,0.8-3.2,1.6-2.4,4.8c0,1.6,0.8,3.2,0,4  c-1.6,2.4-0.8,4.8,0.8,7.2c1.6,2.4,2.4,4,4,6.4c-1.6,0.8-2.4,4.8-2.4,6.4c0.8,3.2,1.6,7.2,1.6,10.4c0,0,0,0,0,0.8  c0,1.6,0.8,2.4,0.8,4c0,0.8,1.6,1.6,0.8,2.4c-1.6,1.6-0.8,4,0,5.6c0,0.8,0,1.6,0,1.6c-2.4,3.2-0.8,5.6,0.8,7.2  c5.6,8,5.6,16.9,6.4,25.7c0,1.6,0,2.4-2.4,3.2s-3.2,2.4-1.6,4s1.6,2.4,0,4c-0.8,0.8-1.6,1.6-1.6,2.4c0,4,0,7.2,0,10.4  c0,0.8,0,2.4,0.8,3.2c2.4,2.4,4,5.6,4.8,8c0.8,1.6,1.6,2.4,3.2,3.2c3.2,1.6,4.8,4.8,5.6,8c0.8,3.2,1.6,6.4,3.2,9.6  c0.8,1.6,0.8,3.2,0.8,5.6c0,1.6,0,4,2.4,4c1.6,0,3.2,0.8,4,2.4c2.4,1.6,4.8,4,8,6.4c2.4,1.6,4,4.8,4,7.2c-1.6,0.8-2.4,1.6-3.2,2.4  c-1.6,1.6-2.4,3.2-4.8,4.8c-4,2.4-8,4-11.3,6.4c-1.6,0.8-3.2,3.2-3.2,4c0.8,4.8-1.6,7.2-4.8,9.6c-0.8,0.8-2.4,3.2-2.4,4  c1.6,3.2,0,7.2,0.8,10.4c0.8,2.4,0.8,4.8,1.6,7.2c0.8,1.6,0.8,2.4-0.8,3.2l-0.8,0.8c0,3.2,0,7.2,0,10.4c-2.4,4-4.8,7.2-7.2,11.3  c0,0.8-1.6,1.6-2.4,1.6c-4,0-4,0.8-3.2,4.8c0,1.6-0.8,3.2-0.8,4.8c0,0.8,0,2.4,0,3.2c1.6,0.8,2.4,2.4,2.4,4.8c0,2.4,0,5.6-0.8,8  c-1.6,4,0,6.4,1.6,8.8c1.6,1.6,4.8,1.6,7.2,1.6c1.6,0,4,0,4,0.8c2.4,0,3.2,2.4,4,4c0,0.8,0,2.4,0.8,3.2c0.8,1.6-0.8,6.4-1.6,7.2  c-1.6,0.8-1.6,2.4-3.2,4c-0.8,0.8-0.8,1.6-1.6,2.4c-2.4,2.4-5.6,1.6-8,0.8s-3.2,0-4,1.6c-1.6,3.2-2.4,7.2-6.4,8.8v1.6  c0,2.4,0.8,4.8,0,7.2c-0.8,2.4,0.8,3.2,2.4,4c91.6,33.8,182.5,66.7,273.3,100.5c1.6,0.8,4,0.8,5.6,0.8c49,0,97.3,0,146.3,0  c0.8,0,2.4,0,3.2,0V0H56.5z"],
  "E_hand_pitchfork_solid": [350.6, 512, [], "e013", "M208.7,117.1l1.4-4.1c7.5-25.2,20.5-69.6,24.6-83.2l2-7.5c0,0,1.4-5.5-1.4-10.9c-4.1-4.1-10.2-8.2-18.4-10.2  c-8.2-2-15-1.4-20.5,2c-5.5,4.1-7.5,10.2-7.5,11.6l0,0v0.7c0,0.7-16.4,56.6-25.9,85.9l-0.7,2c-8.9,29.3-18.4,60-24.6,81.2v0.7  l44.3,19.1C182.1,204.4,199.8,147.1,208.7,117.1L208.7,117.1z M217.6,175.8L217.6,175.8l-6.8,7.5c-6.8,7.5-20.5,24.6-20.5,24.6  l1.4,0.7c5.5,2.7,6.8,2.7,8.9,4.8s2.7,8.9,1.4,14.3c-2.7,13-8.2,28-30.7,32.7c-4.8,0.7-8.2,1.4-12.3,2h-0.7v0.7  c0.7,4.1,2.7,8.9,5.5,11.6s11.6,6.8,15.7,8.2c0.7,0,2,0.7,2.7,0.7c6.8,0,15-4.1,19.1-9.5l34.8-45.7c4.8-6.1,10.2-13.6,18.4-23.9  c2-2.7,2.7-5.5,2.7-8.9c0-6.1-3.4-13-10.2-18.4c-4.8-4.1-10.9-6.1-16.4-6.1C228.5,171,221.7,171,217.6,175.8L217.6,175.8z   M58.7,106.9c2.7,16.4,6.1,32.7,8.9,47.7v0.7l48.4,20.5v-1.4c-3.4-25.2-7.5-51.8-11.6-77.1L92.1,16.8c0,0-0.7-6.8-6.1-10.9  c-4.8-4.1-11.6-5.5-20.5-4.1c-8.9,0.7-15,3.4-18.4,8.2c-4.8,6.1-3.4,13-3.4,13S53.9,82.3,58.7,106.9L58.7,106.9z M341,143  c-5.5-3.4-10.9-4.8-16.4-3.4c-6.8,1.4-10.9,7.5-12.3,8.2c-0.7,1.4-18.4,21.8-25.9,31.4c-21.8,27.3-30.7,38.9-47.1,60l-14.3,19.1  c-4.1,5.5-8.9,11.6-16.4,21.1c-5.5,7.5-17.7,13-27.3,13c-1.4,0-3.4,0-5.5-0.7c-6.1-1.4-15.7-6.8-19.8-10.2  c-4.8-4.1-8.2-12.3-8.9-19.1V261H146c-15-2-32.7-10.9-61.4-32.1l-1.4-1.4l-9.5,17.1l2,0.7c45,16.4,76.4,52.5,91.4,107.1  c0,1.4,0,2-0.7,3.4c-0.7,0.7-1.4,1.4-2.7,2l-1.4,0.7c-2,0.7-4.1-0.7-4.8-2.7c-21.1-78.4-70.3-96.2-86.6-102.3  c-5.5-2-8.2-3.4-8.2-6.1c0-0.7,0-1.4,1.4-4.1l16.4-28.6l4.1,2.7c32.7,23.9,51.2,33.4,66.2,34.8c2.7,0,6.1,0,9.5,0  c2.7-0.7,5.5-0.7,8.2-1.4c16.4-3.4,20.5-14.3,22.5-25.2c0.7-2,0.7-4.1,0-5.5v-0.7L59.3,162.8c-3.4-1.4-6.8,0-8.9,3.4l-46.4,88  c-0.7,0.7-4.1,8.2-4.1,13.6s3.4,10.9,3.4,10.9c10.9,17.7,49.8,72.3,83.2,105c2.7,2.7,1.4,13-2,36.1c-1.4,6.8-2,13.6-3.4,21.8  c-4.1,28-6.8,59.3-7.5,67.5h141.9c0.7-8.9,2.7-53.2-1.4-96.8c-0.7-4.1,1.4-8.9,3.4-11.6c26.6-31.4,37.5-82.5,40.2-103v-0.7  c0.7-3.4,1.4-8.2,2.7-11.6l0.7-0.7c0.7-0.7,0.7-1.4,0.7-1.4l3.4-5.5c12.3-18.4,21.1-30.7,36.1-50.5c15-19.1,45-58.7,45-58.7  s4.8-5.5,4.1-12.3C350.6,151.2,347.2,147.1,341,143L341,143z M235.3,498.4c-1.4-0.7-2-0.7-3.4-0.7c-1.4,0-2.7,0.7-3.4,0.7  c-0.7,0-2,1.4-2.7,2.7c-0.7,1.4-0.7,2-0.7,3.4c0,1.4,0.7,2.7,0.7,3.4c0.7,1.4,1.4,2,2.7,2.7c1.4,0.7,2,1.4,3.4,1.4  c1.4,0,2.7-0.7,3.4-0.7c0.7,0,2-1.4,2.7-2.7c0.7-1.4,0.7-2,0.7-3.4c0-1.4-0.7-2.7-0.7-3.4S236.7,499,235.3,498.4L235.3,498.4z   M236.7,507.2c-0.7,0.7-1.4,1.4-2,2c-0.7,0.7-2,0.7-2.7,0.7c-0.7,0-2,0-2.7-0.7c-0.7-0.7-1.4-1.4-2-2c-0.7-0.7-0.7-2-0.7-2.7  s0-2,0.7-2.7c0.7-0.7,1.4-2,2-2c0.7,0,1.4-1.4,2.7-1.4c1.4,0,2,0,2.7,0.7c0.7,0.7,2,1.4,2,2c0.7,0.7,0.7,2,0.7,2.7  S237.4,506.5,236.7,507.2z M233.3,505.2C233.3,505.2,232.6,505.2,233.3,505.2c0-0.7,0.7-0.7,0.7-1.4s0.7-0.7,0.7-1.4  c0-0.7,0-0.7-0.7-1.4c0-0.7-0.7-0.7-1.4-0.7c-0.7,0-1.4,0-2,0h-2.7v8.2h1.4v-3.4h0.7c0.7,0,0.7,0,1.4,0c0.7,0,0.7,0.7,1.4,2l0.7,1.4  h1.4l-0.7-1.4C233.3,506.5,233.3,505.9,233.3,505.2z M231.2,503.8h-1.4v-2h1.4c0.7,0,1.4,0,1.4,0s0.7,0,0.7,0.7v0.7  c0,0.7,0,0.7-0.7,0.7C231.9,503.8,231.9,503.8,231.2,503.8z"],
  "F_hand_pitchfork_outline": [362.8, 512, [], "e014", "M362.4,149c-1.4-8.2-6.9-15.8-15.1-20.6c-21.3-11.7-35.7,4.8-40.5,10.3c-15.1,17.2-15.1,17.2-21.3,24.7l-2.1,2.1  c-3.4,4.1-7.5,10.3-12.4,15.8c-2.1-3.4-4.8-7.5-8.9-10.3l-5.5,6.2l5.5-6.2c-6.2-5.5-14.4-8.2-22-8.2c-3.4,0-13,0.7-19.9,8.2  l-6.9,7.5c-1.4,2.1-5.5,6.2-8.9,11c6.9-22,15.8-52.8,21.3-70l1.4-3.4c7.5-24.7,20.6-61.8,24.7-75.5l2.1-7.5c1.4-4.1,1.4-11-2.7-17.2  c-4.1-6.9-11.7-12.4-22.6-14.4l0,0c-11-2.7-19.2-1.4-26.8,3.4c-8.2,5.5-11,13.7-11,15.8v0.7c-1.4,4.1-17.2,49.4-26.1,78.2l-0.7,2.1  c-8.9,28.1-18.5,60.4-24.7,81.7l-0.7,1.4c-1.4-0.7-2.7-1.4-4.8-2.1l-1.4-8.2c-3.4-25.4-7.5-52.2-11.7-78.2l0,0  c0-2.1-1.4-10.3-5.5-37.1c-3.4-21.3-6.9-35-6.9-35c0-1.4-1.4-10.3-9.6-16.5C92,2.1,83.7,0,72.7,1.4c-11,0-18.5,4.1-24,11  c-6.2,8.2-5.5,17.2-4.8,19.2c0,0,10.3,51.5,15.1,76.9c1.4,9.6,4.1,22.6,6.2,35.7c0.7,3.4,1.4,7.5,2.1,11c-5.5-0.7-11.7,2.1-15.1,7.5  L4.8,250.5c0,0-4.8,9.6-4.8,17.8c0,6.9,3.4,13.7,4.8,15.8c10.3,17.2,50.1,72.1,83.7,106.4c0.7,4.1-1.4,17.2-3.4,30.2v2.1  c-1.4,6.2-2.1,13-3.4,19.9c-4.1,27.5-6.9,48.7-7.5,60.4l-0.7,8.9h159.9l0.7-7.5c0.7-8.9,2.7-46-1.4-90.6c0-2.1,0.7-5.5,1.4-6.2  c25.4-30.2,33.6-85.1,37.1-111.2c0.7-2.7,0.7-5.5,1.4-8.2c0.7-3.4,1.4-8.9,2.1-11l4.1-6.2c12.4-18.5,20.6-30.9,35.7-50.1  c12.4-15.1,20.6-24.7,32.9-39.1l9.6-11C361.7,164.7,363.7,157.2,362.4,149L362.4,149z M225.8,188.8l6.9-7.5c2.1-2.7,6.2-2.7,7.5-2.7  c4.1,0,8.2,1.4,11.7,4.1c4.8,4.1,7.5,8.2,7.5,12.4c0,1.4-0.7,2.1-1.4,3.4c-1.4,2.1-3.4,4.1-4.1,5.5c0,0,0,0.7-0.7,0.7l-49.4,64.5  c-2.7,3.4-8.9,6.2-13,6.2c-0.7,0-0.7,0-1.4,0c-2.1-0.7-9.6-4.1-12.4-6.9c-2.1-1.4-2.7-2.7-3.4-4.8c1.4,0,2.7-0.7,4.1-0.7  c19.9-4.1,30.2-22,30.9-37.1c0-4.8-1.4-8.9-4.8-12.4C212.1,205.2,223,192.2,225.8,188.8L225.8,188.8z M154.4,186.7  c6.2-21.3,15.8-53.5,24.7-81.7l0.7-2.1c8.9-30.2,26.1-78.2,26.1-78.9v-1.4c0.7-1.4,1.4-3.4,4.1-5.5c3.4-2.1,8.2-2.7,14.4-1.4  l2.1-8.2l-2.1,8.2c4.1,1.4,10.3,2.7,12.4,6.9c1.4,2.1,0.7,4.8,0.7,4.8l-2.1,7.5c-4.1,13-17.2,50.1-24.7,75.5l-1.4,3.4  c-6.9,23.3-20.6,69.3-26.8,88.5c-8.2-3.4-18.5-7.5-29.5-12.4L154.4,186.7L154.4,186.7z M59.7,28.9c0,0-0.7-4.1,2.1-6.9  c2.1-2.7,6.9-4.8,12.4-5.5c6.2-0.7,11,0,14.4,2.7c2.7,2.1,3.4,5.5,3.4,6.2c0,0,3.4,14.4,6.9,35.7l5.5,37.1h4.1l-4.1,0.7  c4.1,25.4,8.2,50.8,11.7,76.2c-11.7-4.8-22.6-9.6-31.6-13.7c-1.4-5.5-2.1-13-3.4-19.9c-2.1-12.4-4.8-26.1-6.2-35.7  C70.7,80.3,59.7,28.9,59.7,28.9z M343.8,159.9l-9.6,11c-12.4,14.4-20.6,24-32.9,39.8c-15.8,19.2-24,32.3-37.1,50.8l-2.7,5.5  c-0.7,0.7-1.4,1.4-2.1,3.4l-0.7,0.7c-1.4,4.1-2.7,12.4-2.7,14.4c-0.7,2.1-0.7,4.8-1.4,8.2c-3.4,24.7-11.7,76.9-33.6,103.6  c-3.4,4.1-5.5,11.7-5.5,17.8c3.4,35.7,2.1,63.8,1.4,80.3H91.3c1.4-13.7,3.4-29.5,6.9-50.8c0.7-6.9,2.1-13,2.7-19.2v-2.1  c4.8-28.1,6.2-37.7,0-43.2c-32.9-32.9-72.7-87.8-82.4-104.3c-0.7-2.1-2.1-5.5-2.1-7.5c0-2.7,2.1-8.2,2.7-10.3l46.7-87.2  c48.7,20.6,122.2,51.5,126.3,53.5c0.7,0.7,1.4,0.7,1.4,1.4c-0.7,7.5-5.5,19.2-17.8,22c-2.7,0.7-5.5,1.4-7.5,1.4  c-2.7,0.7-5.5,0.7-8.2,0c-21.3-2.1-53.5-26.1-63.1-32.9c-2.7-2.1-6.2-2.7-9.6-2.1s-6.9,2.7-8.2,5.5l-13,19.9  c-2.1,2.7-2.7,5.5-2.7,8.9c0.7,8.9,7.5,11.7,13.7,13.7c15.1,5.5,61.8,22.6,83,96.8c1.4,4.1,5.5,6.9,10.3,5.5s6.9-5.5,5.5-10.3  c-23.3-82.4-75.5-101.6-93.3-107.7c-0.7,0-0.7-0.7-1.4-0.7l8.9-15.1c15.1,11,44.6,31.6,67.9,33.6l0,0c0.7,4.8,3.4,11.7,10.3,16.5  c2.7,2.1,12.4,8.2,18.5,9.6c1.4,0.7,3.4,0.7,4.8,0.7c9.6,0,19.9-5.5,26.1-12.4l53.5-70c0-0.7,0.7-0.7,0.7-1.4  c2.1-2.7,4.1-5.5,6.2-8.2c6.2-8.2,13-17.8,18.5-24l2.1-2.1c5.5-6.9,5.5-6.9,20.6-24c8.9-10.3,14.4-10.3,20.6-6.9  c4.1,2.1,6.9,5.5,7.5,8.9C347.3,154.4,345.9,157.2,343.8,159.9L343.8,159.9z"],
  "G_sun_card": [814.4, 512, [], "e015", "M764,0H51.5C22.9,0,0,22.9,0,51.5v408.9C0,489.1,22.9,512,51.5,512h711.3c28.6,0,51.5-22.9,51.5-51.5V51.5  C815.5,22.9,792.6,0,764,0z M56.1,55H236v85.9H56.1V55z M194.7,426.1H56.1V402h138.6V426.1z M240.5,395.2H56.1v-24.1h184.4V395.2z   M256.6,363.1H56.1V339h200.4V363.1z M256.6,194.7H56.1v-41.2h200.4V194.7z M368.8,45.8l14.9-25.2h17.2L368.8,45.8z M463.9,20.6  h58.4L407.8,85.9L463.9,20.6z M526.9,491.4l-68.7-48.1l189,48.1H526.9z M462.7,181l71-44.7v27.5L462.7,181z M534.9,208.5v20.6  l-51.5,2.3C482.2,231.4,534.9,208.5,534.9,208.5z M794.9,460.5c0,17.2-13.7,30.9-30.9,30.9h-91.6c1.1-3.4,0-6.9-3.4-8l-183.3-88.2  l181,10.3c8,0,9.2-10.3,2.3-12.6L493.7,339l166.1-8c8,0,8-11.5,1.1-12.6l-170.7-35.5l47-11.5v12.6h233.7V51.5h-236v43.5l-96.2,37.8  L569.3,21.8H764c17.2,0,30.9,13.7,30.9,30.9C794.9,51.5,794.9,460.5,794.9,460.5z M541.8,277.2V59.6h217.6v217.6H541.8z"],
  "H_safety_goggles": [966.7, 512, [], "e016", "M946.1,108.6c-24-25.1-67.4-68.6-84.6-85.7C836.4,0,814.7,0,785,0c-70.8,0-85.7,29.7-152,45.7  c-33.1,8-116.5,21.7-194.2,17.1c-67.4-3.4-114.3-21.7-217.1-12.6c-59.4,3.4-65.1,36.6-65.1,58.3v101.7  c-33.1-4.6-67.4,19.4-97.1,49.1c-32,32-59.4,78.8-59.4,128c0,58.3,67.4,50.3,134.8,12.6c46.8-26.3,80-64,121.1-64v99.4l-48-52.6  l-29.7,22.9c0,0,75.4,77.7,84.6,88c9.1,10.3,22.9,19.4,48,18.3c19.4-2.3,147.4-11.4,202.2-14.9c17.1-1.1,33.1-9.1,44.6-22.9  c30.9-36.6,53.7-76.6,64-98.3c3.4-6.9,13.7-8,17.1-1.1c28.6,44.6,50.3,72,64,85.7c8,9.1,20.6,13.7,33.1,12.6l176-11.4  c42.3-2.3,54.8-24,54.8-52.6v-256C964.4,136,957.5,120,946.1,108.6L946.1,108.6z M254.8,284.5c-59.4,0-166.8,137.1-212.5,89.1  c-21.7-25.1,14.9-85.7,51.4-102.8c30.9-14.9,61.7-12.6,61.7,4.6v30.9l36.6-26.3V126.8l62.8,57.1V284.5L254.8,284.5z M278.8,155.4  c0,0-35.4-28.6-66.3-59.4c17.1-12.6,76.6-17.1,169.1-1.1c122.3,19.4,253.7-8,253.7-8s43.4-8,89.1-32c29.7-16,61.7-14.9,81.1-11.4  c10.3,2.3,20.6,6.9,27.4,13.7l51.4,51.4c0,0-397.6,30.9-474.2,33.1C332.5,146.3,278.8,155.4,278.8,155.4L278.8,155.4z M891.3,365.6  c0,18.3-14.9,35.4-33.1,35.4l-92.6,5.7c-12.6,1.1-24-3.4-32-11.4c-13.7-12.6-37.7-38.8-74.3-84.6c-17.1-21.7-51.4-20.6-66.3,3.4  c-37.7,61.7-67.4,94.8-83.4,109.7c-8,8-17.1,11.4-27.4,12.6l-116.5,8c-20.6,1.1-38.8-14.9-38.8-36.6V246.8  c0-19.4,14.9-34.3,33.1-36.6l491.3-37.7c21.7-2.3,38.8,14.9,38.8,36.6v156.5H891.3z M858.1,303.9c-8,0-14.9-6.9-14.9-14.9v-58.3  c0-2.3-1.1-3.4-2.3-4.6c-1.1-1.1-2.3-2.3-4.6-2.3l-83.4,5.7c-8,0-14.9-5.7-16-13.7c-1.1-8,5.7-14.9,13.7-16l83.4-5.7  c10.3-1.1,19.4,2.3,27.4,9.1c6.9,6.9,11.4,16,11.4,26.3v58.3C873,297.1,866.1,303.9,858.1,303.9z"],
  "I_virtual_reality_headset": [662, 512, [], "e017", "M645.9,272.8c-7.9-20.1-22.2-37.2-40.8-48.7l-48-29.4c-2.9-1.4-5-2.9-7.2-3.6c-1.4-9.3-5.7-17.2-12.2-22.9  c-9.3-7.9-22.2-11.5-40.8-11.5c-8.6,0-17.2,0.7-22.9,1.4h-1.4l-40.8,4.3C388.1,27.9,338,0,303.6,0h-2.1c-2.9,0-6.4,0-9.3,0.7l0,0  h-0.7l-71.6,7.9c-5.7,0-10.7,0.7-15.8,2.1c-52.3,15-87.4,107.4-85.2,220.6c-57.3,6.4-92.4,12.9-106.7,20.8l-4.3,2.9  c-5.7,5-7.9,10.7-7.9,18.6v65.2c0,8.6,5,16.5,12.9,20.1c11.5,5,58.7,12.9,97.4,17.2c17.2,43.7,51.6,75.2,93.8,85.9  c5.7,1.4,11.5,4.3,17.2,8.6c1.4,1.4,5.7,4.3,5.7,4.3c0.7,0.7,1.4,1.4,2.9,2.1C254.2,497,274.3,512,343,512  c28.6,0,65.9-2.9,113.1-8.6h2.1c59.4-7.9,103.1-12.9,134.6-31.5C684.6,418.9,665.2,324.4,645.9,272.8z M616.5,251.3  c-12.9-12.9-53.7-10.7-68-8.6l-222.7,26.5c-28.6,2.9-52.3,10.7-70.2,23.6c-0.7,0.7-2.1,0.7-2.9,0.7c-1.4,0-2.9-0.7-3.6-2.1  c-1.4-2.1-0.7-5,0.7-6.4c19.3-13.6,44.4-22.2,74.5-25.8l222.7-26.5c1.4,0,24.3-3.6,45.8,0C605.1,234.9,618.7,253.5,616.5,251.3z   M17.2,338.7v-62.3c10.7,3.6,32.9,7.9,89.5,11.5h0.7c2.9,0,5.7,0.7,8.6,0.7l7.9,0.7c5,0,10,0.7,15.8,0.7c2.9,0,6.4,0.7,9.3,0.7  c7.9,0.7,16.5,0.7,25.1,1.4c6.4,0,10.7,2.9,12.9,8.6c2.1,5.7,2.9,12.2,2.9,15c0,21.5-12.9,48.7-27.9,48.7c-4.3,0-8.6,0-14.3-0.7  c-2.1,0-5-0.7-7.9-0.7h-2.1c-5.7-0.7-11.5-1.4-17.9-1.4c-2.9,0-6.4-0.7-10-1.4c-39.4-5-82.3-12.2-90.2-15.8  C18.6,342.3,17.2,340.1,17.2,338.7z M421.1,192.6c-20.1,2.1-41.5,4.3-64.4,6.4h-5.7c-1.4-5.7-2.9-10.7-4.3-15.8  c-0.7-2.9-1.4-6.4-2.1-9.3c-10.7-38.7-25.1-73.8-40.1-98.8c-12.2-20.8-25.1-36.5-38.7-48c-2.1-2.1-5-3.6-7.2-5.7l7.2-0.7l28.6-2.9  l8.6-0.7h0.7c40.8,0,80.2,53.7,110.3,151.8l2.9,10C418.2,183.3,419.6,187.6,421.1,192.6z M33.7,262.8c17.2-4.3,48.7-9.3,82.3-13.6  c-3.6,6.4-6.4,13.6-9.3,20.8C67.3,267.8,45.8,265,33.7,262.8z M141.8,272.1c-5.7,0-11.5-0.7-16.5-0.7  c10.7-26.5,37.2-65.2,104.5-71.6c0,0,48-5,101.7-10c0.7,2.9,1.4,5.7,1.4,5.7l0.7,5l-5,0.7l-67.3,7.2  C202.7,214.8,161.8,236.3,141.8,272.1z M289.3,84.5c13.6,22.9,26.5,53.7,36.5,88.8c-52.3,5-98.1,10-98.1,10c-3.6,0-6.4,0.7-10,1.4  c-3.6-53,12.2-108.1,39.4-140.4C268.5,53,279.3,66.6,289.3,84.5z M200.5,186.9c-25.8,6.4-47.3,17.9-63.7,34.4  c0-98.8,30.1-181.2,73-193.3c3.6-0.7,7.2-1.4,10.7-1.4c7.2,0,15,2.1,22.9,6.4C212.7,69.5,196.2,128.9,200.5,186.9z M141.1,375.2  c9.3,23.6,25.8,47.3,52.3,69.5c-33.7-12.9-57.3-40.1-70.2-70.9C129.6,373.8,135.3,374.5,141.1,375.2z M219.8,319.4  c1.4-2.1,3.6-2.9,6.4-1.4c2.1,1.4,2.9,4.3,1.4,6.4c-29.4,51.6-7.9,124.6,9.3,142.5c1.4,1.4-18.6-13.6-18.6-13.6  C203.4,419.6,194.8,363.1,219.8,319.4z M435.4,179l4.3-0.7c17.2-1.4,29.4-2.9,33.7-3.6h1.4c5.7-0.7,13.6-1.4,21.5-1.4  c13.6,0,23.6,2.1,29.4,7.2c1.4,1.4,2.9,2.9,3.6,5c-4.3,0-8.6-0.7-13.6-0.7h-12.2c-10,0-30.8,1.4-65.2,5  C437.5,186.9,436.1,182.6,435.4,179z"],
  "J_graduation_cap_tassel_left": [930.9, 512, [], "e018", "M248,302.2l229.5,90.4c2.3,1.2,4.6,1.2,7,0L714,302.2c4.6-2.3,9.3,1.2,9.3,5.8v100.8c0,15.1-8.1,30.1-22,37.1  C659.5,468,567.9,512,481,512s-178.5-44-220.2-66.1c-13.9-7-22-22-22-37.1V308C238.8,304.5,243.4,301.1,248,302.2L248,302.2z   M923.7,156.2L484.5,0.9c-2.3-1.2-4.6-1.2-7,0L39.4,156.2c-9.3,3.5-9.3,15.1,0,18.5l439.3,171.5c2.3,1.2,4.6,1.2,7,0l439.3-171.5  C933,172.4,933,159.7,923.7,156.2L923.7,156.2z M45.2,203.7c-2.3-8.1-12.7-8.1-15.1,0C18.5,246.6,0,321.9,0,339.3  C0,364.8,15.1,388,37.1,388s37.1-23.2,37.1-48.7C74.2,321.9,55.6,246.6,45.2,203.7z"],
  "K_graduation_cap_tassel_right": [928.7, 512, [], "e019", "M689.4,308.5v100.6c0,15-8.1,30.1-22,37c-41.6,22-133,65.9-219.7,65.9S269.6,468.1,228,446.1c-13.9-6.9-22-22-22-37V308.5  c0-4.6,4.6-8.1,9.3-5.8l229,90.2c2.3,1.2,4.6,1.2,6.9,0l229-90.2C684.7,300.4,689.4,303.8,689.4,308.5L689.4,308.5z M5.9,174.3  l438.3,171.1c2.3,1.2,4.6,1.2,6.9,0l438.3-171.1c8.1-3.5,8.1-15,0-18.5L451.2,0.9c-2.3-1.2-4.6-1.2-6.9,0L7.1,155.8  C-2.2,159.3-2.2,172,5.9,174.3L5.9,174.3z M854.7,338.5c0,25.4,15,48.6,37,48.6s37-23.1,37-48.6c0-17.3-18.5-93.7-30.1-135.3  c-2.3-8.1-12.7-8.1-15,0C873.2,246,854.7,321.2,854.7,338.5z"],
  "L_graduation_silhouette_hand_pitchfork": [281.8, 512, [], "e020", "M281.8,255.7L281.8,255.7c0,1.4-0.7,2.7-1.4,3.4c-0.7,1.4-2.1,1.4-3.4,2.1c-2.1,1.4-4.1,2.1-6.2,2.7  c-23.4,10.3-50.2,13.1-74.9,8.9c-3.4-0.7-6.9-2.1-10.3-2.7c-2.1,0-3.4-1.4-5.5-0.7c-1.4,0.7-2.1,0.7-3.4,0.7c-0.7,0-1.4,0.7-1.4,1.4  l0,0c0,0.7,0,1.4,0.7,2.1c6.2,5.5,13.1,10.3,19.9,14.4c3.4,2.1,6.9,4.1,10.3,6.2c1.4,0.7,2.7,1.4,3.4,3.4c0,1.4-2.1,2.7-2.1,4.1  c0,1.4,0.7,2.1,2.1,2.1c0.7,0.7,2.1,0.7,2.1,2.1c0.7,0.7,0.7,2.1-0.7,2.7c-1.4,0.7-2.1-0.7-2.7-1.4c-4.8-4.8-11-8.9-16.5-12.4  c-3.4-2.1-6.9-3.4-11-5.5c-3.4-1.4-5.5-3.4-8.9-6.2c-5.5-4.8-11-10.3-14.4-16.5c-1.4-2.1-2.7-4.1-4.1-5.5c-2.7-2.7-6.2-3.4-9.6-1.4  c-2.7,2.1-3.4,6.9-4.8,10.3c-2.1,8.2-3.4,17.9-3.4,26.8c0,2.1,0,5.5,1.4,7.6c2.1,4.1,9.6,4.1,13.7,4.8c5.5,0.7,11,2.1,15.8,4.8  c1.4,0.7,2.7,0.7,4.1,0.7c4.8,0,8.9,2.1,13.1,3.4c8.2,3.4,13.1,9.6,15.1,18.6c2.7,16.5,5.5,33,5.5,49.5c-0.7,17.9,0,36.4,1.4,55  c0,6.2,1.4,13.1,3.4,19.2c1.4,4.8,2.7,10.3,3.4,15.1c0.7,12.4,2.1,24.7,2.1,36.4h-20.6c0-4.1,0-8.2,0-12.4c0-2.1,0-3.4-0.7-5.5  c-1.4-13.7-6.2-26.8-12.4-39.2c-2.1-4.1-2.7-7.6-3.4-11.7c0-1.4,0-3.4-1.4-4.1c-2.1,0.7-2.1,2.7-2.1,4.1c0,4.8-1.4,8.9-4.8,12.4  c-0.7,0.7-1.4,1.4-1.4,2.7c-2.1,8.2-4.8,16.5-2.7,24.7c2.1,10.3,5.5,19.9,12.4,28.2H46c2.7-11.7,5.5-24.1,7.6-35.7  c0.7-4.1,0.7-7.6,0-11.7c-0.7-6.9-1.4-15.1-1.4-22c0-11-1.4-22-2.7-33c-2.1-13.7-3.4-27.5-6.2-41.2c0-0.7,0-1.4,0-2.1  c0-7.6,0-15.1,0-22c0-8.2-0.7-15.8-2.7-23.4c-1.4-4.8-2.7-12.4-3.4-17.2c-2.7-17.2-6.2-34.4-6.9-52.2c0-4.8-1.4-8.9-1.4-13.7  c0-6.2-0.7-12.4-2.1-18.6c-2.1-8.2-1.4-17.2-4.1-26.1c-2.1-6.9-4.1-14.4-4.8-22c-1.4-12.4-1.4-25.4-0.7-37.8  c0.7-13.7,1.4-26.8,0.7-39.9c0-5.5-0.7-11-2.7-15.8c-1.4-6.2-2.1-12.4-2.7-19.2C11,51.5,9.6,46,6.2,40.5c-2.1-3.4-3.4-6.2-4.8-9.6  C0.7,28.9,0,26.8,0,24.1c0-0.7,0.7-1.4,1.4-2.1c0.7-0.7,2.1-0.7,2.7,0c0.7,0.7,1.4,1.4,2.1,2.1c0.7,2.7,1.4,4.1,2.1,5.5  c2.7,4.8,4.8,8.9,8.2,11.7c0.7,0.7,2.1,0,2.1-0.7c0-0.7,0-1.4,0-1.4c2.1-7.6,2.7-7.6,10.3-6.2c0-1.4,0-2.1,0-3.4  c0-5.5-1.4-8.9-1.4-13.7c0-4.1,0.7-8.9,1.4-13.1c0-1.4,0.7-2.7,2.7-2.7s2.7,1.4,3.4,2.7c0.7,2.1,1.4,4.8,1.4,6.9  c0,4.8,0.7,9.6,1.4,14.4c0,4.1,1.4,7.6,1.4,11.7c0,0,0.7,0.7,1.4,0.7s1.4,0,1.4,0c0.7-1.4,1.4-2.1,2.1-3.4c2.1-5.5,4.1-11,6.2-16.5  c0-2.7,0.7-4.1,1.4-6.2c1.4-2.1,2.7-3.4,4.1-2.7c2.1,0,2.7,2.7,2.1,5.5c0,1.4-0.7,2.7-0.7,3.4c-3.4,11.7-6.9,23.4-8.2,35  c0,1.4-0.7,2.7-0.7,4.8c-1.4,4.1-2.1,8.9-2.1,13.7c0,2.1-0.7,4.8-1.4,6.9c-1.4,3.4-1.4,6.2-2.1,9.6c-0.7,15.1-0.7,30.2,1.4,45.4  c2.1,17.9,2.1,35,6.2,52.9c0,2.1,0,3.4,0.7,5.5c0.7,6.2,0.7,12.4,2.1,18.6c2.7,13.7,6.2,28.2,8.9,41.9c1.4,6.2,4.1,12.4,7.6,17.9  c4.8,6.9,9.6,13.1,12.4,21.3c1.4,2.7,3.4,4.1,6.2,5.5c2.7,1.4,5.5-0.7,5.5-3.4c0-4.1-0.7-8.2-0.7-12.4c-0.7-6.9-4.8-12.4-6.9-19.2  c0-1.4-0.7-2.1-2.1-2.1c-3.4-0.7-4.1-3.4-4.8-6.2c-0.7-4.1-0.7-7.6-1.4-11.7c0-1.4,0-3.4,0-4.8c3.4-8.2,4.1-17.2,6.9-25.4v-13.7  c0-0.7,0.7-1.4,1.4-0.7l6.9,2.7l23.4,8.9h0.7l22.7-8.9l7.6-2.7c0.7,0,1.4,0,1.4,0.7v13.7l0,0c1.4,4.1,2.7,8.2,3.4,12.4  c0.7,3.4,0.7,6.9,2.1,9.6c2.1,7.6,9.6,8.9,15.8,12.4c2.1,0.7,4.1,2.1,5.5,2.1c1.4,0,4.1-0.7,5.5-0.7c0.7,0,1.4,0,2.1,0h2.1  c8.2-0.7,17.2,0.7,25.4-2.7c0.7-0.7,4.8-1.4,3.4,1.4c-1.4,2.7-17.2,4.1-26.1,4.8c-1.4,0-1.4,2.1,0,2.7c6.2,1.4,13.7,1.4,19.9-1.4  c2.7-1.4,4.8-2.1,7.6-3.4c2.7-1.4,5.5-2.7,8.2-4.1c5.5-2.7,10.3-5.5,15.1-9.6c1.4-1.4,4.1-4.1,5.5-3.4c2.1,1.4,0,4.1-1.4,5.5  c-1.4,1.4-5.5,5.5-5.5,7.6c0.7,4.8,7.6-0.7,8.9-2.1c2.1-1.4,4.1-2.7,6.2-2.7c1.4-0.7,2.1,0.7,1.4,2.1c-0.7,0.7-2.1,1.4-2.1,2.1  c-0.7,0-0.7,0.7-0.7,1.4c0.7,0.7,1.4,0.7,2.1,0c4.1-2.1,6.2-7.6,11-8.9c1.4-0.7,3.4-2.7,5.5-1.4c2.1,1.4-3.4,3.4-2.1,5.5  c0-0.7,1.4-0.7,2.7-0.7c1.4-0.7,2.1,0,2.7,1.4c0,0.7,0,1.4-0.7,2.1c-1.4,1.4-2.7,2.1-3.4,2.1c-2.7,2.1-5.5,3.4-7.6,5.5  c-2.7,2.1-5.5,3.4-7.6,5.5c-0.7,0.7-1.4,1.4-2.1,1.4c-1.4,0.7,0,2.1,1.4,2.1c3.4-1.4,6.9-2.1,10.3-2.7c2.7-0.7,4.8-1.4,7.6-2.1  c2.1-0.7,3.4-2.1,5.5-2.1C279,252.9,281.1,253.6,281.8,255.7L281.8,255.7z M96.9,193.1l20.6,8.2h0.7l20.6-8.2l37.8-15.1  c1.4,0,1.4-2.1,0-2.1l-58.4-20.6h-0.7l-58.4,20.6c-1.4,0-1.4,2.1,0,2.1L96.9,193.1L96.9,193.1z M175.9,182.1  c-1.4,5.5-4.1,15.8-4.1,17.9c0,3.4,2.1,6.2,4.8,6.2c2.7,0,4.8-3.4,4.8-6.2c0-2.1-2.7-12.4-4.1-17.9  C177.3,181.4,175.9,181.4,175.9,182.1L175.9,182.1z"],
  "M_graduation_silhouette_number_one": [269, 512, [], "e021", "M267.8,53.6c-2.1-3.4-4.1-6.2-6.9-7.6c-2.7-1.4-5.5-4.1-7.6-6.2c-1.4-1.4-3.4-3.4-5.5-3.4c-2.7,0-4.1-2.1-4.1-4.8  c0-1.4,0-3.4,0-4.8c0.7-6.9-0.7-13.7,0-20.6c0-1.4,0-2.7-0.7-3.4c-0.6-1.4-2-2.8-3.4-2.8c-2.1,0-2.7,0.7-3.4,2.1  c-0.7,0.7-0.7,2.1-0.7,2.7c-1.4,7.6-2.7,15.1-2.1,22.7c0.7,10.3-0.7,19.9-8.9,27.5c-0.7,0.7-1.4,1.4-2.1,2.1  c-1.4,2.1-2.1,4.1-0.7,6.9c2.1,5.5,2.7,11.7,6.2,16.5c0.7,1.4,1.4,3.4,1.4,4.8c1.4,15.1,1.4,30.9-1.4,46c-1.4,8.2-4.8,16.5-5.5,25.4  c-1.4,7.6-2.1,15.8-3.4,23.4c-0.7,4.8-2.1,10.3-1.4,15.1c0.7,2.1-0.7,5.5-4.1,6.2c-4.1,2.1-5.5,5.5-5.5,9.6c0,1.4,0.7,2.7-0.7,3.4  c-3.4,1.4-2.7,4.1-2.7,6.9c0,2.1,0,4.1-0.7,5.5c-1.4,2.1-0.7,4.8,0,6.9c1.4,2.7,1.4,4.8-0.7,6.9c-2.7,3.4-3.4,6.9-2.7,11.7  c0,1.4,0,2.7,0,4.1c-0.7,7.6-5.5,12.4-8.2,18.6c-2.7,5.5-6.2,9.6-9.6,15.1c-1.4,2.7-4.8,4.8-6.2,6.9c-1.4,1.4-3.4,2.1-5.5,2.7  c-1.4,0.7-2.7,0-2.7-2.1c0-0.7,0-2.1,0-2.7c2.7-5.5,2.7-11.7,3.4-17.9c0-1.4,0.7-2.1,2.1-2.7c2.7-0.7,3.4-2.1,4.1-4.8  c0.7-4.1,2.1-8.2,2.7-12.4c0-1.4,0.7-2.1,0.7-3.4c0.7-3.4-1.4-4.8-5.5-3.4c-0.7,0-1.4,0.7-1.4-0.7c2.7-7.6,1.4-14.4,0-22v-15.8  c0-0.7-0.7-1.4-1.4-0.7l-6.2,2.1l-31.6,12.4c-0.7,0-0.7,0-1.4,0L102.9,214l-6.9-2.9c-0.7,0-1.4,0-1.4,0.7v17.9  c0,7.6-1.4,15.8,2.1,23.4c-1.4,0.7-2.1-0.7-2.7-0.7c-3.4-1.4-4.1-0.7-4.1,2.1c0,0.7,0,2.1,0,2.7c1.4,5.5,2.7,10.3,4.1,15.8  c0.7,2.1,2.1,3.4,3.4,4.1c2.7,0.7,3.4,2.1,3.4,4.1c0.7,6.9,2.1,13.7,6.9,19.2c4.1,6.2,5.5,12.4,4.1,19.2c-0.7,4.1-2.7,6.9-6.2,7.6  c-5.5,1.4-8.9,4.8-11.7,8.9c-0.7,1.4-2.1,2.1-3.4,2.7c-5.5,4.1-11,6.9-17.9,8.9C63,350.6,56.8,356.1,52,365  c-1.4,2.7-2.7,4.8-4.1,7.6c0,5.5-1.4,12.4-4.1,18.6c-2.1,4.8-2.7,9.6-2.7,14.4c0,4.8,0,9.6-3.4,13.7c-0.7,1.4-1.4,2.7-1.4,4.1  c-1.4,4.8-3.4,8.9-3.4,13.7c0,1.4-1.4,2.7-2.1,4.1c-3.4,3.4-5.5,7.6-5.5,13.1c0,1.4,0,2.7-1.4,4.1c-4.1,4.1-8.2,8.2-12.4,12.4  c-2.1,2.1-2.7,3.4-2.7,6.2c0,2.7,1.4,6.9-3.4,8.9c-1.4,0.7-0.7,2.1,0,2.7c0.7,3.4,0.7,6.2-2.1,9.6c-2.1,2.7-4.8,6.2-2.1,10.3  c0.7,0.7,0,2.1,0,3.4h243.4c2.1-11.7-4.8-47.4-6.2-59.8c-3.4-15.1-4.8-30.9-4.8-46.7c0-10.3,0-21.3,0-31.6c0-13.1,0-25.4,4.8-37.8  c0.7-1.4,1.4-3.4,1.4-4.8c2.7-15.8,8.9-30.2,14.4-45.4c2.7-6.9,5.5-13.7,5.5-21.3c0-2.1,0-4.8,1.4-7.6c2.1-4.1,2.1-8.2,1.4-12.4  c-1.4-5.5-0.7-11.7-4.8-16.5c-0.7-1.4,0-2.1,0-3.4c2.7-5.5,2.1-11,2.7-16.5c0-1.4,0-2.7-1.4-3.4c-4.1-4.1-4.1-8.2-2.7-13.1  c0.7-2.7,0.7-5.5,0.7-8.2s0-5.5,0.7-8.2c2.1-13.7,3.4-28.2,2.1-42.6c-1.4-11-2.1-22-2.1-33c0-6.9-0.7-14.4,4.8-20.6  c1.4-2.1,2.1-4.1,2.7-6.9c1.4-4.8,2.1-9.6,3.4-13.7C269.2,57,269.2,55,267.8,53.6L267.8,53.6z M67.1,507.4c0,0-0.7,1.4-1.4,2.7  c-0.7,0.7-2.1,0.7-2.1-0.7c-1.4-4.8-2.1-10.3,0.7-12.4c2.1-1.4,3.4-2.7,2.7-5.5c-0.7-2.7,0.7-4.8,3.4-6.2c1.4-1.4,3.4-2.7,3.4-5.5  c0-3.4,2.1-6.2,3.4-8.9c2.1-3.4,4.8-6.2,6.9-10.3c0.7-2.1,2.1-3.4,4.8-4.8C88.4,464.8,72.6,497.1,67.1,507.4L67.1,507.4z   M64.4,187.7l71.5-25.4c0.7,0,0.7,0,1.4,0l71.5,25.4c1.4,0.7,1.4,2.7,0,2.7l-44,17.2l-28.2,11c-0.7,0-0.7,0-1.4,0l-27.5-10.3  l-44-17.2C63,189.8,63,187.7,64.4,187.7z M58.2,217.3c0-2.7,3.4-15.1,4.8-22c0-1.4,2.1-1.4,2.1,0c2.1,6.9,4.8,19.2,4.8,22  c0,4.1-2.7,7.6-6.2,7.6C60.3,224.8,57.5,221.4,58.2,217.3L58.2,217.3z"],
  "N_silhouette_hand_pitchfork": [279.9, 512, [], "e022", "M277,252.9c-2.1,0-3.4,1.4-5.5,2.1c-2.7,0.7-4.8,1.4-7.6,2.1c-3.4,0.7-6.9,2.1-10.3,2.7c-1.4,0.7-2.1-1.4-1.4-2.1  c0.7-0.7,1.4-1.4,2.1-1.4c2.7-2.1,5.5-3.4,7.6-5.5c2.7-2.1,5.5-3.4,7.6-5.5c0.7-0.7,2.7-1.4,3.4-2.7c0.7-0.7,0.7-1.4,0.7-2.1  c-0.7-1.4-2.1-2.1-2.7-1.4c-1.4,0-2.7,0.7-2.7,0.7c-1.4-2.1,3.4-4.1,2.1-5.5c-1.4-1.4-4.1,0.7-5.5,1.4c-4.1,1.4-6.9,6.2-11,8.9  c-0.7,0.7-1.4,0.7-2.1-0.7c0-0.7,0-1.4,0.7-1.4c0.7-1.4,2.1-1.4,2.7-2.7c0.7-1.4,0-2.1-1.4-2.1c-2.1,0.7-4.1,2.1-6.2,2.7  c-1.4,0.7-8.2,6.2-8.9,2.1c0-2.7,3.4-6.2,5.5-7.6c0.7-1.4,3.4-4.1,1.4-5.5c-2.1-1.4-4.8,2.1-5.5,3.4c-4.8,3.4-9.6,6.9-15.1,9.6  c-2.7,1.4-5.5,2.7-8.2,4.1c-2.7,1.4-4.8,2.1-7.6,3.4c-6.2,2.7-13.7,2.7-19.9,1.4c-1.4-0.7-1.4-2.7,0-2.7c8.9-0.7,25.4-2.1,26.1-4.8  c1.4-2.7-2.7-2.1-3.4-1.4c-7.6,3.4-16.5,2.1-25.4,2.7h-2.1c-0.7,0-1.4,0-2.1,0c-2.1,0-4.1,0.7-5.5,0.7c-1.4,0-4.1-1.4-5.5-2.1  c-6.2-2.7-13.7-4.8-15.8-12.4c-0.7-2.7-1.4-6.2-2.1-9.6c-1.4-6.9-2.7-13.7-6.2-19.2c-3.4-6.2-8.2-11.7-14.4-14.4  c-17.2-8.9-36.4,0-44.7,16.5c-4.8,9.6-4.8,20.6-8.9,30.2c-0.7,1.4-0.7,2.7,0,4.8c0,3.4,0.7,7.6,1.4,11.7c0.7,2.7,1.4,5.5,4.8,6.2  c1.4,0,2.1,0.7,2.1,2.1c2.1,6.2,6.2,12.4,6.9,19.2c0,4.1,0.7,8.2,0.7,12.4c0,3.4-2.7,4.8-5.5,3.4c-2.7-0.7-5.5-2.1-6.2-5.5  c-2.7-7.6-8.2-14.4-12.4-21.3c-3.4-5.5-6.2-11-7.6-17.9c-2.7-14.4-6.2-28.2-8.9-42.6c-1.4-6.2-1.4-12.4-2.1-18.6  c0-2.1,0-3.4-0.7-5.5c-4.1-17.2-4.1-35-6.2-52.9c-2.1-15.1-2.1-30.2-1.4-45.4c0-3.4,0.7-6.9,2.1-9.6c1.4-2.1,2.1-4.1,1.4-6.9  c-1.4-3.4,0-8.2,0.7-12.4c0-1.4,0.7-2.7,0.7-4.8c1.4-12.4,4.8-23.4,8.2-35c0-1.4,0.7-2.7,0.7-3.4c0-2.7-0.7-4.8-2.1-5.5  c-1.4,0-3.4,0.7-4.1,2.7c-0.7,2.1-1.4,3.4-2.1,5.5c-2.1,5.5-4.1,11-6.2,16.5c-0.7,1.4-1.4,2.7-2.1,3.4c0,0-0.7,0-1.4,0L38.5,35  c0-3.4-0.7-7.6-1.4-11c0-4.8-0.7-9.6-0.7-14.4c0-2.1-0.7-4.8-1.4-6.9C35,1.4,33.7,0,31.6,0s-2.7,1.4-2.7,2.7  c-0.7,4.8-1.4,8.9-1.4,13.1c0,5.5,1.4,8.9,1.4,13.7c0,1.4,0,2.7,0,3.4c-7.6-1.4-8.2-1.4-9.6,6.9c0,0.7,0,1.4,0,1.4  c0,0.7-1.4,1.4-2.7,0.7c-3.4-3.4-5.5-7.6-8.2-12.4c-0.7-1.4-1.4-2.7-2.1-4.1c-0.7-1.4-1.4-2.1-2.1-2.7s-2.1-0.7-2.7,0S0,24.1,0,24.7  c0,2.1,0.7,4.1,1.4,6.9c1.4,3.4,2.7,6.9,4.8,9.6c3.4,5.5,4.8,11.7,5.5,17.2c0.7,6.2,2.1,12.4,3.4,18.6c2.1,5.5,2.7,10.3,2.7,15.8  c0,13.7,0,26.8-0.7,39.9c-0.7,12.4-0.7,25.4,0.7,37.8c0.7,8.2,2.1,15.1,4.8,22c2.7,8.2,2.1,17.2,4.1,26.1c1.4,6.2,2.1,12.4,2.1,18.6  c0,4.8,1.4,8.9,1.4,13.7c0.7,17.9,4.1,35,6.9,52.2c0.7,4.8,2.7,12.4,3.4,17.2c2.1,7.6,2.7,15.8,2.7,23.4c0,7.6,0,15.1,0,22  c0,0.7,0,1.4,0,2.1c2.7,13.7,4.1,27.5,6.2,41.2c2.1,11,2.7,22,2.7,33c0,7.6,0.7,15.1,1.4,22c0,4.1,0,7.6,0,11.7  c-2.1,12.4-4.8,24.1-7.6,35.7h131.3c-6.9-8.2-9.6-18.6-12.4-28.2c-2.1-8.2,0-16.5,2.7-24.7c0-1.4,0.7-2.1,1.4-2.7  c3.4-3.4,4.8-8.2,4.8-12.4c0-2.1,0-3.4,2.1-4.1c1.4,1.4,1.4,2.7,1.4,4.1c0.7,4.1,2.1,7.6,3.4,11.7c5.5,12.4,10.3,25.4,12.4,39.2  c0.7,2.1,0.7,3.4,0.7,5.5c0,4.1,0,8.2,0,12.4h20.6c-0.7-12.4-1.4-24.7-2.7-36.4c-0.7-5.5-1.4-10.3-3.4-15.1  c-2.1-6.2-2.7-12.4-3.4-19.2c-1.4-18.6-1.4-36.4-1.4-55c0-16.5-2.7-33-5.5-49.5c-1.4-8.9-6.2-15.1-15.1-18.6  c-4.1-2.1-8.9-3.4-13.1-3.4c-1.4,0-2.7,0-4.1-0.7c-4.8-2.7-10.3-3.4-15.8-4.8c-4.1-0.7-11.7,0-13.7-4.1c-1.4-2.1-1.4-4.8-1.4-7.6  c0-8.9,0.7-17.9,3.4-26.8c0.7-3.4,1.4-8.2,4.1-10.3c3.4-2.7,6.9-1.4,9.6,1.4c1.4,1.4,2.7,4.1,4.1,5.5c4.1,6.2,8.9,12.4,14.4,16.5  c2.7,2.1,5.5,4.1,8.9,6.2c3.4,1.4,6.9,3.4,10.3,5.5c6.2,3.4,11.7,7.6,16.5,12.4c0.7,0.7,1.4,2.1,2.7,1.4c0.7-0.7,1.4-2.1,0.7-2.7  c-0.7-0.7-1.4-1.4-2.7-2.1c-1.4-0.7-2.1-1.4-2.1-2.7c0-1.4,2.1-2.1,2.1-4.1c-0.7-1.4-2.1-2.7-3.4-3.4c-3.4-2.1-7.6-4.1-10.3-6.2  c-6.9-4.1-13.7-8.9-19.9-14.4c-0.7-0.7-0.7-1.4-0.7-2.1l0,0c0-0.7,0.7-1.4,1.4-1.4c1.4-0.7,2.7-0.7,3.4-0.7c2.1-0.7,4.1,0,5.5,0.7  c3.4,0.7,6.9,2.1,10.3,2.7c25.4,4.1,51.5,1.4,74.9-8.9c2.1-0.7,4.1-2.1,6.2-2.7c1.4-0.7,2.7-1.4,3.4-2.1c1.4-1.4,1.4-2.7,1.4-3.4  l0,0C281.1,254.3,279,252.9,277,252.9L277,252.9z"],
  "O_silhouette_number_one": [270, 512, [], "e023", "M268.8,53.5c-2.1-3.4-4.1-6.2-6.9-7.5c-3.4-1.4-5.5-4.1-7.5-6.2c-1.4-1.4-3.4-3.4-6.2-3.4c-2.7,0-4.1-2.1-4.1-4.8  c0-1.4,0-3.4,0-4.8c0.7-6.9-0.7-13.7,0-20.6c0-1.4,0-2.7-0.7-3.4c0-1.4-1.4-2.7-2.7-2.7c-2.1,0-2.7,0.7-3.4,2.1  c-0.7,0.7-0.7,2.1-0.7,2.7c-1.4,7.5-2.7,15.1-2.1,22.6c0.7,10.3-0.7,19.9-8.9,27.5c-0.7,0.7-1.4,1.4-2.1,2.1  c-1.4,2.1-1.4,4.1-0.7,6.9c2.1,5.5,2.7,11.7,6.2,16.5c0.7,1.4,1.4,3.4,1.4,4.8c1.4,15.1,1.4,30.9-1.4,46c-1.4,8.2-4.8,16.5-5.5,25.4  c-1.4,7.5-2.1,15.8-3.4,23.3c-0.7,4.8-2.1,10.3-0.7,15.1c0.7,2.1-0.7,5.5-4.1,6.2c-4.1,2.1-5.5,5.5-5.5,9.6c0,1.4,0.7,2.7-0.7,3.4  c-3.4,1.4-2.7,4.1-2.7,6.9c0,2.1,0,4.1-0.7,5.5c-1.4,2.1-0.7,4.8,0,6.9c1.4,2.7,1.4,4.8-0.7,6.9c-2.7,3.4-3.4,7.5-2.7,11.7  c0,1.4,0,2.7,0,4.1c-0.7,7.5-5.5,12.4-8.2,18.5c-2.7,5.5-6.2,9.6-9.6,15.1c-1.4,2.7-4.8,4.1-6.2,6.9c-1.4,1.4-3.4,2.1-5.5,2.7  c-1.4,0.7-2.7,0-2.7-2.1c0-0.7,0-2.1,0-2.7c2.7-5.5,2.7-11.7,3.4-17.8c0-1.4,0.7-2.1,2.1-2.7c2.7-0.7,3.4-2.1,4.1-4.8  c0.7-4.1,2.1-8.2,2.7-12.4c0-1.4,0.7-2.1,0.7-3.4c0.7-3.4-1.4-4.8-5.5-3.4c-0.7,0-1.4,0.7-1.4-0.7c2.7-8.2,0.7-17.2-0.7-26.1  c-1.4-5.5-4.1-10.3-8.2-14.4c-8.9-7.5-19.2-12.4-31.6-12.4c-13,0.7-23.3,6.2-32.3,15.8c-4.1,4.8-6.2,9.6-6.2,15.8  c0,7.5-1.4,15.8,2.1,23.3c-1.4,0.7-2.1,0-2.7-0.7c-3.4-1.4-4.1-0.7-4.1,2.1c0,0.7,0,2.1,0,2.7c1.4,5.5,2.7,10.3,4.1,15.8  c0.7,2.1,2.1,3.4,3.4,4.1c2.7,0.7,3.4,2.1,3.4,4.1c0.7,6.9,2.1,13.7,6.2,19.2c4.1,6.2,5.5,12.4,4.1,19.2c-0.7,4.1-2.7,6.9-6.2,7.5  c-4.8,1.4-8.9,4.8-11.7,8.9c-0.7,1.4-2.1,2.1-2.7,2.7c-5.5,4.1-11.7,6.9-17.8,8.9c-9.6,2.7-15.8,8.2-20.6,17.2  c-1.4,2.7-2.7,4.8-4.1,7.5c-1.4,6.9-2.1,13.7-5.5,19.9c-2.1,4.8-2.7,9.6-2.7,14.4s0,9.6-3.4,13.7c-0.7,1.4-0.7,2.7-1.4,4.1  c-1.4,4.8-3.4,8.9-3.4,13.7c0,1.4-1.4,2.7-2.7,4.1c-3.4,3.4-5.5,7.5-5.5,13c0,1.4,0,2.7-1.4,4.1c-4.1,4.1-8.2,8.2-12.4,12.4  c-2.1,2.1-2.7,3.4-2.7,6.2c0,2.7,1.4,7.5-3.4,8.9c-1.4,0.7-0.7,2.1-0.7,3.4c1.4,3.4,0.7,6.2-2.1,9.6c-2.1,2.7-4.8,6.2-2.1,10.3  c0.7,0.7,0,2.1,0,3.4h243c2.1-11.7-4.8-47.4-6.2-59.7c-2.1-15.8-3.4-31.6-3.4-47.4c0-10.3,0-21.3,0-31.6c0-13,0-25.4,4.8-37.7  c0.7-1.4,1.4-3.4,1.4-4.8c2.7-15.8,8.9-30.2,14.4-45.3c2.7-6.9,5.5-13.7,5.5-21.3c0-2.1,0-4.8,1.4-7.5c2.1-4.1,2.1-8.2,1.4-12.4  c-1.4-5.5-0.7-11.7-4.8-16.5c-0.7-1.4,0-2.1,0-3.4c2.7-5.5,2.1-10.3,2.7-15.8c0-1.4,0-2.7-1.4-3.4c-4.1-3.4-4.1-8.2-2.7-13  c0.7-2.7,0.7-5.5,0.7-8.2c0-2.7,0-5.5,0.7-8.2c2.1-13.7,3.4-28.1,2.1-42.6c-1.4-11-2.1-22-2.1-32.9c0-6.9-0.7-14.4,4.8-20.6  c1.4-2.1,2.1-4.1,2.7-6.9c1.4-4.8,2.1-9.6,3.4-13.7C270.2,57,270.2,54.9,268.8,53.5L268.8,53.5z M68.4,506.5c0,0-0.7,1.4-1.4,2.7  c-0.7,0.7-2.1,0.7-2.1-0.7c-1.4-4.8-2.1-10.3,0.7-12.4c2.1-1.4,3.4-2.7,2.7-5.5c-0.7-2.7,0.7-4.8,3.4-6.2c1.4-1.4,3.4-2.7,3.4-5.5  c0-3.4,1.4-6.2,3.4-8.9c2.1-3.4,4.8-6.2,6.2-10.3c0.7-2.1,2.1-3.4,4.8-4.8C89,464,73.9,496.2,68.4,506.5L68.4,506.5z"],
  "P_silhouette_hand_pitchfork": [208.8, 512, [], "e024", "M81.1,166.4L81.1,166.4L81.1,166.4L81.1,166.4L81.1,166.4z M206.8,14.5c-1.4-0.7-2.7,0.7-3.4,1.4c-0.7,1.4-1.4,2.7-2.1,4.1  c-1.4,2.7-2.1,4.8-4.1,6.9c-0.7-0.7-1.4-1.4-2.1-1.4c-4.1-2.7-5.5-2.1-8.2,2.1c-0.7,1.4-1.4,2.7-2.7,2.7c-2.1-1.4-2.1-4.1-2.1-6.2  c-0.7-6.2-2.1-13.1-2.7-19.2c0-2.1,0-5.5-3.4-4.8c-3.4,0-2.7,3.4-2.7,5.5c0,6.9,0,13.1,1.4,19.9c0.7,1.4,0.7,3.4,0,5.5  c-2.7-0.7-3.4-2.7-4.8-4.8c-2.7-5.5-5.5-11-8.9-16.5C159.4,7.6,158,5.6,156,7c-2.7,1.4-1.4,3.4-0.7,5.5c0,0.7,0.7,1.4,0.7,2.7  c2.7,6.2,4.8,12.4,8.2,18.6c2.1,3.4,2.7,6.9,3.4,10.3c1.4,8.9,2.1,17.9,5.5,26.1c0.7,2.1,0.7,3.4,0.7,5.5  c-0.7,19.9-1.4,39.9-4.8,59.8c-3.4,17.2-3.4,35.7-8.2,52.9c-0.7,1.4-0.7,3.4-0.7,5.5c-1.4,5.5-1.4,11.7-4.8,16.5  c-2.1-1.4-4.1-2.1-5.5-3.4c-2.1-1.4-1.4-2.1,0-3.4l0,0c0-1.4-0.7-1.4-2.1-0.7c-2.1,1.4-4.1,1.4-6.2-0.7c-1.4-1.4-2.7-2.7-4.8-2.1  c-1.4,0-1.4-1.4-0.7-2.7c0.7-1.4,1.4-1.4,2.1-0.7c0.7,1.4,1.4,1.4,2.1,0c1.4-1.4,0.7-3.4,1.4-4.1c1.4,0,1.4,1.4,2.7,0.7  c-1.4-2.1-4.1-2.1-7.6-0.7c0-1.4,1.4-2.1,0.7-3.4c-1.4-0.7-2.1,0-3.4,0.7c-1.4,1.4-2.1,2.7-4.1,1.4c-1.4-1.4,0-2.7,0.7-4.1  c-0.7,1.4-2.1,1.4-3.4,0c-0.7-0.7-0.7-0.7,0,0c1.4,0.7,0,0,0,0c-0.7,0-1.4,0.7-2.1,0c-0.7-0.7-1.4-2.7-2.7-0.7  c-0.7,1.4-5.5,0-6.2-1.4c-0.7-0.7-0.7-1.4,0.7-2.1c0.7-0.7,1.4,0,2.1,0.7c0,0.7,0.7,0.7,1.4,0.7l0.7-0.7c0.7-1.4,1.4-2.7,0.7-4.1  c-0.7-1.4-2.1,0.7-2.7,0c-0.7,0-1.4-0.7-0.7-1.4c1.4-3.4-1.4-2.1-2.1-1.4c-1.4,0.7-2.7,2.7-4.8,1.4c-2.1-0.7-3.4-0.7-4.8,0.7  c-0.7,0.7-1.4,0-2.1-1.4c1.4-1.4,3.4,0,4.1-2.7c-1.4,0-2.7-2.7-4.1-1.4c-2.1,1.4-4.1,0-5.5,0c-4.1,0-4.8-2.1-4.8-5.5  c0-0.7-0.7-1.4-1.4-1.4c-1.4,3.4-4.1,6.2-8.9,6.2c1.4-2.7,1.4-5.5,0.7-7.6c-0.7,0.7-2.1,1.4-2.1,2.1c0,1.4-0.7,1.4-1.4,1.4  c-3.4-1.4-4.1,0.7-4.8,3.4c-5.5,0-4.1-6.2-7.6-8.2c-1.4,3.4-5.5,2.7-8.2,4.8c-3.4,2.1-6.9,3.4-6.9,8.2c0,1.4-1.4,1.4-2.7,2.1  c0-2.7,1.4-4.8,1.4-6.9c-2.1-0.7-3.4,0-4.8,1.4c-1.4,1.4-3.4,2.7-4.8,0c0-0.7-2.1-0.7-2.1,0.7c0,1.4-2.1,2.1-0.7,3.4  c0.7,0.7,0.7,2.1,0,3.4c-1.4,2.7-1.4,5.5-2.1,8.2c-6.2-2.1-6.9-6.2-6.9-11c1.4-1.4,2.7,0,4.1-0.7c0.7-0.7,0.7-1.4,0.7-2.1  c0-0.7-0.7-0.7-1.4-0.7l0,0l0,0l0,0l0,0c-2.7,0-4.1,0.7-4.8,2.7c-1.4,4.8-2.1,9.6-2.1,14.4c0,1.4-0.7,2.1-1.4,2.1  c-2.7,1.4-3.4,2.7-2.7,5.5c0.7,1.4,0,2.7,0,4.1c-3.4-2.1-2.1-5.5-2.7-8.9c-1.4,2.1-2.7,0.7-3.4,2.1c-2.7,2.1-2.7,3.4-2.1,4.1  c0.7,2.7,2.1,5.5-1.4,8.2c-0.7,0-0.7,1.4,0,2.1c2.7,1.4,2.7,4.1,3.4,7.6c-3.4,0-6.2-1.4-8.9-0.7c0.7,2.7,1.4,4.8,2.1,7.6  c0,0.7,0,1.4-0.7,0.7c-1.4-3.4-2.7,1.4-4.1,0c2.1,2.1,2.1,4.8,2.7,7.6c0,1.4,0,2.1,1.4,2.7c2.1,1.4,4.1,3.4,0,4.8  c-0.7,0,0,1.4,0,2.1c-0.7,2.7,1.4,4.1,2.7,5.5c1.4,2.1,1.4,3.4-0.7,4.1c-4.1-0.7-4.1,1.4-4.8,3.4c0,0.7,0,2.1,1.4,2.7  c1.4,0.7,2.1,0.7,2.1-0.7c0.7-1.4,2.1-1.4,3.4-0.7c0.7,0,1.4,0,1.4,0.7c0,1.4-0.7,0.7-1.4,0.7c-1.4,0-2.1,1.4-2.1,2.1  c0,0.7,1.4,2.1,2.1,1.4c2.1-1.4,3.4,0,4.8,0c2.1,0,4.8-2.1,5.5,0.7c0.7,2.1-2.7,2.1-3.4,3.4c-1.4,1.4-2.7,2.1,0,4.1  c1.4,0.7,2.1,2.1,2.7,3.4c0.7,2.1,1.4,4.8,4.8,2.7c0.7-0.7,2.1,0.7,2.1,1.4c0.7,2.1,0.7,2.1,1.4,0c0-0.7,0.7-1.4,2.1-1.4  c0.7,0,1.4,0.7,0.7,1.4c0,1.4,1.4,2.1-0.7,3.4c-1.4,1.4-0.7,2.7,1.4,4.1c2.1-2.1,2.7-4.8,3.4-7.6c0.7,0.7,1.4,0.7,1.4,0.7  c1.4,3.4,3.4,4.8,6.9,5.5c2.1,0,3.4,1.4,2.7,3.4c0,2.1,2.1,3.4,2.1,5.5c0,1.4,0.7,1.4,1.4,1.4c0.7,0,1.4-0.7,2.1-1.4  c1.4-1.4-1.4-3.4,0.7-4.8c2.7,0.7,4.1,2.7,4.1,5.5s1.4,2.7,3.4,1.4c0.7,0,1.4-0.7,2.1,0c3.4,4.8,4.8,10.3,7.6,15.1  c0.7,0.7,0.7,2.1-0.7,2.7c-4.1,2.1-6.9,5.5-11,8.2c-5.5,4.1-10.3,8.2-16.5,9.6c-6.9,2.1-12.4,5.5-18.6,9.6  c-4.1,2.7-6.9,6.9-8.9,11.7c-2.7,6.9-4.1,13.7-4.1,20.6c-0.7,17.9,0,35.7,0,53.6c0,0.7,0,2.1,0.7,2.7c2.7,2.1,1.4,4.1,1.4,6.9  c-0.7,9.6-2.1,18.6-2.7,27.5c-0.7,8.2-2.7,16.5-6.2,24.7C3.4,496.2,0.7,503.8,0,512h173.8c-3.4-37.8-4.1-101.7-4.8-139.5  c0-11.7-0.7-23.4,2.1-35c2.7-12.4,4.8-24.7,13.1-35c2.1-2.7,2.1-5.5,1.4-8.9c-2.7-8.2-3.4-16.5-2.7-25.4c1.4-11,2.1-22,2.7-33  c0.7-11,1.4-22,1.4-33.7c0-6.9,0-13.7,2.7-20.6c2.1-5.5,2.1-11,2.7-16.5c1.4-23.4,2.1-47.4,1.4-70.8c0-8.9,0.7-17.9,3.4-26.8  c1.4-4.8,2.1-9.6,2.1-14.4c-0.7-8.9,0-17.9,4.8-25.4c0.7-1.4,1.4-2.7,2.1-4.1c0.7-2.1,1.4-4.1,1.4-6.2  C209.6,15.9,208.9,14.5,206.8,14.5L206.8,14.5z M128.5,294.9c-0.7,3.4-2.7,5.5-5.5,7.6c-2.7,1.4-6.9,0-8.2-2.1c0-0.7-0.7-1.4,0-1.4  c3.4-1.4,0.7-2.7,0-4.1c-0.7-0.7,0-1.4,1.4-2.7c1.4,0.7,0.7,2.7,2.7,2.7l0.7-0.7c-0.7-1.4,0.7-3.4-0.7-4.1c-0.7-0.7-0.7-1.4,0-1.4  c0.7,0,0.7,0,1.4-0.7c2.1-0.7,0-5.5,2.7-3.4c2.7,2.1,6.2,4.1,6.9,7.6C129.9,292.8,129.2,293.5,128.5,294.9L128.5,294.9z   M139.5,273.6c-1.4,0-1.4-1.4-1.4-2.1c0-2.1,0-3.4-2.1-4.1c-1.4-0.7-0.7-1.4,0-2.7c1.4-1.4,2.1-0.7,2.7,0c1.4,1.4,0,3.4,1.4,4.8  c0,0.7,0,1.4,0.7,2.1C141.5,272.9,140.2,273.6,139.5,273.6z M147,256.4c-0.7,0-1.4-0.7-2.1-0.7c0,2.1,2.7,0.7,2.7,2.7  c-3.4,2.1-5.5,5.5-4.8,11c-1.4,0.7-1.4-0.7-2.1-0.7c0-1.4-0.7-2.7,0.7-4.1c2.1-2.7-0.7-2.7-1.4-3.4c0.7-1.4,2.7,0.7,3.4-2.1  c-1.4-2.1-2.1-4.8-3.4-7.6c2.7-1.4,5.5,0.7,8.2,0c1.4-0.7,2.1,1.4,2.1,2.7C149.8,256.4,148.4,257.1,147,256.4L147,256.4z   M153.2,238.5l-0.7,1.4c-4.1-0.7-2.1,2.1-1.4,2.7c2.7,2.7,1.4,4.8,0.7,8.2c-2.1-4.1-6.9-3.4-7.6-7.6c0.7-1.4,2.1-1.4,2.7-2.1  c0.7-1.4,4.8-3.4,0-4.1c0,0-0.7-0.7-0.7-1.4c0-0.7,0.7-1.4,1.4-1.4c4.8,1.4,4.1-2.7,5.5-5.5C154.6,233,153.2,235.8,153.2,238.5  L153.2,238.5z M153.2,220c-0.7,0.7-0.7,2.1-2.1,1.4c-0.7-1.4,0.7-2.7-0.7-4.1c-2.1-2.7,0.7-3.4,2.1-4.8c0.7-0.7,2.1-0.7,2.7,0.7  C156.7,215.2,156,218.6,153.2,220L153.2,220z M149.1,203.5L149.1,203.5L149.1,203.5L149.1,203.5L149.1,203.5z M153.2,202.8  c-1.4,0-2.1,1.4-3.4,0.7C151.2,205.5,152.5,205.5,153.2,202.8z"],
  "Q_silhouette_on_mountain_hand_pitchfork": [260.1, 512, [], "e025", "M256.8,500.4c-2.1-3.4-5.5-6.2-8.2-8.9l-13-12.3L217.8,462l-13-12.3l-15.1-14.4c-4.8-4.1-8.9-8.9-14.4-12.3  c-4.8-2.7-11-3.4-15.7-7.5c-3.4-2.7-6.2-6.2-9.6-8.9c-5.5-4.1-13.7-6.2-13-14.4c0.7-2.7,2.7,0.7,4.8-4.1c2.1-3.4,3.4-8.2,4.8-12.3  c5.5-14.4,11-29.4,16.4-43.8c2.1-4.1,4.1-7.5,3.4-12.3c-0.7-4.1-3.4-7.5-5.5-11c-6.2-8.9-12.3-17.8-19.2-26.7  c-9.6-14.4-18.5-25.3-34.2-32.2c-1.4-0.7-2.1-2.1-1.4-3.4c0-0.7,0-1.4,0-2.1c-4.8-4.8-4.1-17.1-4.8-23.3  c-1.4-11.6-2.1-22.6-2.7-34.2c-3.4-30.8,17.8-54.8,30.1-81.5c7.5-17.1,12.3-36.3,13.7-54.8c0.7-2.7,0-5.5,1.4-8.2  c2.1-4.8,4.8-8.9,5.5-13.7c1.4-3.4,5.5-6.2,8.2-10.3c0.7-1.4,2.7-4.1,0.7-5.5c-0.7,0-1.4,0-2.1,0.7c-2.1,2.1-4.1,4.8-6.2,6.8h-0.7  l0,0l0,0l0,0c0.7-0.7,0.7-2.1,0.7-2.7c0-2.1-2.7-3.4-4.1-2.1c-0.7,0.7-2.1,3.4-2.7,2.1c0,0,0-0.7,0-1.4c1.4-4.8,3.4-9.6,4.1-14.4  c0-2.1-2.1-2.7-3.4-1.4c-2.7,4.1-4.1,9.6-5.5,14.4c0,0.7,0,1.4-0.7,1.4c-0.7,0.7-1.4,0-1.4-0.7c0-3.4-1.4-6.8-1.4-11  c0-0.7,0-2.1-0.7-2.7c-0.7-1.4-2.1-1.4-2.7,0c0,0.7-0.7,1.4-0.7,2.1c-1.4,6.8,0,13.7,0,20.5c0,18.5-6.2,35.6-13,53.4  c-6.2,19.8-16.4,39-34.2,51.3c-3.4,2.1-13,13.7-13.7,3.4c0-2.7,0-5.5,0-7.5c0.7-2.1,1.4-4.8,2.7-6.8l0.7-0.7c1.4,0,2.1,0,3.4-0.7  c0,0,0,0,0,0.7c0,0.7-0.7,0.7-1.4,0.7c0,0,0,0,0,0.7c0,0,0,0,0.7,0c2.1,0,2.1-2.7,2.7-4.1l0,0c1.4-1.4,0.7-2.7-1.4-3.4  c-2.7-0.7-1.4-2.1-1.4-3.4c0.7-2.1,1.4,0.7,2.1-0.7c0-2.1,4.8-3.4,2.7-4.8c-1.4-0.7-0.7-1.4,0-2.1c0-1.4,1.4,0,1.4-0.7  c0.7-0.7,1.4,0.7,2.1,0c-2.7-4.1-3.4,0-4.8-2.7c-0.7-1.4-0.7-2.7-2.1-3.4c-0.7-0.7,0-1.4,0.7-2.1c-0.7,0-1.4-0.7-1.4-0.7  c0.7-0.7,2.1-2.1,2.1-3.4c0-1.4,0-4.1-1.4-4.8c-2.1,0-4.1,0-5.5-1.4c-2.1-2.1-4.8-2.7-6.8-4.8c-0.7,0-3.4,0-6.2,0  c-2.1-2.1-13-2.7-15.1,0c-0.7,1.4-1.4,2.7-2.7,2.7c-0.7,0.7-2.1,1.4-2.1,2.7c-0.7,2.7-2.7,5.5-3.4,8.2c0,1.4,0,1.4-1.4,1.4  c-2.1,0.7-2.7,1.4-1.4,3.4c0.7,0.7,0.7,1.4,0.7,2.7c0,0.7-0.7,0.7-0.7,0.7c-2.1,0-0.7,2.7,0,3.4c0.7,0.7,1.4,2.1,0.7,2.7  c-0.7,2.1,0.7,3.4,2.1,4.1c0,0,0.7,0,0.7,0.7c-0.7,1.4,0.7,2.1,0.7,2.7c0,0.7,0.7,2.1,0.7,3.4c0,0.7,0,1.4,0.7,1.4  c2.7,0.7,1.4,2.7,3.4,4.1c4.1,2.1,2.1-1.4,4.1,2.7c2.1,2.7,0.7,8.2,1.4,11.6c0,3.4-1.4,5.5-4.1,6.8c-1.4,0.7-3.4,1.4-4.8,2.1  c-4.1,2.1-8.2,3.4-12.3,4.8c-4.1,1.4-7.5,3.4-10.3,6.8c-7.5,9.6-4.1,27.4-3.4,38.3c1.4,30.8,6.2,61.6,13.7,91c0.7,1.4,0,4.8,1.4,6.2  c1.4,2.7,3.4,2.1,5.5,2.7c1.4,0,2.1,1.4,2.7,2.7c1.4,1.4,2.7,2.7,4.1,4.1c2.7,3.4,4.1,8.2,4.8,13l3.4,21.9  c0.7,4.1,4.1,13.7,2.1,17.1c-0.7,1.4-1.4,2.7-1.4,4.1c0,5.5-1.4,11-0.7,17.1c0.7,19.2,4.8,37.6,12.3,55.4c1.4,4.1,2.7,8.9,1.4,13  s-3.4,4.8,0,8.9c1.4,2.1,0,4.1-2.1,4.1c-0.7,0-2.1,0.7-2.7,0.7c-15.1,1.4-28.7,9.6-39,20.5c-4.8,4.8-8.9,9.6-12.3,15.7  c-3.4,4.1-6.2,8.9-5.5,15.1c0,2.1,1.4,4.1,3.4,4.1c3.4,0,6.8,0,10.3,0H176c28.1,0,55.4,0,83.5,0  C260.9,507.9,259.5,503.8,256.8,500.4L256.8,500.4z M35.7,225.9c0,2.1-0.7,3.4,0,5.5c0,1.4-0.7,2.1,0,3.4c0,0,0,0.7-0.7,0.7  c-0.7,0.7-1.4,0.7-1.4-0.7c0-3.4-0.7-6.8-0.7-9.6c0-2.1,0.7-4.8,0.7-6.8c0-0.7,0-1.4,0-2.1c0-4.1,0-8.2,0-12.3  c0.7-1.4,2.1,1.4,2.1,2.1c0,3.4,0,6.8,1.4,9.6C37.8,219.1,35.7,222.5,35.7,225.9L35.7,225.9z M79.5,434c1.4,0,4.1,1.4,4.1,2.1  s-0.7,1.4-1.4,0.7C80.9,436.7,78.1,434.7,79.5,434L79.5,434z M131.5,338.8c-4.8,6.8-7.5,15.1-9.6,23.3c-0.7,4.1,0,8.2-1.4,12.3  c-0.7,2.7-1.4,6.8-2.7,9.6c-1.4,2.1,1.4,2.7,0.7,4.8c-0.7,2.1-1.4,4.8-1.4,6.8c0,0.7-0.7,1.4-1.4,1.4s-2.1,0.7-1.4,1.4  c0.7,1.4,0.7,3.4,0,4.8c0,0.7-0.7,0.7-1.4,1.4c-2.7,1.4-2.7,4.8-3.4,6.8c0,1.4-0.7,2.7-1.4,3.4c-0.7,0.7-1.4,1.4-2.1,2.7  c-1.4,2.1,0.7,4.1,2.7,4.1c5.5,1.4,11.6,1.4,17.8,2.1c-1.4,1.4-4.1,2.7-6.2,4.1c-0.7,0.7-5.5,3.4-5.5,4.1c-2.7,2.1-6.2,4.1-8.2,6.8  c-2.7,2.7-5.5,5.5-8.9,6.2c-1.4,0.7-3.4,0-5.5,0.7c-1.4,0.7-2.1,2.1-3.4,2.7c-1.4,0-2.7-2.1-2.7-2.7c-0.7-2.7-3.4-3.4-5.5-4.8  c-0.7-0.7-0.7-2.1,0.7-2.1c1.4,0.7,2.7-0.7,2.1-2.1c-0.7-1.4-2.7-2.7-4.1-2.7c-3.4-0.7-0.7-4.8-0.7-7.5c0-3.4,0-6.2-0.7-9.6  c-1.4-11.6-2.7-23.3-4.1-35.6c0-2.7-1.4-6.2,0-9.6c0.7-2.7,0.7-4.8,0-7.5c-0.7-1.4-0.7-2.7,0-4.8c1.4-2.7,1.4-5.5,1.4-8.2  c0-2.7,0.7-5.5,0.7-8.2c1.4-8.2,2.7-16.4,5.5-24.6c0.7-4.1,2.1-7.5,2.7-11.6c0-2.7,1.4-6.2,4.8-6.2c6.2,2.1,12.3,4.8,18.5,7.5  c4.8,2.7,10.3,4.8,15.1,8.2c3.4,2.7,6.2,6.2,9.6,8.9c0.7,0.7,2.1,1.4,2.7,2.1C137.7,331.3,134.3,335.4,131.5,338.8L131.5,338.8z   M79.5,93.8L79.5,93.8L79.5,93.8z"],
  "R_two_silhouettes_on_mountain_hand_pitchfork": [534.6, 512, [], "e026", "M518.6,476.6c-1.4-1.4-2.8-2.8-4.1-3.4c-9.6-7.6-20-13.1-31-17.9c-7.6-11.7-15.8-22-25.5-31.7c-6.9-6.9-16.5-20-26.9-18.6  c-1.4,0-4.1,2.1-5.5,1.4c-2.1-1.4-0.7-4.8-2.8-6.9c-2.8-2.1,2.8-4.1-2.8-13.8c0-0.7,4.8-5.5,5.5-6.9c4.1-11.7,3.4-24.1,4.8-35.8  c0-7.6,3.4-16.5,0.7-23.4c-1.4-2.8-0.7-8.3-1.4-11c0-4.1,0-9,0.7-13.1c0.7-8.3,2.1-16.5,4.8-24.8c2.8-8.3,7.6-16.5,8.3-25.5  c0-2.8,2.8-6.2,0.7-8.3c-2.8-2.8-4.1-6.2-4.1-10.3c0-5.5,14.5-4.1,4.1-13.8c-8.3-12.4-13.1-27.5-12.4-42.7  c-0.7-9.6,2.1-18.6,0.7-28.2c0-1.4,0-2.1,0.7-3.4c2.1-6.2-0.7-13.1,4.1-17.9c1.4-1.4,2.1-3.4,1.4-4.8c-2.1-26.9,0.7-54.4-4.1-81.3  c-0.7-2.1-0.7-4.8,0-6.9c2.1-6.2,0-12.4,2.8-18.6c0.7-0.7,0.7-2.8-0.7-2.1c-1.4,1.4-2.1,3.4-3.4,5.5c-0.7,1.4-1.4,0-2.8,0  c-0.7,0-1.4,0-2.1,0c-4.8-0.7,0-10.3-3.4-12.4c-4.1,0,0.7,14.5-2.8,12.4c-1.4-2.1-1.4-4.1-2.1-6.9c-0.7-0.7-2.1-1.4-2.1,0  c0,9,3.4,17.2,5.5,25.5c1.4,11.7-2.8,23.4-0.7,35.1c2.1,5.5-2.1,10.3-2.8,15.8c-1.4,5.5,0.7,12.4-4.1,16.5  c-4.8,4.1-5.5,6.9-11.7,8.3c-4.8,1.4-6.9-4.8-3.4-7.6c4.8-6.2,2.1-10.3,1.4-17.2c1.4-28.9-31-26.2-39.3-2.8  c-0.7,1.4-2.8,2.8-2.1,4.8c1.4,2.1,0,6.2,4.1,5.5c1.4,0,1.4,0,2.1,1.4c2.8,6.2,2.8,13.8,6.9,19.3c3.4,5.5-7.6,7.6-11,9.6  c-8.3,4.8-9,16.5-11,25.5c0.7,3.4-4.8,20-1.4,20.7c2.1,0.7,4.8,0,4.1,3.4c0.7,9-4.1,16.5-6.2,24.1c-2.1,13.8-6.2,25.5-8.3,39.3  c-1.4,6.9-2.1,14.5-4.8,21.3c-4.8,7.6-9.6,14.5-13.8,22c-2.8,14.5,1.4,28.9,2.1,43.4c0.7,5.5-3.4,21.3,3.4,23.4  c2.1,1.4-1.4,4.8-0.7,7.6c0.7,3.4-6.2,6.2-2.8,9c2.8,2.8-4.8,11.7,0,14.5c2.8,2.8,9.6-4.1,9-0.7c-0.7,1.4-1.4,2.1-2.8,2.8  c-4.8,1.4-6.9,6.9-11,9c-4.8,2.8-11,2.8-15.8,4.1c-20.7,5.5-43.4,8.3-60.6,20.7c-8.3,6.9-4.8,11.7-14.5,15.8  c-4.8,2.1-6.9,6.9-15.8,12.4c-0.7,0.7-0.7,0-1.4-0.7c-4.1-16.5-12.4-95.7-10.3-112.9c0-11,16.5-10.3,10.3-41.3  c-1.4-21.3,1.4-42.7-4.8-63.4c-2.8-18.6,5.5-53-15.8-62c-2.8-1.4,0-4.8-0.7-7.6c0-5.5-2.1-10.3-2.1-15.2c0.7-8.3-2.8-15.8-5.5-23.4  c-3.4-9.6-15.8-16.5-25.5-10.3c-6.2,6.9-11.7,15.2-15.8,22.7c0.7-0.7,2.1-0.7,2.1,0.7c-0.7,3.4-0.7,6.9-1.4,9.6  c-2.8,1.4-2.8-6.2-2.8-8.3c-1.4-0.7,0-4.1-1.4-6.2c-2.8-6.9-1.4-15.2-3.4-22c-3.4-14.5-9.6-32.4,0.7-44.8c0.7-0.7,0.7-1.4,0-2.1  c-2.1-2.8-6.9,15.2-10.3,6.9c-0.7-1.4-3.4-9.6-4.1-11c-0.7-1.4-2.8-0.7-2.1,1.4c1.4,3.4,6.2,13.8-1.4,13.1c-2.1-0.7-4.8-4.8-6.9-6.2  c-0.7-0.7-1.4,0-1.4,0.7c0,1.4,4.8,6.9,5.5,8.3c3.4,3.4,2.8,8.3,5.5,12.4c2.8,11.7,0,25.5,3.4,37.2c1.4,4.8-0.7,9-0.7,13.1  c0,4.8,0,9.6,0,14.5c3.4,24.1,12.4,48.2,10.3,72.3c0.7,3.4-3.4,5.5-3.4,8.3c-0.7,2.8-2.8,13.8-4.1,15.8c-0.7,2.1-5.5,2.8-8.3,29.6  c-1.4,22,2.8,44.8,8.3,68.2c1.4,15.8,0.7,64,0,78.5c0,6.2,2.8,13.1,1.4,19.3c-3.4,10.3-24.8,17.2-33.7,16.5  C76.4,449,68.2,491,52.3,490.3C27.5,487.6,12.4,486.2,0,511c132.2,0.7,265.8,0,398.1,0.7c33.1,0,66.1,0.7,99.2,0  c8.3,0,16.5,0,24.8,0c7.6,0,11.7,1.4,12.4-6.2C535.8,495.2,526.8,484.1,518.6,476.6L518.6,476.6z M183.2,455.9  c-1.4,2.8-2.8,3.4-4.8,3.4c-2.1-0.7-4.8-2.1-6.9-2.8c-2.8-1.4-5.5-2.1-7.6-4.1c-2.8-2.1-5.5-4.8-6.9-7.6c-1.4-2.8-1.4-7.6-3.4-9.6  c-0.7-0.7-2.1,0-2.1-0.7c-1.4-1.4-1.4-2.8-1.4-4.8c-0.7-10.3,4.8-19.3,3.4-29.6s0-72.3,0.7-82.6c0.7-5.5,1.4-11.7,1.4-17.2  c0-0.7,0.7-0.7,0.7,0c16.5,34.4,17.2,108.8,27.5,145.3C185.3,449,184.6,453.2,183.2,455.9L183.2,455.9z M183.9,153.6  c0-2.8,1.4-5.5,2.1-0.7C186.6,155.6,183.9,157.7,183.9,153.6z M189.4,230.7c2.1,0.7,2.8,18.6,3.4,20.7  C191.5,254.8,185.9,231.4,189.4,230.7z M361.6,207.3c2.1-4.8,4.1-9.6,5.5-14.5c0.7-2.8,2.8-0.7,2.8,1.4c0,2.1-1.4,3.4-0.7,5.5  c0,2.1-2.8,4.1-0.7,6.2c0.7,1.4,2.8,2.8,0.7,3.4c-0.7,0.7-2.1,1.4-2.8,2.1c-1.4,3.4-3.4,6.2-5.5,9c0,0-0.7,0.7-0.7,1.4  c1.4,2.1-1.4,2.1-2.1,4.1c-1.4,1.4-9,11.7-9.6,7.6C352.6,224.5,358.1,216.2,361.6,207.3L361.6,207.3z M403.6,330.6  c-2.1,4.8,0.7,9.6-1.4,14.5c-0.7,5.5-2.1,11.7-2.8,17.2c-0.7,3.4-2.8,7.6-0.7,11c0.7,2.1,4.1,6.2,0.7,7.6c-6.9,4.1-2.1,0-9.6-6.9  c-2.1-2.8-6.9-0.7-9-3.4c-6.2-6.2-16.5-0.7-23.4-4.1c-3.4-1.4-9,1.4-11.7-1.4c0.7-1.4,2.8-2.1,4.1-2.8c2.8-1.4,6.2-4.8,2.8-6.9  c-2.1-1.4-2.8-3.4-4.1-4.8c-0.7-3.4,2.1-4.8,0-10.3c-1.4-4.1,0.7-4.8-1.4-9c-4.1-12.4,0.7-26.2-2.1-38.6c1.4-2.8-2.8-6.2-0.7-6.2  c2.1,0,0.7-2.8,2.8-2.1c2.1,0,4.1-1.4,4.8-2.8c2.8-4.8,8.3-6.9,12.4-10.3c6.2-5.5,15.2-7.6,22-12.4c1.4-0.7,4.1-2.8,5.5-1.4  c9,11.7,9,35.1,10.3,49.6c-0.7,4.8,1.4,8.3,1.4,13.1c-0.7,2.1-0.7,3.4,0.7,4.8C404.3,326.4,404.9,328.5,403.6,330.6L403.6,330.6z"],
  "S_silhouette_salute_cap": [487.1, 512, [], "e027", "M485.3,223.2c-5.6-11.2-12-22.4-20.8-31.2c-2.4-2.4-4-4.8-6.4-7.2l-6.4-8.8c-4.8-5.6-9.6-11.2-15.2-16.8  c-4-3.2-6.4-7.2-12-8.8c-1.6-0.8-3.2-1.6-4-2.4c-4.8-3.2-8.8-5.6-13.6-7.2c-6.4-2.4-12.8-4.8-19.2-8c-8.8-4-17.6-5.6-26.4-4  c-1.6,0-2.4,0-3.2-0.8c-1.6-0.8-2.4-1.6-3.2-1.6c-8.8-3.2-17.6-6.4-26.4-9.6h-0.8c-1.6-0.8-3.2-0.8-4,0c-1.6,0.8-2.4,0.8-3.2,1.6  c-1.6,0.8-2.4,0.8-3.2-0.8c-3.2-3.2-7.2-6.4-9.6-9.6c-1.6-2.4-4-4-6.4-5.6c-4-3.2-7.2-8-12.8-9.6c-5.6-1.6-11.2-4-16-6.4  c-8-3.2-14.4-8-20.8-14.4c-1.6-1.6-2.4-4-1.6-6.4c0.8-3.2,0-6.4-1.6-9.6c-2.4-4-2.4-8.8,0-12.8c3.2-6.4,5.6-14.4,4.8-21.6  c0-2.4-0.8-4-1.6-6.4c-2.4-4.8-6.4-7.2-10.4-9.6c-6.4-4-13.6-5.6-20.8-5.6c-8,0-16,0.8-24,0c-6.4,0-12.8,0.8-19.2,2.4  c-9.6,1.6-17.6,5.6-27.2,8c-4,1.6-7.2,4-9.6,7.2c-2.4,2.4-3.2,4.8-1.6,8.8c0.8,1.6,1.6,3.2,1.6,4.8c0.8,8,4,15.2,4,24  c0,1.6,0,3.2-0.8,4c0,1.6-0.8,4,0.8,5.6c2.4,3.2,2.4,7.2,3.2,11.2c0.8,3.2,1.6,6.4-3.2,8c-0.8,0-0.8,0.8-0.8,1.6  c-0.8,3.2-2.4,5.6-1.6,8.8c1.6,4.8,3.2,9.6,4.8,14.4c1.6,3.2,3.2,5.6,7.2,6.4c2.4,0,2.4,1.6,3.2,3.2c0.8,4,2.4,8,4.8,12  c0.8,1.6,1.6,3.2,1.6,4.8c0,6.4,0,13.6-4.8,19.2c-1.6,1.6-1.6,3.2-3.2,4.8c-1.6,2.4-3.2,4-5.6,4.8c-5.6,2.4-11.2,4.8-16.8,7.2  c-12.8,4.8-26.4,9.6-39.2,15.2c-1.6,0.8-3.2,0.8-4.8,1.6c-5.6,3.2-12,5.6-16.8,9.6c-4,2.4-6.4,5.6-8,9.6  c-2.4,5.6-5.6,11.2-10.4,15.2c-4,4-7.2,8.8-10.4,13.6c-0.8,1.6-1.6,3.2-1.6,4.8c0.8,3.2-0.8,6.4-2.4,8.8c-4.8,5.6-8,12-13.6,16.8  c-1.6,1.6-2.4,2.4-2.4,4.8c0,3.2-1.6,6.4-3.2,9.6c-2.4,7.2-4.8,13.6-6.4,20.8c-2.4,11.2-4,22.4-4.8,33.6c0,1.6-0.8,4,0,4.8  c1.6,3.2,0.8,6.4,0.8,9.6c0,2.4,0,4.8,0.8,7.2c0,1.6,0.8,2.4,0,4c-2.4,6.4-2.4,12.8-4.8,19.2c-1.6,5.6-2.4,11.2-2.4,17.6  s-0.8,13.6-2.4,20c-1.6,7.2-1.6,14.4-0.8,21.6c2.4,18.4,3.2,36.8,4,55.2c0,1.6,0.8,3.2,0,4.8c-0.8,4.8,0,8.8,0.8,12.8h345.6  c-1.6-4.8-2.4-8.8-4-13.6c-3.2-8-5.6-16.8-10.4-24.8c-3.2-4.8-4-9.6-4-15.2c1.6-11.2-0.8-22.4-3.2-33.6c-1.6-8-1.6-16.8-1.6-25.6  c0-4.8,0.8-9.6,0.8-14.4c0-2.4,0.8-4.8,0-7.2c-0.8-13.6,0-27.2-0.8-40.8c-0.8-8.8,2.4-16.8,5.6-24c0.8-1.6,1.6-3.2,3.2-4.8  c3.2-2.4,6.4-5.6,9.6-8.8c2.4-3.2,4.8-5.6,8-8c3.2-3.2,7.2-7.2,9.6-12c2.4-4,5.6-5.6,9.6-4c1.6,0.8,3.2,0.8,4.8,0  c4.8-0.8,9.6-0.8,15.2-0.8c14.4,0,28.8-0.8,42.4-3.2c6.4-0.8,13.6-3.2,20-4c9.6-1.6,16-8,22.4-13.6s9.6-12.8,8.8-21.6  C487.7,229.6,486.1,226.4,485.3,223.2z M333.3,193.6c-5.6,1.6-6.4-1.6-16.8-1.6c-4,0-6.4-3.2-8-8c-0.8-2.4-3.2-3.2-4-5.6  c-1.6-2.4-1.6-2.4-4-3.2l-8-4c-4.8-1.6-9.6-2.4-14.4-3.2s-11.2-4-16.8-3.2c-3.2,0.8-6.4-0.8-9.6-3.2c-1.6-0.8-3.2-0.8-5.6,0  c-3.2,0.8-5.6-0.8-7.2-3.2s-4.8-1.6-5.6-4c-2.4-4.8-4.8-9.6-8.8-13.6c-0.8-0.8-1.6-2.4-1.6-4c0.8-6.4,1.6-13.6,2.4-20  c0.8-3.2,2.4-4,4.8-4.8c4,0,8-3.2,7.2-8.8c0.8-4.8,2.4-5.6,2.4-10.4c0.8-5.6,0.8-6.4,0.8-12c2.4,4,10.4,8.8,16,13.6  c4,4,6.4,8.8,9.6,11.2c8.8,6.4,9.6,12,9.6,16.8c0,5.6,6.4,8,8.8,9.6c6.4,6.4,9.6,7.2,18.4,8.8c4.8,0.8,1.6,1.6,4,7.2  c0,0.8,8,4,8.8,4.8c6.4,6.4,12,14.4,19.2,20c3.2,2.4,25.6,16,35.2,22.4C364.5,197.6,354.1,192,333.3,193.6L333.3,193.6z"],
  "T_silhouette_salute_beret": [458.5, 512, [], "e028", "M456.9,201.5c-2.4-7.2-6.4-12.8-12-17.6c-4-3.2-8-6.4-12-8.8c-4.8-2.4-8.8-6.4-12-9.6c-7.2-7.2-16-13.6-26.4-17.6  c-3.2-1.6-7.2-4-9.6-6.4c-8-8.8-16.8-16.8-25.6-24.8c-1.6-1.6-4-4-6.4-5.6c-1.6-1.6-4-1.6-6.4-0.8c-1.6,0.8-3.2,1.6-4.8,2.4  c-4,2.4-7.2,5.6-10.4,9.6c-2.4,2.4-4,3.2-6.4,0.8c-5.6-3.2-11.2-5.6-16.8-8.8c-4.8-2.4-8.8-4.8-12.8-8c-6.4-4.8-12.8-9.6-19.2-14.4  c-3.2-2.4-6.4-4-10.4-4c-7.2,0.8-13.6-2.4-20-4c-2.4-0.8-4-2.4-4.8-4c-3.2-12.8-7.2-24.8-11.2-37.6c-4.8-16-15.2-26.4-28.8-35.2  c-3.2-2.4-7.2-4-11.2-4.8C179.3-0.2,167.2-1,156,1.4c-3.2,0.8-6.4,1.6-8.8,3.2c-4,0.8-6.4,3.2-7.2,6.4c-2.4,6.4-4.8,12-6.4,18.4  c-0.8,2.4-1.6,4.8-0.8,7.2c2.4,6.4,0.8,12.8,0.8,19.2c0,4.8-0.8,9.6,0,14.4c0,4,0.8,6.4-3.2,8c-0.8,0.8-1.6,2.4-1.6,3.2  c-1.6,6.4-0.8,12,0.8,18.4c1.6,4,2.4,8,6.4,9.6c1.6,0.8,3.2,1.6,3.2,3.2c0.8,6.4,4,11.2,6.4,16.8c3.2,5.6,0.8,10.4-5.6,12  c-8,3.2-14.4,7.2-19.2,15.2c-0.8,1.6-2.4,3.2-4,4c-4,2.4-7.2,5.6-12,1.6c-1.6-1.6-4-2.4-6.4,0c-3.2,3.2-6.4,4-10.4,5.6  c-1.6,0-3.2,0.8-3.2,2.4c-0.8,2.4-3.2,3.2-4.8,4c-2.4,1.6-4.8,1.6-7.2,2.4L52,183.9c-4,1.6-8,4.8-9.6,9.6c-1.6,8-4.8,16-5.6,24  c-0.8,4.8-1.6,10.4-4,15.2c-4.8,12-8.8,24.8-10.4,37.6c-0.8,1.6-1.6,3.2-1.6,5.6c-3.2,13.6-6.4,28-6.4,42.4c0,7.2-0.8,14.4-1.6,22.4  c-1.6,13.6-4,27.2-4.8,40.8c-2.4,18.4-3.2,37.6-5.6,56c-1.6,12-2.4,24.8-1.6,36.8c0,12.8,0,25.6-0.8,37.6h48c0-0.8,0-1.6,0-1.6  c-0.8-5.6-1.6-12-0.8-17.6c0-5.6,2.4-11.2,4-17.6c2.4-9.6,2.4-20,4-30.4V444c-4-13.6,0-24.8,1.6-36c0.8-4.8,1.6-9.6,1.6-14.4  c-0.8-3.2,0-5.6,1.6-8c6.4-9.6,8-20,8-31.2v-9.6c0-4,1.6-8,4-11.2c0.8-1.6,2.4-1.6,3.2,0c3.2,4,5.6,8.8,4.8,14.4  c-0.8,8,0,15.2,1.6,23.2c1.6,6.4,0.8,11.2-1.6,17.6c-10.4,24-17.6,48.8-21.6,74.4c-2.4,16-5.6,32-6.4,48.8h270.5  c0-0.8,0-1.6-0.8-2.4c-1.6-8-4.8-16-6.4-24.8c-3.2-14.4-6.4-29.6-9.6-44c-1.6-5.6-3.2-11.2-4.8-16.8c-4-11.2-8.8-23.2-12.8-35.2  c-1.6-4.8-2.4-8.8-3.2-13.6c0-7.2-0.8-14.4-2.4-20.8c-1.6-11.2,0-22.4,2.4-33.6c0.8-1.6,1.6-3.2,2.4-4.8c6.4-10.4,12-21.6,16-33.6  c1.6-4.8,4-8.8,7.2-12c1.6-1.6,4-3.2,7.2-3.2h6.4c24-2.4,47.2-7.2,70.4-14.4c12-3.2,23.2-7.2,34.4-12c8-4,15.2-9.6,21.6-16  C458.5,217.5,460.1,210.3,456.9,201.5L456.9,201.5z M337.7,191.1c-6.4,1.6-12.8,0-19.2-0.8c-1.6,0-3.2-0.8-4.8-2.4  c-1.6-1.6-2.4-2.4-4-1.6c-5.6,0-7.2-3.2-8.8-8c-0.8-2.4-2.4-4-3.2-6.4c-1.6-2.4-4-4-6.4-4.8h-0.8c-5.6-1.6-12,0-17.6-0.8  c-5.6-0.8-11.2-3.2-17.6-1.6c-4,0.8-8,1.6-12.8-0.8c-1.6-0.8-4-0.8-6.4,0c-3.2,0.8-6.4-0.8-8-3.2c-1.6-2.4-4-4-5.6-6.4  c-3.2-4.8-4.8-10.4-9.6-14.4c-1.6-0.8-1.6-2.4-1.6-4c0.8-6.4,1.6-13.6,2.4-20c0.8-3.2,2.4-4,5.6-4.8c4.8,0,8.8-2.4,10.4-6.4  c1.6-3.2,3.2-4,6.4-1.6c0.8,0,1.6,0.8,1.6,0c8.8-4.8,14.4,1.6,20.8,5.6c1.6,0.8,3.2,2.4,4,3.2c4,1.6,8,4.8,9.6,9.6  c0.8,2.4,3.2,4.8,6.4,6.4c7.2,6.4,15.2,10.4,24.8,12c5.6,0.8,10.4,3.2,13.6,8.8c0,0.8,0.8,2.4,1.6,3.2c7.2,6.4,14.4,14.4,22.4,20  c3.2,2.4,7.2,4.8,11.2,5.6c6.4,0.8,8.8,4.8,9.6,11.2C352.9,188.7,345.7,192.7,337.7,191.1L337.7,191.1z"],
  "a_palm_tree": [364.6, 512, [], "e029", "M364.6,172.3c0,0-16.6-21.4-45.6-41.4c-20.7-15.9-49-31.8-82.2-37.3c-6.2-4.8-13.8-7.6-20-9.7  c0.7,0,1.4-0.7,2.1-0.7c13.1,4.8,29,12.4,29,12.4c-6.2-6.2-15.2-11-22.8-13.8l0,0c14.5,4.8,33.1,13.8,33.1,13.8  c-7.6-7.6-18.6-12.4-26.9-15.2h0.7c14.5,4.8,35.9,14.5,35.9,14.5c-3.5-3.5-7.6-6.9-12.4-9c10.4,4.1,20,9,20,9  c-9-9-23.5-14.5-31.1-17.3c0.7,0,1.4,0,1.4,0c14.5,4.1,37.3,15.2,37.3,15.2c-8.3-8.3-21.4-13.8-29.7-16.6c0.7,0,2.1,0,2.8,0  c13.8,3.5,39.4,15.9,39.4,15.9c-8.3-9-22.1-14.5-30.4-16.6c0.7,0,1.4,0,1.4,0c13.8,3.5,39.4,15.9,39.4,15.9c-4.8-4.8-11-9-17.3-11.7  c13.8,4.8,29.7,12.4,29.7,12.4c-6.9-6.9-16.6-11.7-24.9-15.2c14.5,2.8,38,11,38,11c-3.5-2.8-8.3-5.5-12.4-7.6  c5.5,2.1,11,4.1,16.6,7.6c0,0-2.8-2.8-8.3-6.9c9,2.8,16.6,5.5,16.6,5.5c-7.6-6.2-18-9.7-25.5-11.7c-16.6-11.7-44.2-24.9-74.6-19.3  c-6.2-1.4-12.4-1.4-18.6-0.7c13.8-5.5,27.6-6.9,27.6-6.9c-13.8-3.5-31.8,0.7-38,2.8c0.7-0.7,1.4-1.4,2.1-2.8  c14.5-3.5,37.3-6.2,37.3-6.2c-11-2.8-24.9-0.7-33.1,1.4c0.7-0.7,0.7-0.7,1.4-1.4c14.5-3.5,36.6-6.2,36.6-6.2  c-10.4-2.1-22.8-0.7-31.1,1.4c0.7-0.7,1.4-1.4,2.1-2.1c14.5-3.5,39.4-6.9,39.4-6.9c-11-2.8-24.9-0.7-33.1,1.4c0.7,0,0.7-0.7,1.4-1.4  c14.5-4.1,40.7-6.9,40.7-6.9c-11-2.8-24.2-0.7-32.5,1.4c0,0,0.7,0,0.7-0.7c10.4-4.1,45.6-8.3,45.6-8.3c-11.7-2.8-25.5-0.7-33.8,1.4  c1.4-0.7,2.8-1.4,4.1-2.1c14.5-4.1,40-6.9,40-6.9c-6.2-1.4-13.1-1.4-19.3-0.7c2.1-0.7,4.8-1.4,6.9-1.4c10.4-0.7,19.3-1.4,19.3-1.4  c-9-2.8-19.3-2.8-27.6-2.1c-31.1,0-88.4,10.4-98.7,81.5c-29.7-67-89.1-61.4-118.8-53.2c-8.3,0-18,0.7-26.2,4.1c0,0,6.2,0,14.5,0  c-4.1,1.4-6.9,2.8-6.9,2.8c4.1-1.4,8.3-2.1,11.7-2.8c4.8,0,10.4,0,15.2,0.7c-5.5,0-10.4,1.4-15.2,3.5c0,0,29.7-1.4,43.5,1.4  c-8.3,0-24.2,0.7-35.2,7.6c0,0,33.8-4.8,46.3-3.5c0.7,0,1.4,0.7,1.4,0.7c-8.3,0-24.2,0.7-35.9,7.6c0,0,9.7-1.4,20.7-2.8  c-5.5,1.4-10.4,2.8-15.2,5.5c0,0,28.3-4.1,42.8-3.5c0.7,0,1.4,0.7,2.1,1.4c-8.3,0-22.8,1.4-33.1,6.9c0,0,24.2-3.5,39.4-3.5  c0.7,0,0.7,0.7,1.4,0.7c-8.3,0-22.8,1.4-33.8,6.9c0,0,10.4-1.4,21.4-2.8c-4.8,1.4-10.4,2.8-14.5,5.5c0,0,21.4-3.5,35.9-3.5  c0,0,0.7,0,0.7,0.7c-8.3,0.7-19.3,2.1-27.6,6.9c0,0,11-1.4,22.8-2.8c-5.5,1.4-11,2.8-15.9,5.5c0,0,15.9-2.1,29.7-3.5  c0.7,0.7,0.7,0.7,1.4,1.4c-7.6,0.7-18,2.1-26.2,6.2C60.1,67.4,0,106,0,106c13.8-5.5,28.3-9.7,42.8-12.4c-6.9,2.8-14.5,6.9-20,13.1  c0,0,27.6-13.1,40.7-15.9l0,0c-8.3,2.8-20.7,8.3-28.3,15.9c0,0,22.8-10.4,36.6-15.2c-7.6,3.5-17.3,9.7-22.8,17.3  c0,0,25.5-15.2,38-20.7c1.4,0,2.1,0,3.5,0c-0.7,0-23.5,8.3-34.5,22.1c0,0,15.9-9.7,29-15.9c-4.8,3.5-9.7,6.9-13.1,11.7  c0,0,19.3-12.4,33.1-18.6c1.4,0,2.1,0,2.8,0c-7.6,3.5-18,9.7-24.2,18c0,0,18.6-11,32.5-18c0.7,0,1.4,0,2.1,0  c-7.6,3.5-19.3,10.4-26.2,18.6c0,0,9-5.5,18.6-11c-4.1,2.8-8.3,6.2-11,10.4c0,0,18.6-11,31.8-17.3c0,0,0.7,0,1.4,0  c-7.6,3.5-17.3,9.7-22.8,17.3c0,0,16.6-10.4,30.4-16.6l0,0c-6.9,3.5-14.5,9-20,15.9c0,0,13.8-8.3,26.2-15.2c0.7,0,1.4,0,2.1,0  c-7.6,3.5-18,9.7-24.2,18c0,0,18-11,31.1-17.3c1.4,0,2.1,0,3.5,0.7c-7.6,3.5-18.6,9.7-24.9,18.6c0,0,18-11,31.1-17.3  c2.8,0.7,4.8,0.7,6.9,1.4c-1.4,0-2.8,0.7-4.8,1.4c0,0,3.5,0.7,10.4,2.1h-0.7c-72.5,6.2-89.8,87-89.8,87c4.8-10.4,11-20,18-28.3  c-2.1,6.9-2.8,14.5-2.1,22.1c0,0,3.5-15.2,8.3-28.3c1.4-2.1,3.5-3.5,5.5-5.5c-2.1,7.6-4.8,17.3-3.5,26.2c0,0,4.1-18,9-31.8  c1.4-1.4,2.8-2.1,3.5-3.5c-2.8,7.6-4.8,18-3.5,26.9c0,0,4.1-17.3,9-31.1c0.7-0.7,2.1-1.4,2.8-2.1c-2.8,8.3-5.5,19.3-4.1,29.7  c0,0,4.8-19.3,9.7-33.1c1.4-0.7,2.1-1.4,3.5-2.1c-3.5,7.6-7.6,17.3-8.3,26.2c0,0,7.6-17.3,14.5-30.4c0.7-0.7,1.4-0.7,2.1-1.4  c-4.1,7.6-9,18.6-9.7,29c0,0,8.3-19.3,15.2-32.5c0.7,0,1.4-0.7,2.1-0.7c-4.1,7.6-9,18.6-9.7,29.7c0,0,8.3-19.3,15.2-32.5  c0.7,0,1.4-0.7,1.4-0.7c-4.1,7.6-9,18.6-9,29c0,0,7.6-18,14.5-31.1c0.7,0,2.1-0.7,2.8-1.4c-4.1,7.6-7.6,17.3-8.3,26.9  c0,0,6.9-15.9,13.8-29c0.7,0,0.7,0,1.4-0.7c0,0.7,0,1.4,0.7,2.8c-3.5,7.6-7.6,16.6-7.6,25.5c0,0,4.1-9,8.3-19.3  c7.6,52.5,29,225.1-3.5,352.1c-22.8,0-43.5,1.4-51.8,7.6c-19.3,13.1-35.9,24.2-49.7,27.6C63.5,503.7,38.7,512,38.7,512h305.9  c0,0-16.6-29-43.5-29c-26.9,0-14.5-15.2-42.1-15.2c-11,0-31.1-1.4-52.5-2.1c8.3-61.4,26.2-230.6-5.5-364.6l0,0  c3.5,0.7,7.6,2.1,11.7,2.8c10.4,10.4,22.8,25.5,22.8,25.5c-2.8-9-9.7-18-15.2-23.5c1.4,0,2.1,0.7,3.5,0.7  c10.4,10.4,21.4,24.2,21.4,24.2c-2.8-8.3-9-16.6-14.5-22.8c0.7,0,1.4,0.7,2.1,0.7c9,9.7,17.3,20,17.3,20c-2.1-6.9-6.2-13.1-11-18.6  h0.7c9.7,10.4,19.3,22.8,19.3,22.8c-2.8-7.6-7.6-15.2-12.4-20.7c0.7,0,0.7,0,1.4,0.7c9.7,10.4,20.7,23.5,20.7,23.5  c-1.4-4.8-4.1-9.7-6.9-13.8c7.6,8.3,13.8,16.6,13.8,16.6c-2.8-8.3-9-16.6-14.5-22.8c0.7,0,1.4,0.7,2.1,0.7c9.7,10.4,20,23.5,20,23.5  c-2.8-7.6-7.6-15.2-13.1-20.7c1.4,0,2.1,0.7,3.5,1.4c9.7,10.4,21.4,24.2,21.4,24.2c-2.1-5.5-4.8-11-8.3-15.9  c10.4,10.4,22.1,24.9,22.1,24.9c-4.1-11.7-14.5-22.8-20-29c0.7,0,2.1,0.7,2.8,1.4c11,10.4,25.5,28.3,25.5,28.3  c-2.8-9-9.7-18-15.9-24.2c11.7,9,29.7,26.2,29.7,26.2c-4.1-9-12.4-17.3-18.6-22.8c0.7,0,0.7,0,1.4,0.7c11.7,9,29.7,26.9,29.7,26.9  c-3.5-6.9-9-13.8-14.5-19.3c9.7,5.5,19.3,12.4,28.3,19.3c1.4,1.4,2.1,2.1,2.1,2.1c-0.7-0.7-0.7-1.4-1.4-2.1  C359,167.5,361.8,169.5,364.6,172.3L364.6,172.3z M289.3,72.2h-0.7c-0.7,0-0.7,0-1.4-0.7C287.9,72.2,288.6,72.2,289.3,72.2z   M96.7,88.8h-4.8c2.1,0,3.5,0,5.5,0C96.7,88.1,96.7,88.8,96.7,88.8L96.7,88.8z M147.8,78.4c-4.8-1.4-10.4-2.1-15.2-2.8  c6.2-0.7,18-2.1,27.6-2.8c1.4,1.4,2.8,2.8,4.8,3.5C160.9,76.3,154.7,77,147.8,78.4L147.8,78.4z M157.4,80.5c4.1,0,8.3-0.7,11.7-0.7  c3.5,3.5,6.9,6.2,9.7,9C171.9,85.3,165,82.5,157.4,80.5L157.4,80.5z M179.5,99.1L179.5,99.1C179.5,99.1,180.2,99.1,179.5,99.1  C180.2,99.1,179.5,99.1,179.5,99.1L179.5,99.1z M240.3,53.5c-4.8,1.4-10.4,2.8-15.2,5.5c-4.8-0.7-9.7-0.7-13.1-0.7  C221.6,56.3,234.1,54.2,240.3,53.5z M187.1,89.5c0.7-1.4,1.4-3.5,2.8-4.8c0.7,0,0.7,0,1.4,0C189.2,86.7,188.5,88.1,187.1,89.5  L187.1,89.5z M189.9,84.6c3.5-5.5,8.3-13.1,13.1-20c4.1,0,9-0.7,13.1-0.7c-8.3,4.8-16.6,11.7-24.9,20.7L189.9,84.6L189.9,84.6z   M197.5,91.5C197.5,91.5,197.5,90.8,197.5,91.5L197.5,91.5c-1.4,0-2.8,0-4.1,0.7c2.8-1.4,5.5-2.1,9-3.5c2.1,0.7,4.8,1.4,6.9,2.8  C205.8,90.8,201.6,90.8,197.5,91.5L197.5,91.5z M219.6,91.5c-4.1-2.1-8.3-3.5-11.7-4.8c0.7,0,2.1-0.7,2.8-0.7  c5.5,2.1,11.7,4.1,16.6,6.9C225.1,91.5,222.3,91.5,219.6,91.5L219.6,91.5z"],
  "b_palm_trees": [411.8, 512, [], "e030", "M405.6,238.8c-3.4-3.4-8.2-6.2-12.4-8.2c2.1,0.7,3.4,1.4,5.5,1.4c6.9,3.4,13,6.9,13,6.9  c-4.8-5.5-11.7-9.6-17.8-12.4c-20.6-12.4-62.5-28.1-97.5,14.4c6.9-55.6-34.3-75.5-57-81.7c-5.5-3.4-12.4-6.9-18.5-7.5  c0,0,4.1,2.1,9.6,5.5c-3.4-0.7-5.5-0.7-5.5-0.7c2.7,0.7,6.2,1.4,8.9,2.7c3.4,2.1,6.9,4.1,9.6,6.2c-3.4-1.4-7.5-3.4-11.7-3.4  c0,0,19.9,11,28.1,17.8c-5.5-3.4-15.8-8.9-26.1-8.9c0,0,24.7,10.3,32.3,15.8c0,0.7,0.7,0.7,0.7,1.4c-5.5-3.4-16.5-8.9-26.1-8.9  c0,0,6.9,2.7,14.4,6.2c-4.1-1.4-8.2-2.1-11.7-2.1c0,0,20.6,8.2,29.5,14.4c0,0.7,0.7,1.4,0.7,1.4c-5.5-3.4-15.8-8.2-24.7-8.2  c0,0,17.2,7.5,27.5,13c0,0,0.7,0.7,0.7,1.4c-5.5-3.4-15.8-8.2-25.4-8.2c0,0,7.5,3.4,15.1,6.9c-4.1-1.4-7.5-2.1-11.7-2.1  c0,0,15.1,6.2,25.4,11.7v0.7c-5.5-2.7-13.7-6.2-21.3-6.2c0,0,8.2,3.4,15.8,7.5c-4.1-1.4-8.2-2.7-12.4-2.7c0,0,11,4.8,20.6,9.6  c0,0.7,0.7,0.7,0.7,1.4c-5.5-2.7-12.4-5.5-19.9-6.2c-29.5-22.6-65.2-28.8-83.7-30.2c-3.4-15.8-8.2-30.9-12.4-46  c2.7,2.7,4.8,4.8,4.8,4.8c-1.4-3.4-4.1-6.9-6.9-10.3c-0.7-2.1-1.4-4.1-2.1-6.2c8.2,6.9,15.8,14.4,15.8,14.4  c-4.1-8.2-11.7-15.8-17.8-20.6c0.7,0,2.1,0,2.7,0c11.7,8.9,25.4,22,25.4,22c-4.1-8.9-13-17.2-19.2-22c0.7,0,1.4,0,1.4,0  c11.7,6.9,26.8,20.6,26.8,20.6c-4.8-9.6-13.7-17.8-19.9-22.6c0.7,0,1.4,0,2.1,0c11,8.9,26.1,22.6,26.1,22.6  c-4.8-9.6-13-17.2-19.9-22.6c0.7,0,1.4,0,2.1,0c11.7,8.9,24.7,21.3,24.7,21.3c-4.1-8.2-11.7-15.8-17.8-20.6c1.4,0,2.7,0.7,4.1,0.7  c9.6,10.3,22,25.4,22,25.4c-2.7-9.6-9.6-18.5-15.8-24.7c1.4,0,2.1,0.7,3.4,0.7c9.6,10.3,20.6,24.7,20.6,24.7  c-2.7-8.2-8.2-17.2-13.7-22.6c1.4,0.7,2.7,0.7,4.8,1.4c9.6,10.3,20.6,24.7,20.6,24.7c-2.7-8.2-8.2-16.5-13.7-22.6  c2.1,0.7,4.8,1.4,6.9,2.7c8.9,10.3,18.5,22.6,18.5,22.6c-2.1-6.9-6.2-13.7-10.3-19.2c9.6,4.8,18.5,10.3,27.5,18.5  c0,0-45.3-63.8-111.9-41.9c0-0.7,0-0.7-0.7-1.4c2.7-2.1,4.8-3.4,4.8-3.4c-1.4,0-2.7,0.7-4.1,0.7c2.1-1.4,4.1-2.7,5.5-4.1  c14.4,0.7,35,3.4,35,3.4c-8.9-4.8-21.3-6.2-29.5-6.9c0.7-0.7,2.1-1.4,2.7-1.4c14.4,0.7,35,3.4,35,3.4c-8.9-4.8-20.6-6.2-28.8-6.9  c0.7,0,1.4-0.7,2.1-1.4c13.7,0.7,29.5,2.7,29.5,2.7c-7.5-4.1-16.5-5.5-24-6.2c0,0,0,0,0.7,0c14.4,0.7,33.6,3.4,33.6,3.4  c-8.2-4.8-19.2-6.2-27.5-6.9c0,0,0.7,0,0.7-0.7c14.4,0,35.7,3.4,35.7,3.4c-4.1-2.1-9.6-4.1-14.4-4.8c11,0.7,21.3,2.1,21.3,2.1  c-9.6-5.5-22.6-6.9-30.9-6.9c0.7,0,1.4-0.7,1.4-0.7c14.4,0,35.7,3.4,35.7,3.4c-8.9-4.8-19.9-6.2-28.8-6.9c0.7-0.7,2.1-0.7,2.7-1.4  c14.4,0,37.1,3.4,37.1,3.4c-4.8-2.7-11-4.8-16.5-5.5c14.4,0.7,32.3,3.4,32.3,3.4c-15.1-8.2-39.1-6.9-39.8-6.9  c1.4-0.7,2.1-0.7,2.7-1.4c13.7-0.7,42.6,3.4,42.6,3.4c-8.2-4.8-19.2-6.2-27.5-6.9c14.4-1.4,39.1-1.4,39.1-1.4  c-10.3-4.1-23.3-4.1-31.6-3.4l0,0c13-2.1,43.2-1.4,43.2-1.4c-7.5-2.7-15.8-3.4-23.3-3.4c14.4-3.4,28.8-5.5,43.9-5.5  c0,0-69.3-11-128.3,23.3c-8.9,0-18.5,2.1-26.1,4.8c0-0.7,0.7-1.4,0.7-1.4c13-4.8,27.5-8.9,27.5-8.9c-5.5-0.7-11,0-16.5,1.4  c11-3.4,21.3-6.9,21.3-6.9c-9.6-0.7-19.9,2.1-27.5,4.8c0,0,0-0.7,0.7-0.7c13.7-5.5,33.6-11,33.6-11c-4.8-0.7-10.3,0-15.1,1.4  c10.3-3.4,20.6-6.2,20.6-6.2c-11.7-1.4-25.4,3.4-32.9,6.9c0-0.7,0.7-0.7,0.7-1.4c13.7-5.5,36.4-12.4,36.4-12.4  c-11.7-1.4-24.7,3.4-32.9,6.9c0.7-0.7,0.7-1.4,1.4-2.1c12.4-6.2,39.8-13.7,39.8-13.7c-4.8-0.7-10.3,0-15.8,1.4  c10.3-2.7,19.9-5.5,19.9-5.5c-13-1.4-27.5,4.1-35,7.5c0.7-0.7,0.7-0.7,1.4-1.4c10.3-6.2,42.6-15.1,42.6-15.1  c-12.4-1.4-26.8,4.1-34.3,6.9c11.7-7.5,38.4-17.8,38.4-17.8c-4.8,0-10.3,1.4-15.1,2.7c4.1-2.1,8.9-4.1,13-6.2  c3.4-0.7,7.5-2.1,11.7-2.1c0,0-2.7,0-6.9,0c7.5-3.4,13-5.5,13-5.5c-8.9,0-17.8,3.4-24.7,6.9c-30.2,4.1-85.1,22-85.1,93.3  c-37.7-59-93.3-45.3-120.8-33.6C16.5,68.6,6.9,72.8,0,78.9c0,0,8.2-3.4,17.8-6.2c2.1-0.7,4.8-0.7,6.9-1.4  c-6.2,2.1-12.4,4.8-17.2,8.2c0,0,24.7-7.5,38.4-9.6c1.4,0,3.4,0,4.8,0c-7.5,2.1-21.3,5.5-30.2,12.4c0,0,32.9-10.3,44.6-10.3h0.7  c-8.2,1.4-20.6,4.8-29.5,11.7c0,0,24.7-7.5,39.1-9.6c0.7,0,1.4,0,1.4,0.7c-8.2,1.4-21.3,4.8-30.2,11.7c0,0,23.3-7.5,37.7-9.6  c0.7,0,1.4,0.7,2.7,0.7c-8.2,1.4-20.6,4.8-28.8,11.7c0,0,21.3-6.2,35.7-8.9c0.7,0,1.4,0.7,1.4,0.7c-8.2,1.4-21.3,4.8-29.5,11.7  c0,0,21.3-6.9,35.7-8.9c0.7,0.7,2.1,0.7,2.7,1.4c-6.9,0.7-24,4.1-35.7,12.4c0,0,13-4.1,25.4-6.9c-5.5,2.1-11.7,4.8-16.5,8.2  C48,105.7,28.8,129,17.8,145.5C11.7,151,4.1,157.9,0,166.1c0,0,5.5-5.5,13-11.7c-2.7,5.5-4.1,8.9-4.1,8.9c3.4-4.8,7.5-8.9,11.7-13  c-3.4,3.4-6.2,7.5-8.2,11.7c0,0,17.8-16.5,30.2-24.7c-6.2,5.5-13,14.4-16.5,23.3c0,0,11.7-13,22-22.6c-4.1,4.8-8.9,11-11,17.2  c0,0,18.5-21.3,29.5-29.5c0.7,0,0.7,0,1.4-0.7c-6.2,5.5-16.5,15.8-20.6,26.8c0,0,17.8-20.6,28.8-29.5c0.7,0,1.4-0.7,2.7-0.7  c-6.9,5.5-17.2,15.8-20.6,26.8c0,0,16.5-18.5,27.5-28.1c0.7,0,1.4,0,1.4,0c-6.2,5.5-17.2,15.8-21.3,27.5c0,0,6.9-7.5,14.4-15.8  c-2.7,4.1-5.5,8.2-7.5,13c0,0,15.1-17.8,26.1-27.5h0.7c-6.2,5.5-14.4,14.4-17.8,24.7c0,0,13.7-15.8,24-25.4l0,0  c-5.5,5.5-11.7,13-15.1,21.3c0,0,11-12.4,20.6-22c0.7,0,1.4,0,2.1,0c-4.8,4.1-10.3,10.3-13.7,16.5c-27.5,18.5-46.7,43.9-59,65.9  c-17.8,29.5-24,54.9-24,54.9c1.4-2.7,2.7-6.2,4.1-8.9c0,0.7-0.7,1.4-0.7,2.7c0,0,0-1.4,0.7-2.7c6.9-11,13-20.6,19.2-29.5  c-2.7,6.9-5.5,15.1-5.5,22.6c0,0,8.9-23.3,16.5-35.7l0.7-0.7c-3.4,7.5-8.2,17.8-8.2,28.1c0,0,8.9-22.6,16.5-35.7  c-2.7,7.5-5.5,18.5-4.8,28.1c0,0,6.2-22,11.7-35c0.7-0.7,1.4-1.4,2.1-2.1c-3.4,7.5-8.2,21.3-6.9,33.6c0,0,4.8-17.2,9.6-30.9  c-1.4,5.5-2.1,11.7-1.4,17.2c0,0,4.8-16.5,9.6-30.2c0.7-0.7,1.4-1.4,2.7-2.1c-2.1,6.9-4.1,15.8-3.4,24c0,0,4.1-15.8,8.9-28.8  c0.7-0.7,1.4-0.7,1.4-1.4c-2.7,7.5-4.8,17.2-4.1,26.1c0,0,2.7-9.6,6.2-20.6c-1.4,4.8-1.4,10.3-1.4,15.1c0,0,4.1-15.8,8.9-29.5  c0,0,0.7-0.7,1.4-0.7c-2.1,6.9-4.1,15.8-3.4,23.3c0,0,4.1-15.1,8.9-28.1l0.7-0.7c-2.1,6.2-2.7,13.7-2.1,20.6c0,0,3.4-13,7.5-24.7  c0.7-0.7,1.4-0.7,2.1-1.4c-2.7,7.5-4.8,17.2-4.1,26.1c0,0,4.8-17.2,9.6-30.2c0.7-0.7,2.1-1.4,2.7-2.1c-2.7,7.5-5.5,17.8-4.8,27.5  c0,0,4.8-18.5,10.3-31.6c3.4-2.7,6.2-4.8,8.9-6.9c2.7-1.4,4.8-2.7,6.9-4.1h0.7c11.7,41.9,58.3,212.8,46.7,342.5  c-18.5,0.7-34.3,2.7-41.2,7.5c-18.5,13-35.7,23.3-48.7,26.8c-13.7,4.1-37.7,11-37.7,11h299.2c0,0-15.8-28.1-42.6-28.1  c-26.8,0-14.4-15.1-41.2-15.1c-6.2,0-14.4-0.7-24.7-0.7c1.4-27.5,10.3-134.5,43.9-205.9c0.7,0.7,1.4,0.7,2.1,1.4  c2.1,2.1,4.1,4.1,6.2,6.2c2.7,11,4.8,26.1,4.8,26.1c1.4-7.5,0.7-15.8-0.7-22c0.7,0.7,1.4,1.4,2.1,2.1c2.7,11,4.8,24.7,4.8,24.7  c1.4-6.9,0.7-14.4-0.7-20.6c0.7,0.7,0.7,0.7,1.4,1.4c2.1,9.6,3.4,19.9,3.4,19.9c1.4-5.5,0.7-11,0-16.5l0.7,0.7  c2.1,10.3,4.1,22.6,4.1,22.6c1.4-6.2,0.7-13,0-18.5l0.7,0.7c2.1,11,4.1,23.3,4.1,23.3c0.7-4.1,0.7-8.2,0.7-11.7  c1.4,8.2,2.7,16.5,2.7,16.5c1.4-6.9,0.7-14.4-0.7-20.6c0.7,0.7,0.7,0.7,1.4,1.4c2.1,11,4.1,23.3,4.1,23.3c1.4-6.2,0.7-13,0-19.2  c0.7,0.7,1.4,1.4,2.1,2.1c2.7,11,4.1,24.7,4.1,24.7c1.4-4.1,1.4-8.9,0.7-13.7c2.7,11,4.8,24.7,4.8,24.7c2.1-9.6,0-20.6-2.1-26.8  c0.7,0.7,0.7,1.4,1.4,2.1c2.7,11,5.5,28.8,5.5,28.8c1.4-7.5,0.7-15.8-0.7-22c4.1,10.3,8.9,29.5,8.9,29.5c0.7-7.5-1.4-16.5-3.4-22.6  l0.7,0.7c4.1,10.3,8.9,29.5,8.9,29.5c0.7-6.2-0.7-13-2.1-18.5c4.1,7.5,7.5,15.8,11,24c0,1.4,0.7,2.1,0.7,2.1c0-0.7,0-1.4,0-2.1  c0.7,2.7,1.4,4.8,2.7,7.5c0,0-2.7-20.6-13.7-45.3c-7.5-18.5-19.9-40.5-39.8-57c-2.7-5.5-6.2-11-8.9-14.4c0.7,0,1.4,0,1.4,0.7  c6.9,8.2,14.4,19.2,14.4,19.2c-1.4-6.9-5.5-13-9.6-18.5l0,0c7.5,8.9,16.5,22,16.5,22c-2.1-8.2-7.5-15.8-11.7-20.6h0.7  c7.5,8.9,17.8,24,17.8,24c-0.7-4.1-2.7-7.5-4.8-11c5.5,6.9,9.6,13.7,9.6,13.7c-2.1-9.6-9.6-19.2-13.7-23.3c0.7,0,0.7,0,1.4,0.7  c7.5,8.2,18.5,24.7,18.5,24.7c-2.1-8.9-8.9-17.8-13-22.6c0.7,0,1.4,0.7,2.1,0.7c7.5,8.2,19.9,26.1,19.9,26.1  c-2.1-8.9-8.9-18.5-13-23.3c0.7,0,0.7,0.7,1.4,0.7c7.5,8.2,19.9,26.1,19.9,26.1c-1.4-5.5-4.1-10.3-6.9-14.4  c6.9,8.9,14.4,19.9,14.4,19.9c-1.4-7.5-6.2-14.4-10.3-19.9c8.2,7.5,21.3,22,21.3,22c-1.4-3.4-2.7-6.9-5.5-9.6  c2.7,3.4,5.5,7.5,7.5,11.7c0,0-0.7-2.7-2.7-7.5c4.8,5.5,8.9,10.3,8.9,10.3c-2.1-6.9-7.5-13.7-12.4-17.8  c-6.2-14.4-19.2-33.6-41.9-42.6c-3.4-3.4-8.2-6.2-12.4-8.2c9.6,3.4,19.2,8.2,19.2,8.2c-7.5-8.2-21.3-12.4-26.1-13  c0.7,0,1.4-0.7,2.1-0.7c11,3.4,26.8,11,26.8,11c-6.2-6.2-15.8-10.3-22-12.4c0.7,0,0.7,0,1.4,0c11,3.4,26.8,11,26.8,11  c-6.2-6.2-15.1-9.6-21.3-11.7c0.7,0,1.4,0,2.1-0.7c11,3.4,28.8,11,28.8,11c-6.2-6.2-15.8-10.3-22.6-12.4c0.7,0,0.7,0,1.4,0  c11,2.7,29.5,11.7,29.5,11.7c-6.2-6.2-15.8-10.3-22-12.4h0.7c8.9,1.4,33.6,12.4,33.6,12.4c-6.2-6.9-16.5-10.3-22.6-12.4  c1.4,0,2.7,0,4.1,0C387.1,231.3,405.6,239.5,405.6,238.8L405.6,238.8z M229.2,70l-4.1,2.1h-0.7C225.8,71.4,227.9,70.7,229.2,70z   M46.7,133.8H46c0.7,0,1.4-0.7,2.1-0.7C47.4,133.1,46.7,133.1,46.7,133.8z M98.1,96.1c-5.5,0-11,0-15.8,1.4  c6.2-2.1,17.8-4.8,27.5-6.9C105.7,92,101.6,94,98.1,96.1L98.1,96.1z M107.8,96.8c4.1-1.4,8.2-3.4,12.4-4.8c7.5,4.8,14.4,8.9,19.9,13  l-2.1,0.7C127,100.9,117.4,98.1,107.8,96.8z M116,122.9c-2.1,1.4-4.8,2.7-6.9,4.1c4.1-4.1,8.2-8.9,12.4-12.4c0.7,0,2.1,0,2.7,0  C121.5,116.7,118.7,119.4,116,122.9L116,122.9z M135.9,114.6h-2.1C134.5,113.9,135.2,114.6,135.9,114.6c-4.1,1.4-7.5,2.7-11.7,4.1  c1.4-1.4,3.4-3.4,5.5-4.8c3.4,0,6.9,0,9.6,0C138,113.9,137.3,113.9,135.9,114.6L135.9,114.6z M139.3,106.4c0.7,0,0.7-0.7,1.4-0.7  c1.4,1.4,2.7,2.1,4.1,3.4C142.8,107.8,140.7,107.1,139.3,106.4L139.3,106.4z M161.3,83c8.9-3.4,19.9-6.9,26.1-8.2  c-4.1,2.7-8.2,5.5-12.4,8.2c-6.2,1.4-11.7,3.4-15.8,5.5C159.9,87.2,160.6,85.1,161.3,83L161.3,83z M156.5,93.3  c3.4-1.4,6.9-2.7,10.3-4.1c-5.5,4.8-10.3,9.6-15.8,15.1C153.1,101.6,154.4,97.5,156.5,93.3z M371.3,277.3L371.3,277.3  c-0.7,0-1.4-0.7-1.4-0.7C369.9,276.6,370.6,276.6,371.3,277.3z M286.2,226.5c0.7,1.4,1.4,2.7,1.4,4.1c-2.7-1.4-7.5-4.1-11.7-5.5  c-2.7-2.7-6.2-5.5-8.9-7.5C271.1,218.9,279.3,223.1,286.2,226.5z M238.2,211.4C238.2,211.4,237.5,211.4,238.2,211.4l-3.4-2.1  C235.4,210,236.8,210.7,238.2,211.4L238.2,211.4z M181.2,187.4c6.9,1.4,13,3.4,19.2,5.5c-5.5-0.7-11.7-0.7-17.8,0  C181.9,191.5,181.9,189.4,181.2,187.4z M285.5,258.7c-5.5,3.4-11,8.2-15.1,13.7c0,0,6.2-4.1,13-8.9  c-17.2,39.8-61.8,150.3-58.3,201.8c-3.4,0-6.9,0-10.3,0c-0.7-29.5-3.4-109.1-17.8-197c6.2-4.1,13-6.9,19.2-8.9  c-4.1,4.1-7.5,8.2-10.3,13.7c0,0,8.2-8.2,16.5-15.8c2.1-0.7,4.1-0.7,5.5-1.4c-4.8,4.1-9.6,9.6-13,15.8c0,0,9.6-10.3,18.5-17.2  c1.4,0,2.1-0.7,3.4-0.7c-4.8,4.1-10.3,10.3-13,16.5c0,0,9.6-9.6,18.5-17.2c0.7,0,2.1,0,2.7,0c-4.8,4.1-11.7,10.3-14.4,17.8  c0,0,11-11,19.2-17.8c1.4,0,2.1,0,3.4,0c-5.5,3.4-11.7,8.2-15.8,14.4c0,0,11.7-8.2,21.3-14.4c0.7,0,1.4,0,2.1,0  c-5.5,3.4-13.7,8.9-17.8,15.8c0,0,13-9.6,23.3-15.1c0.7,0,1.4,0,1.4,0c-5.5,3.4-13.7,8.9-17.8,15.8c0,0,13-9.6,22.6-15.1  c0.7,0,0.7,0,1.4,0c-5.5,3.4-13,8.9-17.2,15.1c0,0,12.4-8.9,22-14.4c0.7,0,1.4,0,2.1,0.7c-5.5,3.4-12.4,8.2-15.8,14.4  c0,0,11-8.2,20.6-13.7h0.7C286.2,257.4,286.2,258.1,285.5,258.7L285.5,258.7z M287.6,250.5c-42.6-22-79.6,6.9-90.6,16.5  c-4.1-24-8.2-49.4-14.4-73.4c4.8,0.7,24,2.7,32.3,5.5l0,0c-6.2-1.4-16.5-2.7-25.4-0.7c0,0,19.2,2.1,30.2,4.8c-6.2-0.7-15.1,0-22,2.7  c0,0,22.6,0,33.6,1.4c0.7,0.7,1.4,0.7,2.1,1.4c-0.7,0-18.5-3.4-31.6,1.4c0,0,14.4,0,25.4,0.7c-4.8,0-9.6,0.7-13.7,2.7  c0,0,17.8,0,29.5,1.4c0.7,0.7,1.4,0.7,2.1,1.4c-6.2-0.7-15.8-0.7-22.6,2.1c0,0,16.5,0,28.1,1.4c0.7,0,0.7,0.7,1.4,0.7  c-6.9-0.7-16.5-0.7-24.7,2.1c0,0,8.2,0,16.5,0c-4.1,0-8.2,1.4-11.7,2.1c0,0,16.5,0,28.1,1.4c0,0,0.7,0,0.7,0.7  c-6.2-0.7-15.1,0-22,2.1c0,0,15.1,0,26.8,0.7l0,0c-6.2,0-13,0-19.2,2.7c0,0,12.4,0,23.3,0.7c0.7,0.7,0.7,0.7,1.4,1.4  c-6.9-0.7-15.8-0.7-23.3,2.1c0,0,15.8,0,27.5,0.7c0.7,0.7,1.4,1.4,2.1,1.4c-6.9-0.7-15.8-0.7-23.3,2.1c0,0,15.8,0,27.5,1.4  c1.4,1.4,2.7,2.7,4.1,3.4c-1.4-0.7-2.1-0.7-3.4-1.4C282.1,245,284.1,247.1,287.6,250.5L287.6,250.5L287.6,250.5z M288.3,251.2  L288.3,251.2L288.3,251.2L288.3,251.2z M280.7,230.6c2.7,1.4,5.5,2.7,8.2,4.1c1.4,3.4,2.1,6.9,2.7,9.6  C288.3,238.8,284.8,234.7,280.7,230.6z M296.5,247.8c1.4-0.7,2.1-1.4,3.4-2.1l0.7,0.7C299.2,247.1,297.9,247.1,296.5,247.8  L296.5,247.8z M302.7,253.3c0.7,0,0.7,0,1.4,0H302.7c-1.4-0.7-2.1-0.7-2.7-1.4c2.1,0.7,4.8,0.7,7.5,1.4c1.4,1.4,2.1,2.7,3.4,4.1  C308.2,256,305.4,254.6,302.7,253.3L302.7,253.3z M322.6,265.6c-1.4-1.4-3.4-2.7-5.5-4.1c-2.1-2.7-4.1-5.5-5.5-7.5  c0.7,0,1.4,0.7,2.1,0.7C317.1,258.1,319.8,262.2,322.6,265.6z M302,246.4l-1.4-0.7c4.8-2.7,10.3-5.5,17.2-8.2  c2.7,1.4,6.2,2.7,8.9,4.8C319.1,242.3,310.9,243.6,302,246.4z M346.6,245.7c-4.1-1.4-8.2-2.1-12.4-2.7c-2.7-2.1-6.2-4.1-8.9-5.5  C332.9,239.5,341.8,243.6,346.6,245.7L346.6,245.7z"],
  "c_saguaro_cactus": [240.6, 512, [], "e031", "M86.4,333.1c0-1.4,0-3.4,0-5.5C79.5,322.1,61,299.5,74,220.7c0.7-2.7,2.1-14.4-0.7-24.7c0,0.7,0,1.4-0.7,2.7  c0-0.7,0.7-2.1,0.7-2.7c-1.4-3.4-3.4-7.5-5.5-10.3l0,0c-2.7-3.4-6.2-4.1-7.5-4.1c0,0-4.1-0.7-8.9,2.7l0,0c-4.8,3.4-10.3,9.6-13,22.6  c-8.2,29.5-30.2,110.4,8.9,148c16.4,14.4,32.9,21.9,38.4,20.6c0-1.4,0-3.4,0-5.5C85.7,366,86.4,337.9,86.4,333.1L86.4,333.1  L86.4,333.1z M198.8,118.6c-4.8-13-8.9-19.9-14.4-22.6l0,0c0,0,0,0-0.7,0l0,0l0,0c-2.1-1.4-4.8-2.1-5.5-2.1c-1.4,0-2.7,0-4.1,0.7  c-0.7,0.7-2.1,1.4-2.7,2.1l0,0c0,0-0.7,0-0.7,0.7s-0.7,0-0.7,0l0,0c-2.7,2.1-4.1,4.8-5.5,8.2c0,1.4,0.7,2.1,0.7,3.4  c0-1.4-0.7-2.1-0.7-3.4c-0.7,1.4-0.7,2.1-1.4,3.4c-2.7,10.3-1.4,22.6-0.7,24.7c14.4,79.5-4.8,101.4-11.7,106.2c0,2.1,0,4.1,0,6.2  c0,6.2,1.4,37.7,1.4,41.1c8.2-2.7,23.3-7.5,38.4-20.6C220.7,240.6,208.4,143.3,198.8,118.6L198.8,118.6z M204.3,488  c-22.6,0-12.3-13-35-13c-5.5,0-13.7-0.7-23.3-0.7c3.4-4.8,6.2-14.4,6.2-32.2c0-20.6-11.7-408.5-11.7-416.7S135,7.5,132.3,4.8  C129.5,2.1,126.1,0,122,0h-2.1c-6.2,0-11,2.7-14.4,7.5l-2.1,2.7c-2.7,4.8-6.9,13.7-7.5,28.8c0,2.7-9.6,425.6-4.8,435.2  c-13.7,0.7-25.4,2.1-30.8,6.2c-15.8,11-30.2,19.9-41.1,22.6S0,512,0,512h240.6C240.6,512,226.9,488,204.3,488L204.3,488z"],
  "d_prickly_pear_cactus_potted": [317, 512, [], "e032", "M316.2,364.3H22.4v-58.6H317L316.2,364.3L316.2,364.3z M42.5,373.1L67.3,512h202.3l26.5-138.9  C295.3,373.1,42.5,373.1,42.5,373.1z M275.3,83.3c4,0,9.6-2.4,14.5-6.4c4-3.2,6.4-8,7.2-12c0.8-4,0.8-6.4-1.6-8.8  c-4-4-13.6-2.4-20.9,4.8c-2.4,2.4-4.8,5.6-6.4,8c0.8,1.6,2.4,3.2,3.2,4.8C272.9,77.7,274.5,80.1,275.3,83.3z M163.7,99.3  c-40.9,0-74.7,57-74.7,126.8c0,24.1,4,48.2,12,68.2h126c8-20.9,12-44.2,12-68.2C239.1,156.3,205.4,99.3,163.7,99.3L163.7,99.3z   M131.6,84.1c0,0,0.8,0,0.8-0.8c9.6-4.8,18.5-12.8,24.9-24.1c6.4-10.4,8.8-22.5,8-33.7C164.5,15.1,159.7,7,152.4,3S135.6-1,126,3  c-9.6,4.8-18.5,12.8-24.9,24.1c-2.4,4-4,8-5.6,12C111.5,44,125.1,60.8,131.6,84.1L131.6,84.1z M42.5,34.3c-8-4.8-16.1-7.2-23.3-7.2  c-8,0-13.6,2.4-16.9,8c-3.2,4.8-3.2,10.4,0.8,17.7s10.4,13.6,18.5,17.7c8,4.8,16.9,7.2,24.9,7.2c1.6,0,4,0,5.6-0.8  c2.4-8.8,5.6-16.9,9.6-23.3C57.7,46.4,51.3,39.1,42.5,34.3L42.5,34.3z M130,105c-4.8-34.5-23.3-60.2-42.5-60.2c-0.8,0-1.6,0-2.4,0  C64.1,47.2,50.5,79.3,54.5,117c3.2,30.5,16.9,54.6,33.7,61.8C95.4,145.9,110.7,119.4,130,105L130,105z M240,109.8  c11.2-6.4,22.5-10.4,32.9-10.4c0-6.4-1.6-14.5-5.6-21.7c-8.8-16.9-24.1-26.5-34.5-20.9s-11.2,23.3-2.4,40.1  C232.7,101.8,235.9,106.6,240,109.8L240,109.8z M294.5,112.2c-4.8-4.8-11.2-7.2-19.3-7.2c-16.1,0-36.9,9.6-54.6,26.5  c12.8,19.3,21.7,46.6,24.1,76.3c9.6-4.8,19.3-12,28.1-20.9c12.8-12.8,22.5-28.1,26.5-42.5C303.4,130.7,301,119.4,294.5,112.2  L294.5,112.2z"],
  "e_agave_potted": [291.7, 512, [], "e033", "M291.7,311.7H6.4v56.9h285.2C291.7,368.6,291.7,311.7,291.7,311.7z M26.4,377.4l24,134.6H246l25.6-134.6H26.4z   M91.3,197.1c-9.6-19.2-22.4-40.9-38.5-64.1c0.8,16,3.2,55.3,8.8,93.7c14.4,17.6,25.6,32.9,34.5,46.5  C93.7,252.4,92.1,225.2,91.3,197.1z M213.1,206.7c-1.6,8-3.2,16-4.8,22.4c-1.6,23.2-4,42.5-8,56.9c10.4-16.8,27.2-36.1,43.3-52.9  c6.4-28.8,11.2-64.9,12-109C248.4,139.4,230,172.3,213.1,206.7L213.1,206.7z M205.1,127.4c4,32.1,4.8,60.9,3.2,84.9  c8.8-44.1,16.8-103.4,15.2-178.7c-8,17.6-25.6,60.9-43.3,107.4c1.6,13.6,2.4,25.6,3.2,37.7C194.7,149,205.1,127.4,205.1,127.4z   M250,302.1c12-21.6,24.8-53.7,32.1-98.6c-28,26.4-72.1,71.3-84.9,98.6H250z M191.5,302.1c8-27.2,18.4-80.9,10.4-159.4  c-12,28-51.3,122.6-50.5,159.4H191.5z M147.4,302.1c-0.8-24.8,17.6-76.9,32.9-116.2C177.1,136.2,169.9,73.7,153,0  c-7.2,50.5-34.5,258-17.6,302.1H147.4L147.4,302.1z M114.6,302.1h15.2c-8.8-26.4-4.8-97.8,1.6-165.1c-8-32.1-18.4-68.9-32.1-109  c-2.4,40.1-8.8,185.9,3.2,252.4C107.4,288.5,111.4,295.7,114.6,302.1L114.6,302.1z M109.8,302.1C93.7,272.4,61.7,224.4,0,166.7  c7.2,22.4,30.4,91.3,54.5,135.4C54.5,302.1,109.8,302.1,109.8,302.1z"],
  "f_cactus_potted": [280.9, 512, [], "e034", "M280.9,371.6H0v-56.2h280.9V371.6z M19.3,379.6L43.3,512h192.6l24.9-132.4H19.3L19.3,379.6z M56.2,84.3v223.9  h27.3V85.9c0-28.9,4-52.2,8-70.6C70.6,30.5,56.2,55.4,56.2,84.3L56.2,84.3z M94.7,85.9v221.5h40.1V0c-10.4,0.8-20.9,3.2-29.7,7.2  C99.5,25.7,94.7,52.2,94.7,85.9L94.7,85.9z M174.1,7.2L174.1,7.2c-8.8-4-18.5-6.4-28.9-7.2v307.4h39.3V85.9  C185.4,52.2,179.8,24.9,174.1,7.2L174.1,7.2z M187.8,14.4c4.8,18.5,8,42.5,8,71.4v221.5h28.9V84.3C224.7,55.4,210.3,29.7,187.8,14.4  L187.8,14.4z"],
  "g_barrel_cactus_potted": [302.1, 512, [], "e035", "M302.1,360.6H0v-60.1h302.1V360.6z M20.8,369.4L46.5,512H254l27.2-142.6C281.2,369.4,20.8,369.4,20.8,369.4z   M55.3,39.3C25.6,69.7,9.6,114.6,9.6,165.9s16,95.3,45.7,125.8h8.8C35.3,186.7,43.3,96.2,55.3,39.3z M108.2,6.4  c-14.4,4.8-28,11.2-39.3,20c-12.8,54.5-25.6,150.6,6.4,264.4H109C90.5,157,101,54.5,108.2,6.4z M120.2,290.9h27.2V0  c-9.6,0-19.2,1.6-28,3.2C112.2,48.9,100.2,153,120.2,290.9z M158.6,0v290.9h27.2c20-137.8,8-242.8,0.8-287.6  C177.9,1.6,168.3,0,158.6,0z M237.2,27.2c-11.2-8.8-24.8-16-39.3-20.8c8,48.1,18.4,150.6-0.8,284.4h33.7  C262.8,177.9,250.8,80.9,237.2,27.2L237.2,27.2z M251.6,39.3c12,56.9,20,147.4-8.8,251.6h9.6c29.6-30.4,45.7-75.3,45.7-125.8  S281.2,69.7,251.6,39.3z"],
  "h_candelabra_cactus_potted": [256.8, 512, [], "e036", "M256.8,383.6H0v-51.4h256.8V383.6z M30.5,253.6c5.6-1.6,9.6-1.6,12.8,0c1.6-28.1,3.2-42.5-13.6-42.5  c-17.7,0.8-13.6,14.4-4,44.1C26.5,255.2,28.9,254.4,30.5,253.6z M211,108.4c4,1.6,7.2,3.2,9.6,4.8c19.3-35.3,28.1-50.6,7.2-56.2  c-20.1-4.8-21.7,14.4-26.5,49.7C204.6,106.8,207.8,106.8,211,108.4z M183.7,174.2c4.8,0,8,0.8,11.2,2.4c24.9-39.3,36.9-56.2,12-64.2  s-26.5,19.3-36.9,66.6C173.3,175.8,177.3,174.2,183.7,174.2z M175.7,243.2c6.4-0.8,11.2,0,15.2,2.4c12-44.9,18.5-65-7.2-65  c-24.9,0-20.9,22.5-16.9,65C169.3,244.8,171.7,244,175.7,243.2z M138,58.7c4,0.8,8,1.6,10.4,3.2c2.4-40.9,4.8-63.4-20.1-61.8  c-24.9,0.8-19.3,19.3-7.2,61C126,58.7,130.8,57.9,138,58.7z M226.3,259.2c1.6,0,3.2,0.8,4.8,1.6c6.4-29.7,9.6-42.5-7.2-41.7  c-16,0.8-13.6,15.2-9.6,41.7C216.6,259.2,220.7,258.4,226.3,259.2z M138,128.5c5.6,0.8,10.4,3.2,13.6,5.6  c9.6-43.3,14.4-67.4-12.8-70.6c-28.9-3.2-26.5,18.5-20.1,67.4C122.8,127.7,129.2,126.9,138,128.5z M120.4,219.9  c11.2-4,17.7-2.4,22.5,3.2c16-53.8,27.3-81.8-4.8-88.3c-34.5-6.4-29.7,22.5-26.5,88.3C113.9,222.3,117.1,221.5,120.4,219.9z   M78.6,166.2c4.8,0,8,2.4,10.4,7.2c9.6-22.5,22.5-60.2,4-64.2c-22.5-5.6-26.5,29.7-25.7,60.2C70.6,167,74.6,165.4,78.6,166.2z   M77.8,240c4-0.8,8,0.8,10.4,2.4c5.6-28.1,11.2-70.6-9.6-71.4c-27.3-1.6-24.1,40.9-16.9,76.2C65.8,243.2,70.6,240.8,77.8,240z   M100.3,324.2c3.2-28.1,6.4-81.8-22.5-78.6c-33.7,3.2-22.5,44.9-8,78.6H100.3z M53,324.2c-1.6-48.9,0.8-70.6-22.5-64.2  c-22.5,6.4-11.2,26.5,4,64.2H53z M17.7,390.8L39.3,512h176.5l23.3-121.2C239.1,390.8,17.7,390.8,17.7,390.8z M154.9,324.2  c-4.8-70.6,0.8-111.5-33.7-99.5c-34.5,12-19.3,37.7,6.4,99.5H154.9z M203.8,324.2c-3.2-54.6,0-79.4-28.1-76.2  c-27.3,3.2-11.2,28.1,8,76.2H203.8z M227.9,324.2c10.4-36.1,19.3-55.4-1.6-59.4c-22.5-4-18.5,15.2-16,59.4H227.9z"],
  "i_succulent_potted": [438.4, 512, [], "e037", "M344.4,52.2c-0.8,37.7-4.8,60.2-14.4,76.2c-4.8,1.6-9.6,4-13.6,5.6c2.4-37.7-16.1-21.7-39.3-2.4  c-2.4-16.1-7.2-33.7-15.2-54.6c8-7.2,17.7-13.6,27.3-20.9c3.2-1.6,5.6-4,8.8-5.6l5.6-4c12.8-8.8,24.9-17.7,32.9-17.7  c0.8,0,2.4,0,3.2,0.8C342.8,31.3,344.4,39.3,344.4,52.2z M385.3,271.2H41.1v68.2h344.3V271.2z M65.1,349.9L94,512H330l30.5-162.1  H65.1z M399,69.8c-1.6-1.6-4-2.4-8-2.4c-8,0-19.3,3.2-32.1,6.4l-7.2,1.6c-1.6,0-2.4,0.8-4,0.8c-1.6,21.7-4.8,36.9-10.4,49  c11.2-4,24.9-7.2,40.1-11.2c2.4-0.8,5.6-0.8,7.2-1.6c1.6-3.2,4-6.4,5.6-10.4C402.2,81.1,401.4,73,399,69.8z M273.8,2.4L273.8,2.4  c-6.4,0-16.1,11.2-30.5,31.3c5.6,13.6,11.2,25.7,15.2,36.9C269,61.8,281,53.8,293,45.7c0.8-0.8,1.6-1.6,3.2-2.4  c-2.4-6.4-4.8-13.6-8.8-20.9C282.6,10.4,278.6,2.4,273.8,2.4z M390.1,162.9c10.4-18.5,19.3-36.1,15.2-42.5c-1.6-2.4-8-4.8-26.5-0.8  c-27.3,6.4-47.3,12.8-62.6,20.1c0,1.6,0,3.2,0,4.8c-0.8,12-2.4,22.5-4,32.1c17.7-8.8,39.3-9.6,73.8-4.8c0-0.8,0.8-1.6,0.8-2.4  L390.1,162.9z M49.1,37.7c-1.6,0-3.2,0-4,0.8c-8,4.8-3.2,29.7,1.6,56.2l1.6,9.6c0,0,0,0,0,0.8c24.9,8,43.3,15.2,57.8,23.3  c-3.2-18.5-2.4-37.7-3.2-57.8c-8-6.4-16.9-12.8-27.3-20.1C61.9,40.1,53.9,37.7,49.1,37.7z M154.2,194.2c-0.8-16.9,0.8-33.7,1.6-51.4  c1.6-27.3,1.6-51.4,14.4-46.5c3.2-9.6,5.6-20.1,8.8-29.7c-9.6-12.8-23.3-27.3-40.9-44.1C126.1,11.2,119.7,8,115.7,8  c-0.8,0-1.6,0-1.6,0c-7.2,3.2-6.4,26.5-6.4,48.2v8c0,4,0,8.8,0,12.8c0,18.5,0,36.9,3.2,53.8C135,146.1,145.4,164.5,154.2,194.2z   M148.6,195c-14.4-45.7-32.9-64.2-107.5-88.3c-8.8-3.2-15.2-4-19.3-4s-6.4,0.8-7.2,2.4c-4.8,5.6,3.2,24.1,12,43.3l3.2,7.2  c1.6,4,3.2,7.2,4.8,11.2c0.8,2.4,2.4,4.8,3.2,7.2C98,162.9,122.9,168.5,148.6,195z M213.6,0L213.6,0c-8.8,0.8-16.1,25.7-23.3,49.8  l-2.4,8.8c-1.6,4.8-3.2,9.6-4.8,14.4c-2.4,8-4.8,15.2-7.2,23.3c3.2,2.4,8,6.4,12.8,12.8c21.7,25.7,34.5,44.9,40.9,62.6  c10.4-13.6,24.9-23.3,38.5-35.3c0.8-0.8,1.6-1.6,2.4-1.6c-4-26.5-15.2-58.6-36.1-105.1C224.8,4.8,217.6,0,213.6,0z M438.3,194.2  c-1.6-4.8-9.6-8.8-24.9-12c-25.7-5.6-44.9-8-61-8c-34.5,0-52.2,12.8-74.6,40.9c-18.5,22.5-25.7,38.5-21.7,47.3  c0,0.8,0.8,1.6,0.8,1.6h109.1c10.4-7.2,20.1-15.2,30.5-24.1c3.2-2.4,5.6-4.8,8.8-7.2l5.6-4.8C426.3,214.3,439.9,202.2,438.3,194.2z   M236.1,241.6c-1.6,8.8-4,16.1-5.6,21.7h18.5c-4.8-8.8,0-24.1,21.7-50.6c12-14.4,22.5-24.9,34.5-32.1c1.6-10.4,3.2-22.5,4.8-36.9  c2.4-20.9-0.8-25.7-3.2-26.5c-0.8,0-0.8-0.8-1.6-0.8c-5.6,0-16.9,8.8-27.3,17.7l-4.8,4c-2.4,2.4-4.8,4-7.2,6.4  c-11.2,9.6-22.5,18.5-31.3,29.7C243.3,195.8,242.5,215.1,236.1,241.6z M165.4,212.7c19.3,24.1,24.9,38.5,23.3,47.3  c0.8,0.8,1.6,2.4,2.4,3.2H224c2.4-5.6,4-12.8,6.4-22.5c10.4-46.5,5.6-69-42.5-126c-9.6-12-15.2-14.4-17.7-14.4h-0.8  c-5.6,1.6-6.4,20.1-8,37.7v6.4c0,3.2-0.8,7.2-0.8,10.4c-1.6,17.7-2.4,35.3,0,50.6C162.2,208.7,163.8,211.1,165.4,212.7z M72.4,263.2  h109.1c0-0.8,0.8-0.8,0.8-1.6c4-8.8-3.2-24.9-21.7-47.3c-22.5-27.3-40.1-40.9-74.6-40.9c-16.1,0-35.3,2.4-61,8  c-15.2,3.2-23.3,7.2-24.9,12c-1.6,8,12,20.1,27.3,32.9l5.6,4.8c3.2,2.4,5.6,4.8,8.8,7.2C51.5,248,61.9,256.8,72.4,263.2z"],
  "j_prickly_pear_cactus": [522.3, 512, [], "e038", "M477.6,145.1c7.2-0.8,16.9-4.8,24.9-12c6.4-6.4,11.2-13.6,12.8-20.1c1.6-6.4,0.8-12-2.4-15.3  c-7.2-7.2-23.3-4-36.1,8c-4.8,4-8.8,9.6-11.2,14.5c1.6,2.4,3.2,5.6,4.8,8.8C473.6,133.9,476,139.5,477.6,145.1L477.6,145.1z   M284.1,173.2c-71.5,0-130.1,98.7-130.1,220c0,42.5,7.2,83.5,20.9,118.8h218.4c13.6-35.3,20.9-76.3,20.9-118.8  C414.1,272,355.5,173.2,284.1,173.2z M228.7,145.1c0.8,0,1.6-0.8,1.6-0.8c16.9-8,32.1-22.5,43.4-41.7c10.4-18.5,16.1-39.3,14.5-57.8  s-9.6-32.1-22.5-39.3c-12.8-7.2-28.9-7.2-45.8,0c-16.9,8-32.1,22.5-43.4,41.7c-4,7.2-7.2,14.5-9.6,21.7  C193.4,76.1,216.6,105,228.7,145.1z M72.9,59.2c-13.6-8-28.1-12-40.9-12C18.4,47.2,7.9,52,3.1,60.8c-4.8,8-4,18.5,2.4,30.5  s17.7,23.3,32.1,31.3s28.9,12.8,42.5,12c3.2,0,6.4-0.8,8.8-0.8c4-16.1,9.6-29.7,16.9-40.1C100.2,80.9,88.2,68,72.9,59.2z M225.5,182  c-8-59.4-40.1-105.2-73.9-105.2c-1.6,0-2.4,0-4,0c-36.1,4-60.2,60.2-53,125.2c5.6,53,29.7,95.5,57.8,107.6  C166.1,252.7,192.6,206.9,225.5,182L225.5,182z M415.7,190.1c20.1-11.2,39.3-17.7,57-18.5c0-12-3.2-24.9-10.4-37.7  c-15.3-29.7-41.7-45.8-59.4-36.9c-17.7,8.8-20.1,40.9-4.8,69.8C403.7,175.6,409.3,183.6,415.7,190.1L415.7,190.1z M510.5,194.1  c-8-8-20.1-12-33.7-12c-27.3,0-63.4,16.9-93.9,46.6c21.7,33.7,36.9,80.3,40.9,132.5c16.9-8.8,33.7-20.9,49-36.1  c22.5-22.5,39.3-49,45.8-73.9C525.7,226.2,522.5,206.1,510.5,194.1z"],
  "k_agave": [477.5, 512, [], "e039", "M163.7,463c-14.4-23.3-33.7-49.8-57.8-79.4c-9.6-65-13.6-130.8-15.2-158.1c26.5,39.3,47.3,75.4,64.2,107.5  C155.7,382,158.1,426.9,163.7,463z M361.1,350.7c-2.4,13.6-5.6,26.5-8,38.5c-2.4,39.3-7.2,71.4-12.8,97.1  c17.7-28.1,46.5-60.2,73-89.1c10.4-49,19.3-109.9,20.1-184.6C420.5,235.9,389.2,292.1,361.1,350.7L361.1,350.7z M346.7,215.1  c6.4,54.6,7.2,102.7,5.6,143.6c15.2-73.8,28.1-174.9,25.7-302.5c-12.8,30.5-43.3,103.5-73,181.4c2.4,22.5,4,44.1,5.6,64.2  C329.8,252.8,346.7,215.1,346.7,215.1L346.7,215.1z M422.9,512c20.1-36.9,41.7-90.7,54.6-166.1C429.3,390,354.7,466.3,333.8,512  H422.9z M324.2,512c13.6-45.7,31.3-136.4,17.7-270.4C321,289.7,255.2,449.4,256.8,512H324.2z M248.8,512  c-0.8-42.5,29.7-130,55.4-196.6c-4.8-83.5-17.7-190.2-45.7-315.4c-12,85.1-58.6,436.6-29.7,512H248.8z M194.2,512h25.7  c-14.4-45.7-8-164.5,3.2-279.3c-12.8-54.6-30.5-116.4-54.6-183.8c-4,67.4-15.2,315.4,4.8,426.1C181.4,488.7,188.6,500.8,194.2,512z   M185.4,512C158.9,461.4,105.1,380.4,0,282.5C12,321,51.4,437.4,91.5,512H185.4L185.4,512z"],
  "l_cactus": [280.1, 512, [], "e040", "M59.4,25.7c-7.2,29.7-13.6,69.8-13.6,117.2V512H0V139.6C0,92.3,23.3,50.6,59.4,25.7z M63.4,142.8V512h67.4V0  c-17.7,0.8-34.5,5.6-49.8,12.8C72.2,42.5,63.4,86.7,63.4,142.8L63.4,142.8z M196.6,11.2L196.6,11.2C182.2,4.8,166.1,0.8,149.3,0v512  h65.8V142.8C214.3,86.7,205.4,41.7,196.6,11.2z M219.1,24.1c7.2,30.5,13.6,70.6,13.6,118.8V512h47.3V139.6  C280.1,91.5,256,49,219.1,24.1z"],
  "m_barrel_cactus": [504.8, 512, [], "e041", "M96.3,512H79.4C28.1,458.2,0,379.6,0,291.3S28.1,122.8,81.1,69C60.2,169.3,44.9,328.2,96.3,512z M174.1,11.2  c-25.7,8-49,20.1-69,36.1C81.9,142.8,59.4,313,116.4,512h60.2C142,276.9,160.5,96.3,174.1,11.2z M195,512h48.2V0  c-16.9,0.8-33.7,2.4-49,6.4C181.4,85.9,159.7,269.6,195,512z M262.4,0v512h48.2C345.9,269.6,325,85.9,311.4,6.4  C296.1,2.4,279.3,0.8,262.4,0z M401.3,47.3c-20.1-16.1-43.3-28.1-69.8-36.1c13.6,85.1,32.1,265.6-1.6,500h59.4  C446.2,312.2,423.7,142.8,401.3,47.3L401.3,47.3z M425.3,69.8C446.2,170.1,460.6,329,409.3,512h16.1  c52.2-53.8,79.4-132.4,79.4-220.7S477.5,122.8,425.3,69.8L425.3,69.8z"],
  "n_candelabra_cactus": [351, 512, [], "e042", "M12.4,403.7c-14.4-47.3-20.9-69,6.4-69.8c26.5-1.6,24.1,22.5,21.7,66.6c-4.8-2.4-11.2-2.4-20.1,0  C17.3,401.3,14.8,402.1,12.4,403.7z M305.3,171c6.4,2.4,11.2,4.8,15.2,8c29.7-56.2,44.9-79.4,11.2-88.3c-32.1-8-33.7,22.5-41.7,77.8  C294.9,168.6,299.7,168.6,305.3,171L305.3,171z M262,274.5c7.2,0,12.8,1.6,17.7,3.2c39.3-62.6,57.8-89.1,19.3-101.1  c-40.1-12.8-41.7,29.7-58.6,104.3C245.1,276.9,252.4,274.5,262,274.5L262,274.5z M249.2,383.6c10.4-1.6,18.5,0,24.1,4  c19.3-71.4,28.9-102.7-11.2-102.7c-39.3-0.8-32.1,36.1-26.5,102.7C238.7,386,243.5,384.4,249.2,383.6z M190.6,93.1  c7.2,0.8,12.8,2.4,16.9,4.8c4-64.2,8-99.5-31.3-97.9s-31.3,30.5-11.2,96.3C170.5,93.1,179.3,91.5,190.6,93.1z M327.8,409.3  c3.2,0.8,5.6,1.6,7.2,2.4c9.6-46.5,15.2-66.6-11.2-65.8c-25.7,0.8-20.9,23.3-15.2,65.8C313.3,408.5,319.8,407.7,327.8,409.3z   M189.8,203.1c8.8,1.6,16,4.8,20.9,8.8c15.2-69,23.3-105.9-20.9-110.7C144,95.5,148,130,158.5,207.1  C165.7,201.5,175.3,200.7,189.8,203.1z M162.5,346.7c16.9-5.6,28.1-4,35.3,5.6c24.9-84.3,42.5-129.2-8-138.8  c-53.8-10.4-47.3,35.3-41.7,139.6C152.1,350.7,156.9,349.1,162.5,346.7L162.5,346.7z M96.7,261.6c8,0.8,12.8,4,16.9,10.4  C128.8,236,148,177.4,120,171c-35.3-8-40.9,46.5-40.9,94.7C83.9,263.2,89.5,261.6,96.7,261.6L96.7,261.6z M95.1,378.8  c6.4-0.8,12,0.8,16.9,3.2c9.6-44.9,17.7-110.7-15.2-112.3C54.2,267.3,59,333.9,70.2,390C75.8,384.4,83.9,380.4,95.1,378.8  L95.1,378.8z M130.4,512c5.6-44.1,10.4-128.4-35.3-124.4c-53,5.6-35.3,70.6-12.8,124.4H130.4z M56.6,512  c-2.4-77,1.6-111.5-35.3-101.1c-34.5,9.6-16.9,40.9,5.6,101.1C26.9,512,56.6,512,56.6,512z M216.3,512  c-7.2-110.7,1.6-175.7-53.8-156.5C108.7,374,132,414.1,172.1,512H216.3z M293.3,512c-4.8-86.7,0-124.4-44.1-119.6  c-42.5,4.8-17.7,44.9,12.8,119.6C262,512,293.3,512,293.3,512z M331,512c16.9-57.8,30.5-87.5-2.4-93.9  c-34.5-6.4-28.9,24.1-25.7,93.9H331z"],
  "o_succulent_cactus": [849.6, 512, [], "e043", "M667.2,100.5c-1.4,73.3-9.5,116.8-28.5,148c-9.5,4.1-19,6.8-27.2,10.9c4.1-73.3-31.2-42.1-76.1-5.4  c-5.4-31.2-14.9-65.2-29.9-105.9c16.3-13.6,34-27.2,53-39.4c5.4-4.1,10.9-8.1,16.3-10.9l10.9-6.8c24.4-17.7,48.9-34,62.5-34  c2.7,0,4.1,0,5.4,1.4C663.1,61.1,667.2,76.1,667.2,100.5L667.2,100.5z M773.1,135.8c-2.7-4.1-8.1-5.4-16.3-5.4  c-14.9,0-38,6.8-62.5,12.2l-13.6,4.1c-2.7,1.4-5.4,1.4-8.1,2.7c-2.7,42.1-9.5,72-20.4,95.1c21.7-6.8,47.5-14.9,77.4-21.7  c5.4-1.4,10.9-2.7,14.9-2.7c4.1-6.8,6.8-13.6,10.9-20.4C778.6,157.5,777.2,141.2,773.1,135.8L773.1,135.8z M531.4,4.1  C531.4,4.1,530,4.1,531.4,4.1c-12.2,0-31.2,23.1-58.4,61.1c10.9,25.8,21.7,48.9,29.9,70.6c20.4-17.7,43.5-32.6,66.5-48.9  c1.4-1.4,4.1-2.7,5.4-4.1c-4.1-12.2-9.5-25.8-16.3-40.7C547.7,20.4,539.6,5.4,531.4,4.1L531.4,4.1z M755.5,316.4  c19-36.7,38-70.6,28.5-82.8c-4.1-5.4-16.3-9.5-51.6-1.4c-53,12.2-91,24.4-120.9,39.4c0,2.7,0,5.4-1.4,8.1  c-2.7,23.1-4.1,43.5-8.1,61.1c34-16.3,77.4-19,142.6-9.5c1.4-1.4,1.4-2.7,2.7-4.1C747.3,328.7,755.5,316.4,755.5,316.4z M95.5,73.3  c-2.7,0-5.4,1.4-6.8,1.4c-14.9,9.5-6.8,58.4,2.7,108.6l2.7,17.7v1.4c47.5,14.9,84.2,29.9,111.4,44.8c-5.4-35.3-5.4-73.3-5.4-111.4  c-16.3-12.2-34-24.4-53-38C119.9,78.8,105,73.3,95.5,73.3L95.5,73.3z M299.2,376.2c-2.7-31.2,1.4-65.2,2.7-99.1  c2.7-53,4.1-99.1,27.2-91c5.4-19,10.9-38,17.7-58.4c-19-25.8-44.8-53-78.8-85.6c-21.7-21.7-35.3-28.5-42.1-28.5  c-1.4,0-2.7,0-4.1,1.4c-13.6,5.4-13.6,50.2-12.2,93.7v16.3c0,8.1,0,16.3,0,25.8c0,36.7,0,70.6,6.8,104.6  C262.5,283.8,282.9,319.2,299.2,376.2L299.2,376.2z M288.3,377.5c-27.2-88.3-63.8-124.9-207.8-169.8c-17.7-5.4-29.9-8.1-36.7-8.1  s-12.2,2.7-13.6,4.1c-9.5,10.9,6.8,46.2,24.4,84.2l6.8,13.6c2.7,6.8,6.8,14.9,9.5,21.7c2.7,4.1,4.1,9.5,6.8,13.6  C189.2,316.4,238.1,327.3,288.3,377.5z M414.6,0C414.6,0,413.2,0,414.6,0c-16.3,1.4-31.2,48.9-44.8,96.4l-5.4,17.7  c-2.7,9.5-5.4,19-8.1,28.5c-4.1,14.9-9.5,29.9-13.6,44.8c6.8,4.1,14.9,12.2,25.8,24.4c42.1,50.2,66.5,86.9,80.1,120.9  c20.4-25.8,48.9-46.2,74.7-67.9c1.4-1.4,2.7-2.7,4.1-4.1c-6.8-51.6-29.9-114.1-69.3-202.4C435,10.9,421.4,0,414.6,0L414.6,0z   M849.2,376.2c-2.7-9.5-19-17.7-47.5-24.4c-48.9-10.9-86.9-16.3-118.2-16.3c-66.5,0-100.5,24.4-144,78.8  c-35.3,43.5-50.2,74.7-42.1,92.4c0,1.4,1.4,2.7,1.4,4.1h211.9c20.4-13.6,39.4-29.9,58.4-47.5c5.4-5.4,10.9-9.5,16.3-14.9l10.9-9.5  C824.8,415.6,853.3,391.1,849.2,376.2L849.2,376.2z M458.1,468.5c-4.1,17.7-8.1,31.2-10.9,42.1h36.7c-9.5-16.3,0-46.2,42.1-97.8  c23.1-28.5,43.5-48.9,67.9-62.5c2.7-20.4,6.8-43.5,9.5-70.6c4.1-39.4-1.4-48.9-5.4-51.6c-1.4,0-2.7-1.4-4.1-1.4  c-10.9,0-32.6,17.7-53,35.3l-10.9,8.1c-5.4,4.1-9.5,8.1-14.9,12.2c-21.7,17.7-43.5,35.3-61.1,57  C470.3,380.3,468.9,416.9,458.1,468.5z M320.9,412.9c38,46.2,48.9,74.7,44.8,92.4c1.4,2.7,2.7,4.1,4.1,6.8h63.8  c4.1-10.9,8.1-24.4,12.2-43.5c19-89.6,10.9-133.1-81.5-244.5c-19-23.1-28.5-27.2-34-27.2H329c-10.9,4.1-12.2,39.4-14.9,73.3  l-1.4,12.2c0,6.8-1.4,13.6-1.4,20.4c-2.7,34-4.1,67.9,0,97.8C314.1,404.7,316.8,408.8,320.9,412.9L320.9,412.9z M140.3,510.6h211.9  c1.4-1.4,1.4-2.7,1.4-4.1c6.8-17.7-6.8-47.5-42.1-92.4c-43.5-53-77.4-78.8-144-78.8c-31.2,0-69.3,5.4-118.2,16.3  c-29.9,6.8-46.2,14.9-48.9,24.4c-4.1,14.9,24.4,38,53,63.8l10.9,9.5c5.4,5.4,10.9,9.5,16.3,14.9  C100.9,480.8,119.9,497.1,140.3,510.6L140.3,510.6z"]
};
var fa1_Cube = {
  prefix: 'fasu',
  iconName: '1_cube',
  icon: icons['1_cube']
};
var fa2_Pyramid = {
  prefix: 'fasu',
  iconName: '2_pyramid',
  icon: icons['2_pyramid']
};
var fa3_Dodecahedron = {
  prefix: 'fasu',
  iconName: '3_dodecahedron',
  icon: icons['3_dodecahedron']
};
var fa4_Polyhedron = {
  prefix: 'fasu',
  iconName: '4_polyhedron',
  icon: icons['4_polyhedron']
};
var fa5_Icosahedron = {
  prefix: 'fasu',
  iconName: '5_icosahedron',
  icon: icons['5_icosahedron']
};
var fa6_HexagonBeehive = {
  prefix: 'fasu',
  iconName: '6_hexagon_beehive',
  icon: icons['6_hexagon_beehive']
};
var fa7_BeeHexHive = {
  prefix: 'fasu',
  iconName: '7_bee_hex_hive',
  icon: icons['7_bee_with_hexagon_beehive']
};
var fa8_Bee = {
  prefix: 'fasu',
  iconName: '8_bee',
  icon: icons['8_bee']
};
var faA_Mountain = {
  prefix: 'fasu',
  iconName: 'A_mountain',
  icon: icons['A_a_mountain']
};
var faB_OldMain = {
  prefix: 'fasu',
  iconName: 'B_old_main',
  icon: icons['B_old_main']
};
var faC_ArizonaHeart = {
  prefix: 'fasu',
  iconName: 'C_arizona_heart',
  icon: icons['C_arizona_heart']
};
var faD_Arizona = {
  prefix: 'fasu',
  iconName: 'D_arizona',
  icon: icons['D_arizona']
};
var faE_HandPitchforkSolid = {
  prefix: 'fasu',
  iconName: 'E_hand_pitchfork_solid',
  icon: icons['E_hand_pitchfork_solid']
};
var faF_HandPitchforkOutline = {
  prefix: 'fasu',
  iconName: 'F_hand_pitchfork_outline',
  icon: icons['F_hand_pitchfork_outline']
};
var faG_SunCard = {
  prefix: 'fasu',
  iconName: 'G_sun_card',
  icon: icons['G_sun_card']
};
var faH_SafetyGoggles = {
  prefix: 'fasu',
  iconName: 'H_safety_goggles',
  icon: icons['H_safety_goggles']
};
var faI_VirtualRealityHeadset = {
  prefix: 'fasu',
  iconName: 'I_virtual_reality_headset',
  icon: icons['I_virtual_reality_headset']
};
var faJ_GraduationCapTasselLeft = {
  prefix: 'fasu',
  iconName: 'J_graduation_cap_tassel_left',
  icon: icons['J_graduation_cap_tassel_left']
};
var faK_GraduationCapTasselRight = {
  prefix: 'fasu',
  iconName: 'K_graduation_cap_tassel_right',
  icon: icons['K_graduation_cap_tassel_right']
};
var faL_GraduationSilhouetteHandPitchfork = {
  prefix: 'fasu',
  iconName: 'L_graduation_silhouette_hand_pitchfork',
  icon: icons['L_graduation_silhouette_hand_pitchfork']
};
var faM_GraduationSilhouetteNumberOne = {
  prefix: 'fasu',
  iconName: 'M_graduation_silhouette_number_one',
  icon: icons['M_graduation_silhouette_number_one']
};
var faN_SilhouetteHandPitchfork = {
  prefix: 'fasu',
  iconName: 'N_silhouette_hand_pitchfork',
  icon: icons['N_silhouette_hand_pitchfork']
};
var faO_SilhouetteNumberOne = {
  prefix: 'fasu',
  iconName: 'O_silhouette_number_one',
  icon: icons['O_silhouette_number_one']
};
var faP_SilhouetteHandPitchfork = {
  prefix: 'fasu',
  iconName: 'P_silhouette_hand_pitchfork',
  icon: icons['P_silhouette_hand_pitchfork']
};
var faQ_SilhouetteOnMountainHandPitchfork = {
  prefix: 'fasu',
  iconName: 'Q_silhouette_on_mountain_hand_pitchfork',
  icon: icons['Q_silhouette_on_mountain_hand_pitchfork']
};
var faR_TwoSilhouettesOnMountainHandPitchfork = {
  prefix: 'fasu',
  iconName: 'R_two_silhouettes_on_mountain_hand_pitchfork',
  icon: icons['R_two_silhouettes_on_mountain_hand_pitchfork']
};
var faS_SilhouetteSaluteCap = {
  prefix: 'fasu',
  iconName: 'S_silhouette_salute_cap',
  icon: icons['S_silhouette_salute_cap']
};
var faT_SilhouetteSaluteBeret = {
  prefix: 'fasu',
  iconName: 'T_silhouette_salute_beret',
  icon: icons['T_silhouette_salute_beret']
};
var faa_PalmTree = {
  prefix: 'fasu',
  iconName: 'a_palm_tree',
  icon: icons['a_palm_tree']
};
var fab_PalmTrees = {
  prefix: 'fasu',
  iconName: 'b_palm_trees',
  icon: icons['b_palm_trees']
};
var fac_SaguaroCactus = {
  prefix: 'fasu',
  iconName: 'c_saguaro_cactus',
  icon: icons['c_saguaro_cactus']
};
var fad_PricklyPearCactusPotted = {
  prefix: 'fasu',
  iconName: 'd_prickly_pear_cactus_potted',
  icon: icons['d_prickly_pear_cactus_potted']
};
var fae_AgavePotted = {
  prefix: 'fasu',
  iconName: 'e_agave_potted',
  icon: icons['e_agave_potted']
};
var faf_CactusPotted = {
  prefix: 'fasu',
  iconName: 'f_cactus_potted',
  icon: icons['f_cactus_potted']
};
var fag_BarrelCactusPotted = {
  prefix: 'fasu',
  iconName: 'g_barrel_cactus_potted',
  icon: icons['g_barrel_cactus_potted']
};
var fah_CandelabraCactusPotted = {
  prefix: 'fasu',
  iconName: 'h_candelabra_cactus_potted',
  icon: icons['h_candelabra_cactus_potted']
};
var fai_succulentPotted = {
  prefix: 'fasu',
  iconName: 'i_succulent_potted',
  icon: icons['i_succulent_potted']
};
var faj_PricklyPearCactus = {
  prefix: 'fasu',
  iconName: 'j_prickly_pear_cactus',
  icon: icons['j_prickly_pear_cactus']
};
var fak_Agave = {
  prefix: 'fasu',
  iconName: 'k_agave',
  icon: icons['k_agave']
};
var fal_Cactus = {
  prefix: 'fasu',
  iconName: 'l_cactus',
  icon: icons['l_cactus']
};
var fam_BarrelCactus = {
  prefix: 'fasu',
  iconName: 'm_barrel_cactus',
  icon: icons['m_barrel_cactus']
};
var fan_CandelabraCactus = {
  prefix: 'fasu',
  iconName: 'n_candelabra_cactus',
  icon: icons['n_candelabra_cactus']
};
var fao_SucculentCactus = {
  prefix: 'fasu',
  iconName: 'o_succulent_cactus',
  icon: icons['o_succulent_cactus']
};
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(fa1_Cube, fa2_Pyramid, fa3_Dodecahedron, fa4_Polyhedron, fa5_Icosahedron, fa6_HexagonBeehive, fa7_BeeHexHive, fa8_Bee, faA_Mountain, faB_OldMain, faC_ArizonaHeart, faD_Arizona, faE_HandPitchforkSolid, faF_HandPitchforkOutline, faG_SunCard, faH_SafetyGoggles, faI_VirtualRealityHeadset, faJ_GraduationCapTasselLeft, faK_GraduationCapTasselRight, faL_GraduationSilhouetteHandPitchfork, faM_GraduationSilhouetteNumberOne, faN_SilhouetteHandPitchfork, faO_SilhouetteNumberOne, faP_SilhouetteHandPitchfork, faQ_SilhouetteOnMountainHandPitchfork, faR_TwoSilhouettesOnMountainHandPitchfork, faS_SilhouetteSaluteCap, faT_SilhouetteSaluteBeret, faa_PalmTree, fab_PalmTrees, fac_SaguaroCactus, fad_PricklyPearCactusPotted, fae_AgavePotted, faf_CactusPotted, fag_BarrelCactusPotted, fah_CandelabraCactusPotted, fai_succulentPotted, faj_PricklyPearCactus, fak_Agave, fal_Cactus, fam_BarrelCactus, fan_CandelabraCactus, fao_SucculentCactus);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["dom"].watch();

/***/ }),

/***/ "./src/sass/renovation.style.scss":
/*!****************************************!*\
  !*** ./src/sass/renovation.style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi ./src/js/renovation.script.js ./src/sass/renovation.style.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/juanpablomitriatti/Desktop/webspark-ci/web/themes/webspark/renovation/src/js/renovation.script.js */"./src/js/renovation.script.js");
module.exports = __webpack_require__(/*! /Users/juanpablomitriatti/Desktop/webspark-ci/web/themes/webspark/renovation/src/sass/renovation.style.scss */"./src/sass/renovation.style.scss");


/***/ })

/******/ });
//# sourceMappingURL=renovation.script.js.map