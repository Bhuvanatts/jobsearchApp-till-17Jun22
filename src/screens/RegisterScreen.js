import React, { useState,useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { mobilenumberValidator } from '../helpers/mobileValidator'
import { firebase,db } from '../config'
import auth from '@react-native-firebase/auth';


// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app()
// }


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [phonenum, setPhonenum] = useState({ value: '', error: '' })


  const onSignUpPressed = (email, password,name,phonenum) => {
    const nameError = nameValidator(name)
    const emailError = emailValidator(email)
    const passwordError = passwordValidator(password)
    const phonenumError = mobilenumberValidator(phonenum)
    if (emailError || passwordError || nameError || phonenumError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setPhonenum({ ...phonenum, error: phonenumError })

    }
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user)
      alert('Registered Succesfully');

      db.collection("users").doc(user.email).set({
        owner_uid: user.uid,
        username: name,
        email: email,
        phone:phonenum
      });

      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      })
    })
    .catch(error => alert(error.message))



  }

  

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ ...name,value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ ...email,value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ ...password,value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Mobile Number"
        returnKeyType="done"
        value={phonenum.value}
        onChangeText={(text) => setPhonenum({ ...phonenum,value: text, error: '' })}
        error={!!phonenum.error}
        errorText={phonenum.error}
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        onPress={()=>{onSignUpPressed(email.value,password.value,name.value,phonenum.value)}}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
