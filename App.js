import { StyleSheet, Text, View, Button } from 'react-native';
import TouchablePractice from './component/TouchablePractice';

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
      {/* <Touchable_Example/> */}
      <TouchablePractice/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

