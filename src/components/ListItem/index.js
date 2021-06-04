import React from 'react';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Container, ContainerButton, Link, ActionContainer } from './styles';

export default function ListItem({ data, selectedItem, deleteItem }) {

  function RightActions() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather
          name='trash'
          color='#FFF'
          size={24}
        />
      </ActionContainer>
    );
  }

  return(
    <Container>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton 
          activeOpacity={0.9} onPress={ ()=> selectedItem(data) }>
          <Feather
            name='link'
            size={24}
            color='#FFF' />

          <Link numberOfLines={1}>{data.long_url}</Link>

        </ContainerButton>
      </Swipeable>

    </Container>
  );
}