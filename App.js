import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import KFoodApi from "./src/api/KFoodApi";
import { NavigationContainer } from '@react-navigation/native';
import RecipeNavigator from "./src/navigator/RecipeNavigator";

export default function App() {
  return <RecipeNavigator />
}
