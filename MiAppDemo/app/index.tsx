import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <Text style={styles.counter}>Veces presionado: {pressCount}</Text>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => setPressCount((n) => n + 1)}>
          <Text style={styles.buttonText}>Presióname</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Nombre:Cruz Nuñez Josue Emanuel</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#9cc97f',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 20,
  },
  counter: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1a1a1a',
  },
  button: {
    backgroundColor: '#122B1D',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#537E72',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f5faf7',
  },
});
