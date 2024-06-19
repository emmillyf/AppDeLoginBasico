import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
    },
    topImageContainer: {},
    topImage: {
        width: "100%",
        height: 140,
    },
    olacontainer: {
        
    },
    olatexto:{
        textAlign: "center",
        fontSize: 70,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 30,
    },
    entreconta: {
        textAlign: "center",
        fontSize: 18,
        color:"#fff",
        marginBottom: 30,
    },
    textButton:{
        borderWidth: 2,
        backgroundColor: '#DA8BFF',
        width: '35%',
        height: 35,
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 140,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 17,
    },
    vetorfundocontainer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    vetorfundo:{
        height: 290,
        width: 270,
    }
});
