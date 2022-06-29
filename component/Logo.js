import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
    const textLogo = "Thai-Nichi";
    const isTH = true;
  return (
    <View>
      <Text style={styles.textLogo}>TNI</Text>
      <Text>{textLogo} </Text>
      {/* {
          isTH && <Text>ภาษาไทย</Text>
      } */}
      {/* use if / else or conditional operater */}

      {
          isTH
          ?(<Text>ภาษาไทย</Text>)
          :(<Text>ภาษาอังกฤษ</Text>)
      }
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    textLogo:{
        color:"red",
        fontSize:60
    }
})