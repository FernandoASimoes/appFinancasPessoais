import styled from 'styled-components/native';


export const Background = styled.View`
    flex: 1;
    background-color: #333;
`;

export const Container = styled.View`
    margin-top: 25px;
    margin-left: 15;
    margin-bottom: 25;
`;

export const Nome = styled.Text`
    font-size: 18;
    font-style: italic;
    color: #fff;
`;

export const Saldo = styled.Text`
    margin-top: 5;
    font-size: 30;
    color: #fff;
    font-weight: bold;
`;

export const Title = styled.Text`
    margin-left: 15;
    margin-bottom: 10;
    color: #5ebb46;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
   padding-top: 15;
   background-color: #fff;
   border-top-left-radius: 15;
   border-top-right-radius: 15;
   margin-left: 8;
   margin-right: 8;
`;

export const Area = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;