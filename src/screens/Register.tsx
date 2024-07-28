import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Checkbox, TextInput } from 'react-native-paper'

const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const { navigate } = useNavigation<any>();
  return (
    <View>
      <Text style={styles.registerText}>Register</Text>
            <Text style={styles.newAccText}>Create your new account</Text>
            <View style={styles.space} />
            <TextInput placeholder="Full Name" mode='outlined' style={styles.textInput} left={<TextInput.Icon icon='lock' />} />
            <TextInput placeholder="Email" mode='outlined' style={styles.textInput} left={<TextInput.Icon icon='email' />} />
            <TextInput placeholder="Password" mode='outlined' style={styles.textInput} secureTextEntry={showPassword} left={<TextInput.Icon icon='lock' />} right={<TextInput.Icon onPress={() => setShowPassword(!showPassword)} icon={showPassword ? `eye` : `eye-off`} />} />
            <View style={styles.textBottomContainer}>
                <View style={{ flexDirection: "row" }}>
                <Checkbox status='unchecked' />
                <Text style={styles.remembermeTxt}>Remember me</Text>
                </View>
                <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </View>
            <View style={styles.space} />
            <Button style={styles.btn} mode="contained" onPress={() => console.log("Press me")}> Login </Button>
            <View style={styles.btmContainer}>
                <Text style={styles.remembermeTxt}>Don't have account? </Text><Text onPress={()=>navigate("login")} style={styles.signupText}>Sign in</Text>
            </View>
    </View>
  )
}

export default Register
const styles = StyleSheet.create({
    registerText: {
        textAlign: "center",
        color: "green",
        fontSize: 30,
        fontWeight: "900",
        marginTop: 20
    },
    newAccText: {
        textAlign: "center",
        color: "darkgreen",
    },
    space: {
        marginTop: 80
    },
    textInput: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    textBottomContainer: { flex: 1, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 },
    btn: {
        bottom: 80,
        marginHorizontal: 20,
        borderRadius: 20
    },
    remembermeTxt: {
        color: "green",
        marginTop: 7
    },
    forgotPassText: {
        color: "darkgreen",
        fontWeight: "900"
    },
    btmText: {
        color: "green",
    },
    signupText: {
        color: "darkgreen",
        fontWeight: "900"
    },
    btmContainer: {
        justifyContent: "center",
        flexDirection: "row",
        bottom: 70,
        alignItems: "center"
    },
})
