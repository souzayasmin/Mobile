import Cadastro from "./screens/Cadastro";
import Login from "./screens/Cadastro";
import { NavigationConteiner } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationConteiner>
      <Stack.Navigator>
        <Stack.Screen />
      </Stack.Navigator>
    </NavigationConteiner>
  );
}
