import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button, Card} from 'react-native-paper';
import TextInput from '../component/TextInput';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {PicturedHeading} from '../component/PicturedHeading';

const ForgotPassword = (): React.JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const {navigate} = useNavigation<any>();

  const handleSubmit = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email.');
    } else {
      // Add API call or email validation here
      Alert.alert('Success', 'Password reset link sent to your email.');
      navigate('login');
    }
  };

  return (
    <View style={styles.container}>
      <PicturedHeading />
      <Card style={styles.card}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        <Card.Content>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}>
              Submit
            </Button>
            <Button
              mode="outlined"
              onPress={() => navigate('login')}
              style={styles.button}>
              Cancel
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    marginBottom: 10,
  },
  card: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: '48%',
  },
  forgotPasswordText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
