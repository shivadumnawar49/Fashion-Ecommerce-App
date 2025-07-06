import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import OtpVerificationScreen from '../screens/Auth/OtpVerificationScreen';
import CreateNewPasswordScreen from '../screens/Auth/CreateNewPasswordScreen';

const AuthStack = createNativeStackNavigator();

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OtpVerification: {context: 'forgotPassword' | 'signup'};
  CreateNewPassword: undefined;
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name="OtpVerification"
        component={OtpVerificationScreen}
      />
      <AuthStack.Screen
        name="CreateNewPassword"
        component={CreateNewPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
