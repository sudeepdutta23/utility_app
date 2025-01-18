import React, {useState} from 'react';
import TextInput from '../../component/TextInput';
import RadioComponent from '../../component/RadioComponent';
import type {OptionsType} from '../../component/RadioComponent';
import {View} from 'react-native';

export const StepOne = () => {
  const [address, setAddress] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const accountType: Array<OptionsType> = [
    {label: 'Owner', value: '1'},
    {label: 'Tenant', value: '2'},
  ];
  return (
    <View>
      <RadioComponent options={accountType} />
      <TextInput
        value={address}
        onChangeText={(text: string) => setAddress(text)}
        placeholder="Address"
      />
      <TextInput
        value={zipCode}
        onChangeText={(text: string) => setZipCode(text)}
        placeholder="Zip Code"
      />
    </View>
  );
};
