import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import User from './component/User';
import Logo from './component/Logo'
import LotsOfGreeting from './component/LotsOfGreeting';
import MyCustomTextWith from './component/MyCustomTextWith';
import Count from './component/Count';
import InputText from './component/InputText';
import UserNameAndPw from './component/UserNameAndPw';
import UserNamePassword from './component/UserNamePassword';
import AlertComponent from './component/AlertComponent'
import ImageWithTextInput from './component/ImageWithTextInput';
import buttonExample from './component/buttonExample';
import Touchable_Example from './component/Touchable_Example';

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
      {/* <UserNamePassword/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <buttonExample/> */}
      <Touchable_Example/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

