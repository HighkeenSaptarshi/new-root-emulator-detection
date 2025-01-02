/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Alert,
  BackHandler,
  LogBox,
  SafeAreaView,
  View,
  Text,
  AppState,
  AppStateStatus,
} from 'react-native';

import SplashScreen from './screens/Splash';
import IntroScreen from './screens/Intro';
import {hashKey, URL} from './auth_provider/Config';

import {NativeModules} from 'react-native';

// import {fetch} from 'react-native-ssl-pinning';
// import {
//   initializeSslPinning,
//   addSslPinningErrorListener,
// } from 'react-native-ssl-public-key-pinning';
// import {useFreeRasp} from 'freerasp-react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const {SecurityServiceManager} = NativeModules;

const App = () => {
  const checkRootAndEmulator = async () => {
    try {
      let isRootedNative = await SecurityServiceManager.isDeviceRooted();
      let isEmulatorNative = await SecurityServiceManager.isEmulator();

      if (
        isRootedNative || isEmulatorNative
      // false
      ) {
        Alert.alert(
          'Security Alert',
          `The app cannot run on rooted devices or emulators.`,
          [{text: 'OK', onPress: () => BackHandler.exitApp()}],
        );
        return;
      }
    } catch (error) {
      console.error('Error checking root or emulator status:', error);
    }
  };

  useEffect(() => {
    checkRootAndEmulator();

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        checkRootAndEmulator();
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  });

  //SSL Pinning
  // const getDataSSL = () => {
  //   fetch(`${URL}`, {
  //     method: 'GET',
  //     timeoutInterval: 10000, // milliseconds
  //     // your certificates array (needed only in android) ios will pick it automatically
  //     pkPinning: true,
  //     sslPinning: {
  //       certs: [
  //         'sha256/HYVBbIEdyjkQhisEE7VP4VzVN//qb+kLy96tAtrzFLY=',
  //         'sha256/SDG5orEv8iX6MNenIAxa8nQFNpROB/6+llsZdXHZNqs=',
  //         'sha256/i7WTqTvh0OioIruIfFR4kMPnBqrS2rdiVPl/s2uC/CY=',
  //       ],
  //     },
  //     headers: {
  //       Accept: 'application/json; charset=utf-8',
  //       'Access-Control-Allow-Origin': '*',
  //       e_platform: 'mobile',
  //     },
  //   })
  //     .then(response => {
  //       console.log(`response received ${response}`);
  //       console.log("Data:: ", response);

  //     })
  //     .catch(err => {
  //       console.log(`error: ${err}`);
  //     });
  // };

  // const getData = async () => {
  //   await fetch(URL, {
  //     headers: {
  //       Accept: 'application/json; charset=utf-8',
  //       'Access-Control-Allow-Origin': '*',
  //       e_platform: 'mobile',
  //     },
  //   })
  //   .then((res:any)=>{
  //     console.log("DATAAA:: ", res);
      
  //   })
  //   .catch((err:any) => {
  //     console.log("ERROR",err);
      
  //   })
  // };

  useEffect(() => {
    // getDataSSL();
    // getData();
    const testSSL = async () => {
      try {
        const response = await NativeModules.SSLPinning.makeRequest(
          'https://apisheecementuat.mjunction.in'
        );
        console.log('Response:', response);
      } catch (error) {
        console.error('SSL Pinning Error:', error);
      }
    };

    testSSL();
  }, []);

  // useEffect(() => {
  //   initializeSslPinning({
  //     'apisheecementuat.mjunction.in': {
  //       includeSubdomains: true,
  //       publicKeyHashes: [
  //         'HYVBbIEdyjkQhisEE7VP4VzVN//qb+kLy96tAtrzFLY=',
  //         'SDG5orEv8iX6MNenIAxa8nQFNpROB/6+llsZdXHZNqs=',
  //         'i7WTqTvh0OioIruIfFR4kMPnBqrS2rdiVPl/s2uC/CY=',
  //       ],
  //     },
  //   });
  //   const subscription = addSslPinningErrorListener(error => {
  //     // Triggered when an SSL pinning error occurs due to pin mismatch
  //     console.log('Invalid Request.' + error.message);
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  // const config = {
  //   androidConfig: {
  //     packageName: 'com.shree.bangur',
  //     certificateHashes: ['PeoyMZdegGTt62ZVAePnPZPgUr3UhmIomLodE4PqtFY='],
  //     supportedAlternativeStores: ['com.sec.android.app.shree.bangur'],
  //   },
  //   iosConfig: {
  //     appBundleId: 'com.shree.bangur',
  //     appTeamId: 'your_team_ID',
  //   },
  //   watcherMail: 'gourab.kundu@beas.co.in',
  //   isProd: true,
  // };

  // reactions for detected threats
  // const actions = {
  //   // Android & iOS
  //   privilegedAccess: () => {
  //     console.log('privilegedAccess'); //Rooted
  //     BackHandler.exitApp();
  //   },
  //   // Android & iOS
  //   debug: () => {
  //     console.log('debug'); //Rooted
  //     BackHandler.exitApp();
  //   },
  //   // Android & iOS
  //   simulator: () => {
  //     console.log('simulator'); //EMulator or Rooted
  //     BackHandler.exitApp();
  //   },
  //   // Android & iOS
  //   appIntegrity: () => {
  //     //Alert.alert('appIntegrity');
  //     console.log('appIntegrity'); //Rooted
  //     BackHandler.exitApp();
  //   },
  //   // Android & iOS
  //   unofficialStore: () => {
  //     //Alert.alert('unofficialStore');
  //     console.log('unofficialStore');
  //   },
  //   // Android & iOS
  //   hooks: () => {
  //     //Alert.alert('hooks');
  //     console.log('hooks'); //Rooted
  //     BackHandler.exitApp();
  //   },
  //   // Android & iOS
  //   deviceBinding: () => {
  //     //Alert.alert('deviceBinding');
  //     console.log('deviceBinding'); //Rooted
  //     BackHandler.exitApp();
  //   },
  //   // Android & iOS
  //   secureHardwareNotAvailable: () => {
  //     //Alert.alert('secureHardwareNotAvailable');
  //     console.log('secureHardwareNotAvailable'); //Rooted
  //     BackHandler.exitApp();
  //   },
  //   // Android & iOS
  //   systemVPN: () => {
  //     //Alert.alert('systemVPN');
  //     console.log('systemVPN');
  //   },
  //   // Android & iOS
  //   passcode: () => {
  //     //Alert.alert('passcode');
  //     console.log('passcode');
  //   },
  //   // iOS only
  //   deviceID: () => {
  //     //Alert.alert('deviceID');
  //     console.log('deviceID');
  //   },
  //   // Android only
  //   obfuscationIssues: () => {
  //     //Alert.alert('obfuscationIssues');
  //     console.log('obfuscationIssues');
  //   },
  //   // Android only
  //   devMode: () => {
  //     //Alert.alert('devMode');
  //     console.log('devMode');
  //   },
  // };

  //useFreeRasp(config, actions);

  /* useEffect(() => {
    if (isRoot()) {
      BackHandler.exitApp();
    }
  }, []); */

  useEffect(() => {
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver`',
      'Sending `onAnimatedValueUpdate` with no listeners registered.',
      'Please pass alt prop to Image component',
    ]);
  }, []);

  // function MyStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
};

export default App;
