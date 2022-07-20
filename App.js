import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import User from './component/User';
import Logo from './component/Logo'
import LotsOfGreeting from './component/LotsOfGreeting';
import MyCustomTextWith from './component/MyCustomTextWith';
import Count from './component/Count';
import InputText from './component/InputText';
import UserNameAndPw from './component/UserNameAndPw';
import UNP from './component/UNP'

export default function App() {
  return (
    <View style = {styles.container}>
      {/* <Logo/>
      <User/> */}
      {/* <LotsOfGreeting/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNameAndPw/> */}
      <UNP/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    textInputStyle: {
      width: '100%',
      height: 40,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      marginTop: 15,
    },
});

