import React, { useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export default function App() {
  // Valores iniciais para as animações da sequência
  const largAnimatedSeq = new Animated.Value(50);
  const altAnimatedSeq = new Animated.Value(50);
  const opacityAnimatedSeq = new Animated.Value(0);

  // Valores iniciais para as animações do paralelismo
  const largAnimatedPar = new Animated.Value(50);
  const altAnimatedPar = new Animated.Value(50);
  const opacityAnimatedPar = new Animated.Value(0);

  // Valores iniciais para as animações da sequência dentro do paralelismo
  const largAnimatedParSeq = new Animated.Value(50);
  const altAnimatedParSeq = new Animated.Value(50);
  const opacityAnimatedParSeq = new Animated.Value(0);

  useEffect(() => {
    // Sequência de animações para a primeira animação
    Animated.sequence([
      Animated.timing(opacityAnimatedSeq, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true, // Adicione isso para melhor desempenho
      }),
      Animated.timing(largAnimatedSeq, {
        toValue: 200,
        duration: 3000,
        useNativeDriver: true, // Adicione isso para melhor desempenho
      }),
      Animated.timing(altAnimatedSeq, {
        toValue: 200,
        duration: 3000,
        useNativeDriver: true, // Adicione isso para melhor desempenho
      }),
    ]).start();

    // Paralelismo de animações para a segunda animação
    Animated.parallel([
      Animated.timing(largAnimatedPar, {
        toValue: 200,
        duration: 3000,
        useNativeDriver: true, // Adicione isso para melhor desempenho
      }),
      Animated.timing(altAnimatedPar, {
        toValue: 200,
        duration: 3000,
        useNativeDriver: true, // Adicione isso para melhor desempenho
      }),
      Animated.timing(opacityAnimatedPar, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true, // Adicione isso para melhor desempenho
      }),
    ]).start();
  }, [
    opacityAnimatedSeq,
    largAnimatedSeq,
    altAnimatedSeq,
    opacityAnimatedPar,
    largAnimatedPar,
    altAnimatedPar,
  ]);

  useEffect(() => {
    // Sequência de animações para a terceira animação dentro do paralelismo
    Animated.sequence([
      Animated.timing(opacityAnimatedParSeq, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true, // Adicione isso para melhor desempenho
      }),
      Animated.parallel([
        Animated.timing(largAnimatedParSeq, {
          toValue: 200,
          duration: 3000,
          useNativeDriver: true, // Adicione isso para melhor desempenho
        }),
        Animated.timing(altAnimatedParSeq, {
          toValue: 200,
          duration: 3000,
          useNativeDriver: true, // Adicione isso para melhor desempenho
        }),
      ]),
    ]).start();
  }, [opacityAnimatedParSeq, largAnimatedParSeq, altAnimatedParSeq]);

  return (
    <View style={styles.container}>
      {/* Componente animado com base nos valores animados da primeira sequência */}
      <Animated.View
        style={{
          width: largAnimatedSeq,
          height: altAnimatedSeq,
          backgroundColor: "yellow",
          margin: 5,
          opacity: opacityAnimatedSeq,
        }}
      ></Animated.View>

      {/* Componente animado com base nos valores animados do paralelismo */}
      <Animated.View
        style={{
          width: largAnimatedPar,
          height: altAnimatedPar,
          backgroundColor: "red",
          margin: 5,
          opacity: opacityAnimatedPar,
        }}
      ></Animated.View>

      {/* Componente animado com base nos valores animados da sequência dentro do paralelismo */}
      <Animated.View
        style={{
          width: largAnimatedParSeq,
          height: altAnimatedParSeq,
          backgroundColor: "green",
          margin: 5,
          opacity: opacityAnimatedParSeq,
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
