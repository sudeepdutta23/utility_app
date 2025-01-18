import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PasswordInputType {
  value: string;
  onChangeText: ((text: string) => void) | undefined;
  placeholder: string;
}

const PasswordInput = ({
  value,
  onChangeText,
  placeholder,
}: PasswordInputType) => {
  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => setSecureText(!secureText);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureText}
      />
      <TouchableOpacity onPress={toggleSecureText} style={styles.icon}>
        <Icon name={secureText ? 'eye-slash' : 'eye'} size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  icon: {
    padding: 10,
  },
});

export default PasswordInput;
