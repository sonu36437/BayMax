import { View, Text, StyleSheet,Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Colors } from '../utils/Constants'
import Background from '../components/global/baymax/Background'


export default function BaymaxScreen() {
  const blurOpacity=useRef(new Animated.Value(0)).current;
  const startBlur=()=>{
    Animated.timing(blurOpacity,{
      toValue:1,
      duration:2000,
      useNativeDriver:true
      
    }).start()
  }
  const unBlur=()=>{
    Animated.timing(blurOpacity,{
      toValue:0,
      duration:2000,
      useNativeDriver:true,

    }).start()
  }
  useEffect(()=>{
    startBlur()

  },[])
  return (
 
    <View style={styles.container}>
      <Background blurOpacity={blurOpacity}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.secondry ,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  loaderContainer:{
    position:'absolute'
  }
})
