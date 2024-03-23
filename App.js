import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './components/Input';
import AnimatedButton from './components/AnimatedButton';

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <StatusBar />
      <View style={styles.form}>
        <View style={styles.inputsContainer}>
          <Input id="name" form={form} setForm={setForm} />
          <Input id="email" form={form} setForm={setForm} />
        </View>
        <AnimatedButton
          title='Submit'
          onPress={() => { console.dir(form) }}
          style={styles.button}
          disabled={form.name === "" || form.email === ""}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  inputsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  }
});
