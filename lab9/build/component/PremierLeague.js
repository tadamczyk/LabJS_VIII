"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _AddTeamBox = _interopRequireDefault(require("./AddTeamBox"));

var _Team = _interopRequireDefault(require("../domain/Team"));

var _TeamsBox = _interopRequireDefault(require("./TeamsBox"));

var _TeamDetailsBox = _interopRequireDefault(require("./TeamDetailsBox"));

require("../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PremierLeague =
/*#__PURE__*/
function (_Component) {
  _inherits(PremierLeague, _Component);

  function PremierLeague(props) {
    var _this;

    _classCallCheck(this, PremierLeague);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PremierLeague).call(this, props));
    _this.state = {
      teams: [],
      currentTeam: 0,
      name: "",
      city: "",
      country: "",
      yearOfEstablished: 0,
      inCurrentSeason: true,
      players: []
    };
    return _this;
  }

  _createClass(PremierLeague, [{
    key: "tick",
    value: function tick() {
      this.setState({
        currentTeam: (this.state.currentTeam + 1) % this.state.teams.length
      });
    }
  }, {
    key: "fetchTeams",
    value: function () {
      var _fetchTeams = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var values;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios.default.get("http://localhost:3001/api/team").then(function (response) {
                  return response.data;
                });

              case 2:
                values = _context.sent;
                this.setState({
                  teams: values
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchTeams() {
        return _fetchTeams.apply(this, arguments);
      }

      return fetchTeams;
    }()
  }, {
    key: "getNextId",
    value: function getNextId() {
      return Math.max.apply(Math, _toConsumableArray(this.state.teams.map(function (team) {
        return team.id;
      }))) + 1;
    }
  }, {
    key: "handleInput",
    value: function () {
      var _handleInput = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(event) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.setState(_defineProperty({}, event.target.name, event.target.value));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleInput(_x) {
        return _handleInput.apply(this, arguments);
      }

      return handleInput;
    }()
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(event) {
        var team;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                team = new _Team.default(this.getNextId(), this.state.name, this.state.city, this.state.country, this.state.yearOfEstablished, this.state.inCurrentSeason, this.state.players);
                _context3.next = 4;
                return _axios.default.post("http://localhost:3001/api/team", team).then(function (response) {
                  return response.data;
                });

              case 4:
                this.fetchTeams();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleSubmit(_x2) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerId = setInterval(function () {
        return _this2.tick();
      }, 3000);
      this.fetchTeams();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerId);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "premierLeague"
      }, _react.default.createElement(_TeamsBox.default, {
        teams: this.state.teams
      }), _react.default.createElement(_TeamDetailsBox.default, {
        team: this.state.teams[this.state.currentTeam]
      }), _react.default.createElement(_AddTeamBox.default, {
        name: this.state.name,
        city: this.state.city,
        country: this.state.country,
        yearOfEstablished: this.state.yearOfEstablished,
        inCurrentSeason: this.state.inCurrentSeason,
        players: this.state.players,
        onInput: this.handleInput.bind(this),
        onSubmit: this.handleSubmit.bind(this)
      }));
    }
  }]);

  return PremierLeague;
}(_react.Component);

exports.default = PremierLeague;