import { StyleSheet, View, TextInput , Button } from "react-native";
import React, { useState } from "react";

const UNP = () => {
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    
const checkTextInput= () => {
    if (!Name.trim()) {
        alert('Please Enter Name');
        return;
    }
    if (!Email.trim()) {
        alert('Please Enter Email');
        return;
    }
        alert('Success');
        return;
    }

  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
        value={Name}
        onChangeText = {(Name)=>{setName(Name)}}
        style={styles.textInput}
        placeholder='Enter Name'
      />
      <TextInput 
        value={Email}
        onChangeText = {(Email)=>{setEmail(Email)}}
        style={styles.textInput}
        placeholder='Enter Email'
      />
        <Button 
        color= '#978465'
        title = 'SUBMIT'
        onPress={ checkTextInput}
        />
        
    </View>
  )
}

export default UNP;

const styles = StyleSheet.create({
  container: {
    textInput  :{
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        borderWidth:3,
        borderColor: '#498',
        backgroundColor:'#1235'
        }
  },
});