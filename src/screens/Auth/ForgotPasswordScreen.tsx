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
import { socialMediaIcons } from '../../constants/data';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../navigation/AuthNavigator';
import { useNavigation } from '@react-navigation/native';

type LoginNavigationProp = NativeStackNavigationProp<AuthStackParams, 'Login'>;

const ForgotPasswordScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigation = useNavigation<LoginNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Forgot</Text>
        <Text style={styles.title}>password?</Text>
      </View>
      <View style={styles.inputContainer}>
        <FA5 name="envelope" size={20} />
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputText}
        />
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.loginButton}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titleContainer: {
    marginVertical: 30,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 40
  },
  inputText: {
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },
  forgotPasswordText: {
    color: '#F83758',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#F83758',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ForgotPasswordScreen;
