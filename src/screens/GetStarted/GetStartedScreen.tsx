import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import BackgroundImage from '../../assets/svg/background-image.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { h } from '../../constants/dimensions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type GetStartedNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'GetStarted'
>;

const GetStartedScreen = () => {
  const navigation = useNavigation<GetStartedNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage
        width={'100%'}
        height={'100%'}
        preserveAspectRatio="xMidYMid slice"
      />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradientOverlay}
      />
      <View style={styles.overlay}>
        <View>
          <Text style={styles.title}>You want Authentic, here you go!</Text>
          <Text style={styles.subText}>Find it here, buy it now!</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace('Onboarding')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: h * 0.5,
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    width: '70%',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F83758',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GetStartedScreen;
