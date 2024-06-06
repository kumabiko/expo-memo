import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/components/Hello";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>😀Open up App.tsx to start working on your app!</Text>
      <Hello style={{ fontSize: 16 }} bang>
        world
      </Hello>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
