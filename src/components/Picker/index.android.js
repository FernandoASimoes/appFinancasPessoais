import React from 'react';
import RNPickerSlect from 'react-native-picker-select';

import { PickerView } from './styled';

export default function Picker({ onChange }){
    return(
        <PickerView>
            <RNPickerSlect
            style={{
                inputIOS:{
                    height: 50,
                    padding: 5,
                    backgroundColor: '#fff',
                    fontSize: 16
                }
            }}
            placeholder={{
                label: 'Selecione o tipo',
                color: '#333',
                value: null,
            }}
            onValueChange={ (tipo) => onChange(tipo)}
            items={[
                {label: 'Receita', value: 'receita', color: '#333'},
                {label: 'Despesa', value: 'despesa', color: '#333'},
            ]}
            />
        </PickerView>
    )
}