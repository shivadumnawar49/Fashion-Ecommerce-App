import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../navigation/AuthNavigator';
import { useNavigation } from '@react-navigation/native';

type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackParams,
  'ForgotPassword'
>;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot password?</Text>
      <View style={styles.inputContainer}>
        <FA5 name="envelope" size={20} />
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputText}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoStar}>*</Text>
        <Text>
          We will send you a message to set or reset your new password
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OtpVerification', { context: 'forgotPassword' })
        }
        style={styles.submitButton}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.authPromptContainer}>
        <Text style={styles.authPromptText}>Remember Password?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.authPromptLink}>Login</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f3f3f3',
  },
  inputText: {
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 30,
  },
  infoStar: { color: '#F83758', marginRight: 5 },
  submitButton: {
    backgroundColor: '#F83758',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
    marginBottom: 50,
  },
  submitText: {
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
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
