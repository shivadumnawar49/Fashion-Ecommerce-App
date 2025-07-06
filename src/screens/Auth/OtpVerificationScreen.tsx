import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../navigation/AuthNavigator';
import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

type OtpVerificationNavigationProp = NativeStackNavigationProp<
  AuthStackParams,
  'OtpVerification'
>;

type OtpRouteProp = RouteProp<AuthStackParams, 'OtpVerification'>;

const OtpVerificationScreen = () => {
  const navigation = useNavigation<OtpVerificationNavigationProp>();
  const route = useRoute<OtpRouteProp>();
  const { context } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.info}>
        Enter the verification code we just sent on your email address.
      </Text>

      <View style={styles.otpContainer}>
        {Array(6)
          .fill('')
          .map((otp, index) => (
            <TextInput
              key={index}
              maxLength={1}
              keyboardType="number-pad"
              style={styles.otpInputView}
            />
          ))}
      </View>

      <TouchableOpacity
        onPress={() => {
          if (context === 'forgotPassword') {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'CreateNewPassword' }],
              }),
            );
          } else if (context === 'signup') {
            navigation.dispatch(
              CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] }),
            );
          }
        }}
        style={styles.verifyButton}
      >
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      <View style={styles.authPromptContainer}>
        <Text style={styles.authPromptText}>Didn't received code?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.authPromptLink}>Resend</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  info: { fontSize: 16, marginBottom: 40 },
  otpContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 50,
  },
  otpInputView: {
    width: 48,
    height: 48,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'grey',
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  verifyButton: {
    backgroundColor: '#F83758',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
    marginBottom: 50,
  },
  verifyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  authPromptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authPromptText: {
    fontSize: 16,
    color: 'grey',
    marginRight: 10,
  },
  authPromptLink: {
    fontSize: 16,
    color: '#F83758',
    fontWeight: 'bold',
  },
});

export default OtpVerificationScreen;
