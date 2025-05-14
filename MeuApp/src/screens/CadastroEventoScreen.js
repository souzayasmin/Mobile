export default function CadastroEvento({ navigation }) {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador: "",
  });

  async function handleevento() {
    try {
      const response = await api.postEvento(evento);
      console.log(response.data.message);
      Alert.alert("OK", response.data.message);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", error.response?.data?.error || "Erro ao cadastrar");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Evento</Text>

      <TextInput
        placeholder="Nome do Evento"
        value={evento.nome}
        onChangeText={(value) => setEvento({ ...evento, nome: value })}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={evento.descricao}
        onChangeText={(value) => setEvento({ ...evento, descricao: value })}
        style={styles.input}
      />
      <DateTimePicker
        type={"datetime"}
        buttonTitle={
          evento.data_hora === ""
            ? "Selecione a data do Evento"
            : new Date(evento.data_hora).toLocaleString()
        }
        setValue={(date) =>
          setEvento({ ...evento, data_hora: date.toISOString() })
        }
        dateKey={"data_hora"}
      />

      <TextInput
        placeholder="Local"
        value={evento.local}
        onChangeText={(value) => setEvento({ ...evento, local: value })}
        style={styles.input}
      />

      <TextInput
        placeholder="ID do Organizador"
        value={evento.fk_id_organizador}
        onChangeText={(value) =>
          setEvento({ ...evento, fk_id_organizador: value })
        }
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleevento} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Evento</Text>
      </TouchableOpacity>
    </View>
  );
}
