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
import { CommonActions, useNavigation } from '@react-navigation/native';

type CreateNewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackParams,
  'CreateNewPassword'
>;

const CreateNewPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const navigation = useNavigation<CreateNewPasswordNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create new password</Text>
      <Text style={styles.info}>
        Your new password must be unique from those previously used.
      </Text>
      <View style={styles.inputContainer}>
        <FA5 name="lock" size={20} />
        <TextInput
          placeholder="New Password"
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
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] }),
          )
        }
        style={styles.resetButton}
      >
        <Text style={styles.resetText}>Reset Password</Text>
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

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  info: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 30,
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
  resetButton: {
    backgroundColor: '#F83758',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 30,
  },
  resetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CreateNewPasswordScreen;
