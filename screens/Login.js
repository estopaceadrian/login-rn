import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* brand */}

      <View
        style={{
          height: 150,
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.justLend}>JustLend</Text>
        <Text style={styles.period}>.</Text>
      </View>

      {/* login */}

      <View style={{ borderWidth: 1, borderColor: '#DEDEDE', width: '100%', justifyContent: 'center', padding: 50 }}>
        <Text style={styles.label}>Email address</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter email address"
            placeholderTextColor="#DEDEDE"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your password"
            placeholderTextColor="#DEDEDE"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Text style={{ color: '#6DE1A7' }}>Forgotten password?</Text>
      </View>
      <View style={{ padding: 20, width: '100%', backgroundColor: '#DEDEDE' }}>
        <Text
          style={{
            color: 'white',
            padding: 10,
            width: 120,
            textAlign: 'center',
            margin: 5,
            backgroundColor: '#6DE1A7',
            marginLeft: 30,
          }}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  justLend: {
    height: 100,
    fontSize: 56,
    fontWeight: '900',
  },
  period: {
    height: 150,
    fontSize: 56,
    fontWeight: '900',
    color: '#6DE1A7',
  },
  inputView: {
    width: '70%',
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 90,
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    marginTop: 5,
  },
});
