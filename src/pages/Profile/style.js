import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #333;
    align-items: center;
`;

export const Nome = styled.Text`
    text-align: center;
    font-size: 28;
    margin-top: 25;
    margin-bottom: 25;
    color: #fff
`;

export const NewLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #026431;
    width: 90%;
    height: 45;
    border-radius: 10;
    margin-bottom: 15;
`;

export const NewText = styled.Text`
    font-size: 18;
    font-weight: bold;
    color: #fff;
`;

export const Logout = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #c62c36;
width: 90%;
height: 45;
border-radius: 10;
margin-bottom: 15;
`;

export const LogoutText = styled.Text`
font-size: 18;
font-weight: bold;
color: #fff;
`;