import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, Button } from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`;

const Quadrado = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px;
  border-style: dashed;
  border-radius: 1px;
  border-width: 4px;
  border-color: red;
  margin-top: 30px;
`;

const Hello = ( )=> {
  
  const [ name, setName ] = useState ('Alexandre');
  const [ mostrar, setMostrar ] = useState(false);

  const handleClick = ()=> {
      setMostrar(!mostrar);
  }

  return (
    <View>
      
      <Input value = {name} onChangeText= {t=>setName(t)}/>
      
      <Button title = {mostrar ? "Ocultar Nome" : "Mostrar Nome"} onPress={handleClick}/>

      {mostrar && 
      <Quadrado>
        <Text>Seu nome é: </Text>
        <Text>{name}</Text>
      </Quadrado>
    }
    
    </View>

  );
}

export default ()=> {
  return (
    <Page>
      <Hello />
    </Page>
  );
}