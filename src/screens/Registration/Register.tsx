import React from 'react';
import {View, StyleSheet} from 'react-native';
import Stepper from './Stepper';
import {PicturedHeading} from '../../component/PicturedHeading';

const Register = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <PicturedHeading />
      <Stepper />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
  },
});
