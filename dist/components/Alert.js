"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _index = require("../index");
var _iconsMaterial = require("@mui/icons-material");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var TransitionDown = function TransitionDown(props) {
  return /*#__PURE__*/_react.default.createElement(_material.Slide, _extends({}, props, {
    direction: "down"
  }));
};
var Alert = function Alert(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useContext = (0, _react.useContext)(_index.AppContext),
    alert = _useContext.alert,
    setAlert = _useContext.setAlert;
  var handleClose = function handleClose() {
    return setAlert();
  };
  return /*#__PURE__*/_react.default.createElement(_material.Snackbar, {
    open: Boolean(alert),
    onClose: handleClose,
    TransitionComponent: TransitionDown,
    autoHideDuration: 2500,
    sx: sx.snackbar,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.SnackbarContent, {
    sx: sx.alert,
    message: /*#__PURE__*/_react.default.createElement(_material.Typography, {
      variant: "subtitle2"
    }, alert),
    action: /*#__PURE__*/_react.default.createElement(_material.IconButton, {
      size: "small",
      "aria-label": "close",
      color: "inherit",
      onClick: handleClose
    }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null))
  }));
};
var _default = Alert;
exports.default = _default;
var sx = {
  alert: {
    backgroundColor: "primary.main",
    color: "common.white"
  },
  snackbar: {
    width: "100%"
  }
};