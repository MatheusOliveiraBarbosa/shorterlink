import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import { Container, Title, ListLinks,
  ContainerEmpty, WarningText } from './styles'

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import ModalLink from '../../components/ModalLink';

import { getList, removeLink } from '../../utils/storeLinks';

export default function MyLinks() {
  const isFocused = useIsFocused();

  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLinks() {
      const result = await getList('LINKS');
      setLinks(result);
      setLoading(false);
    }

    getLinks();
  }, [isFocused]);

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id) {
    const result = await removeLink(links, id);
    setLinks(result);
  }

  return(
    <Container>

      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#132742"/>

      <Menu/>

      <Title>Meus Links</Title>

      { loading && (
        <ContainerEmpty>
          <ActivityIndicator color='#FFF' size={25}/>
        </ContainerEmpty>
      )}

      { !loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Não foi gerado nenhum link.</WarningText>
        </ContainerEmpty>
      )}

      <ListLinks
        data={links}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} /> }
        contentContainerStyle={{ paddingBottom: 22}}
        showVerticalScrollIndicator={false}
      />

      <Modal 
        visible={modalVisible}
        transparent
        animationType="slide">
          <ModalLink
            onClose={ () => setModalVisible(false) }
            data={data}/>

      </Modal>

    </Container>
  )
}
