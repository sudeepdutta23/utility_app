import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export const RegisterSuccess = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Icon
            name="check-circle"
            size={100}
            color="green"
            style={styles.icon}
          />
          <Text style={styles.successText}>Registration Successful!</Text>
          <Text style={styles.subText}>
            Welcome to the app. You can now log in and explore.
          </Text>
          <Button
            mode="contained"
            onPress={() => navigate('login')}
            style={styles.button}>
            Go to Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});
