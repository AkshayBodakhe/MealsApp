import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetaillScreen from "./screens/MealDetaillScreen";
import 'react-native-gesture-handler';
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="categories" component={CategoriesScreen}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#ffbe92" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            // component={CategoriesScreen}
            component={DrawerNavigator}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
          name="MealDetail"
          component={MealDetaillScreen}
          />
        </Stack.Navigator>
      
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
  },
});
