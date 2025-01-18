import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import {MD3Colors} from 'react-native-paper';
import {Button} from 'react-native-paper';

const Welcome = (): React.JSX.Element => {
  const {navigate} = useNavigation<any>();

  const someTexts = ['The best', 'app for', 'your plants'];
  return (
    <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/pexels-photo-807598.jpeg')}
                resizeMode="cover"
                style={styles.bgImage}
            >
                <View style={styles.align}>
                    <View style={styles.main}>
                        {someTexts.map(text=><Text key={text} style={styles.mainText}>{text}</Text>)}
            ))}
          </View>
                    <View>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => navigate('login')}>
              {' '}
              Sign In{' '}
            </Button>
            <Text
              onPress={() => navigate('register')}
              style={styles.createAccText}>
              Create an account
            </Text>
          </View>
                </View>
            </ImageBackground>
    </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
        flex: 1,
    },
  bgImage: {
        flex: 1,
        // justifyContent: 'center',
        padding: 25,
    },
    mainText: {
        textAlign: 'left',
        fontSize: 50,
        fontWeight: '900',
        // marginTop: 50
    },
    main: {
        marginTop: 30,
    },
    btn: {
        height: 50,
    borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    createAccText: {
    textAlign: 'center',
    margin: 10,
        fontWeight: '900'
  },
    align: { flex: 0.8, flexDirection: 'column', justifyContent: 'space-between' },
})
