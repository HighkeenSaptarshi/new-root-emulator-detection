  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _Config = _$$_REQUIRE(_dependencyMap[6]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[8]);
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[12]);
  var _crc = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _jailMonkey = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _reactNativeDetectFrida = _$$_REQUIRE(_dependencyMap[15]);
  var _reactNativeSslPinning = _$$_REQUIRE(_dependencyMap[16]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[17]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  // import DeviceInfo, {useIsEmulator} from 'react-native-device-info';

  // import {useFreeRasp} from 'freerasp-react-native';

  var IntroScreen = function IntroScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      versionFound = _React$useState4[0],
      setVersionFound = _React$useState4[1];
    var _React$useState5 = _react.default.useState(''),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      storeUrl = _React$useState6[0],
      setStoreUrl = _React$useState6[1];
    var _React$useState7 = _react.default.useState('Eng'),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      currentLanguage = _React$useState8[0],
      setLanguage = _React$useState8[1];
    var _React$useState9 = _react.default.useState(''),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      userType = _React$useState10[0],
      setUserType = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      foundEmulator = _React$useState12[0],
      setFoundEmulator = _React$useState12[1];
    var _React$useState13 = _react.default.useState(false),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      deviceRooted = _React$useState14[0],
      setDeviceRooted = _React$useState14[1];
    //   const {isEmloading, isEmresult} = useIsEmulator();

    var checkForRootFiles = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        var RNFS = _$$_REQUIRE(_dependencyMap[18]);
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
            navigation.replace('Splash');
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
    var config = {
      androidConfig: {
        packageName: 'com.shree.bangur',
        certificateHashes: ['PeoyMZdegGTt62ZVAePnPZPgUr3UhmIomLodE4PqtFY='],
        supportedAlternativeStores: ['com.sec.android.app.shree.bangur']
      },
      iosConfig: {
        appBundleId: 'com.shree.bangur',
        appTeamId: 'your_team_ID'
      },
      watcherMail: 'gourab.kundu@beas.co.in',
      isProd: true
    };

    // reactions for detected threats
    var actions = {
      // Android & iOS
      privilegedAccess: function privilegedAccess() {
        navigation.replace('Splash');
        //console.log('privilegedAccess'); //Rooted
        setDeviceRooted(true);
        _reactNative.BackHandler.exitApp();
      },
      // Android & iOS
      debug: function debug() {
        navigation.replace('Splash');
        //console.log('debug'); //Rooted
        setDeviceRooted(true);
        _reactNative.BackHandler.exitApp();
      },
      // Android & iOS
      simulator: function simulator() {
        navigation.replace('Splash');
        //console.log('simulator'); //EMulator or Rooted
        setFoundEmulator(true);
        _reactNative.BackHandler.exitApp();
      },
      // Android & iOS
      appIntegrity: function appIntegrity() {
        navigation.replace('Splash');
        //console.log('appIntegrity'); //Rooted
        setDeviceRooted(true);
        _reactNative.BackHandler.exitApp();
      },
      // Android & iOS
      unofficialStore: function unofficialStore() {
        //console.log('unofficialStore');
      },
      // Android & iOS
      hooks: function hooks() {
        navigation.replace('Splash');
        //console.log('hooks'); //Rooted
        setDeviceRooted(true);
        _reactNative.BackHandler.exitApp();
      },
      // Android & iOS
      deviceBinding: function deviceBinding() {
        navigation.replace('Splash');
        //console.log('deviceBinding'); //Rooted
        setDeviceRooted(true);
        _reactNative.BackHandler.exitApp();
      },
      // Android & iOS
      secureHardwareNotAvailable: function secureHardwareNotAvailable() {
        navigation.replace('Splash');
        //console.log('secureHardwareNotAvailable'); //Rooted
        setDeviceRooted(true);
        _reactNative.BackHandler.exitApp();
      },
      // Android & iOS
      systemVPN: function systemVPN() {
        //console.log('systemVPN');
      },
      // Android & iOS
      passcode: function passcode() {
        //console.log('passcode');
      },
      // iOS only
      deviceID: function deviceID() {
        //console.log('deviceID');
      },
      // Android only
      obfuscationIssues: function obfuscationIssues() {
        // console.log('obfuscationIssues');
      },
      // Android only
      devMode: function devMode() {
        //console.log('devMode');
      }
    };

    // useFreeRasp(config, actions);

    //   useEffect(() => {
    //     const checkRoot = async () => {
    //       const rooted = await checkForRootFiles();
    //       console.log('rooted: ', rooted);
    //       if (rooted) {
    //         setDeviceRooted(true);
    //         navigation.replace('Splash');
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
    //             navigation.replace('Splash');
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

    // useEffect(() => {
    //   const checkForFrida = async () => {
    //     const isFrida = await isDeviceRooted();

    //     if (isFrida) {
    //       console.log('Frida detected!', isFrida);
    //       navigation.replace('Splash');
    //       BackHandler.exitApp();
    //     } else {
    //       console.log('No Frida detected.');
    //     }
    //   };
    //   checkForFrida();
    // });

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
    //         navigation.replace('Splash');
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

    //   useEffect(() => {
    //     setLoading(true);
    //     AsyncStorage.getItem('language').then(val => {
    //       if (val != null) {
    //         setLanguage(val);
    //         i18n
    //           .changeLanguage(val)
    //           .then(() => console.log(val))
    //           .catch(err => console.log(err));
    //       }
    //     });
    //     let formdata = new FormData();
    //     formdata.append('lang_code', currentLanguage);
    //     formdata.append('app_ver', `${APP_VERSION}`);
    //     formdata.append('os_type', `${OS_TYPE}`);
    //     fetch(`${BASE_URL}/app-version-check`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         accesstoken: `${AccessToken}`,
    //       },
    //       pkPinning: true,
    //       sslPinning: {
    //         certs: [
    //           'sha256/HYVBbIEdyjkQhisEE7VP4VzVN//qb+kLy96tAtrzFLY=',
    //           'sha256/SDG5orEv8iX6MNenIAxa8nQFNpROB/6+llsZdXHZNqs=',
    //           'sha256/i7WTqTvh0OioIruIfFR4kMPnBqrS2rdiVPl/s2uC/CY=',
    //         ],
    //       },
    //       body: formdata,
    //     })
    //       .then(response => response.json())
    //       .then(responseJson => {
    //         setLoading(false);
    //         console.log('verssion Check:', responseJson);
    //         if (responseJson.version_details.update_available == 0) {
    //           AsyncStorage.getItem('userToken').then(val => {
    //             if (val != null) {
    //               navigation.replace('Home');
    //             }
    //           });
    //         } else {
    //           setLoading(false);
    //           AsyncStorage.clear();
    //           setStoreUrl(responseJson.version_details.store_url);
    //           setVersionFound(true);
    //         }
    //       })
    //       .catch(error => {
    //         setLoading(false);
    //         if (error.toString().includes('Network request failed')) {
    //           console.log(
    //             'Secure connection error or network issue! Please try again later.',
    //           );
    //         }
    //         console.log('after login Error:', error);
    //       });
    //   }, []);

    var closeApp = function closeApp() {
      navigation.replace('Splash');
      _reactNative.BackHandler.exitApp();
    };
    var onSaveLang = function onSaveLang(val) {
      setLanguage(val);
      _asyncStorage.default.setItem('language', val);
      _i18n.default.changeLanguage(val).then(function () {
        return setLoading(true);
      }).catch(function (err) {
        return console.log(err);
      });
      setTimeout(function () {
        setLoading(false);
      }, 500);
    };
    var onContinueForVerssion = function onContinueForVerssion() {
      _reactNative.Linking.openURL(storeUrl);
    };
    var goNext = function goNext(page, user) {
      if (userType === '') {
        _reactNativeSimpleToast.default.show(t('Please select Login As'), _reactNativeSimpleToast.default.LONG);
      } else {
        navigation.replace('Login', {
          pageName: page,
          type: user
        });
      }
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[19]),
              style: {
                width: '100%',
                height: 400,
                resizeMode: 'cover',
                position: 'relative'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[20]),
              style: _MainStyle.MainStyle.logo
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            paddingX: 10,
            paddingY: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              textAlign: "center",
              children: t('Welcome to Nirman Mitra 2.0')
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              marginTop: "4",
              space: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('Language'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: currentLanguage,
                    onValueChange: function onValueChange(value) {
                      return onSaveLang(value);
                    },
                    style: {
                      paddingLeft: 15
                    },
                    fontFamily: _MainStyle.fontRegular,
                    dropdownCloseIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "chevron-down-outline",
                      style: {
                        marginRight: 10
                      },
                      size: 20
                    }),
                    dropdownOpenIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "chevron-up-outline",
                      style: {
                        marginRight: 10
                      },
                      size: 20
                    }),
                    _selectedItem: {
                      backgroundColor: _MainStyle.greyColor,
                      endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "checkmark-circle",
                        size: 20,
                        color: _MainStyle.successColor,
                        style: {
                          right: 0,
                          position: 'absolute'
                        }
                      })
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "English",
                      value: "Eng"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Hindi",
                      value: "Hn"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Telugu",
                      value: "Te"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Tamil",
                      value: "Ta"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Malayalam",
                      value: "Ml"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Kannada",
                      value: "Kn"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('Login As'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: userType,
                    onValueChange: function onValueChange(value) {
                      return setUserType(value);
                    },
                    style: {
                      paddingLeft: 15
                    },
                    placeholder: t('Select'),
                    fontFamily: _MainStyle.fontRegular,
                    dropdownCloseIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "chevron-down-outline",
                      style: {
                        marginRight: 10
                      },
                      size: 20
                    }),
                    dropdownOpenIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "chevron-up-outline",
                      style: {
                        marginRight: 10
                      },
                      size: 20
                    }),
                    _selectedItem: {
                      backgroundColor: _MainStyle.greyColor,
                      endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "checkmark-circle",
                        size: 20,
                        color: _MainStyle.successColor,
                        style: {
                          right: 0,
                          position: 'absolute'
                        }
                      })
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Contractor",
                      value: "Contractor"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Dealer",
                      value: "Dealer"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "TSO",
                      value: "TSO"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "TTO",
                      value: "TTO"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "STH",
                      value: "STH"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 2,
                marginTop: 4,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: _MainStyle.MainStyle.solidbtn,
                  onPress: function onPress() {
                    return goNext('Sign In', userType);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t('Sign In')
                  })
                }), userType == 'Contractor' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  variant: "unstyled",
                  style: _MainStyle.MainStyle.outlinebtn,
                  onPress: function onPress() {
                    return goNext('Sign Up', userType);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t('Sign Up')
                  })
                })]
              })]
            })]
          })]
        })
      }), versionFound && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          space: 1,
          w: "100%",
          paddingY: "10",
          paddingX: "5",
          alignItems: "center",
          justifyContent: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[20]),
            style: _MainStyle.MainStyle.logo
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            mt: 5,
            mb: 3,
            fontSize: "xl",
            fontWeight: "bold",
            color: "#111111",
            children: [t('Update Warning'), "!"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            textAlign: "center",
            fontSize: "sm",
            fontWeight: "medium",
            color: "#111111",
            mb: 3,
            children: [t('App need Update to the Latest Version. Please click on Update Now button to Continue'), "..."]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            size: "sm",
            style: {
              backgroundColor: '#111111',
              width: 150,
              borderRadius: 8,
              overflow: 'hidden'
            },
            onPress: function onPress() {
              return onContinueForVerssion();
            },
            marginY: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: "#ffffff",
              fontSize: "sm",
              fontWeight: "medium",
              children: t('Update Now')
            })
          })]
        })
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: _MainStyle.warningColor
        })
      }), foundEmulator && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
              source: _$$_REQUIRE(_dependencyMap[20]),
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
      }), deviceRooted && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
              source: _$$_REQUIRE(_dependencyMap[20]),
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = IntroScreen;
