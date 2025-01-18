import React, {useState} from 'react';
import TextInput from '../../component/TextInput';
import {View} from 'react-native';

export const StepTwo = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  return (
    <View>
      <TextInput
        value={firstName}
        onChangeText={(text: string) => setFirstName(text)}
        placeholder="First Name"
      />
      <TextInput
        value={middleName}
        onChangeText={(text: string) => setMiddleName(text)}
        placeholder="Middle Name"
      />
      <TextInput
        value={lastName}
        onChangeText={(text: string) => setLastName(text)}
        placeholder="Last Name"
      />
      <TextInput
        value={phoneNumber}
        onChangeText={(text: string) => setPhoneNumber(text)}
        placeholder="Pnone Number"
      />
      <TextInput
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        placeholder="Email Address"
      />
    </View>
  );
};
