import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({icon, color ,onPress}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={({pressed}) => pressed && styles.pressed}>

     <Ionicons icon={icon} name='star' size={24} color={color}></Ionicons>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed :{
        opacity : 0.7
    }
})