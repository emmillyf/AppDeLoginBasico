import React from 'react'
import { Alert, Text, View } from 'react-native'
import { styles } from './style';
import { ButtonComponents } from '../../components/ButtonComponents';
import { useNavigation } from '@react-navigation/native';

export function Profile() {

  const navegando = useNavigation();

  const handleLogout = () =>{
    navegando.navigate("StackLogin", { name: "Login" })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Estamos na pagina Profile!
      </Text>
      
      <ButtonComponents title='Sair' recebendofuncao={handleLogout}/>
    </View>
  )
}