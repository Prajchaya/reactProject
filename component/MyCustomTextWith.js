import { View, Text } from 'react-native'
import React from 'react'

const Friend = (props) => {
  return(
      <View style = {{alignItems : 'center'}}>
          <Text>Your First Name is {props.fname}! and Last name is {props.lname}</Text>
      </View>
  )
}

const MyCustomTextWith = () => {
  return (
    <View style = {{alignItems : 'center', justifyContent : 'center',flex : 1,}}>
      <Friend fname='fName1' lname = 'lname1'/>
      <Friend fname='fName2' lname = 'lname2' />
    </View>
  )
}

export default MyCustomTextWith