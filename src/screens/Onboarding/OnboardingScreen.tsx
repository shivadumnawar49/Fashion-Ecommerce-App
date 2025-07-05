import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { onboardingData } from '../../constants/data';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type OnboardingNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'Onboarding'
>;

const OnboardingScreen = () => {
  const [step, setStep] = useState(0);
  const totalSteps = onboardingData.length;
  const navigation = useNavigation<OnboardingNavigationProp>();

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      navigation.replace('Auth');
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const { title, description, Icon } = onboardingData[step];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Icon />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => handlePrev()}>
          <Text style={styles.prevText}>{step > 0 ? 'Prev' : null}</Text>
        </TouchableOpacity>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                step === index ? styles.activeDot : styles.inactiveDot,
              ]}
            ></View>
          ))}
        </View>
        <TouchableOpacity onPress={() => handleNext()}>
          <Text style={styles.nextText}>
            {step < totalSteps - 1 ? 'Next' : 'Get Started'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-end',
  },
  skipText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  prevText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#C4C4C4',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    width: 30,
    backgroundColor: '#000',
  },
  inactiveDot: {
    width: 8,
    backgroundColor: 'grey',
  },

  nextText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#F83758',
  },
});

export default OnboardingScreen;
