import React, { useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export default function App() {
  // Inicializa um valor animado para a largura e altura
  const largAnimated = new Animated.Value(150);

  useEffect(() => {
    // Efeito para a animação da largura

    Animated.loop(
      Animated.sequence([
        Animated.timing(largAnimated, {
          toValue: 300,
          duration: 500,
        }),
        Animated.timing(largAnimated, {
          toValue: 150,
          duration: 500,
        }),
      ])
    ).start();
  }, [largAnimated]);

  return (
    <View style={styles.container}>
      {/* Componente animado com base nos valores animados */}
      <Animated.View
        style={{
          width: largAnimated,
          height: 300,
          backgroundColor: "#000",
        }}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
