  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.warningColor = exports.successColor = exports.lightGrey = exports.lightColor = exports.greyColor = exports.fontSemiBold = exports.fontRegular = exports.fontBold = exports.darkGrey = exports.darkColor = exports.dangerColor = exports.baseSemiColor = exports.baseLightColor = exports.baseColor = exports.MainStyle = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[0]);
  var baseColor = exports.baseColor = "#2A358B";
  var baseLightColor = exports.baseLightColor = "#fbf9fe";
  var baseSemiColor = exports.baseSemiColor = "#ebedff";
  var dangerColor = exports.dangerColor = "#DA4C51";
  var successColor = exports.successColor = "#4BA54D";
  var warningColor = exports.warningColor = "#ff7300";
  var lightColor = exports.lightColor = "#ffffff";
  var darkColor = exports.darkColor = "#000000";
  var greyColor = exports.greyColor = "#DFDFDF";
  var lightGrey = exports.lightGrey = "#F4F4F4";
  var darkGrey = exports.darkGrey = "#707274";
  var fontRegular = exports.fontRegular = "Mulish-Regular";
  var fontBold = exports.fontBold = "Mulish-Bold";
  var fontSemiBold = exports.fontSemiBold = "Mulish-SemiBold";
  var MainStyle = exports.MainStyle = _reactNative.StyleSheet.create({
    spincontainer: {
      position: 'absolute',
      zIndex: 99,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(1, 3, 27, 0.9)'
    },
    logo: {
      height: 50,
      resizeMode: 'contain'
    },
    lable: {
      fontFamily: fontSemiBold,
      color: darkColor,
      marginBottom: 5
    },
    inputbox: {
      backgroundColor: lightColor,
      borderColor: greyColor,
      borderWidth: 1,
      borderRadius: 8,
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    },
    solidbtn: {
      height: 45,
      backgroundColor: baseColor,
      borderRadius: 8,
      overflow: 'hidden'
    },
    outlinebtn: {
      height: 43,
      borderColor: baseColor,
      borderWidth: 1,
      borderRadius: 8,
      overflow: 'hidden'
    },
    pagibox: {
      width: 35,
      height: 35,
      borderRadius: 30
    },
    popbox: {
      width: '80%',
      backgroundColor: "#fcfcfc",
      borderRadius: 15,
      overflow: 'hidden',
      minHeight: 300,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    },
    quickbox: {
      width: '29.33%',
      padding: 2,
      height: 125,
      borderColor: greyColor,
      borderWidth: 1,
      borderRadius: 12,
      margin: '2%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    quickicon: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: "#eeeeee",
      marginBottom: 5
    },
    tabbtn: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      overflow: 'hidden',
      borderRadius: 0,
      width: '24%'
    }
  });
