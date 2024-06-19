import { Image, View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, TouchableNativeFeedback, Keyboard, TouchableWithoutFeedback} from 'react-native'
import React, {useState} from 'react'
import { styles } from "./style"
import  vetor  from "../../Assets/TopVetor.png";
import vetorleft from '../../Assets/Vector 2.png';
import { TextInputComponent } from '../../components/TextInput';
import { ButtonComponents } from '../../components/ButtonComponents';
import { useNavigation } from '@react-navigation/native';


export const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navegando = useNavigation();
  
    const handleEmail = (value: string) => {
      setEmail(value);
    }
  
    const handlePassword = (value: string) => {
      setPassword(value)
    }
  
    const handleLogin = () => {
      if(email) {
        navegando.navigate("StackTabsPages", { name: "Login" })
      } else {
        Alert.alert("Credenciais invalidas!")
      }
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <>
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={vetor}  style={styles.topImage} alt='vetor de cima'/>
      </View>
    <View style={styles.olacontainer}>
        <Text style={styles.olatexto}>Olá</Text>
    </View>
    <View>
        <Text  style={styles.entreconta}>Entre com a sua conta!</Text>
    </View>

      <TextInputComponent
      recebendoplaceholder="Digite seu email"
      recebendofuncao={handleEmail}
      recebendotipodoinput={false}
      recebendovalue={email}/>

      <TextInputComponent 
      recebendoplaceholder="Digite sua senha"
      recebendofuncao={handlePassword}
      recebendotipodoinput={true}
      recebendovalue={password}/>

      <ButtonComponents 
      title = 'Entrar'
      recebendofuncao={handleLogin}/>
   
      {/* <View style={styles.vetorfundocontainer}>
        <ImageBackground source={vetorleft} style={styles.vetorfundo}/>
      </View> */}
  </View>
    </>
    </TouchableWithoutFeedback>
  );
};

export default Login


