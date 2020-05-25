import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, Tipo, IconView, TipoText, ValorText, } from './styled';

export default function HistoricoList({ data, deleteItem }) {
    return (
        <TouchableWithoutFeedback onLongPress={ () => deleteItem(data)}>
            <Container>
                <Tipo>
                    <IconView tipo={data.tipo}>
                        <Icon
                            name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            color='#fff'
                            size={20} />
                        <TipoText>{data.tipo}</TipoText>
                    </IconView>
                </Tipo>

                <ValorText>
                    {`R$ ${data.valor.toFixed(2)}`}
                </ValorText>

                <TipoText style={{ color: '#333', marginBottom: 2 }}>{data.data}</TipoText>

            </Container>
        </TouchableWithoutFeedback>
    );
}