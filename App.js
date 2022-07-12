import  React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, AsyncStorage } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons'; 

// LOCAL IMPORTS
import styles from "./styles/ComponentsStyle";


export default function App() {

  // STATES
  const [tasks, setTasks] = useState([
    {id: 1, note: 'Leite'},
    {id: 2, note: 'Tomate'},
    {id: 3, note: 'Arroz'}
  ]);
  const [texto, setTexto] = useState('');


  // FUNCTION MADE TO RENDER ALL THE TASKS AT ONCE

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

  let addBoxCheck = tasks.map(i => <BoxCheck text = {i.note} id = {i.id}/>)
  
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Text style = {styles.textStyle}>TaskDo</Text>
      <View style = {styles.styleCheckBox}> 
      {addBoxCheck}

    {/* A STATIC COMPONENT MADE TO HANDLE INPUTS */}

       <View style = {styles.checkBoxStyle}>

        <TextInput 
        placeholder="Adicionar..." 
        placeholderTextColor= {'gray'} 
        style = {styles.checkBoxAddStyle}
        onChangeText = {text => setTexto(text)}
        maxLength = {32}
        value = {texto}/>

        <Ionicons 
        name="add-circle-sharp" 
        size = {40} color = 'deeppink' 
        onPress={() => setTasks([...tasks, {id: tasks.length+1, note: texto}])}
        />

        </View>
      </View>
    </View>
  );
}