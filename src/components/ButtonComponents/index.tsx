import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";


type PropsButton = {
    title: string;
    recebendofuncao: () => void;
}
export function ButtonComponents({title, recebendofuncao } : PropsButton){

    return(

        <>
        <TouchableOpacity onPress={recebendofuncao}>
          <Text 
             style={styles.textButton}>
            {title}
          </Text>
      </TouchableOpacity>    
        </>
    )
}