import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DollarInput from './components/DollarInput';

export default function App() {
  return (
    <View style={styles.container}>
      <DollarInput
        defaultValue="Hello"/>
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
