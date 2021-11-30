import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import NetInfo, {
  NetInfoStateType,
  useNetInfo,
  NetInfoState,
} from '@react-native-community/netinfo';

import {styles} from '../styles/styles';

const Connection = () => {
  const [isOnwiFi, setIsOnwiFi] = React.useState(false);
  const [isOnMobileInternet, setIsOnMobileInternet] = React.useState(false);
  const [isConnected, setIsConnected] = React.useState(false);

  const netInfo = useNetInfo();

  React.useEffect(() => {
    const statusConnect = netInfo.isConnected;
    statusConnect ? setIsConnected(true) : setIsConnected(false);
  });

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      state.isWifiEnabled ? setIsOnwiFi(true) : setIsOnwiFi(false);
      state.isInternetReachable
        ? setIsOnMobileInternet(true)
        : setIsOnMobileInternet(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={{
            uri: isOnwiFi
              ? 'https://i.pinimg.com/originals/48/2d/62/482d6278c6f5f0e25a911ec02d995701.png '
              : 'https://cdn-icons-png.flaticon.com/512/63/63596.png',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: isOnMobileInternet
              ? 'https://cdn0.iconfinder.com/data/icons/signal-indicators/24/_4G-512.png'
              : 'https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/no_signal_no_network_bad_network-512.png',
          }}
        />
      </View>
      <Text style={styles.text}>
        Статус сети: {isConnected ? 'Включен' : 'Отключен'}
      </Text>
    </SafeAreaView>
  );
};

export default Connection;
