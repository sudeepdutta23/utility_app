import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

export type OptionsType = {
  label: string;
  value: string;
};

interface RadioType {
  options: Array<OptionsType>;
  orientation?: string;
}

const RadioComponent = ({options, orientation = 'horizontal'}: RadioType) => {
  const [checked, setChecked] = useState('option1');

  return (
    <View>
      <RadioButton.Group
        onValueChange={value => setChecked(value)}
        value={checked}>
        <View
          style={
            orientation === 'horizontal' ? styles.radioRow : styles.radioColumn
          }>
          {options.map((option: OptionsType) => {
            return (
              <View style={styles.optionContainer} key={option.label}>
                <RadioButton value={option.value} />
                <Text>{option.label}</Text>
              </View>
            );
          })}
        </View>
      </RadioButton.Group>
    </View>
  );
};
const styles = StyleSheet.create({
  radioRow: {
    flexDirection: 'row', // Align items horizontally
    marginTop: 10,
  },
  radioColumn: {
    flexDirection: 'column', // Align items horizontally
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  selectedText: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default RadioComponent;
