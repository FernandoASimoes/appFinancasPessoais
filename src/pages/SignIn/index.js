import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';


import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './style';

export default function SignIn() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin(){
    signIn(email,password);
  }

 return (
   <Background>
       <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
       >
         <Logo
         source={require('../../assets/Logo.png')}
         />

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

         <SubmitButton onPress={handleLogin}>
           {loadingAuth ? (
             <ActivityIndicator size={20} color="#fff" />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
           }
           
         </SubmitButton>

         <Link onPress={ () => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
         </Link>

       </Container>
   </Background>
  );
}