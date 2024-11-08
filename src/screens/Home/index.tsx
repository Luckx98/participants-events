import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  const getDate = new Date().toLocaleDateString();
  return (
    <View style={styles.mainContent}>
      <Text style={styles.headerTitle}>Nome do evento </Text>
      <Text style={styles.headerSubtitle}>{getDate} </Text>

      <TextInput
        style={styles.input}
        placeholder="Informe o nome"
        placeholderTextColor="#686868"
      />
    </View>
  );
}
