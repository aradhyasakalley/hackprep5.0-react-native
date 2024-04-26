// importing Native UI Components
import { StyleSheet, Text, View, Button,Image } from 'react-native'
// importing the React Components
import React,{useState} from 'react'

const App = () => {
  const [count,setCount] = useState(0);
  const [quote,setQuote] = useState('')
  const incrementCount = () => {
    setCount(count+1);
  }
  const decrementCount = () => {
    setCount(count-1);
  }
  const resetCount = () => {
    setCount(0);
  }

  const fetchQuote = async () => {
    const data = await fetch('https://api.kanye.rest')
    const jsonData = await data.json();
    console.log(jsonData);
    setQuote(jsonData.quote)
  }


  return (
    <View style = {styles.main}>
      <Button onPress = {incrementCount} title='+'/>
      <Text>Counter value : {count}</Text>
      <Button onPress = {decrementCount} title='-'/>
      <Button onPress = {resetCount} title='Reset counter'/>
      <Image style = {styles.image} source = {require('./ye.jpg')}/>
      <Text>
        Quote : {quote}
      </Text>
      <Button title = 'get quote' onPress={fetchQuote}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  main: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  image : {
    height : '40%',
    width : '60%',
    borderRadius : 10
  },
})