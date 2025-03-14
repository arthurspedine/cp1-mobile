import { StyleSheet, Text, View } from 'react-native';

export default function ResultScreen({ route }) {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado do Produto: {route.params?.nomeProduto}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.texto}>Valor Original: R${route.params?.valorProduto}</Text>
        <Text style={styles.texto}>Porcentagem de Aumento: {route.params?.porcentagemAumento}%</Text>
        <Text style={styles.texto}>Valor Adicional: R${route.params?.valorAumento}</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 24, textDecorationLine: 'underline', color: 'white' }}>Valor Final: R${route.params?.valorFinal}</Text>
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
    backgroundColor: 'honeydew',
  },
  titulo: {
    color: 'dodgerblue',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center'
  },
  infoContainer: {
    borderColor: 'black',
    backgroundColor: 'dimgray',
    borderWidth: 1,
    padding: 12,
    width: '100%',
    borderRadius: 12
  },
  texto: {
    fontSize: 20,
    color: 'white'
  },
});
