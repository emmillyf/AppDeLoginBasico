import React from 'react';
import { TextInput } from 'react-native';
import { styles } from "./style";

type PropsComponent = {
  recebendoplaceholder: string;
  recebendovalue: string;
  recebendofuncao: (value: string) => void;
  recebendotipodoinput: boolean;
}


export function TextInputComponent( {recebendofuncao,
  recebendotipodoinput, recebendoplaceholder,
  recebendovalue
}: PropsComponent) {
  

  return (

    
      <TextInput style={styles.styleInput}
    onChangeText={recebendofuncao}
      value={recebendovalue}
      placeholder={recebendoplaceholder}
      secureTextEntry={recebendotipodoinput}
      />
  
  )
}