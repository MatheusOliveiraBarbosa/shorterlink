import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const ActionContainer = styled.TouchableOpacity`
    width: 15%;
    background-color: #FF5555;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    margin: 7px 10px;
`;

export const ContainerButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.21);
    margin: 7px 15px;
    padding: 12px;
    border-radius: 7px;
`;

export const Link = styled.Text`
    color: #FFF;
    padding-left: 10px;
    padding-right: 20px;
    font-size: 18px;
`;