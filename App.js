import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';


const Texto = styled.Text`
  color: #E0FFFF;
  fontSize: 30px;
  fontWeight: bold;
`;

const Container = styled.View`
  flex: 1
  justifyContent: center;
  alignItems: center;
  backgroundColor: #2F4F4F;
`;

const Input = styled.TextInput`
  backgroundColor: #eeeeee30;
  width: 90%;
  borderRadius: 5px;
  padding: 10px;
  fontSize: 16px;
  marginTop: 20px;
  marginBottom: 20px;
`;

const Clicar = styled.TouchableOpacity`
  backgroundColor: #E0FFFF;
  width: 150px;
  height: 40px;
  justifyContent: center;
  align-items: center;
  borderRadius: 70px;
`;

const TextButton = styled.Text`
  fontSize: 20px;
  color: #2F4F4F;
  fontWeight: bold;
`;

const Resultados = styled.View`
  backgroundColor: #eeeeee30;
  width: 90%;
  borderRadius: 5px;
  justifyContent: center;
  alignItems: center;
  marginTop: 20px;
  height: 40%
`;

const ItemResultado = styled.Text`
  fontSize: 25px;
  color: #eee;
  fontWeight: bold;
`;

const Item = styled.Text`
  fontSize: 20px;
  color: #eee;
  marginBottom: 20px;
`;

export default function App() {

  const [conta, setConta] = useState(0); //state para passar variáveis que serão usadas na lógica do projeto
  const [gorjeta, setGorjeta] = useState(0); 
  const [view, setView] = useState(false);

  const calcular = () => {
    const nConta = parseFloat(conta);  //parseFloat para transformar a string em number para o calc funcionar
    if (nConta) {
      setGorjeta((10/100) * nConta);
     } setView(true);
     // else {
    //   alert ("Por favor, digite o valor total da sua conta!");
    // }
  }  
  //o input salva as infos como string, por isso o PARSEFLOAT, para passar essas infos para number (float, geralmente num decimal)
  // nConta: nova variável usada para passar o parsefloat
  // if: se houver conta (nconta), faça o cálculo dos 10% (10/100 * nConta)

  return (
    <Container >
      <Texto>Calculadora de Gorjetas</Texto>
      <Input placeholder="Qual o total da sua conta?" 
      placeholderTextColor="#2F4F4F" 
      keyboardType="numeric" 
      color="white"
      value={conta}
      onChangeText={a => setConta(a)}
      />
      <Clicar  onPress={calcular}>
        <TextButton>
          Calcular
        </TextButton>
      </Clicar>
      {view && (
        <Resultados>
        <ItemResultado> Valor da sua conta:</ItemResultado> 
          <Item>R$ {conta}</Item>
        <ItemResultado> Valor da gorjeta:</ItemResultado>
          <Item>R$ {gorjeta.toFixed(2)} (10%)</Item>
        <ItemResultado> Valor total:</ItemResultado>
          <Item>R$ {(parseInt (conta) + gorjeta)}</Item>
       </Resultados>
      )
      }
      <StatusBar style="auto"/>
    </Container>
  );
}

//ItemResultado: especificar qual valor está sendo exibido
//Item: exibir o valor passado pelo usuario ni input, o valor da gorjeta e o valor da conta + gorjeta
//Resulatdos: view para portar todos os resultados dos cálculos


