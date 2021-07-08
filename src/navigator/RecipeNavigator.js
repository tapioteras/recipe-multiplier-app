import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesScreen from "../screens/recipes";
import RecipeScreen from "../screens/recipe";

const Stack = createStackNavigator();

const RecipeNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Recipes"
                    component={RecipesScreen}
                    options={{ title: 'Recipes' }}
                />
                <Stack.Screen
                    name="Recipe"
                    options={{ title: 'Recipe' }}
                    component={RecipeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RecipeNavigator