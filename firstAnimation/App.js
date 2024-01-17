import React, { useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export default function App() {
  // Inicializa um valor animado para a largura e altura
  const largAnimated = new Animated.Value(150);
  const altAnimated = new Animated.Value(50);

  useEffect(() => {
    // Efeito para a animação da largura
    Animated.timing(largAnimated, {
      toValue: 300, // Valor final da largura após a animação
      duration: 3000, // Duração da animação em milissegundos
      useNativeDriver: true, // Adiciona isso para melhor desempenho
    }).start(); // Inicia a animação
  }, [largAnimated]); // Executa o efeito quando largAnimated muda

  useEffect(() => {
    // Efeito para a animação da altura
    Animated.timing(altAnimated, {
      toValue: 300, // Valor final da altura após a animação
      duration: 3000, // Duração da animação em milissegundos
      useNativeDriver: true, // Adiciona isso para melhor desempenho
    }).start(); // Inicia a animação
  }, [altAnimated]); // Executa o efeito quando altAnimated muda

  return (
    <View style={styles.container}>
      {/* Componente animado com base nos valores animados */}
      <Animated.View
        style={{
          width: largAnimated,
          height: altAnimated,
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
