import React from "react";
import {styles} from './style'
import { Text, View, FlatList, ListRenderItem } from "react-native";
import Icon from "@react-native-vector-icons/ionicons";

type IconName = 
  | 'person-add-outline'
  | 'chatbox-outline'
  | 'arrow-down-outline'
  | 'arrow-up-outline'
  | 'lock-closed-outline';


interface Item {
  key: string;
  name: IconName;
  text: string;
}

const data: Item[] = [
    { key: '1', name: 'person-add-outline', text: 'Indicar amigos' },
    { key: '2', name: 'chatbox-outline', text: 'Cobrar' },
    { key: '3', name: 'arrow-down-outline', text: 'Depositar' },
    { key: '4', name: 'arrow-up-outline', text: 'Transferir' },
    { key: '5', name: 'lock-closed-outline', text: 'Bloquear cartão' },
  ];
  

  const renderTabItem: ListRenderItem<Item> = ({ item }) => (
    <View style={styles.tabItem}>
      <Icon name={item.name} size={24} color='#fff' />
      <Text style={styles.tabText}>{item.text}</Text>
    </View>
  );

export const Tabs: React.FC = () => {
    return (
      <FlatList
        data={data}
        renderItem={renderTabItem}
        keyExtractor={item => item.key}
        horizontal={true}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      />
    );
}