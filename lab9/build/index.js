"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _PremierLeaguePage = _interopRequireDefault(require("./component/PremierLeaguePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_PremierLeaguePage.default, null), document.getElementById("root"));