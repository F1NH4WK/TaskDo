import  React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, AsyncStorage } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons'; 

// LOCAL IMPORTS
import styles from "./styles/ComponentsStyle";


export default function App() {

  useEffect(() => {(async() => {
    const tarefas = await AsyncStorage.getItem('tarefas')
    setTexto(tarefas)
  })()}, [])

  const setData = async() => await AsyncStorage.setItem('tarefas', tasks)

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
        <View style = {styles.checkBoxStyle}>

            <TextInput 
            placeholder="Adicionar..." 
            placeholderTextColor= {'gray'} 
            style = {styles.checkBoxAddStyle}
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

  let addBoxCheck = tasks.map(i => <BoxCheck text = {i.note} id = {i.id}/>)
  
  
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Text style = {styles.textStyle}>TaskDo</Text>
      <View style = {styles.styleCheckBox}> 
      {addBoxCheck}

       <AddBoxCheck press = {() => {
        setTasks([...tasks, {id: tasks.length, note: texto}])
        setTexto('')
        setData()
        }}/>
      </View>
    </View>
  );
}