import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
 import Cafe from './component/Cafe';
 import Logo from './component/Logo';


export default function App() {
  const showData = () => {
    alert("Hello button")
  }

  return (
    <View>
      <Logo/>
      <Button
        onPress={showData}
        title='click ME'
        color="violet"
        />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
