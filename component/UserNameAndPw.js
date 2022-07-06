import { StyleSheet, Text, View, Button } from 'react-native'
import React ,{useState}from 'react'
import { TextInput } from 'react-native-web';

const UserNameAndPw = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPw, setUserPw] = useState('');

  return (
    <View style = {{flex : 1, marginTop : 20, alignItems : 'center'}}>
      <TextInput
        value = {userEmail}
        onChangeText = {(userEmail) => {setUserEmail(userEmail)}}
        style = {styles.textinput}
        placeholder = 'Email'/>
        

      <TextInput
        value = {userPw}
        onChangeText = {(userPw) => {setUserPw(userPw)}}
        style = {styles.textinput}
        placeholder = 'Password'/>

      <Button
        onPress={() => alert(userEmail + '\n' + userPw)}
        title='Submit'
        color="blue"
        />
    </View>
  )
}

export default UserNameAndPw

const styles = StyleSheet.create({
    textinput : {
        width : 300,
        height : 45,
        padding : 10,
        marginTop : 20,
        marginBottom : 10,
        backgroundColor : '#e8e8e8'
    }
})