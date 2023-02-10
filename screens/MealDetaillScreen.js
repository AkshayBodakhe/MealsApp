import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React , {useLayoutEffect} from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetaillScreen = ({ route , navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

   function headerBtnPressHandler(){
     console.log("pressed!");
   }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight : () => {
        return <IconButton color="white" icon="star" onPress={headerBtnPressHandler}/>
      }
    })
  },[navigation,headerBtnPressHandler])

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
