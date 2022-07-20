import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const Seperator = () => <View style={styles.seperator} />;

const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Title}>
          The title and onPress Handler are require. it is recommended to set
          accessibilityLabel to help make your app usable by everyone
        </Text>
        <Button
          title="Press Me"
          onPress={() => alert("Simple Button Pressed")}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.Title}>
          The title and onPress Handler are require. it is recommended to set
          accessibilityLabel to help make your app usable by everyone
        </Text>
        <Button
          color="#7a42f4"
          title="Press Me"
          onPress={() => alert("Simple Button Pressed")}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.Title}>
          The title and onPress Handler are require. it is recommended to set
          accessibilityLabel to help make your app usable by everyone
        </Text>
        <Button
          disabled
          title="Press Me"
          onPress={() => alert("Simple Button Pressed")}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.Title}>
          The title and onPress Handler are require. it is recommended to set
          accessibilityLabel to help make your app usable by everyone
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left Button"
            onPress={() => alert("Left Button Pressed")}
          />
          <Button
            title="Right Button"
            onPress={() => alert("Right Button Pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  Title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
