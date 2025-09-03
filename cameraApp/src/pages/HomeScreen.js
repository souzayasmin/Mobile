import React, { useState } from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../axios/axios";

const HomeScreen = () => {
  const [ledState, setLedState] = useState({ value: "false" });

  const navigation = useNavigation();

  const handleCam = () => {
    navigation.navigate("Cam");
  };

  async function ledToggle() {
    try {
      // Faz a requisição para a api
      const response = await api.toggleLed({ value: `${!ledState.value}` });
      setLedState({value:!ledState.value});
      console.log("Resposta:", response);
    } catch (error) {
        console.log("Error:" , error.response.data);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Button title="Abrir Câmera" onPress={handleCam} color="green" />
      </View>
      <Button
        title={ledState.value ? "Desligar LED" : "Ligar LED"}
        onPress={ledToggle}
        color={ledState.value ? "red" : "green"}
      />
    </View>
  );
};

export default HomeScreen;
