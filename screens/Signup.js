import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const API_URL = 'http://192.168.55.102:5000';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const onLoggedIn = (token) => {
    fetch(`${API_URL}/private`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitHandler = (navigate) => {
    const payload = {
      email,
      password,
    };
    fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);
            setIsError(false);
            setMessage(jsonRes.message);
            navigate('Welcome');
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

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

      {/* SignUp */}
      <View style={{ borderWidth: 1, borderColor: '#DEDEDE', width: '100%', justifyContent: 'center', padding: 50 }}>
        <Text style={styles.label}>Email address</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={email}
            placeholder="Enter email address"
            placeholderTextColor="#DEDEDE"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor="#DEDEDE"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
        <Text style={{ padding: 2, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#6DE1A7', marginTop: 20 }}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={{ padding: 20, width: '100%', backgroundColor: '#F5F5F5' }}>
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
          onPress={onSubmitHandler}
        >
          Register
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
  message: {
    fontSize: 16,
    marginVertical: '1%',
  },
});
