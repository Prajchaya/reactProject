import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function App() {
  const showData = () => {
    alert("Hello button")
  }
  return (
    <View style={styles.container}>
      <View style={styles.container} >
      <Text>Button Example</Text>
      <Button
        onPress={showData}
        title='click ME'
        color="magenta"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  }
});

