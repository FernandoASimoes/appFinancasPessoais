import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';


import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/style';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password,nome)
  }

 return (
   <Background>
       <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
       >

        <AreaInput>
          <Input
          placeholder='Nome'
          autoCorrect={false}
          autoCapitaLize='none'
          value={nome}
          onChangeText={ (texto) => setNome(texto) }
          />
         </AreaInput>

         <AreaInput>
          <Input
          placeholder='Email'
          autoCorrect={false}
          autoCapitaLize='none'
          value={email}
          onChangeText={ (texto) => setEmail(texto) }
          />
         </AreaInput>

         <AreaInput>
          <Input
          placeholder='Senha'
          autoCorrect={false}
          autoCapitaLize='none'
          value={password}
          onChangeText={ (texto) => setPassword(texto)}
          secureTextEntry={true}
          />
         </AreaInput>

         <SubmitButton onPress={handleSignUp}>
         {loadingAuth ? (
             <ActivityIndicator size={20} color="#fff" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
           }
           
         </SubmitButton>

       </Container>
   </Background>
  );
}