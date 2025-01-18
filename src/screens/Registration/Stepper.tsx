import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, ProgressBar} from 'react-native-paper';
import {steps} from './StepMain';
import {useNavigation} from '@react-navigation/native';

const Stepper = () => {
  const [step, setStep] = useState(1);

  const {navigate} = useNavigation<any>();

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const cancelStep = () => {
    navigate('login');
  };

  const stepSubmit = () => {
    navigate('registerSuccess');
  };

  const progress = step / 2;

  const CurrentStepComponent = steps[step - 1].component;

  return (
    <View style={styles.container}>
      {/* <Card style={styles.card}>
        <Card.Content> */}
      <View style={styles.stepHeaderContainer}>
        <Text>{steps[step - 1].name}</Text>
        <Text>
          {' '}
          Step {step} of {steps.length}
        </Text>
      </View>
      {/* {step === 1 && <Text>Welcome to Step 1. Provide your basic information.</Text>}
          {step === 2 && <Text>You're on Step 2. Confirm your details.</Text>} */}
      {/* </Card.Content>
      </Card> */}
      <ProgressBar
        progress={progress}
        color="green"
        style={styles.progressBar}
      />
      {<CurrentStepComponent />}
      <View style={styles.buttonContainer}>
        {step == 1 && (
          <Button mode="outlined" style={styles.btnStyle} onPress={cancelStep}>
            Cancel
          </Button>
        )}
        {step > 1 && (
          <Button mode="outlined" style={styles.btnStyle} onPress={prevStep}>
            Back
          </Button>
        )}
        {step < 2 ? (
          <Button mode="contained" style={styles.btnStyle} onPress={nextStep}>
            Next
          </Button>
        ) : (
          <Button mode="contained" style={styles.btnStyle} onPress={stepSubmit}>
            Finish
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  stepHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  card: {
    // padding: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStyle: {
    width: '40%',
    marginTop: 4,
  },
});

export default Stepper;
