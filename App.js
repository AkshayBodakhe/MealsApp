import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetaillScreen from "./screens/MealDetaillScreen";
import "react-native-gesture-handler";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#ffbe92" },
        drawerContentStyle : { backgroundColor : '#f37c40'},
        drawerInactiveTintColor : 'white',
        drawerActiveBackgroundColor : '#e4baa1'
      }}
    >
      <Drawer.Screen name="categories" 
      component={CategoriesScreen}
      options={{
        title : "All Categories",
        drawerIcon : ({color,size}) => <Ionicons name="list" color={color} size={size}/>
      }}
       />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
      options={{
        
        drawerIcon : ({color,size}) => <Ionicons name="star" color={color} size={size}/>
      }}
      />
    </Drawer.Navigator>
  );
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
            name="Drawer"
            // component={CategoriesScreen}
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetaillScreen} 
          options={{
            headerTitle : 'About the Meal'
          }}
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
