import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/pages/HomeScreen";
import Cam from "./src/pages/camera";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cam" component={Cam} options={{ title: "FOTO" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
