  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _i18next = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[2]);
  var _En = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _Hn = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _Te = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _Ta = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _Ml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _Kn = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  _i18next.default.use(_reactI18next.initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'Eng',
    fallbackLng: 'Eng',
    resources: {
      Eng: _En.default,
      Hn: _Hn.default,
      Te: _Te.default,
      Ta: _Ta.default,
      Ml: _Ml.default,
      Kn: _Kn.default
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
  var _default = exports.default = _i18next.default;
