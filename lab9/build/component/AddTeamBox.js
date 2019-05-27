"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AddTeamBox =
/*#__PURE__*/
function (_Component) {
  _inherits(AddTeamBox, _Component);

  function AddTeamBox() {
    _classCallCheck(this, AddTeamBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddTeamBox).apply(this, arguments));
  }

  _createClass(AddTeamBox, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "addTeam"
      }, _react.default.createElement("h3", null, "Add Team to Premier League"), _react.default.createElement("form", {
        onSubmit: this.props.onSubmit,
        onChange: this.props.onInput
      }, _react.default.createElement("label", null, "Id:"), _react.default.createElement("input", {
        name: this.props.id,
        defaultValue: this.props.id
      }), _react.default.createElement("br", null), _react.default.createElement("label", null, "Name:"), _react.default.createElement("input", {
        name: this.props.name,
        defaultValue: this.props.name
      }), _react.default.createElement("br", null), _react.default.createElement("label", null, "City:"), _react.default.createElement("input", {
        name: this.props.city
      }), _react.default.createElement("br", null), _react.default.createElement("label", null, "Country:"), _react.default.createElement("input", {
        name: this.props.country
      }), _react.default.createElement("br", null), _react.default.createElement("label", null, "Year of established:"), _react.default.createElement("input", {
        name: this.props.yearOfEstablished
      }), _react.default.createElement("br", null), _react.default.createElement("label", null, "In current season?:"), _react.default.createElement("input", {
        name: this.props.inCurrentSeason
      }), _react.default.createElement("br", null), _react.default.createElement("label", null, "Players:"), _react.default.createElement("input", {
        name: this.props.players
      }), _react.default.createElement("br", null), _react.default.createElement("button", null, "Submit")));
    }
  }]);

  return AddTeamBox;
}(_react.Component);

exports.default = AddTeamBox;