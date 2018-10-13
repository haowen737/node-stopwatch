"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _recordList2 = _interopRequireDefault(require("./recordList"));

var _lap2 = _interopRequireDefault(require("./lap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timeter =
/*#__PURE__*/
function () {
  function Timeter() {
    _classCallCheck(this, Timeter);

    this.timer = null;
    this.recordList = [];
  }

  _createClass(Timeter, [{
    key: "current",
    value: function current() {
      return new Date().getTime();
    }
  }, {
    key: "start",
    value: function start() {
      this.timer = this.current();
    }
  }, {
    key: "lap",
    value: function lap(record) {
      if (!this.timer) {
        console.error('stopwatch is not active!');
        return;
      }

      var _lap = new _lap2.default(this.current() - this.timer); // const _lap = this.current() - this.timer


      this.recordList.push({
        record: record,
        _lap: _lap
      });
      return _lap.print(record);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.timer) {
        console.error('stopwatch is not active!');
        return;
      }

      var result = this.current() - this.timer;
      this.timer = null;
      this.recordList = [];
      return result;
    }
  }, {
    key: "records",
    value: function records() {
      var _recordList = new _recordList2.default(this.recordList);

      return _recordList.print();
    }
  }]);

  return Timeter;
}();

exports.default = Timeter;