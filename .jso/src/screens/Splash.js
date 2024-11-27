  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _nativeBase = _$$_REQUIRE(_dependencyMap[5]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _Config = _$$_REQUIRE(_dependencyMap[8]);
  var _jailMonkey = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _reactNativeDetectFrida = _$$_REQUIRE(_dependencyMap[10]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[11]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  // import DeviceInfo, {useIsEmulator} from 'react-native-device-info';

  var SplashScreen = function SplashScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      foundEmulator = _React$useState2[0],
      setFoundEmulator = _React$useState2[1];
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      deviceRooted = _React$useState4[0],
      setDeviceRooted = _React$useState4[1];
    // const {loading, isEmresult} = useIsEmulator();

    var checkForRootFiles = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        var RNFS = _$$_REQUIRE(_dependencyMap[12]);
        var pathsToCheck = ['/system/app/Superuser.apk',
        // Android rooted device check
        '/system/xbin/su',
        // Android su binary check
        '/bin/bash',
        // Common on Linux-based (Android) systems
        '/Applications/Cydia.app' // iOS check for Cydia (jailbroken)
        ];
        for (var path of pathsToCheck) {
          var exists = yield RNFS.exists(path);
          if (exists) {
            console.log('rooted: true');
            setDeviceRooted(true);
            _reactNative.BackHandler.exitApp();
            return true;
          } // Rooted or jailbroken detected
        }
        return false; // No signs of rooting or jailbreaking
      });
      return function checkForRootFiles() {
        return _ref2.apply(this, arguments);
      };
    }();

    //   useEffect(() => {
    //     const checkRoot = async () => {
    //       const rooted = await checkForRootFiles();
    //       console.log('rooted: ', rooted);
    //       if (rooted) {
    //         setDeviceRooted(true);
    //         BackHandler.exitApp();
    //       }
    //     };
    //     checkRoot();
    //   }, []);

    //   useEffect(() => {
    //     const checkProxy = async () => {
    //       try {
    //         const response = await fetch(`${URL}`);
    //         if (response.headers) {
    //           const headers = response.headers;
    //           // Check for common proxy headers
    //           if (headers.has('X-Forwarded-For') || headers.has('Via')) {
    //             console.log('Proxy detected via headers');
    //             BackHandler.exitApp();
    //           } else {
    //             console.log('No proxy detected');
    //           }
    //         }
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    //     checkProxy();
    //   });

    //   useEffect(() => {
    //     const checkForFrida = async () => {
    //       const isFrida = await isDeviceRooted();
    //       if (isFrida) {
    //         console.log('Frida detected!', isFrida);
    //         BackHandler.exitApp();
    //       } else {
    //         console.log('No Frida detected.');
    //       }
    //     };
    //     checkForFrida();
    //   });

    //   useEffect(() => {
    //     const checkJailBreak = () => {
    //       if (
    //         JailMonkey.isJailBroken() ||
    //         JailMonkey.trustFall() ||
    //         JailMonkey.hookDetected() ||
    //         JailMonkey.canMockLocation()
    //       ) {
    //         console.log('rooted: true');
    //         setDeviceRooted(true);
    //         BackHandler.exitApp();
    //       }
    //     };
    //     checkJailBreak();
    //   });

    //   useEffect(() => {
    //     if (!isEmresult) {
    //       const checkEmulator = async () => {
    //         const isEmulator = await DeviceInfo.isEmulator();
    //         const brand = await DeviceInfo.getBrand();
    //         const model = await DeviceInfo.getModel();
    //         const systemName = await DeviceInfo.getSystemName();

    //         // Add additional checks as needed
    //         if (
    //           isEmulator ||
    //           brand === 'generic' ||
    //           brand.includes('sdk') ||
    //           model.includes('Emulator') ||
    //           model.includes('Android SDK built for x86')
    //         ) {
    //           setFoundEmulator(true);
    //           return true; // Running on an emulator
    //         }
    //         return false; // Running on a real device
    //       };
    //       checkEmulator();
    //     } else {
    //       setFoundEmulator(true);
    //     }
    //   }, []);

    (0, _react.useEffect)(function () {
      if (!foundEmulator && !deviceRooted) {
        setTimeout(function () {
          navigation.replace('Intro');
        }, 2800);
      }
      //     /* if (checkEmulator) {
      //             isEmulator().then(isEmu => {
      //                 if (isEmu) {
      //                     checkForFrida();
      //                     setFoundEmulator(true);
      //                     AsyncStorage.clear();
      //                 } else {
      //                     setTimeout(function () {
      //                         navigation.replace('Intro');
      //                     }, 2800);
      //                 }
      //             });
      //         } else {
      //             setTimeout(function () {
      //                 navigation.replace('Intro');
      //             }, 2800);
      //         } */
    }, []);
    var closeApp = function closeApp() {
      _reactNative.BackHandler.exitApp();
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ImageBackground, {
        source: _$$_REQUIRE(_dependencyMap[13]),
        imageStyle: {
          resizeMode: 'cover',
          position: 'absolute',
          bottom: 0,
          top: 0,
          opacity: 1
        },
        style: styles.bgimage
      }), foundEmulator && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: "#ffffff",
          style: {
            width: '70%',
            borderRadius: 10,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingY: "10",
            paddingX: "5",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[14]),
              style: _MainStyle.MainStyle.logo
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mt: 5,
              mb: 3,
              fontSize: "xl",
              fontWeight: "bold",
              color: _MainStyle.dangerColor,
              children: [t('Alert'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t('This App run on Emulator. Please run in Real Device to use this App'), "..."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return closeApp();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t('Close')
              })
            })]
          })
        })
      }), deviceRooted && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: "#ffffff",
          style: {
            width: '70%',
            borderRadius: 10,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingY: "10",
            paddingX: "5",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[14]),
              style: _MainStyle.MainStyle.logo
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mt: 5,
              mb: 3,
              fontSize: "xl",
              fontWeight: "bold",
              color: _MainStyle.dangerColor,
              children: [t('Alert'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t('This is an Rooted Device. Please run in Unrooted Device to use this App'), "..."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return closeApp();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t('Close')
              })
            })]
          })
        })
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    bgimage: {
      flex: 1,
      justifyContent: 'center'
    }
  });
  var _default = exports.default = SplashScreen;
