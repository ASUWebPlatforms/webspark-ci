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

/***/ "./src/js/renovation.script.js":
/*!*************************************!*\
  !*** ./src/js/renovation.script.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");

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
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(fa1_Cube, fa2_Pyramid, fa3_Dodecahedron, fa4_Polyhedron, fa5_Icosahedron, fa6_HexagonBeehive, fa7_BeeHexHive, fa8_Bee, faA_Mountain, faB_OldMain, faC_ArizonaHeart, faD_Arizona, faE_HandPitchforkSolid, faF_HandPitchforkOutline, faG_SunCard, faH_SafetyGoggles, faI_VirtualRealityHeadset, faJ_GraduationCapTasselLeft, faK_GraduationCapTasselRight, faL_GraduationSilhouetteHandPitchfork, faM_GraduationSilhouetteNumberOne, faN_SilhouetteHandPitchfork, faO_SilhouetteNumberOne, faP_SilhouetteHandPitchfork, faQ_SilhouetteOnMountainHandPitchfork, faR_TwoSilhouettesOnMountainHandPitchfork, faS_SilhouetteSaluteCap, faT_SilhouetteSaluteBeret, faa_PalmTree, fab_PalmTrees, fac_SaguaroCactus, fad_PricklyPearCactusPotted, fae_AgavePotted, faf_CactusPotted, fag_BarrelCactusPotted, fah_CandelabraCactusPotted, fai_succulentPotted, faj_PricklyPearCactus, fak_Agave, fal_Cactus, fam_BarrelCactus, fan_CandelabraCactus, fao_SucculentCactus);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["dom"].watch();

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

__webpack_require__(/*! /Users/apersky/DDEV/webspark-ci/web/themes/webspark/renovation/src/js/renovation.script.js */"./src/js/renovation.script.js");
module.exports = __webpack_require__(/*! /Users/apersky/DDEV/webspark-ci/web/themes/webspark/renovation/src/sass/renovation.style.scss */"./src/sass/renovation.style.scss");


/***/ })

/******/ });
//# sourceMappingURL=renovation.script.js.map