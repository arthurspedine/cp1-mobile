import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { calcularNovoValor } from '../calcularNovoValor';

export default function MainScreen({ navigation }) {

  const [nomeProduto, setNomeProduto] = useState('')
  const [nomeProdutoErro, setNomeProdutoErro] = useState('')

  const [valorProduto, setValorProduto] = useState(0)
  const [valorProdutoErro, setValorProdutoErro] = useState('')

  const [porcentagemAumento, setPorcentagemAumento] = useState(0)
  const [porcentagemAumentoErro, setPorcentagemAumentoErro] = useState('')

  function handleSubmit() {
    let error = false
    if (nomeProduto === '' || nomeProduto.trim() === '') {
      error = true
      setNomeProdutoErro("O nome do produto não pode ser nulo.")
    } else setNomeProdutoErro('')
    if (valorProduto <= 0) {
      error = true
      setValorProdutoErro('O produto deve ter um valor maior que 0.')
    } else setValorProdutoErro('')
    if (porcentagemAumento <= 0) {
      error = true
      setPorcentagemAumentoErro('A porcentagem de aumento deve ser maior que 0.')
    } else setPorcentagemAumentoErro('')
    if (error)
      return
    const valorAumento = calcularNovoValor(valorProduto, porcentagemAumento)
    const valorFinal = Number(valorAumento) + Number(valorProduto)
    navigation.navigate('ResultScreen', { nomeProduto: nomeProduto, valorProduto: valorProduto, porcentagemAumento: porcentagemAumento, valorAumento: valorAumento, valorFinal: valorFinal })
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.titulo}>Formulário</Text>
        <Image source={require('../../assets/calculadora.png')} resizeMode="center" style={{ width: 128, height: 128 }} />
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Nome do Produto</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setNomeProduto}
            value={nomeProduto}
            placeholder="Digite o nome do produto"
          />
          {nomeProdutoErro && (
            <Text style={styles.errorMessage}>{nomeProdutoErro}</Text>
          )}
        </View>
        <View>
          <Text style={styles.label}>Valor do Produto</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setValorProduto}
            value={valorProduto}
            placeholder="Digite o valor do produto"
            keyboardType='numeric'
          />
          {valorProdutoErro && (
            <Text style={styles.errorMessage}>{valorProdutoErro}</Text>
          )}
        </View>
        <View>
          <Text style={styles.label}>Porcentagem de Aumento</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setPorcentagemAumento}
            value={porcentagemAumento}
            placeholder="Digite a porcentagem de aumento %"
            keyboardType='numeric'
          />
          {porcentagemAumentoErro && (
            <Text style={styles.errorMessage}>{porcentagemAumentoErro}</Text>
          )}
        </View>
        <Button onPress={handleSubmit} title='Calcular Aumento' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'cornsilk',
    paddingVertical: 48
  },
  titulo: {
    color: 'darkblue',
    fontSize: 48,
    fontWeight: '600',
    textAlign: 'center'
  },
  formContainer: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    gap: 12
  },
  label: {
    fontSize: 18
  },
  textInput: {
    fontSize: 16,
    borderColor: 'skyblue',
    borderRadius: 10,
    height: 44,
    marginVertical: 4,
    borderWidth: 1,
    padding: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
  }
});
