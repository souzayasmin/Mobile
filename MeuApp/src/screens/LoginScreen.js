import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  async function handleLogin() {
    await api.postLogin(user).then(
      (response) => {
        Alert.alert("OK", response.data.message);
        navigation.navigate("Home"); // Redireciona para a tela Home após login
      },
      (error) => {
        console.log(error);
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Login</Text>
      <TextInput
        placeholder="E-mail"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          value={user.password}
          secureTextEntry={user.showPassword} // Corrigido aqui
          onChangeText={(value) => {
            setUser({ ...user, password: value });
          }}
          style={styles.passwordInput}
        />
        <TouchableOpacity
          onPress={() => setUser({ ...user, showPassword: !user.showPassword })}
        >
          <Ionicons
            name={user.showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#492CFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "30%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
    borderBottomWidth: 1,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
});
