import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const simpleAlertHandler = () => {
        alert('Hello I am Simple Alert From JavaScript')
    }
    const TwoOptionAlertHandler = () => {
        //Alert From ReactNative
        Alert.Alert(
            //title
            'Hello',
            //Body
            'I am Two Option Alert From Reactnative',
            [
                {
                    text:'Yes',
                    onPress:()=> alert('Yes Pressed')
                },
                {
                    text:'No',
                    onPress:()=> alert('No Pressed'),
                    style:'cancel'
                }
               
            ]
        );
    }

  return (
    <View style={styles.container}>
      <Button
      title='Simple Alert'
      onPress={simpleAlertHandler}
      />
      <Button
      title='Two Option Alert Handler'
      onPress={TwoOptionAlertHandler}
      />
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ecf0f1',
    }
});