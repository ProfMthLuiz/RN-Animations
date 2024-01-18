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
  const largAnimated = new Animated.Value(150);
  const opacityAnimated = new Animated.Value(0);

  const dispararAnimation = () => {
    Animated.sequence([
      Animated.timing(largAnimated, {
        toValue: 300,
        duration: 500,
      }),
      Animated.timing(opacityAnimated, {
        toValue: 1,
        duration: 500,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 80,
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={{ width: 200 }} onPress={dispararAnimation}>
          <Text
            style={{
              fontSize: 18,
              color: "#FFF",
              borderColor: "#FFF",
              borderWidth: 1,
              padding: 10,
              borderRadius: 15,
              textAlign: "center",
            }}
          >
            Disparar Animação
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* Componente animado com base nos valores animados */}
        <Animated.View
          style={{
            width: largAnimated,
            height: 300,
            backgroundColor: "#000",
            opacity: opacityAnimated,
          }}
        ></Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
