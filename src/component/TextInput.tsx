import React from 'react';
import {
  TextInput as CusTextInput,
  View,
  StyleSheet,
  TextInputProps,
} from 'react-native';

const TextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <CusTextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
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
});

export default TextInput;
