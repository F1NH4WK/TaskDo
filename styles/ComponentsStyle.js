import { StyleSheet } from "react-native";

const stylesbox = StyleSheet.create({
    checkBoxStyle: {
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'space-between', 
    marginLeft: 8
    },
    
    checkBoxAddStyle: {
        marginLeft: 8, 
        color: 'white', 
        width: '80%', 
        fontSize: 16
    },

    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingLeft: 15,
        paddingRight: 15
      },

    textStyle: {
        color: 'deeppink',
        fontFamily: 'Roboto_400Regular',
        fontSize: 40,
        fontWeight: 'bold',
        opacity: 0.75,
        alignSelf: 'center'
      }

})

export default stylesbox;