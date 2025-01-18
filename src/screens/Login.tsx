import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import PasswordInput from '../component/PasswordInput';
import TextInput from '../component/TextInput';
import {useNavigation} from '@react-navigation/native';
import {PicturedHeading} from '../component/PicturedHeading';

const socialIcons = [
  {name: 'facebook', color: '#3b5998'},
  {name: 'twitter', color: '#1da1f2'},
  {name: 'google', color: '#db4437'},
];

const Login = (): React.JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const {navigate} = useNavigation<any>();

  return (
    <View style={styles.container}>
      <PicturedHeading />

      <Text style={styles.loginText}>Login to your account</Text>

      <View style={styles.socialIconsContainer}>
        {socialIcons.map(icon => (
          <TouchableOpacity style={styles.iconButton} key={icon.name}>
            <Icon name={icon.name} size={24} color={icon.color} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.orText}>or use your email account</Text>

      <TextInput
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        placeholder="Username"
      />
      <PasswordInput
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Password"
      />

      <View style={styles.rowContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={() => setRememberMe(!rememberMe)}
          />
          <Text>Remember me</Text>
        </View>
        <View style={styles.forgotUserORPassTextContainer}>
          <Text>Forgot</Text>
          <TouchableOpacity>
            <Text
              style={styles.forgotText}
              onPress={() => navigate('forgotUser')}>
              {' '}
              User
            </Text>
          </TouchableOpacity>
          <Text> Or</Text>
          <TouchableOpacity>
            <Text
              style={styles.forgotText}
              onPress={() => navigate('forgotPassword')}>
              {' '}
              Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button mode="contained" style={styles.loginButton} onPress={() => {}}>
        LOGIN
      </Button>

      <View style={styles.registerContainer}>
        <Text>Don&apos;t have an account?</Text>
        <TouchableOpacity onPress={() => navigate('register')}>
          <Text style={styles.registerText}> Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconButton: {
    marginHorizontal: 10,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'gray',
  },
  input: {
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotUserORPassTextContainer: {
    flex: 0.9,
    flexDirection: 'row',
  },
  forgotText: {
    color: '#4CAF50',
  },
  loginButton: {
    marginVertical: 20,
    borderRadius: 25,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#4CAF50',
  },
});
