import { useNavigation } from '@react-navigation/native';
import React, { useContext, useReducer, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button, Checkbox, TextInput, IconButton, MD3Colors } from 'react-native-paper';
import Svg, { Path } from 'react-native-svg';
import { LoginContextProvider } from '../context/login/LoginContext';

const Wave = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/pexels-photo-807598.jpeg")}
                style={styles.image}
            />
            <View style={styles.wavesContainer}>
                <Svg width="100%" height="100">
                    <Path d="M0,25 Q100,90 200,25 T450,25 L450,100 L0,100 Z" fill="white" />
                </Svg>
            </View>
        </View>
    );
};

const RoundIcon = ({ navigate }: any) =>(<IconButton
    icon="chevron-left"
    mode='contained'
    style={styles.roundIcon}
    iconColor={MD3Colors.primary20}
    size={40}
    onPress={() => navigate("welcome")}
  />)

const Login = (): React.JSX.Element => {
    const { navigate } = useNavigation<any>();

    const { dispatch }: any = useContext(LoginContextProvider);
    
    const [showPassword, setShowPassword] = useState(true);

    const handleLogin = () =>{
        dispatch({ type: "setLogin" })
        navigate("dashboard")
    }

    return (
        <View style={styles.mainContainer}>
            <Wave />
            <RoundIcon navigate={navigate} />
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.loginText}>Login to your account</Text>
            <View style={styles.space} />
            <TextInput placeholder="Full Name" mode='outlined' style={styles.textInput} left={<TextInput.Icon icon='human' />} />
            <TextInput placeholder="Password" mode='outlined' style={styles.textInput} secureTextEntry={showPassword} left={<TextInput.Icon icon='lock' />} right={<TextInput.Icon onPress={() => setShowPassword(!showPassword)} icon={showPassword ? `eye` : `eye-off`} />} />
            <View style={styles.textBottomContainer}>
                <View style={{ flexDirection: "row" }}>
                <Checkbox status='unchecked' />
                <Text style={styles.remembermeTxt}>Remember me</Text>
                </View>
                <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </View>
            <View style={styles.space} />
            <Button style={styles.btn} mode="contained" onPress={handleLogin}> Login </Button>
            <View style={styles.btmContainer}>
                <Text style={styles.remembermeTxt}>Don't have account? </Text><Text onPress={()=>navigate("register")} style={styles.signupText}>Sign up</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        position: "absolute",
        height: "100%"
    },
    container: {
        backgroundColor: '#fff',
    },
    image: {
        width: 420,
        height: 200,
    },
    wavesContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    welcomeText: {
        textAlign: "center",
        color: "green",
        fontSize: 30,
        fontWeight: "900",
        marginTop: 20
    },
    loginText: {
        textAlign: "center",
        color: "darkgreen",
    },
    textInput: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    space: {
        marginTop: 80
    },
    remembermeTxt: {
        color: "green",
        marginTop: 7
    },
    forgotPassText: {
        color: "darkgreen",
        fontWeight: "900"
    },
    textBottomContainer: { flex: 1, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 },
    btn: {
        bottom: 80,
        marginHorizontal: 20,
        borderRadius: 20
    },
    btmContainer: {
        justifyContent: "center",
        flexDirection: "row",
        bottom: 70,
        alignItems: "center"
    },
    btmText: {
        color: "green",
    },
    signupText: {
        color: "darkgreen",
        fontWeight: "900"
    },
    roundIcon: {
        position: "relative",
        top:-180,
        left: 10,
        zIndex: 1
    }
});
