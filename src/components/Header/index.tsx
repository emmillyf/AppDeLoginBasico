import React from "react";
import { View, Image, Text} from "react-native";
import {styles} from './style'
import logo from '../../Assets/Nubank_Logo.png'
import Icon from '@expo/vector-icons/Ionicons';

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.viewlogo}>
                <Image  style={styles.image} source={logo}/>
                <Text style={styles.texto}>Emmilly</Text>
            </View>
            <Icon name="chevron-down-outline" size={20} color="#fff"/>
        </View>
    );
};