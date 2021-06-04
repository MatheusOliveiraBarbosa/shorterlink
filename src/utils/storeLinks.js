import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Find stored links
 */
export async function getList(key) {
  const myLinks = await AsyncStorage.getItem(key);
  return JSON.parse(myLinks) || [];
}

export async function saveLink (key, newLink) {
  const linksStored = await getList(key);
  const hasLink = linksStored.some(link => link.id === newLink.id);

  if (hasLink) {
    return;
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}

export async function removeLink (links, id) {
  let myLinks = links.filter((link) => link.id !== id);
  await AsyncStorage.setItem('LINKS', JSON.stringify(myLinks));
  return myLinks;
}