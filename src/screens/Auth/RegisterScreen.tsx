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

type RegisterNavigationProp = NativeStackNavigationProp<
  AuthStackParams,
  'Register'
>;

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const navigation = useNavigation<RegisterNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.inputContainer}>
        <FA5 name="user" size={20} />
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputText}
        />
      </View>
      <View style={styles.inputContainer}>
        <FA5 name="lock" size={20} />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'grey'}
          secureTextEntry={!showPassword}
          maxLength={20}
          style={styles.inputText}
        />
        <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
          <FA5 name={showPassword ? 'eye-slash' : 'eye'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <FA5 name="lock" size={20} />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={'grey'}
          secureTextEntry={!showConfirmPassword}
          maxLength={20}
          style={styles.inputText}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(prev => !prev)}>
          <FA5 name={showConfirmPassword ? 'eye-slash' : 'eye'} size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('OtpVerification', {context:'signup'})}
        style={styles.createAccountButton}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>- OR Continue with -</Text>
        <View style={styles.socialMediaContainer}>
          {socialMediaIcons.map(({ Icon }, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={styles.socialMediaIconView}>
                  <Icon />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.authPromptContainer}>
          <Text style={styles.authPromptText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.authPromptLink}>Login</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 24,
    backgroundColor: '#f3f3f3',
  },
  inputText: {
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },
  createAccountButton: {
    backgroundColor: '#F83758',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
    marginVertical: 50,
  },
  createAccountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    alignItems: 'center',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
    marginBottom: 40,
  },
  socialMediaIconView: {
    backgroundColor: '#fcf3f6',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F83758',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authPromptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default RegisterScreen;
