import styled from 'styled-components/native';


export const Background = styled.View`
    flex: 1;
    background-color: #333;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#333'
})`
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255, 0.9);
    margin-top: 30px;
    font-size:18px
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #026431;
    border-radius: 10px
    
`;

export const SubmitText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;
