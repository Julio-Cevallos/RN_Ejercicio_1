import {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Home(){
  const[contador, setContador]=useState(0);

  const sumar= ()=>{
    setContador(contador +1);
  };

  const resetear= ()=>{
    setContador(0);
  };

  const restar= ()=>{
    if(contador>0){
      setContador(contador - 1);
    }
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Home </Text>
      <Text style={styles.text}> Contador: {contador} </Text>

      <View style={styles.row}>
        <Button title='Sumar' onPress={sumar}/>
        <Button title='Resetear' onPress={resetear}/>
        <Button title='Restar' onPress={restar}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
})
