import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import User from './component/User';
import Logo from './component/Logo'


export default function App() {
  return (
    <View>
      <Logo/>
      <User/>
    </View>
  );
}

