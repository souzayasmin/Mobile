import react from "react";
import { View, Button } from "react-native";
import { UseNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = UseNavigation();

  const handleCam = () => {
    navigation.navigate("Cam");
  };

  return (
    <View style={{ flex, justifyContent: "center", alignItems: "center" }}>
      <Button title="Abrir Câmera" onPress={handleCam} color="blue" />
    </View>
  );
};

export default HomeScreen;
