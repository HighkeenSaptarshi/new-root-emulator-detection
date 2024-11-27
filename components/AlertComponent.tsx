import React from 'react';
import {
  Button,
  NativeBaseProvider,
  Stack,
  Text,
  View,
  VStack,
} from 'native-base';
import {MainStyle, dangerColor} from '../assets/MainStyle';
import {BackHandler, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

const AlertComponent = () => {
  const {t} = useTranslation();
  const closeApp = () => {
    BackHandler.exitApp();
  };
  return (
    <View>
      <View style={MainStyle.spincontainer}>
        <Stack
          backgroundColor="#ffffff"
          style={{width: '70%', borderRadius: 10, overflow: 'hidden'}}>
          <VStack
            space={1}
            w="100%"
            paddingY="10"
            paddingX="5"
            alignItems="center"
            justifyContent="center">
            <Image
              source={require('../assets/images/logo.jpg')}
              style={MainStyle.logo}
            />
            <Text
              mt={5}
              mb={3}
              fontSize="xl"
              fontWeight="bold"
              color={dangerColor}>
              {t('Alert')}!
            </Text>
            <Text
              textAlign="center"
              fontSize="sm"
              fontWeight="medium"
              color="#111111"
              mb={3}>
              {t(
                'This App run on Emulator. Please run in Real Device to use this App',
              )}
              ...
            </Text>
            <Button
              size="sm"
              style={{
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden',
              }}
              onPress={() => closeApp()}
              marginY={4}>
              <Text color="#ffffff" fontSize="sm" fontWeight="medium">
                {t('Close')}
              </Text>
            </Button>
          </VStack>
        </Stack>
      </View>
    </View>
  );
};

export default AlertComponent;
