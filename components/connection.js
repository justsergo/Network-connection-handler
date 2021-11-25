import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import NetInfo, {
  NetInfoStateType,
  useNetInfo,
  NetInfoState,
} from '@react-native-community/netinfo';

import {styles} from '../styles/styles';

const Conect = () => {
  const [wiFi, setWiFi] = React.useState(false);
  const [intenrnet, setIntenrnet] = React.useState(false);
  const [connect, setConnect] = React.useState(false);

  const netInfo = useNetInfo();

  React.useEffect(() => {
    const statusConnect = netInfo.isConnected;
    statusConnect ? setConnect(true) : setConnect(false);
  });

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      state.isWifiEnabled ? setWiFi(true) : setWiFi(false);
      state.isInternetReachable ? setIntenrnet(true) : setIntenrnet(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={{
            uri: wiFi
              ? 'https://i.pinimg.com/originals/48/2d/62/482d6278c6f5f0e25a911ec02d995701.png '
              : 'https://cdn-icons-png.flaticon.com/512/63/63596.png',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: intenrnet
              ? 'https://cdn0.iconfinder.com/data/icons/signal-indicators/24/_4G-512.png'
              : 'https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/no_signal_no_network_bad_network-512.png',
          }}
        />
      </View>
      <Text style={styles.text}>
        Статус сети: {connect ? 'Включен' : 'Отключен'}
      </Text>
    </SafeAreaView>
  );
};

export default Conect;
