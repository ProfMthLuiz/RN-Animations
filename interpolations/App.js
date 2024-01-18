import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // Inicializa um valor animado para a largura e altura
  const largAnimated = new Animated.Value(0);

  useEffect(() => {
    // Sequência de animações para a primeira animação
    Animated.timing(largAnimated, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: true, // Adicione isso para melhor desempenho
    }).start();
  }, [largAnimated]);

  let porcAnimated = largAnimated.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      {/* Componente animado com base nos valores animados */}
      <Animated.View
        style={{
          width: porcAnimated,
          height: 25,
          backgroundColor: "#000",
        }}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
