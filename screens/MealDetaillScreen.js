import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React , {useContext, useLayoutEffect} from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite,removeFavorite } from "../store/redux/favorites";

const MealDetaillScreen = ({ route , navigation }) => {
  // const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);
  const dispatch = useDispatch();
  
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);


  // const mealIsFavorite = favoritesMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

   function changeFavoriteStatusHandler(){
     console.log("pressed!");
     if(mealIsFavorite){
      // favoritesMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}))
     }else{
      // favoritesMealsCtx.addFavorite(mealId)
      dispatch(addFavorite({id:mealId}))
     }
   }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight : () => {
        return <IconButton 
        icon={mealIsFavorite ? 'star' : 'star-outline'}
        color="white" 
        onPress={changeFavoriteStatusHandler}/>
      }
    })
  },[navigation,changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetaillScreen;

const styles = StyleSheet.create({
  rootContainer : {
    marginBottom : 32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "purple",
  },
  detailText: {
    color: "purple",
  },
  outerContainer : {
    alignItems : 'center'
  },
  listContainer :{
    width : '80%'
  }
});
