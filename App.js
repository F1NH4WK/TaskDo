import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo';
import { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons'; 

// LOCAL IMPORTS
import stylesbox from "./styles/ComponentsStyle";


export default function App() {

  function removerElemento(id){
    tasks.filter(i => i.id != id)}

  function BoxCheck(props){
    return(
            <BouncyCheckbox
            text={props.text} 
            bounceEffect = {1} 
            size = {30} 
            style = {{margin: 8}} 
            fillColor = 'deeppink'
            key = {props.id}
             />
    )
}

  function AddBoxCheck(props){

    return(
        <View style = {stylesbox.checkBoxStyle}>

            <TextInput 
            placeholder="Adicionar..." 
            placeholderTextColor= {'gray'} 
            style = {stylesbox.checkBoxAddStyle}
            onChangeText = {text => setTexto(text)}
            maxLength = {32}
            defaultValue = {texto}/>

            <Ionicons 
            name="add-circle-sharp" 
            size = {40} color = 'deeppink' 
            onPress={props.press}/>

        </View>
    )
}

  // STATES
  const [tasks, setTasks] = useState([
    {
      id: 1,
      note: 'Leite'
    },
    {
      id: 2,
      note: 'Tomate'
    },
    {
      id: 3,
      note: 'Arroz'
    }
  ]);

  const [texto, setTexto] = useState('');

 // LOADING FONTS
  let [fontLoaded] = useFonts({
    Roboto_400Regular })
  if (!fontLoaded){ <AppLoading/> }

  let addBoxCheck = tasks.map((i) => <BoxCheck text = {i.note} id = {i.id}  />)
  
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Text style = {styles.textStyle}>TaskDo</Text>
      <View style = {styles.styleCheckBox}> 
      {addBoxCheck}
       <AddBoxCheck press = {() => {
        setTasks([...tasks, {id: tasks.length, note: texto}])
        setTexto('')
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
});