import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View>
     <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
        </View>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: "#fc7f31",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        padding: 6,
        // margin: 4,
        borderBottomColor: "#fc7f31",
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical : 4
      },
})