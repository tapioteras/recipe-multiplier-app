import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"

const RecipeButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} {...{ onPress }}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
)

export default RecipeButton

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "grey",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
})
