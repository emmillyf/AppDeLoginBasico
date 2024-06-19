import React from "react";
import { View, Image } from "react-native";
import {styles} from './style'
import Header from "../../components/Header";
import {Tabs} from "../../components/Tabs";
import Icon from "@react-native-vector-icons/ionicons";


export function Home() {
    return(
        <>
        <View style={styles.container}>
            <Header/>
            <Tabs/>
        </View>
        </>
    );
};