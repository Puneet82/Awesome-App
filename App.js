import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <Text> view 1</Text>
        <TextInput />
        <Button
          color="burlywood"
          title="Click me"
          onPress={() => Alert.alert("Button is pressed now")}
        />
        <StatusBar style="auto" />
      </View>

      <View style={{ flex: 2, backgroundColor: "red" }}>
        <Text> view 2</Text>
        <Button
          color="burlywood"
          title="Click me"
          onPress={() => Alert.alert("Button is pressed now")}
        />
        <StatusBar style="auto" />
      </View>

      <View style={{ flex: 3, backgroundColor: "red" }}>
        <Text> view 3</Text>
        <Button
          color="burlywood"
          title="Click me"
          onPress={() => Alert.alert("Button is pressed now")}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
