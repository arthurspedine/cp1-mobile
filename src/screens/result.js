import { StyleSheet, Text, View } from 'react-native';

export default function ResultScreen({ route }) {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado do Produto: {route.params?.nomeProduto}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.texto}>Valor Original: R${route.params?.valorProduto}</Text>
        <Text style={styles.texto}>Porcentagem de Aumento: {route.params?.porcentagemAumento}%</Text>
        <Text style={styles.texto}>Valor Adicional: R${route.params?.valorAumento}</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 16, textDecorationLine: 'underline' }}>Valor Final: R${route.params?.valorFinal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 18,
    backgroundColor: 'cornsilk'
  },
  titulo: {
    color: 'darkblue',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center'
  },
  infoContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 12,
    width: '100%',
    borderRadius: 12
  },
  texto: {
    fontSize: 18
  },
});
