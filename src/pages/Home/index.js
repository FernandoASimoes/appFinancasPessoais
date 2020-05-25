import React, { useContext, useState, useEffect } from 'react';
import { Alert, TouchableOpacity, Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection';
import { format, isPast } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/DatePicker';

import { Background, Container, Nome, Saldo, Title, List, Area } from './styled';

export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const [newDate, setNewDate] = useState(new Date())
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico')
        .child(uid)
        .orderByChild('date').equalTo(format(newDate, 'dd/MM/yy'))
        .limitToLast(10)
        .on('value', (snapshot) => {
          setHistorico([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              data: childItem.val().date
            };
            setHistorico(oldArray => [...oldArray, list].reverse());

          })

        })

    }
    loadList();

  }, [newDate]);


  function handleDelete(data) {
    if (isPast(new Date(data.date))) {
      //Se a data do registro já passou vai cair aqui
      alert('Você não pode excluir um registro antigo!')
      return;
    }

    Alert.alert(
      `Atenção`,
      `Você deseja excluir a ${data.tipo} R$ ${data.valor.toFixed(2)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Deletar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historico')
      .child(uid).child(data.key).remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);

        await firebase.database().ref('users').child(uid)
          .child('saldo').set(saldoAtual);
      })
      .catch((error) => {
        alert('Item não deletado!')
      });

  }

  function handleShowPicker(){
    setShow(true);
    console.log('está :', show)
  }

  function handleClose(){
    setShow(false);
  }

  function onChange(date){
    setShow(Platform.OS === 'ios');
    setNewDate(date);
    console.log(date);
  }

  return (
    <Background>

      <Header />

      <Container>

        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1. ')}</Saldo>

      </Container>

      <Area>
      
        <Title>Ultimas movimentações</Title>

        <TouchableOpacity onPress={handleShowPicker}>
        <Icon
        name="event"
        size={30}
        color="#fff"
        style={{ marginRight: 15, marginTop: 15 }}
        />
      </TouchableOpacity>

      </Area>
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoList data={item} deleteItem={handleDelete} />)}
      />

      {show && (
        <DatePicker
        onClose={handleClose}
        date={newDate}
        onChange={onChange}
        />
      )}

    </Background>
  );
}